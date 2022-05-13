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
    <el-button type="primary" @click="dialogFormVisible = true" class="but">增加位置</el-button>
    <el-button type="primary" @click="dialogFormVisible2 = true" class="but">删除位置</el-button>
  <div class="img" :style ="note">
<!--    <el-button circle @click="ToEnergyElectricity" position="{left:300px,top:300px}">1</el-button>-->
<!--    <el-button circle class="button2" @click="ToEnergyTem_hum">2</el-button>-->
<!--    <el-button circle class="button3" @click="ToEnergyCustomer">3</el-button>-->
    <el-button type="primary" circle v-for="(item, index) in equiplist" :key="index" @click="runBtnEvent(item)" :style="styleVar(item)" class="box" >
      {{ item.button_name }}{{ item.address_id }}
    </el-button>

  </div>
  <!--      <div class="demo-image">-->
  <!--        <div class="block" v-for="fit in fits" :key="fit">-->
  <!--          <el-image style="width: auto; height: auto"  :src="url" :fit="fit">-->
  <!--          </el-image>-->
  <!--        </div>-->
  <!--      </div>-->
    <el-dialog title="增加位置" :visible.sync="dialogFormVisible" width="40%" @close="dialogclose">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="位置描述" :label-width="formLabelWidth" prop="button_name">
          <el-input v-model="form.button_name" autocomplete="off"></el-input>
        </el-form-item>
<!--        <el-form-item label="传感器id" :label-width="formLabelWidth" prop="button_id">-->
<!--          <el-input v-model="form.button_id" autocomplete="off"></el-input>-->
<!--        </el-form-item>-->
        <el-form-item label="实现方法" :label-width="formLabelWidth" prop="script">
<!--          <el-input v-model="form.script" autocomplete="off"></el-input>-->
          <el-select v-model="form.script" clearable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="位置编码" :label-width="formLabelWidth" prop="address_id">
          <el-input v-model="form.address_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="位置左坐标" :label-width="formLabelWidth" prop="button_loc_x">
          <el-input v-model="form.button_loc_x" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="位置上坐标" :label-width="formLabelWidth" prop="button_loc_y">
          <el-input v-model="form.button_loc_y" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="Addequips">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="删除位置" :visible.sync="dialogFormVisible2" width="40%" @close="dialogclose2">
      <el-form :model="form2" ref="form2" :rules="rules2">
        <el-form-item label="传感器id" :label-width="formLabelWidth" prop="address_id">
          <el-input v-model="form2.address_id" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="open">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: 'this.$router.push(\'/energy/electricity/index\')',
        label: '电表传感器'
      },
        {
          value: 'this.$router.push(\'/energy/tem_hum/index\')',
          label: '温湿度传感器'
        },
        {
          value: 'this.$router.push(\'/energy/customer/index\')',
          label: '客流传感器'
        }
      ],
      fits: ['scale-down'],
      url: require('@/assets/images/平面图1.png'),
      note: {
        backgroundImage: "url(" + require('../../../assets/images/dalou.png') + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      btnsArr:[
        {
          button_name: "传感器1",
          button_id: "But1",
          script: "console.log('按钮1'),console.log('按钮2'),console.log('按钮3')",
          button_loc_x: 400,
          button_loc_y: 400,
        },
        {
          button_name: "传感器2",
          button_id: "But2",
          script: "console.log('按钮2')",
          button_loc_x: 500,
          button_loc_y: 500,
        },
      ],
      Info:{
        id:1,
      },
      equiplist:[],
      dialogFormVisible: false,
      dialogFormVisible2: false,
      form: {
        button_name: '',
        // button_id: '',
        script: '',
        button_loc_x: '' ,
        button_loc_y: '' ,
        address_id: '',
        building_id: 1,
      },
      form2: {
        address_id: '',
      },
      formLabelWidth: '120px',
      rules: {
        button_name: [
          {required: true, message: '请输入传感器名称', trigger: 'blur'},
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        // button_id: [
        //   {required: true, message: '请输入创建传感器id', trigger: 'blur'},
        //   { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        // ],
        script: [
          {required: true, message: '请输入创建传感器方法', trigger: 'blur'},
          { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
        ],
        button_loc_x: [
          {required: true, message: '请输入创建传感器左坐标', trigger: 'blur'},
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        button_loc_y: [
          {required: true, message: '请输入创建传感器上坐标', trigger: 'blur'},
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        address_id: [
          {required: true, message: '请输入创建传感器位置坐标', trigger: 'blur'},
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
      },
      rules2: {
        button_id: [
          {required: true, message: '请输入传感器id', trigger: 'blur'},
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  created(){
    this.getequiplist()
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
    runBtnEvent(btn) {
      eval(btn.script);
    },
    async getequiplist(){
      const {data:res} = await this.$axios.get('http://150.158.37.65:8081/admin/addressMange/pointQuery/building_id',{params:this.Info})
      if(res.code!==200){
        // this.$router.push('/error')
        return this.$message.error("获取传感器列表失败")
      }
      console.log(res)
      this.equiplist = res.data
    },
    dialogclose(){
      this.$refs.form.resetFields()
    },
    dialogclose2(){
      this.$refs.form2.resetFields()
    },
    Addequips(){
      this.$refs.form.validate(valid => {
        if(!valid && this.form.button_loc_x<300 && this.form.button_loc_x>1400 && this.form.button_loc_y<150 && this.form.button_loc_y>600) return this.$message.error('请添加传感器名称')
        // 可以发起请求
        this.$axios.post('http://150.158.37.65:8081/admin/addressMange/pointAdd', this.form).then((res)=> {
          if (res.data.code !== 200) {
            return this.$message.error('传感器导入失败')
          } else {
            this.$message.success('导入成功')
            this.dialogFormVisible = false
            this.getequiplist()
          }
          console.log(res)
        })
      })
    },
    async open(){
      const r = await this.$confirm('此操作将永久删除该传感器，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if(r !== "confirm"){
        return this.$message.info('已取消删除')
      }
      const {data:res} = await this.$axios.delete('http://150.158.37.65:8081/admin/addressManage/pointDel/address_id',{data:this.form2})
      if(res.code !== 200){
        return this.$message.error("删除传感器失败")
      }
      this.$message.success("删除传感器成功")
      this.getequiplist()
      console.log(res)
      this.dialogFormVisible2 = false
    }
  },
  // props: {
  //   left: {
  //     type: Number,
  //     default: 400,
  //   },
  //   top: {
  //     type: Number,
  //     default: 400,
  //   },
  // },
  computed: {
    styleVar() {
      return function(val) {
        return {
          '--box-left': val.button_loc_x + 'px',
          '--box-top': val.button_loc_y + 'px'
        }
      }
    },

  },
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
  width: 1250px;
  height: 490px;
}
.button1{
  position: fixed;
  left: 400px;
  top: 170px;
  background-color: darkred;
}
.button2{
  position: fixed;
  left: 300px;
  top: 600px;
  background-color: darkred;
}
.button3{
  position: fixed;
  left: 400px;
  top: 300px;
  background-color: darkred;
}
.but{
  margin-bottom: 10px;
}
.box {
  position: relative;
  left: var(--box-left);
  top: var(--box-top)
}
</style>
