<template>
  <div>
    <div class="t1">能源统计月报表</div>
    <div class="t2">2022年4月29日</div>
    <div class="t3">编制单位：上海浦敏科技有限公司</div>
    <template>
      <el-table :data="tableData" style="width: 100%" border class="tt">
        <el-table-column prop="1" label="电表类型" ></el-table-column>
        <el-table-column prop="2" label="用电总数" ></el-table-column>
        <el-table-column prop="3" label="2022年3月"></el-table-column>
        <el-table-column prop="4" label="2022年4月"></el-table-column>
      </el-table>
    </template>
    <div id="main" style="width: 1500px;height:400px;" class="chart"></div>
    <el-button type="success" @click="exportEvent" class="b1">转至打印页</el-button>
    <el-button type="success" @click="ToEnergyConsumption">返回</el-button>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "BaoBiao",
  data() {
    return {
      tableData: [{
        1: '正向有功电能',
        2: '1421',
        3: '14324',
        4: '1334'
      }, {
        1: '反向有功电能',
        2: '5324',
        3: '5343',
        4: '6432'
      },{
        1: '正向无功电能',
        2: '63235',
        3: '46542',
        4: '42438'
      },{
        1: '反向无功电能',
        2: '7534',
        3: '4243',
        4: '8567'
      },{
        1: '三相电能',
        2: '6434',
        3: '7745',
        4: '6354'
      },{
        1: '反向电能',
        2: '42334',
        3: '53534',
        4: '42435'
      },]
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
          name: '当月理论耗能曲线',
          data: [10, 22, 28, 23, 19],
          type: 'line',
          // areaStyle: {},
          label: {
            show: true }
        },
        {
          name: '当月实际耗能曲线',
          data: [25, 14, 23, 35, 10],
          type: 'line',
          // areaStyle: {
          //   color: '#ff0',
          //   opacity: 0.5
          // },
          label: {
            show: true }
        }
      ]
    };
    myChart.setOption(option);
  },
  methods:{
    ToEnergyConsumption(){
      this.$router.push({
        name:'energy_consumption_index',
      })
    },
  }
}
</script>

<style scoped>
.t1{
  margin-left: 650px;
  margin-top: 10px;
  font-size: 2.5rem;
  font-Weight : bold;
}
.t2{
  margin-left: 720px;
  margin-top: 10px;
}
.t3{
  margin-left: 50px;
  margin-top: 10px;
}
.tt{
  margin-top: 10px;
}
.chart{
  margin-top: 20px;
  margin-left: 20px;
}
.b1{
  margin-left: 1200px;
}
</style>
