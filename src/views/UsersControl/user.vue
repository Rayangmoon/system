<template>
  <div>
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="card">
      <!--    搜索-->
      <el-row>
        <el-col :span="7">
          <el-input placeholder="请输入内容" class="input" v-model="queryInfo.query" clearable>
            <el-button slot="append" icon="el-icon-search" @click="tableData"></el-button>
          </el-input>
        </el-col>
        <el-col :span="7"></el-col>
        <el-button type="primary" @click="dialogFormVisible = true" class="but">增加用户</el-button>
      </el-row>

      <!--用户列表区-->
      <el-table
          :data="userlist"
          style="width: 100%"
          border stripe
          class="table">
        <el-table-column
            type="index">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="roleName"
            label="用户身份">
        </el-table-column>
        <el-table-column
            prop="status"
            label="用户状态">
<!--          <el-switch-->
<!--              v-model= ture >-->
<!--          </el-switch>-->
        </el-table-column>
        <el-table-column
            prop="4"
            label="操作">
          <template #default="scope">

          <el-button type="text" icon="el-icon-delete" class="red"
                     @click="open(scope.row.name)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--      分页-->
      <el-pagination class="pagination"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="this.queryInfo.page"
                     :page-sizes="[1, 2, 4, 10]"
                     :page-size="1"
                     layout="total, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
    </el-card>
<!--    编辑弹出框-->
    <el-dialog title="增加用户" :visible.sync="dialogFormVisible" width="40%" @close="dialogclose">
      <el-form :model="form" ref="form">
        <el-form-item label="用户名字" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户身份" :label-width="formLabelWidth">
          <el-input v-model="form.role" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" :label-width="formLabelWidth">
          <el-input v-model="form.passwd" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="Addusers">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      tableData: [{
        1: '张三',
        2: '普通用户',
        3: '',
        4: '',
      }, {
        1: '李四',
        2: '管理员',
        3: '',
        4:'',
      }, {
        1: '王五',
        2: '普通用户',
        3: '',
        4:'',
      }, {
        1: '何六',
        2: '管理员',
        3: '',
        4:'',
      }],
      userlist: [],
      total:10,
      queryInfo:{
        page: 1,
      },
      currentPage: 1,
      dialogFormVisible: false,
      form: {
        name: '',
        Name: '',
        username: '',
        passwd: '',
      },
      formLabelWidth: '120px'
    }
  },
  created(){
    this.getuserlist()
  },
  methods: {
    handleSizeChange(newsize) {
      console.log(`每页 ${newsize} 条`);
    },
    handleCurrentChange(newchang) {
      console.log(`当前页: ${newchang}`);
      this.queryInfo.page = newchang;
      this.getuserlist()
    },
    async getuserlist(){
      const {data:res} = await this.$axios.get('http://150.158.37.65:8081/admin/userManage/userQuery/page', {params:this.queryInfo})
      if(res.code!==200){
        return this.$message.error("获取用户列表失败")}
      console.log(res)
      this.userlist = res.data.result
      this.total = res.data.total_page
    },
    async open(name) {
      const r = await this.$confirm('此操作将永久删除该用户，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if(r !== "confirm"){
         return this.$message.info('已取消删除')
      }
      const {data:res} = await this.$axios.delete('http://150.158.37.65:8081/admin/userManage/userDel'+name)
      if(res.code !== 200){
        return this.$message.error("删除用户失败")
      }
      this.$message.success("删除用户成功")
      this.getuserlist()

    },
    dialogclose(){
      this.$refs.form.resetFields()
    },
    Addusers(){
      this.$refs.form.validate(valid => {
        if(!valid) return this.$message.error('请添加用户名或密码')
        // 可以发起请求
        this.$axios.post('http://150.158.37.65:8081/admin/userManage/userAdd', this.form).then((res)=> {
          if (res.data.code !== 200) {
            return this.$message.error('用户名和密码导入失败')
          } else {
            this.$message.success('导入成功')
            this.dialogFormVisible = false
            this.getuserlist()
          }

        })
      })
    }
  }
}
</script>

<style scoped>
.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}
.card{
  box-shadow: 0 1px 1px rgba(0,0,0,0.15) !important;
}
.table{
  margin-top: 10px;
}
.pagination{
  margin-top: 10px;
}
.red {
  color: #ff0000;
}
.but{
  margin-left: 20px;
}
</style>
