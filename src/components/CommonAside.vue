<template>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo"
        @open="handleOpen" @close="handleClose" :collapse="isCollapse"
        background-color='#545c64' text-color='#fff'
        active-text-color='#ffd04b'>
  <h3>界面看板</h3>
    <el-menu-item @click="ToHome" index="1">
        <i class="el-icon-aim"></i>
        <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>传感器模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="ToSensorMain" index="2-1">主界面</el-menu-item>
          <el-menu-item @click="ToSensorData" index="2-2">数据管理</el-menu-item>
        </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设备全生命周期</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="ToEquipAccount" index="3-1">设备台账</el-menu-item>
          <el-menu-item @click="ToEquipMaintain" index="3-2">登记与维修</el-menu-item>
          <el-menu-item @click="ToEquipAnalysis" index="3-3">统计分析</el-menu-item>
        </el-menu-item-group>
    </el-submenu>

    <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>能源模块</span>
        </template>
        <el-menu-item-group>
            <el-menu-item @click="ToEnergyAnalysis" index="4-5">主页面</el-menu-item>
            <el-menu-item @click="ToEnergyElectricity" index="4-1">电表数据</el-menu-item>
            <el-menu-item @click="ToEnergyTem_hum" index="4-2">温湿度数据</el-menu-item>
            <el-menu-item @click="ToEnergyCustomer" index="4-3">客流数据</el-menu-item>
            <el-menu-item @click="ToEnergyConsumption" index="4-4">能耗数据</el-menu-item>
<!--            <el-menu-item @click="ToEnergyAnalysis" index="4-5">统计分析</el-menu-item>-->
            <el-menu-item @click="ToEnergyDevice" index="4-6">设备管理</el-menu-item>
        </el-menu-item-group>
    </el-submenu>

</el-menu>
</template>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
      height: 100%;
      border: none;
      h3{
          color: #fff;
          text-align: center;
          line-height: 48px;
      }
  }
</style>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      ToHome(){
        this.$router.push({
          name:'home',
        })
      },
      ToSensorMain(){
        this.$router.push({
          name:'sensor_main',
        })
      },
      ToSensorData(){
        this.$router.push({
          name:'sensor_data_device',
        })
      },
      ToEquipAccount(){
        this.$router.push({
          name:'equip_index',
        })
      },
      ToEquipMaintain(){
        this.$router.push({
          name:'equip_maintain_index',
        })
      },
      ToEquipAnalysis(){
        this.$router.push({
          name:'equip_analysis_index',
        })
      },
      ToEnergyElectricity(){
        this.$router.push({
          name:'energy_elec_index',
        })
      },
      ToEnergyTem_hum(){
        this.$router.push({
          name:'energy_tem_hum_index',
        })
      },
      ToEnergyCustomer(){
        this.$router.push({
          name:'energy_customer_index',
        })
      },
      ToEnergyConsumption(){
        this.$router.push({
          name:'energy_consumption_index',
        })
      },
      ToEnergyAnalysis(){
        this.$router.push({
          name:'energy_analysis_index',
        })
      },
      ToEnergyDevice(){
        this.$router.push({
          name:'energy_device_index',
        })
      }
    },
    computed:{
        noChildren(){
            return this.menu.filter(item => !item.children)
        },
        hasChildren(){
            return this.menu.filter(item => item.children)
        },
        isCollapse(){
            return this.$store.state.tab.isCollapse
        }
    }
  }
</script>
