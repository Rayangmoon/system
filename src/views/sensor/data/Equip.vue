<template>
  <div>
    <el-table
    :data="tableData"
    stripe
    border
    style="width: 100%"
    max-height='410px'
    >
    <el-table-column
      prop="name"
      label="设备名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="location"
      label="所在区域"
      width="180">
    </el-table-column>
    <el-table-column
      prop="data"
      label="检测值">
    </el-table-column>
    <el-table-column
      prop="time"
      label="更新时间"
      sortable
    >
    </el-table-column>
    <el-table-column
      prop="history"
      label="历史值">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
    <div class="charts">
      <Chart1></Chart1>
    </div>
  </div>
</template>

<script>
import Chart1 from '../data/Chart1.vue'
export default {
  name:'Equip',
  components:{Chart1},
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  data() {
    return {
      tableData: [
        {
          name:'CO2传感器',
          location:'外线南门',
          data:'900ppm',
          time:'2022-03-16'
        },
        {
          name:'PM2.5传感器',
          location:'正门',
          data:'45ug/m³',
          time:'2022-03-18'
        },
        {
          name:'甲醛传感器',
          location:'601-1',
          data:'0.08mg/m³',
          time:'2022-03-17'
        },
        {
          name:'负氧离子传感器',
          location:'停车场',
          data:'1500个/cm³',
          time:'2022-03-18'
        },
        {
          name:'声音分贝传感器',
          location:'西侧安全出口',
          data:'52dB',
          time:'2022-03-17'
        },
        {
          name:'光照传感器',
          location:'场馆中心',
          data:'357勒克斯',
          time:'2022-03-18'
        },
      ]
    }
  }
}
</script>

<style scoped>
.charts{
  margin-top: 20px;

}
</style>