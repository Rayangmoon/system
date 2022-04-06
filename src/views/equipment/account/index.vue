<template>
  <div>
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>设备全生命周期</el-breadcrumb-item>
      <el-breadcrumb-item>设备台账</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs type="border-card">
      <el-tab-pane label="设备管理">
        <Equip></Equip>
      </el-tab-pane>
      <el-tab-pane label="状态管理">
        
      </el-tab-pane>
      <el-tab-pane label="备件管理">
        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Equip from '../account/Equip.vue'
export default {
  components:{Equip}
}
</script>

<style>

</style>