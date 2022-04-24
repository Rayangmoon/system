<template>
  <div>
    <el-breadcrumb class="bread">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <div>
    <baidu-map class="map" center="上海" zoom="10" @ready="handler">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <bm-marker :position="{lng:121.43,lat:31.29}" :dragging="ture" animation="BMAP_ANIMATION_DROP" @click="ToEnergyAnalysis">
        <bm-label content="电能传感器" :offset="{width: -25, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng:121.45,lat:31.24}" :dragging="ture" animation="BMAP_ANIMATION_DROP" @click="ToSensorMain">
        <bm-label content="空气传感器" :offset="{width: -25, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng:121.65,lat:31.24}" :dragging="ture" animation="BMAP_ANIMATION_DROP" @click="ToEquipMain">
        <bm-label content="设备" :offset="{width: -2, height: 30}"/>
      </bm-marker>
    </baidu-map>
    </div>
    <div class="charts">
      <Chart1></Chart1>
      <Chart2></Chart2>

    </div>
  </div>
</template>

<script>
import Chart1 from '../home/Chart1.vue'
import Chart2 from '../home/Chart2.vue'


export default {
  components: {Chart1, Chart2},
  data() {
      return {
      }

    },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      // 鼠标缩放
      map.enableScrollWheelZoom(true)
    },
    // ToEnergyElectricity(){
    //   console.log('...')
    //   this.$router.push({
    //     name:'energy_elec_index',
    //   })
    // },

    ToSensorMain(){
      this.$router.push({
        name:'sensor_main',
      })
    },
    ToEquipMain(){
      this.$router.push({
        name:'equip_main',
      })
    },
    ToEnergyAnalysis(){
      this.$router.push({
        name:'energy_analysis_index',
      })
    },
  }
}
</script>





<style scoped>
.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}
.block{
  margin-top: 20px;
  box-shadow: 4px 2px 10px rgb(173, 168, 168);
}
.charts{
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
}
.map{
  margin-top: 10px;
  width:100%;
  height:450px;
}

</style>
