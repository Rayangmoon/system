<template>
  <div>
<<<<<<< HEAD
    <!--  面包屑导航-->
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>能源管理</el-breadcrumb-item>
      <el-breadcrumb-item>客流数据</el-breadcrumb-item>
    </el-breadcrumb>
    <!--    卡片-->
    <el-card class="card">
      <!--    搜索-->
      <el-row>
        <el-col :span="7">
          <el-input placeholder="请输入内容" class="input">
            <el-button slot="append" icon="el-icon-search"></el-button>
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
            label="时间"
            width="180">
        </el-table-column>
        <el-table-column
            prop="2"
            label="本小时进入"
            width="180">
        </el-table-column>
        <el-table-column
            prop="3"
            label="本小时退出">
        </el-table-column>
        <el-table-column
            prop="4"
            label="本日进入">
        </el-table-column>
        <el-table-column
            prop="5"
            label="本日退出">
        </el-table-column>
        <el-table-column
            prop="6"
            label="总共进入">
        </el-table-column>
        <el-table-column
            prop="7"
            label="总共退出">
        </el-table-column>
      </el-table>
    </el-card>
=======
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>能源模块</el-breadcrumb-item>
      <el-breadcrumb-item>客流数据</el-breadcrumb-item>
    </el-breadcrumb>
>>>>>>> 002fbdbd7b10908356202683d84269ca86af08d6
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        1: '2022-4-1',
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
      }, {
        1: '2022-4-1',
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
      },  {
        1: '2022-4-1',
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
      },  {
        1: '2022-4-1',
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
      },  {
        1: '2022-4-1',
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
      },  {
        1: '2022-4-1',
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
      },  {
        1: '2022-4-1',
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
      },  {
        1: '2022-4-1',
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
      }, ]
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
</style>
