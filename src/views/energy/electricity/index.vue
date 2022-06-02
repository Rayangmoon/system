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
          :data="electricitylist"
          :id="spreadsheet.id"
          style="width: 100%"
          border stripe
          class="table">
        <el-table-column
           type="index">
        </el-table-column>
        <el-table-column
            prop="volt_A"
            label="A相电压">
        </el-table-column>
        <el-table-column
            prop="volt_B"
            label="B相电压">
        </el-table-column>
        <el-table-column
            prop="volt_C"
            label="C相电压">
        </el-table-column>
        <el-table-column
            prop="current_A"
            label="A相电流">
        </el-table-column>
          <el-table-column
              prop="current_B"
              label="B相电流">
          </el-table-column>
        <el-table-column
            prop="current_C"
            label="C相电流">
        </el-table-column>
        <el-table-column
            prop="pos_active_energy"
            label="正相有功总电能">
        </el-table-column>
        <el-table-column
            prop="neg_active_energy"
            label="反向有功总电能">
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
       //B:0, C:0, D:0, E:0,
      data1:[ ],
      // data1:[this.electricitylist[0].current_A,this.electricitylist[1].current_A,this.electricitylist[2].current_A,this.electricitylist[3].current_A,this.electricitylist[4].current_A],
      // data2:[this.electricitylist[0].insert_time,this.electricitylist[1].insert_time,this.electricitylist[2].insert_time,this.electricitylist[3].insert_time,this.electricitylist[4].insert_time],
      queryInfo:{
        page: 1,
        device_id:"ShanGHaiDaXUePUmIn789",
      },
      currentPage: 1,
      total:10,
      electricitylist: [],
      spreadsheet: {
        id: "exportTable", //id
        name: "导出电能数据", //导出文件名
      },
    }
  },
  async mounted(){
    var myChart = echarts.init(document.getElementById('main'))
    const {data: res} = await this.$axios.get('http://150.158.37.65:8081/user/electricity'+"/"+this.queryInfo.page+"/"+this.queryInfo.device_id)
    if (res.code !== 200) {
      return this.$message.error("获取电能列表失败")
    }
    this.electricitylist = res.data.result
    var A =  this.electricitylist[0].pos_active_energy
    var B =  this.electricitylist[1].pos_active_energy
    var C =  this.electricitylist[2].pos_active_energy
    var D =  this.electricitylist[3].pos_active_energy
    var E =  this.electricitylist[4].pos_active_energy
    var F =  this.electricitylist[0].insert_time
    var G =  this.electricitylist[1].insert_time
    var H =  this.electricitylist[2].insert_time
    var I =  this.electricitylist[3].insert_time
    var J =  this.electricitylist[4].insert_time
    var option = {
      legend: {
        data: ['理论耗能曲线', '实际耗能曲线']
      },
      title: {
        text: '电能数据折线图'
      },
      xAxis: {
        data: [J, I, H, G, F]
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
    this.getelectricity()
  },
  methods: {
    handleSizeChange(newsize) {
      console.log(`每页 ${newsize} 条`);
    },
    handleCurrentChange(newchang) {
      console.log(`当前页: ${newchang}`);
      this.queryInfo.page = newchang;
      this.getelectricity()
    },
    async getelectricity() {
      const {data: res} = await this.$axios.get('http://150.158.37.65:8081/user/electricity'+"/"+this.queryInfo.page+"/"+this.queryInfo.device_id)
      if (res.code !== 200) {
        return this.$message.error("获取电能列表失败")
      }
      console.log(res)
      this.electricitylist = res.data.result
      this.total = res.data.total_page

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
.chart{
  margin-top: 40px;
}
.Dao{
  margin-left: 10px;
}
</style>
