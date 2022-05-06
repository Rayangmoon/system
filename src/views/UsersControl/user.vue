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
      <el-table :data="userlist" style="width: 100%" border stripe class="table">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column property="role_name" label="用户身份" :formatter="playback"></el-table-column>
        <el-table-column property="status" label="用户状态" :formatter="playbackFormat"></el-table-column>
        <el-table-column prop="4" label="操作">
          <template slot-scope="scope">
          <el-button type="text" icon="el-icon-delete" class="red"
                     @click="open(scope.row.name,scope.row.role_name)">删除</el-button>
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
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名字" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户身份" :label-width="formLabelWidth" prop="role">
<!--          <el-input v-model="form.role" autocomplete="off"></el-input>-->
          <el-select v-model="form.role" clearable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" :label-width="formLabelWidth" prop="passwd">
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
      options: [{
        value: 'user',
        label: '普通用户'
      },
      //   {
      //   value: 'admin',
      //   label: '管理员'
      // }
      ],
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
        role: '',
        username: '',
        passwd: '',
      },
      formLabelWidth: '120px',
      rules: {
        name: [
          {required: true, message: '请输入用户姓名', trigger: 'blur'},
          { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        username: [
          {required: true, message: '请输入创建用户名', trigger: 'blur'},
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        passwd: [
          {required: true, message: '请输入创建用户密码', trigger: 'blur'},
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        role: [
          {required: true, message: '请选择用户身份', trigger: 'blur'},
        ],
      }
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
    playback(row) {
      if (row.role_name === 'admin') {
        return '管理员'
      } else  {
        return '普通用户'
      }
    },
    playbackFormat(row) {
      if (row.status === 0) {
        return '不在线'
      } else  {
        return '在线'
      }
    },
    async getuserlist(){
      const {data:res} = await this.$axios.get('http://150.158.37.65:8081/admin/userManage/userQuery/page', {params:this.queryInfo})
      if(res.code!==200){
        // this.$router.push('/error')
        return this.$message.error("获取用户列表失败")
      }
      console.log(res)
      this.userlist = res.data.result
      this.total = res.data.total_page
    },
    async open(name,role_name) {
      const dataB = JSON.parse(sessionStorage.getItem('缓存名称'))
      const r = await this.$confirm('此操作将永久删除该用户，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if(r !== "confirm"){
         return this.$message.info('已取消删除')
      }
      const {data:res} = await this.$axios.delete('http://150.158.37.65:8081/admin/userManage/userDel',{data:{name:name}})
      if(res.code !== 200||role_name==='admin'){
        return this.$message.error("删除用户失败")
      }
      this.$message.success("删除用户成功")
      this.getuserlist()
      console.log(res)
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
          console.log(res)
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
