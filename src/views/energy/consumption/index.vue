<template>
  <div>
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>能源管理</el-breadcrumb-item>
      <el-breadcrumb-item>能耗数据分析</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="main" style="width: 1200px;height:400px;" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  mounted(){
    var myChart = echarts.init(document.getElementById('main'))
    var option = {
      legend: {
        data: ['理论耗能曲线', '实际耗能曲线']
      },
      title: {
        text: '每周能耗数据折线图'
      },
      xAxis: {
        data: ['2022-4-7', '2022-4-8', '2022-4-9', '2022-4-10', '2022-4-11']
      },
      yAxis: {},
      series: [
        {
          name: '理论耗能曲线',
          data: [30, 21, 28, 15, 10],
          type: 'line',
          areaStyle: {},
          label: {
            show: true }
        },
        {
          name: '实际耗能曲线',
          data: [10, 25, 15, 35, 20],
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
}
</script>

<style scoped>
.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}

</style>
.chart{
margin-top: 40px;
}
