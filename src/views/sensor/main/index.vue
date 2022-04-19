
<template>
  <div>
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item >传感器模块</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}
</style>