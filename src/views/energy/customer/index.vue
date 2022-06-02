
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
          :data="customerlist"
          :id="spreadsheet.id"
          style="width: 100%"
          border stripe
          class="table">
        <el-table-column
            type="index">
        </el-table-column>
        <el-table-column
            prop="enter_per_hour"
            label="本小时进入人数">
        </el-table-column>
        <el-table-column
            prop="enter_per_day"
            label="本日进入人数">
        </el-table-column>
        <el-table-column
            prop="enter_per_month"
            label="本月进入人数">
        </el-table-column>
        <el-table-column
            prop="exit_per_hour"
            label="本小时退出人数">
        </el-table-column>
        <el-table-column
            prop="exit_per_day"
            label="本日退出人数">
        </el-table-column>
        <el-table-column
            prop="exit_per_month"
            label="本月退出人数">
        </el-table-column>
        <el-table-column
            prop="device_id"
            label="设备id">
        </el-table-column>
        <el-table-column
            prop="insert_time"
            label="插入时间">
        </el-table-column>
      </el-table>
<!--      分页-->
      <el-pagination class="pagination"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="this.queryInfo.page"
                     :page-sizes="[1, 2, 4, 10]"
                     :page-size="1"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total">
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
      }, {
        1: '2022-4-3',
        2: '21',
        3: '23',
        4: '42',
        5: '12',
        6: '87',
        7: '98',
      }, {
        1: '2022-4-4',
        2: '43',
        3: '18',
        4: '32',
        5: '87',
        6: '76',
        7: '87',
      }, {
        1: '2022-4-5',
        2: '17',
        3: '27',
        4: '21',
        5: '53',
        6: '98',
        7: '78',
      }, {
        1: '2022-4-6',
        2: '23',
        3: '23',
        4: '54',
        5: '85',
        6: '98',
        7: '99',
      }, {
        1: '2022-4-7',
        2: '12',
        3: '34',
        4: '43',
        5: '54',
        6: '98',
        7: '100',
      }, {
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
      },],
      queryInfo: {
        page: 1,
        device_id:"ShUpUmIn456",
      },
      total:10,
      customerlist:[],
      currentPage: 1,
      spreadsheet: {
        id: "exportTable", //id
        name: "导出客流数据", //导出文件名
      },

    }
  },
  async mounted() {
    var myChart = echarts.init(document.getElementById('main'))
    const {data: res} = await this.$axios.get('http://150.158.37.65:8081/user/passengercounter'+"/"+this.queryInfo.page+"/"+this.queryInfo.device_id)
    if (res.code !== 200) {
      return this.$message.error("获取客流量列表失败")
    }
    this.customerlist = res.data.result
    var A =  this.customerlist[0].enter_per_day
    var B =  this.customerlist[1].enter_per_day
    var C =  this.customerlist[2].enter_per_day
    var D =  this.customerlist[3].enter_per_day
    var E =  this.customerlist[4].enter_per_day
    var F =  this.customerlist[0].exit_per_day
    var G =  this.customerlist[1].exit_per_day
    var H =  this.customerlist[2].exit_per_day
    var I =  this.customerlist[3].exit_per_day
    var J =  this.customerlist[4].exit_per_day
    var K =  this.customerlist[0].insert_time
    var L =  this.customerlist[1].insert_time
    var M =  this.customerlist[2].insert_time
    var N =  this.customerlist[3].insert_time
    var O =  this.customerlist[4].insert_time
    var option = {
      legend: {
        data: ['进入人数曲线', '出去人数曲线']
      },
      title: {
        text: '客流数据折线图'
      },
      xAxis: {
        data: [O, N, M, L, K]
      },
      yAxis: {},
      series: [
        {
          name: '进入人数曲线',
          data: [E, D, C, B, A],
          type: 'line',
          areaStyle: {},
          label: {
            show: true
          }
        },
        {
          name: '出去人数曲线',
          data: [J, I, H, G, F],
          type: 'line',
          areaStyle: {
            color: '#ff0',
            opacity: 0.5
          },
          label: {
            show: true
          }
        }
      ]
    };
    myChart.setOption(option);
  },
  created() {
    this.getcustomer()
  },
  methods: {
    handleSizeChange(newsize) {
      console.log(`每页 ${newsize} 条`);
    },
    handleCurrentChange(newchang) {
      console.log(`当前页: ${newchang}`);
      this.queryInfo.page = newchang;
      this.getcustomer()
    },
    async getcustomer() {
      const {data: res} = await this.$axios.get('http://150.158.37.65:8081/user/passengercounter'+"/"+this.queryInfo.page+"/"+this.queryInfo.device_id)
      if (res.code !== 200) {
        return this.$message.error("获取客流量列表失败")
      }
      console.log(res)
      this.customerlist = res.data.result
      this.total = res.data.total_page
    },
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
