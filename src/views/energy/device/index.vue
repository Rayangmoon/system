<template>
  <div>
    <!--  面包屑导航-->
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>能源管理</el-breadcrumb-item>
      <el-breadcrumb-item>设备管理</el-breadcrumb-item>
    </el-breadcrumb>
<!--    标签卡片-->
    <el-tabs type="border-card">
      <el-tab-pane label="设备管理">
    <!--    卡片-->
    <el-card class="card">
      <!--    搜索-->
      <el-row>
        <el-col :span="7">
          <el-input placeholder="请输入内容" class="input" v-model="queryInfo.query" clearable>
            <el-button slot="append" icon="el-icon-search" @click="tableData"></el-button>
          </el-input>
        </el-col>
      </el-row>

      <!--用户列表区-->
      <el-table :data="tableData" style="width: 100%" border stripe class="table">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="1" label="传感器类型" width="180"></el-table-column>
        <el-table-column prop="2" label="位置" width="180"></el-table-column>
        <el-table-column prop="3" label="状态">
          <el-switch v-model= ture ></el-switch>
        </el-table-column>
        <el-table-column prop="4" label="运行状况"></el-table-column>
        <el-table-column prop="5" label="设备id">
        </el-table-column>
        <el-table-column prop="6" label="操作类型"></el-table-column>
      </el-table>
      <!--      分页-->
      <el-pagination class="pagination"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[1, 2, 4, 10]"
                     :page-size="10"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="10">
      </el-pagination>
    </el-card>
      </el-tab-pane>
      <el-tab-pane label="设备增删">
        <Add></Add>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Add from '../device/Add.vue'

export default {
  data() {
    return {
      tableData: [{
        1: '总电表',
        2: '432',
        3: '',
        4:'良好',
        5:'1',
        6:'手动',
      }, {
        1: '空调电表',
        2: '311',
        3: '',
        4:'良好',
        5:'2',
        6:'手动',
      }, {
        1: '照明电表',
        2: '22',
        3: '',
        4:'良好',
        5:'3',
        6:'手动',
      }, {
        1: '商铺总耗电表',
        2: '555',
        3: '',
        4:'良好',
        5:'4',
        6:'手动',
      }, {
        1: '客流统计电表',
        2: '132',
        3: '',
        4:'良好',
        5:'5',
        6:'手动',
      }, {
        1: '温度电表',
        2: '142',
        3: '',
        4:'良好',
        5:'6',
        6:'手动',
      }, {
        1: '湿度电表',
        2: '176',
        3: '',
        4:'良好',
        5:'7',
        6:'手动',
      }, {
        1: '客流总计数电表',
        2: '234',
        3: '',
        4:'良好',
        5:'8',
        6:'手动',
      }, {
        1: '温度电表2',
        2: '567',
        3: '',
        4:'良好',
        5:'9',
        6:'手动',
      }, {
        1: '湿度电表2',
        2: '439',
        3: '',
        4:'良好',
        5:'10',
        6:'手动',
      }],
      queryInfo:{
        query: ''
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
    }
  },
  components:{Add}

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
</style>
