import Main from '../views/Main.vue'
<template>
  <div>
    <bread-crumb></bread-crumb>
    <div>
    <baidu-map class="map" center="上海" zoom="10" @ready="handler">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <bm-marker :position="{lng:121.43,lat:31.29}" :dragging="ture" animation="BMAP_ANIMATION_DROP" @click="ToEnergyElectricity">
        <bm-label content="电能传感器" :offset="{width: -25, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng:121.45,lat:31.24}" :dragging="ture" animation="BMAP_ANIMATION_DROP" @click="ToSensorMain">
        <bm-label content="空气传感器" :offset="{width: -25, height: 30}"/>
      </bm-marker>
    </baidu-map>
    </div>
<!--    <div class="demo-image">-->
<!--      <div class="block" v-for="fit in fits" :key="fit">-->
<!--        <el-image-->
<!--          style="width: auto; height: auto"-->
<!--          :src="url"-->
<!--          :fit="fit">-->

<!--        </el-image>-->
<!--      </div>-->
<!--    </div>-->
    <div class="charts">
      <Chart1></Chart1>
      <Chart2></Chart2>

    </div>
  </div>
</template>

<script>
import BreadCrumb from '../../components/BreadCrumb.vue'
import Chart1 from '../home/Chart1.vue'
import Chart2 from '../home/Chart2.vue'


export default {
  components: { BreadCrumb,Chart1, Chart2},
  data() {
      return {
        // fits: ['scale-down'],
        // url: require('../../assets/images/平面图1.png')
      }

    },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      // 鼠标缩放
      map.enableScrollWheelZoom(true)
    },
    ToEnergyElectricity(){
      console.log('...')
      this.$router.push({
        name:'energy_elec_index',
      })
    },
    ToSensorMain(){
      console.log('...')
      this.$router.push({
        name:'sensor_main',
      })
    },
  }
}
</script>

<style>
/*.block{*/
/*  margin-top: 20px;*/
/*  box-shadow: 4px 2px 10px rgb(173, 168, 168);*/
/*}*/
.charts{
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
}
.map{
  margin-top: 10px;
  width:100%;
  height:450px;
}

</style>
