<template>
  <div class="myBiaoZhu" id="myBiaoZhuDiv">
    <el-button type="text" @click="startBiaoZhu" class="b1">开始标注传感器</el-button>
    <el-button type="text" @click="endBiaoZhu" class="b1">标注完成传感器</el-button>
    <el-button type="primary" plain @click="changeimg1" class="b1">电能传感器</el-button>
    <el-button type="success" plain @click="changeimg2" class="b1">温度传感器</el-button>
    <el-button type="info" plain @click="changeimg3" class="b1">客流量传感器</el-button>
    <img id="myBiaoZhu" src="@/assets/images/平面图1.png" alt="" style="height: 550px;width: 1200px;">
  </div>
</template>

<script>
export default {
  name: "test",
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
</style>
