<template>
  <div>
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">用户登录</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/LoginMangers' }">测试登录</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="common-layout">
      <el-container>
        <el-header>智慧建筑管理系统登录</el-header>
        <el-main>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.passwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginMangers",
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.ruleForm.passwd !== '') {
          this.$refs.ruleForm.validateField('password')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: 'admin',
        passwd: '123456'
      },
      rules: {
        username: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          // const _this =this
          this.$axios.post('http://150.158.37.65:8081/test', this.ruleForm).then((res)=>{
            if (res.data.code !== 200) {
              console.log(res)
              return this.$message.error('用户名或密码错误')
            } else {
              this.$message.success('登录成功')
            }
            // let cookie = res.headers.cookie
            // console.log(cookie)
            // sessionStorage.setItem("token", res.headers["set-cookie"])
            console.log(res)
            // _this.$store.commit('SET_TOKEN', token)
            // _this.$store.commit('SET_USERINFO', res.data.data)
          console.log("用户名，密码")
          console.log(this.ruleForm.username)
          console.log(this.ruleForm.passwd)
          this.$router.push('/Main')
          })
        } else {
          //return this.$message.error('用户名或密码错误')
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.common-layout .el-header{
  background-color: #373d41;
  /*color: var(--el-text-color-primary);*/
  text-align: center;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
  color: #FFF;
  font-size: 20px;
  align-items: center;
}
.common-layout .el-main {
  /*color: var(--el-text-color-primary);*/
  text-align: center;
  line-height: 160px;
}
.demo-ruleForm{
  max-width: 500px;
  margin: 0 auto;
}
</style>
