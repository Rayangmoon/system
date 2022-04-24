<template>
  <div>
        <!--    卡片-->
        <el-card class="card">
          <!--    搜索-->
          <el-row>
            <el-col :span="7">
              <el-input placeholder="请输入内容" class="input" v-model="queryInfo.query" clearable>
                <el-button slot="append" icon="el-icon-search" @click="tableData"></el-button>
              </el-input>
            </el-col>
           <!--      增加操作-->
            <el-button type="primary" @click="dialogFormVisible = true" class="but">增加传感器</el-button>
          </el-row>
          <!--用户列表区-->
          <el-table
              :data="tableData"
              style="width: 100%"
              border stripe
              class="table">
            <el-table-column
                type="index">
            </el-table-column>
            <el-table-column
                prop="1"
                label="传感器类型"
                width="180">
            </el-table-column>
            <el-table-column
                prop="2"
                label="位置"
                width="180">
            </el-table-column>
            <el-table-column
                prop="3"
                label="状态">
              <el-switch
                  v-model= ture >
              </el-switch>
            </el-table-column>
            <el-table-column
                prop="4"
                label="运行状况">
            </el-table-column>
            <el-table-column
                prop="5"
                label="设备id">
            </el-table-column>
            <el-table-column
                prop="6"
                label="手动操作">
              <el-button type="text" icon="el-icon-delete" class="red"
                         @click="open">删除</el-button>
            </el-table-column>
          </el-table>
          <el-pagination class="pagination"
                         @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage"
                         :page-sizes="[1, 2, 4, 10]"
                         :page-size="4"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="4">
          </el-pagination>
        </el-card>
        <!--   编辑弹出框-->
    <el-dialog title="增加传感器" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form">
        <el-form-item label="传感器名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="传感器位置" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      tableData: [{
        1: '总电表',
        2: '432',
        3: '',
        4:'良好',
        5:'123',
      }, {
        1: '空调电表',
        2: '311',
        3: '',
        4:'良好',
        5:'423',
      }, {
        1: '照明电表',
        2: '22',
        3: '',
        4:'良好',
        5:'642',
      }, {
        1: '商铺总耗电',
        2: '555',
        3: '',
        4:'良好',
        5:'753',
      }],
      queryInfo:{
        query: ''
      },
      currentPage: 1,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleSizeChange(newsize) {
      console.log(`每页 ${newsize} 条`);
    },
    handleCurrentChange(newchang) {
      console.log(`当前页: ${newchang}`);
    },
    open() {
      this.$confirm('确定删除此传感器类型嘛', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
}
</script>

<style scoped>
.card{
  box-shadow: 0 1px 1px rgba(0,0,0,0.15) !important;
}
.table{
  margin-top: 10px;
}
.pagination{
  margin-top: 10px;
}
.but{
  margin-left: 20px;
}
</style>
