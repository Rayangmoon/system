
<template>
  <div>
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/equip/main' }">设备全生命周期</el-breadcrumb-item>
      <el-breadcrumb-item>维修与保养</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs type="border-card">
      <el-tab-pane label="设备维修">
        <wei></wei>
      </el-tab-pane>
      <el-tab-pane label="设备保养">
        <bao></bao>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import Bao from './Bao.vue'
import Wei from './Wei.vue'
export default {
  components: { Wei, Bao },

}
</script>

<style scoped>
.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}
</style>