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
      prop="id"
      label="序号"
      width="50">
    </el-table-column>
    
    <el-table-column
      prop="relativeHumidity"
      label="相对湿度">
    </el-table-column>
    <el-table-column
      prop="currentTemperature"
      label="温度">
    </el-table-column>
    <el-table-column
      prop="lightLuxValue"
      label="光照度值">
    </el-table-column>
    <el-table-column
      prop="soundDecibelValue"
      label="声音分贝值">
    </el-table-column>
    <el-table-column
      prop="co2Value"
      label="二氧化碳浓度">
    </el-table-column>
    <el-table-column
      prop="pm25Value"
      label="pm2.5检测值">
    </el-table-column>
    <el-table-column
      prop="deviceId"
      label="设备编号">
    </el-table-column>
    
    
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="totalPage">
    </el-pagination>
    <div class="charts">
      <Chart1></Chart1>
    </div>
  </div>
</template>

<script>
import Chart1 from '../data/Chart1.vue'
import api from '../../../api/api'
export default {
  name:'Equip',
  components:{Chart1},
  mounted() {
    this.getSensor()
  },
  methods: {
    getSensor(){
      api.sensorApi.getSensor(this.currentPage).then(res => {
        if(res.code === "200"){
          console.log(res)
          this.totalPage = res.data.total_page
          this.tableData = res.data.result
        }
      }).catch(
        res => {
          console.log('error',res)
        }
      )
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`);
      this.getSensor()

    }
  },
  data() {
    return {
      currentPage: 1,
      totalPage:1,
      tableData: []
    }
  }
}
</script>

<style scoped>
.charts{
  margin-top: 20px;

}
</style>