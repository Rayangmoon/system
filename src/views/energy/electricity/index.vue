<template>
  <div>
    <!--  面包屑导航-->
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/energy/main' }">能源管理</el-breadcrumb-item>
      <el-breadcrumb-item>电表数据</el-breadcrumb-item>
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
import * as echarts from 'echarts';
import DaoChu from "@/views/energy/consumption/DaoChu";
export default {
  components: {DaoChu},
  data() {
    return {
      tableData: [{
        1: '正向有功电能',
        2: '632',
        3: '',
        4:'2022-4-1',
        5:'986',
        6:'864',
      }, {
        1: '反向有功电能',
        2: '777',
        3: '',
        4:'2022-4-1',
        5:'77',
        6:'677',
      }, {
        1: '正向无功电能',
        2: '996',
        3: '',
        4:'2022-4-1',
        5:'134',
        6:'6452',
      }, {
        1: '反向无功电能',
        2: '777',
        3: '',
        4:'2022-4-1',
        5:'532',
        6:'745',
      }],
      queryInfo:{
        page: 1,
      },
      currentPage: 1,
      spreadsheet: {
        id: "exportTable", //id
        name: "导出电能数据", //导出文件名
      },
    }
  },
  mounted(){
    var myChart = echarts.init(document.getElementById('main'))
    var option = {
      legend: {
        data: ['理论耗能曲线', '实际耗能曲线']
      },
      title: {
        text: '电能数据折线图'
      },
      xAxis: {
        data: ['2022-4-7', '2022-4-8', '2022-4-9', '2022-4-10', '2022-4-11']
      },
      yAxis: {},
      series: [
        {
          name: '理论耗能曲线',
          data: [10, 22, 28, 23, 19],
          type: 'line',
          areaStyle: {},
          label: {
            show: true }
        },
        {
          name: '实际耗能曲线',
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
  created(){
    this.getdevice()
  },
  methods: {
    handleSizeChange(newsize) {
      console.log(`每页 ${newsize} 条`);
    },
    handleCurrentChange(newchang) {
      console.log(`当前页: ${newchang}`);
    },
    async getdevice(){
      // sessionStorage.setItem("token", 'bada88e8-2000-482b-a50b-48b2ea745304')
      // this.$cookies.set("token", 'bada88e8-2000-482b-a50b-48b2ea745304', {expires: "7D"})
      const {data:res} = await this.$axios.get('http://150.158.37.65:8081/user/aircondition', {params:this.queryInfo})
      console.log(res)
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
