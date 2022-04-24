<template>
  <div>
    <!--  面包屑导航-->
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/energy/main' }">能源管理</el-breadcrumb-item>
      <el-breadcrumb-item>温湿度数据</el-breadcrumb-item>
    </el-breadcrumb>
    <!--    卡片-->
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
            label="时间"
            width="180">
        </el-table-column>
        <el-table-column
            prop="2"
            label="湿度"
            width="180">
        </el-table-column>
        <el-table-column
            prop="3"
            label="id">
        </el-table-column>
        <el-table-column
            prop="4"
            label="power">
        </el-table-column>
        <el-table-column
            prop="5"
            label="信号强度">
        </el-table-column>
        <el-table-column
            prop="6"
            label="设备编号">
        </el-table-column>
        <el-table-column
            prop="7"
            label="温度">
        </el-table-column>
      </el-table>
      <el-pagination class="pagination"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[1, 2, 4, 10]"
                     :page-size="10"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="10">
      </el-pagination>
      <div id="main" style="width: 1200px;height:400px;" class="chart"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      tableData: [{
        1: '2022-4-1',
        2: '1',
        3: '1',
        4:'21',
        5:'21',
        6:'dianbiao1',
        7:'12'
      }, {
        1: '2022-4-2',
        2: '22',
        3: '15',
        4:'64',
        5:'74',
        6:'dianbiao2',
        7:'12'
      },  {
        1: '2022-4-3',
        2: '1',
        3: '1',
        4:'21',
        5:'21',
        6:'dianbiao3',
        7:'12'
      }, {
        1: '2022-4-4',
        2: '12',
        3: '26',
        4:'74',
        5:'96',
        6:'dianbiao4',
        7:'21'
      }, {
        1: '2022-4-5',
        2: '16',
        3: '18',
        4:'43',
        5:'63',
        6:'dianbiao5',
        7:'12'
      }, {
        1: '2022-4-6',
        2: '12',
        3: '18',
        4:'25',
        5:'29',
        6:'dianbiao6',
        7:'9'
      }, {
        1: '2022-4-7',
        2: '18',
        3: '16',
        4:'26',
        5:'12',
        6:'dianbiao7',
        7:'19'
      }, {
        1: '2022-4-8',
        2: '26',
        3: '18',
        4:'24',
        5:'63',
        6:'dianbiao8',
        7:'10'
      }, {
        1: '2022-4-9',
        2: '18',
        3: '19',
        4:'22',
        5:'27',
        6:'dianbiao9',
        7:'16'
      }, {
        1: '2022-4-10',
        2: '20',
        3: '17',
        4:'85',
        5:'36',
        6:'dianbiao10',
        7:'19'
      }],
    queryInfo:{
      query: ''
    },
    currentPage: 1,
    }
  },
  mounted(){
    var myChart = echarts.init(document.getElementById('main'))
    var option = {
      legend: {
        data: ['理论温度曲线', '实际温度曲线']
      },
      title: {
        text: '温度数据折线图'
      },
      xAxis: {
        data: ['2022-4-7', '2022-4-8', '2022-4-9', '2022-4-10', '2022-4-11']
      },
      yAxis: {},
      series: [
        {
          name: '理论温度曲线',
          data: [10, 22, 28, 23, 19],
          type: 'line',
          areaStyle: {},
          label: {
            show: true }
        },
        {
          name: '实际温度曲线',
          data: [25, 14, 23, 35, 10],
          type: 'line',
          areaStyle: {
            color: '#ff0',
            opacity: 0.5
          },
          label: {
            show: true }
        }
      ]
    };
    myChart.setOption(option);
  },
  methods: {
    handleSizeChange(newsize) {
      console.log(`每页 ${newsize} 条`);
    },
    handleCurrentChange(newchang) {
      console.log(`当前页: ${newchang}`);
    }
  },

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
.chart{
  margin-top: 40px;
}
</style>
