
<template>
  <div>
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/sensor/main' }">传感器模块</el-breadcrumb-item>
      <el-breadcrumb-item>数据管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs type="border-card">
      <el-tab-pane label="设备管理">
        <Equip></Equip>
      </el-tab-pane>
      <el-tab-pane label="日志阅读">
        <Log></Log>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Equip from '../data/Equip.vue'
import Log from '../data/Log.vue'

export default {
  components:{Equip , Log}
}
</script>

<style scoped>
.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}
</style>