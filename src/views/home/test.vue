
<template>
  <div>
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item> </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="demo-image">
      <div class="block" v-for="fit in fits" :key="fit">
        <el-image
          style="width: auto; height: auto"
          :src="url"
          :fit="fit">

        </el-image>
      </div>
    </div>
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
        fits: ['scale-down'],
        url: require('../../assets/images/平面图1.png')
      }
    }
}
</script>

<style scoped>
.block{
  margin-top: 20px;
  box-shadow: 4px 2px 10px rgb(173, 168, 168);
}
.charts{
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
}
</style>