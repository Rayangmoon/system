
<template>
  <div>
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>传感器模块</el-breadcrumb-item>
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

  </div>
</template>

<script>
export default {
  data() {
      return {
        fits: ['scale-down'],
        url: require('../../../assets/images/平面图1.png')
      }
  }
}
</script>

<style scoped>

.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}
</style>