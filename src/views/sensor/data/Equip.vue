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
      prop="relative_humidity"
      label="相对湿度">
    </el-table-column>
    <el-table-column
      prop="current_temperature"
      label="温度">
    </el-table-column>
    <el-table-column
      prop="light_lux_value"
      label="光照度值">
    </el-table-column>
    <el-table-column
      prop="sound_decibel_value"
      label="声音分贝值">
    </el-table-column>
    <el-table-column
      prop="c_O2_value"
      label="二氧化碳浓度">
    </el-table-column>
    <el-table-column
      prop="p_m25_value"
      label="pm2.5检测值">
    </el-table-column>
    <el-table-column
      prop="device_id"
      label="设备编号">
    </el-table-column>
    <el-table-column
      prop="insert_time"
      label="检测时间">
    </el-table-column>
    
    
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="totalPage*10">
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
      api.sensorApi.getSensor(this.currentPage , -1).then(res => {
        // if(res.code == "200"){
          console.log(res)
          console.log('看一下这的测试数据',res.data.data)
          this.totalPage = res.data.data.total_page
          this.tableData = res.data.data.result
        
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