<template>
  <div>
  <div>
    <!--  面包屑导航-->
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>能源管理</el-breadcrumb-item>
      <el-breadcrumb-item>主界面</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
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
      url: require('@/assets/images/平面图1.png')
    }
  }
}
</script>

<style>
.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}
.block{
  margin-top: 20px;
  box-shadow: 4px 2px 10px rgb(173, 168, 168);
}
</style>
