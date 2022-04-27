<!--<template>-->
<!--  <div>-->
<!--    <el-breadcrumb class="bread">-->
<!--      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item>能源管理</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item>传感器编辑</el-breadcrumb-item>-->
<!--    </el-breadcrumb>-->
<!--    <div class="container">-->
<!--      <div class="drag-box">-->
<!--&lt;!&ndash;        <div class="drag-box-item">&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="item-title">todo</div>&ndash;&gt;-->
<!--          <draggable v-model="todo" @remove="removeHandle" :options="dragOptions">-->
<!--&lt;!&ndash;            <transition-group tag="div" id="todo" class="item-ul">&ndash;&gt;-->
<!--&lt;!&ndash;              <div v-for="item in todo" class="drag-list" :key="item.id">&ndash;&gt;-->
<!--&lt;!&ndash;                {{item.content}}&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--              <div class="img" :style ="note"></div>-->
<!--&lt;!&ndash;            </transition-group>&ndash;&gt;-->
<!--          </draggable>-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="drag-box-item">&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="item-title">doing</div>&ndash;&gt;-->
<!--&lt;!&ndash;          <draggable v-model="doing" @remove="removeHandle" :options="dragOptions">&ndash;&gt;-->
<!--&lt;!&ndash;            <transition-group tag="div" id="doing" class="item-ul">&ndash;&gt;-->
<!--&lt;!&ndash;              <div v-for="item in doing" class="drag-list" :key="item.id">&ndash;&gt;-->
<!--&lt;!&ndash;                {{item.content}}&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </transition-group>&ndash;&gt;-->
<!--&lt;!&ndash;          </draggable>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        <div class="drag-box-item">-->
<!--          <div class="item-title">传感器控件</div>-->
<!--          <draggable v-model="device" @remove="removeHandle" :options="dragOptions">-->
<!--            <transition-group tag="div" id="device" class="item-ul">-->
<!--              <div v-for="item in device" class="drag-list" :key="item.id">-->
<!--                <i class="el-icon-location"></i>-->
<!--                {{item.content}}-->
<!--              </div>-->
<!--            </transition-group>-->
<!--          </draggable>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import draggable from 'vuedraggable'-->
<!--export default {-->
<!--  name: "editmain",-->
<!--data() {-->
<!--  return {-->
<!--    dragOptions:{-->
<!--      animation: 120,-->
<!--      scroll: true,-->
<!--      group: 'sortlist',-->
<!--      ghostClass: 'ghost-style'-->
<!--    },-->
<!--    note: {-->
<!--      backgroundImage: "url(" + require("@/assets/images/平面图1.png") + ") ",-->
<!--      backgroundPosition: "center center",-->
<!--      backgroundRepeat: "no-repeat",-->
<!--      backgroundSize: "cover",-->
<!--    },-->
<!--    todo: [-->
<!--      {-->
<!--        id: 1,-->
<!--        content: '开发图表组件'-->
<!--      },-->
<!--      {-->
<!--        id: 2,-->
<!--        content: '开发拖拽组件'-->
<!--      },-->
<!--      {-->
<!--        id: 3,-->
<!--        content: '开发权限测试组件'-->
<!--      }-->
<!--    ],-->
<!--    doing: [-->
<!--      {-->
<!--        id: 1,-->
<!--        content: '开发登录注册页面'-->
<!--      },-->
<!--      {-->
<!--        id: 2,-->
<!--        content: '开发头部组件'-->
<!--      },-->
<!--      {-->
<!--        id: 3,-->
<!--        content: '开发表格相关组件'-->
<!--      },-->
<!--      {-->
<!--        id: 4,-->
<!--        content: '开发表单相关组件'-->
<!--      }-->
<!--    ],-->
<!--    device:[-->
<!--      {-->
<!--        id: 1,-->
<!--        content: '传感器1'-->
<!--      },-->
<!--      {-->
<!--        id: 2,-->
<!--        content: '传感器2'-->
<!--      },-->
<!--      {-->
<!--        id: 3,-->
<!--        content: '传感器3'-->
<!--      },-->
<!--      {-->
<!--        id: 4,-->
<!--        content: '传感器4'-->
<!--      },-->
<!--      {-->
<!--        id: 5,-->
<!--        content: '传感器5'-->
<!--      },-->
<!--      {-->
<!--        id: 6,-->
<!--        content: '传感器6'-->
<!--      },-->
<!--    ]-->
<!--  }-->
<!--},-->
<!--components:{-->
<!--  draggable-->
<!--},-->
<!--methods: {-->
<!--  removeHandle(event){-->
<!--    console.log(event);-->
<!--    this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);-->
<!--  }-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.drag-box{-->
<!--  display: flex;-->
<!--  user-select: none;-->
<!--}-->
<!--.drag-box-item {-->
<!--  flex: 1;-->
<!--  max-width: 150px;-->
<!--  min-width: 150px;-->
<!--  background-color: #eff1f5;-->
<!--  margin-right: 16px;-->
<!--  border-radius: 6px;-->
<!--  border: 1px #e1e4e8 solid;-->
<!--}-->
<!--.item-title{-->
<!--  padding: 8px 8px 8px 12px;-->
<!--  font-size: 14px;-->
<!--  line-height: 1.5;-->
<!--  color: #24292e;-->
<!--  font-weight: 600;-->
<!--}-->
<!--.item-ul{-->
<!--  padding: 0 8px 8px;-->
<!--  height: 500px;-->
<!--  overflow-y: scroll;-->
<!--}-->
<!--.item-ul::-webkit-scrollbar{-->
<!--  width: 0;-->
<!--}-->
<!--.drag-list {-->
<!--  border: 1px #e1e4e8 solid;-->
<!--  padding: 10px;-->
<!--  margin: 5px 0 10px;-->
<!--  list-style: none;-->
<!--  background-color: #fff;-->
<!--  border-radius: 6px;-->
<!--  cursor: pointer;-->
<!--  -webkit-transition: border .3s ease-in;-->
<!--  transition: border .3s ease-in;-->
<!--}-->
<!--.drag-list:hover {-->
<!--  border: 1px solid #20a0ff;-->
<!--}-->
<!--.drag-title {-->
<!--  font-weight: 400;-->
<!--  line-height: 25px;-->
<!--  margin: 10px 0;-->
<!--  font-size: 22px;-->
<!--  color: #1f2f3d;-->
<!--}-->
<!--.ghost-style{-->
<!--  display: block;-->
<!--  color: transparent;-->
<!--  border-style: dashed-->
<!--}-->
<!--.img{-->
<!--  width: 1000px;-->
<!--  height: 600px;-->
<!--}-->
<!--</style>-->
<template>
  <div>
  <el-breadcrumb class="bread">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/energy/main' }">能源管理</el-breadcrumb-item>
    <el-breadcrumb-item>传感器编辑</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="myBiaoZhu" id="myBiaoZhuDiv">
    <el-button type="text" @click="startBiaoZhu" class="b1">开始标注传感器</el-button>
    <el-button type="text" @click="endBiaoZhu" class="b1">标注完成传感器</el-button>
    <el-button type="primary" plain @click="changeimg1" class="b1">电能传感器</el-button>
    <el-button type="success" plain @click="changeimg2" class="b1">温度传感器</el-button>
    <el-button type="info" plain @click="changeimg3" class="b1">客流量传感器</el-button>
    <img id="myBiaoZhu" src="@/assets/images/平面图1.png" alt="" style="height: 550px;width: 1200px;">
  </div>
  </div>
</template>

<script>
export default {
  name: "editmain",
  components: {},
  data () {
    return {
      banMa:[],           //斑马线的数组
      // canBiaoZhu:false,  //是否可以进行标注
      pointImg: '',
      //require("@/assets/images/传感器2.png"),
      pointColor:'red',   //点的颜色
      pointSize:40,       //点的大小
    }
  },
  methods: {
    //开始标注
    startBiaoZhu(){
      this.canBiaoZhu = true
    },
    //完成标注
    endBiaoZhu(){
      this.canBiaoZhu = false
    },
    changeimg1(){
      this.pointImg = require("@/assets/images/传感器2.png")
    },
    changeimg2(){
      this.pointImg = require("@/assets/images/传感器3.png")
    },
    changeimg3(){
      this.pointImg = require("@/assets/images/传感器4.png")
    },
    //画点
    createMarker(x, y) {
      var div = document.createElement('div')
      div.className = 'marker'
      div.id = 'marker'+this.banMa.length
      y = y + document.getElementById('myBiaoZhu').offsetTop - this.pointSize/2
      x = x + document.getElementById('myBiaoZhu').offsetLeft - this.pointSize/2
      div.style.width = this.pointSize + 'px'
      div.style.height = this.pointSize + 'px'
      // div.style.backgroundColor = this.pointColor
      div.style.background = "url(" + this.pointImg + ") no-repeat";
      div.style.position = "absolute";
      div.style.left = x + 'px'
      div.style.top = y + 'px'
      div.oncontextmenu=((e)=>{
        var id = e.target.id
        document.getElementById('myBiaoZhuDiv').removeChild(div)
        this.banMa = this.banMa.filter(item=>item.id!== id.slice(6,id.length))
        // this.banMa.push({ regionId: this.regionId });
        if(e && e.preventDefault) {
          //阻止默认浏览器动作(W3C)
          e.preventDefault()
        } else {
          //IE中阻止函数器默认动作的方式
          window.event.returnValue = false
        }
        return false
      })  //阻止冒泡行为和默认右键菜单事件，删除该点
      document.getElementById('myBiaoZhuDiv').appendChild(div)
    },
  },
  watch: {},
  computed: {},
  created () {

  },
  mounted () {
    document.getElementById('myBiaoZhu').oncontextmenu=((e)=>{
      if(e && e.preventDefault) {
        //阻止默认浏览器动作(W3C)
        e.preventDefault()
      } else {
        //IE中阻止函数器默认动作的方式
        window.event.returnValue = false
      }
      return false
    })      //阻止冒泡行为和默认右键菜单事件
    document.getElementById('myBiaoZhu').onmousedown=(e)=>{
      e = e || window.event
      if(e.button !== 2){       //判断是否右击
        if(this.canBiaoZhu){    //判断是否可以进行标注
          var x = e.offsetX || e.layerX
          var y = e.offsetY || e.layerY
          console.log(x,y)
          var myImg = document.querySelector("#myBiaoZhu")
          var currWidth = myImg.clientWidth
          var currHeight = myImg.clientHeight
          var ProportionWidthInImg = x/currWidth
          var ProportionHeightInImg = y/currHeight
          // console.log("图片比例高度："+ProportionHeightInImg)
          // console.log("图片比例宽度："+ProportionWidthInImg)
          this.banMa.push({
            id:this.banMa.length+1,
            x,
            y
          })
          this.createMarker(x,y)
        }
      }
    }
  },
  beforeDestroy () {

  },
  destroyed () {

  },
}
</script>

<style lang="less">
#myBiaoZhuDiv{
  position:relative;
  img{
    border:solid 1px #000;
    display:inline-block;
    margin:0px 0px;
    z-index: 1;
  }
  .marker{
    position:absolute;
    border-radius: 50%;
    z-index: 999;
  }
  .b1{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .pointImg{
    width: 1px;
    height: 1px;
  }
}
.bread {
  margin-top: 10px;
  margin-bottom: 15px;
}
</style>
