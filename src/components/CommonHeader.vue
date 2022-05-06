<template>
    <header>
      <div class="l-content">
        <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini" v-model="ids"></el-button>
        <h3 style="color:#fff">首页</h3>
      </div>
      <div class="r-content">
        <el-dropdown trigger="click" size="mini" @command="handleCommand">
          <span>
            <img class="user" :src="userImg">
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item divided command="a">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
</template>
<script>
export default {
  name:'CommonHeader',
  data() {
    return {
      userImg:require('../assets/images/user.png'),
      ids:{
        id:this.$route.query.id,
      }
    }
  },
  methods: {
    handleMenu(){
      this.$store.commit('collapseMenu')
    },
    handleCommand() {
      this.$axios.get('http://150.158.37.65:8081/user/logout', {params:this.ids})
      this.$router.push('/')
    }
  },
}
</script>
<style lang="less" scoped>
header{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;

}
.l-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
}
.r-content{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
