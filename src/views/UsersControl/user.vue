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
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="2"
            label="用户身份">
        </el-table-column>
        <el-table-column
            prop="3"
            label="用户状态">
          <el-switch
              v-model= ture >
          </el-switch>
        </el-table-column>
        <el-table-column
            prop="4"
            label="操作">
          <template #default="scope">
          <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button type="text" icon="el-icon-delete" class="red"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--      分页-->
      <el-pagination class="pagination"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[1, 2, 4, 10]"
                     :page-size="4"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="4">
      </el-pagination>
      <div id="main" style="width: 1200px;height:400px;" class="chart"></div>
    </el-card>
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
      queryInfo:{
        page: 1,
      },
      currentPage: 1,
    }
  },
  methods: {
    handleSizeChange(newsize) {
      console.log(`每页 ${newsize} 条`);
    },
    handleCurrentChange(newchang) {
      console.log(`当前页: ${newchang}`);
    },
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
</style>
