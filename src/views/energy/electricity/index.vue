<template>
  <div>
<!--<<<<<<< HEAD-->
    <!--  面包屑导航-->
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>能源管理</el-breadcrumb-item>
      <el-breadcrumb-item>电表数据</el-breadcrumb-item>
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
            label="电表类型"
            width="180">
        </el-table-column>
        <el-table-column
            prop="2"
            label="用电总数"
            width="180">
        </el-table-column>
        <el-table-column
            prop="3"
            label="设备状态">
          <el-switch
              v-model= ture >
          </el-switch>
        </el-table-column>
        <el-table-column
            prop="4"
            label="时间">
        </el-table-column>
          <el-table-column
              prop="5"
              label="区域">
          </el-table-column>
        <el-table-column
            prop="6"
            label="用电总数">
        </el-table-column>
      </el-table>
    </el-card>
<!--=======-->
<!--    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">-->
<!--      <el-breadcrumb-item>能源模块</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item>电表数据</el-breadcrumb-item>-->
<!--    </el-breadcrumb>-->
<!--&gt;>>>>>> 002fbdbd7b10908356202683d84269ca86af08d6-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        1: '正向有功电能',
        2: '8888',
        3: '',
        4:'2022-4-1',
        5:'8888',
        6:'88888',
      }, {
        1: '正向有功电能',
        2: '8888',
        3: '',
        4:'2022-4-1',
        5:'8888',
        6:'88888',
      }, {
        1: '正向有功电能',
        2: '8888',
        3: '',
        4:'2022-4-1',
        5:'8888',
        6:'88888',
      }, {
        1: '正向有功电能',
        2: '8888',
        3: '',
        4:'2022-4-1',
        5:'8888',
        6:'88888',
      }]
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
