<template>
  <div>
    <el-breadcrumb class="bread">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <div>
    <baidu-map class="map" center="上海" zoom="10" @ready="handler">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <bm-marker :position="fit1" :dragging="ture" animation="BMAP_ANIMATION_DROP" @click="ToEnergyMain">
        <bm-label content="电能传感器" :offset="{width: -25, height: 30}"/>
      </bm-marker>
      <bm-marker :position="fit2" :dragging="ture" animation="BMAP_ANIMATION_DROP" @click="ToSensorMain">
        <bm-label content="空气传感器" :offset="{width: -25, height: 30}"/>
      </bm-marker>
      <bm-marker :position="fit3" :dragging="ture" animation="BMAP_ANIMATION_DROP" @click="ToEquipMain">
        <bm-label content="设备" :offset="{width: -2, height: 30}"/>
      </bm-marker>
      <bm-marker :position="item.pot" :dragging="ture" animation="BMAP_ANIMATION_DROP" @click="ToEnergyMain" v-for="(item, index)  in btnsArr" :key="index">
        <bm-label content ="{item.Name}" :offset="{width: -25, height: 30}"/>
      </bm-marker>
    </baidu-map>
      <el-button type="primary" @click="dialogFormVisible = true" class="but">增加传感器地点</el-button>
      <el-button type="primary" @click="dialogFormVisible2 = true" class="but">删除传感器</el-button>
    </div>
    <div class="charts">
      <Chart1></Chart1>
      <Chart2></Chart2>
    </div>
    <el-dialog title="增加传感器" :visible.sync="dialogFormVisible" width="40%" @close="dialogclose">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="传感器名字" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="传感器id" :label-width="formLabelWidth" prop="id">
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实现方法" :label-width="formLabelWidth" prop="method">
          <el-input v-model="form.method" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="传感器地点" :label-width="formLabelWidth" prop="pot">
          <el-input v-model="form.pot" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="Addequips">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="删除传感器" :visible.sync="dialogFormVisible2" width="40%" @close="dialogclose2">
      <el-form :model="form2" ref="form2" :rules="rules2">
        <el-form-item label="传感器名字" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form2.name" autocomplete="off"></el-input>
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
import Chart1 from '../home/Chart1.vue'
import Chart2 from '../home/Chart2.vue'


export default {
  components: {Chart1, Chart2},
  data() {
      return {
        fit1:{lng:121.43,lat:31.29},
        fit2:{lng:121.45,lat:31.24},
        fit3:{lng:121.65,lat:31.24},
        btnsArr:[
          {
            Name: "按钮1",
            BtnScript: "console.log('按钮1')",
            pot: {lng:121.3,lat:31.29},
          },
          {
            Name: "按钮2",
            BtnScript: "console.log('按钮2')",
            pot: {lng:121.6,lat:31.29},
          },
        ],
        equiplist:[],
        dialogFormVisible: false,
        dialogFormVisible2: false,
        form: {
          name: '',
          id: '',
          method: '',
          pot:'',
        },
        form2: {
          name: '',
        },
        formLabelWidth: '120px',
        rules: {
          name: [
            {required: true, message: '请输入传感器地点名称', trigger: 'blur'},
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          id: [
            {required: true, message: '请输入创建传感器地点id', trigger: 'blur'},
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          method: [
            {required: true, message: '请输入创建传感器地点方法', trigger: 'blur'},
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
          pot: [
            {required: true, message: '请输入创建传感器地点', trigger: 'blur'},
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
        },
        rules2: {
          name: [
            {required: true, message: '请输入传感器地点名称', trigger: 'blur'},
            { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
          ],
        },
      }
    },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      // 鼠标缩放
      map.enableScrollWheelZoom(true)
    },
    ToSensorMain(){
      this.$router.push({
        name:'sensor_main',
      })
    },
    ToEquipMain(){
      this.$router.push({
        name:'equip_main',
      })
    },
    ToEnergyAnalysis(){
      this.$router.push({
        name:'energy_analysis_index',
      })
    },
    ToEnergyMain(){
      this.$router.push({
        name:'energy_main',
      })
    },
    async getequiplist(){
      const {data:res} = await this.$axios.get('http://150.158.37.65:8081/admin/userManage/userQuery/page')
      if(res.code!==200){
        // this.$router.push('/error')
        return this.$message.error("获取传感器列表失败")
      }
      console.log(res)
      this.equiplist = res.data.result
    },
    dialogclose(){
      this.$refs.form.resetFields()
    },
    dialogclose2(){
      this.$refs.form2.resetFields()
    },
    Addequips(){
      this.$refs.form.validate(valid => {
        if(!valid) return this.$message.error('请添加传感器地点名称')
        // 可以发起请求
        this.$axios.post('http://150.158.37.65:8081/admin/userManage/userAdd', this.form).then((res)=> {
          if (res.data.code !== 200) {
            return this.$message.error('传感器地点导入失败')
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
      const r = await this.$confirm('此操作将永久删除该传感器地点，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if(r !== "confirm"){
        return this.$message.info('已取消删除')
      }
      const {data:res} = await this.$axios.delete('http://150.158.37.65:8081/admin/userManage/userDel',{data:this.form2})
      if(res.code !== 200){
        return this.$message.error("删除传感器地点失败")
      }
      this.$message.success("删除传感器地点成功")
      this.getequiplist()
      console.log(res)
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
.charts{
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
}
.map{
  margin-top: 10px;
  width:100%;
  height:450px;
}

</style>
