<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="系统运行" name="first">
        <Sys></Sys>
      </el-tab-pane>
      <el-tab-pane label="用户操作" name="second">
        <User></User>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Sys from '../data/Log/Sys.vue'
import User from '../data/Log/User.vue'

export default {
  name:'Log',
  components:{Sys , User},
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
  },
  data() {
    return {
      activeName: 'second'

    }
  }
}
</script>

<style>

</style>