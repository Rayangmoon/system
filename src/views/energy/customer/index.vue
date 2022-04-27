
<template>
  <div>
    <!--  面包屑导航-->
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/energy/main' }">能源管理</el-breadcrumb-item>
      <el-breadcrumb-item>客流数据</el-breadcrumb-item>
    </el-breadcrumb>
    <!--    卡片-->
    <el-card class="card">
      <!--    搜索-->
      <el-row>
        <el-col :span="7">
          <el-input placeholder="请输入内容" class="input" v-model="queryInfo.query" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="7"></el-col>
        <DaoChu :id="spreadsheet.id" :name="spreadsheet.name" class="Dao">导出</DaoChu>
      </el-row>

<!--      <DaoChu :id="spreadsheet.id" :name="spreadsheet.name" class="Dao">导出</DaoChu>-->
      <!--用户列表区-->
      <el-table
          :data="tableData"
          :id="spreadsheet.id"
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
import DaoChu from "@/views/energy/consumption/DaoChu";
export default {
  components: {DaoChu},
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
        1: '2022-4-2',
        2: '10',
        3: '11',
        4: '18',
        5: '67',
        6: '91',
        7: '21',
      },  {
        1: '2022-4-3',
        2: '21',
        3: '23',
        4: '42',
        5: '12',
        6: '87',
        7: '98',
      },  {
        1: '2022-4-4',
        2: '43',
        3: '18',
        4: '32',
        5: '87',
        6: '76',
        7: '87',
      },  {
        1: '2022-4-5',
        2: '17',
        3: '27',
        4: '21',
        5: '53',
        6: '98',
        7: '78',
      },  {
        1: '2022-4-6',
        2: '23',
        3: '23',
        4: '54',
        5: '85',
        6: '98',
        7: '99',
      },  {
        1: '2022-4-7',
        2: '12',
        3: '34',
        4: '43',
        5: '54',
        6: '98',
        7: '100',
      },  {
        1: '2022-4-8',
        2: '109',
        3: '168',
        4: '134',
        5: '175',
        6: '198',
        7: '199',
      }, {
        1: '2022-4-9',
        2: '145',
        3: '178',
        4: '23',
        5: '17',
        6: '870',
        7: '980',
      }, {
        1: '2022-4-10',
        2: '116',
        3: '176',
        4: '197',
        5: '156',
        6: '365',
        7: '476',
      }, ],
      queryInfo:{
        query: ''
      },
      currentPage: 1,
      spreadsheet: {
        id: "exportTable", //id
        name: "导出客流数据", //导出文件名
      },

    }
  },
  mounted(){
    var myChart = echarts.init(document.getElementById('main'))
    var option = {
      legend: {
        data: ['进入人数曲线', '出去人数曲线']
      },
      title: {
        text: '客流数据折线图'
      },
      xAxis: {
        data: ['2022-4-7', '2022-4-8', '2022-4-9', '2022-4-10', '2022-4-11']
      },
      yAxis: {},
      series: [
        {
          name: '进入人数曲线',
          data: [10, 22, 28, 23, 19],
          type: 'line',
          areaStyle: {},
          label: {
            show: true }
        },
        {
          name: '出去人数曲线',
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
.Dao{
  margin-left: 10px;
}
</style>
