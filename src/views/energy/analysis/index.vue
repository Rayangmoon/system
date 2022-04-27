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
    <div class="img" :style ="note">
      <el-button circle class="button1" @click="ToEnergyElectricity">1</el-button>
      <el-button circle class="button2" @click="ToEnergyTem_hum">2</el-button>
      <el-button circle class="button3" @click="ToEnergyCustomer">3</el-button>
    </div>
<!--      <div class="demo-image">-->
<!--        <div class="block" v-for="fit in fits" :key="fit">-->
<!--          <el-image style="width: auto; height: auto"  :src="url" :fit="fit">-->
<!--          </el-image>-->
<!--        </div>-->
<!--      </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ['scale-down'],
      url: require('@/assets/images/平面图1.png'),
      note: {
        backgroundImage: "url(" + require("@/assets/images/平面图1.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    }
  },
  methods: {
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
  }
}
</script>

<style scoped>
.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}
.block{
  margin-top: 20px;
  box-shadow: 4px 2px 10px rgb(173, 168, 168);
}
.img{
  width: 1200px;
  height: 600px;
}
.button1{
  margin-left: 100px;
  margin-top: 100px;
  background-color: darkred;
}
.button2{
  margin-left: 200px;
  margin-top: 200px;
  background-color: darkred;
}
.button3{
  margin-left: 300px;
  margin-top: 300px;
  background-color: darkred;
}
</style>
