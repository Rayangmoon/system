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
        <DaoChu :id="spreadsheet.id" :name="spreadsheet.name" class="Dao">导出</DaoChu>
      </el-row>

      <!--用户列表区-->
      <el-table
          :data="temlist"
          :id="spreadsheet.id"
          style="width: 100%"
          border stripe
          class="table">
        <el-table-column
            type="index">
        </el-table-column>
        <el-table-column
            prop="humidity"
            label="湿度">
        </el-table-column>
        <el-table-column
            prop="temperature"
            label="湿度">
        </el-table-column>
        <el-table-column
            prop="device_id"
            label="设备id">
        </el-table-column>
        <el-table-column
            prop="power"
            label="能量">
        </el-table-column>
        <el-table-column
            prop="signal_intensity"
            label="信号强度">
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
      page: 1,
      device_id:"NVIESUIIUSDNFAVIONA123",
    },
      total:10,
      temlist: [],
      currentPage: 1,
      spreadsheet: {
        id: "exportTable", //id
        name: "导出温湿度数据", //导出文件名
      },
    }
  },
   async mounted(){
    var myChart = echarts.init(document.getElementById('main'))
    const {data: res} = await this.$axios.get('http://150.158.37.65:8081/user/tem_and_humid'+"/"+this.queryInfo.page+"/"+this.queryInfo.device_id)
    if (res.code !== 200) {
      return this.$message.error("获取温湿度列表失败")
    }
    this.temlist = res.data.result
     var A =  this.temlist[0].temperature
     var B =  this.temlist[1].temperature
     var C =  this.temlist[2].temperature
     var D =  this.temlist[3].temperature
     var E =  this.temlist[4].temperature
     var F =  this.temlist[0].insert_time
     var G =  this.temlist[1].insert_time
     var H =  this.temlist[2].insert_time
     var I =  this.temlist[3].insert_time
     var J =  this.temlist[4].insert_time
    var option = {
      legend: {
        data: ['理论温度曲线', '实际温度曲线']
      },
      title: {
        text: '温度数据折线图'
      },
      xAxis: {
        data: [J, I, H, G, F]
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
          data: [E, D, C, B, A],
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
  created(){
    this.gettem()
  },
  methods: {
    handleSizeChange(newsize) {
      console.log(`每页 ${newsize} 条`);
    },
    handleCurrentChange(newchang) {
      console.log(`当前页: ${newchang}`);
      this.queryInfo.page = newchang;
      this.gettem()
    },
    async gettem() {
      const {data: res} = await this.$axios.get('http://150.158.37.65:8081/user/tem_and_humid'+"/"+this.queryInfo.page+"/"+this.queryInfo.device_id)
      if (res.code !== 200) {
        return this.$message.error("获取温湿度列表失败")
      }
      console.log(res)
      this.temlist = res.data.result
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
