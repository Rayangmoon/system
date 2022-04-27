<template>
  <div>
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/equip/main' }">设备全生命周期</el-breadcrumb-item>
      <el-breadcrumb-item>设备台账</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs type="border-card">
      <el-tab-pane label="设备管理">
        <Equip></Equip>
      </el-tab-pane>
      <el-tab-pane label="状态管理">
        <status></status>
      </el-tab-pane>
      <el-tab-pane label="备件管理">
        <spare></spare>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Equip from '../account/Equip.vue'
import Spare from './Spare.vue'
import Status from './Status.vue'
export default {
  components:{Equip, Status , Spare}
}
</script>

<style scoped>
.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}
</style>