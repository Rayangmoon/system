<template>
  <div>
    <el-breadcrumb class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>能源管理</el-breadcrumb-item>
      <el-breadcrumb-item>传感器编辑</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">
      <div class="drag-box">
<!--        <div class="drag-box-item">-->
<!--          <div class="item-title">todo</div>-->
          <draggable v-model="todo" @remove="removeHandle" :options="dragOptions">
<!--            <transition-group tag="div" id="todo" class="item-ul">-->
<!--              <div v-for="item in todo" class="drag-list" :key="item.id">-->
<!--                {{item.content}}-->
<!--              </div>-->
              <div class="img" :style ="note"></div>
<!--            </transition-group>-->
          </draggable>
<!--        </div>-->
<!--        <div class="drag-box-item">-->
<!--          <div class="item-title">doing</div>-->
<!--          <draggable v-model="doing" @remove="removeHandle" :options="dragOptions">-->
<!--            <transition-group tag="div" id="doing" class="item-ul">-->
<!--              <div v-for="item in doing" class="drag-list" :key="item.id">-->
<!--                {{item.content}}-->
<!--              </div>-->
<!--            </transition-group>-->
<!--          </draggable>-->
<!--        </div>-->
        <div class="drag-box-item">
          <div class="item-title">传感器控件</div>
          <draggable v-model="device" @remove="removeHandle" :options="dragOptions">
            <transition-group tag="div" id="device" class="item-ul">
              <div v-for="item in device" class="drag-list" :key="item.id">
                <i class="el-icon-location"></i>
                {{item.content}}
              </div>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: "editmain",
data() {
  return {
    dragOptions:{
      animation: 120,
      scroll: true,
      group: 'sortlist',
      ghostClass: 'ghost-style'
    },
    note: {
      backgroundImage: "url(" + require("@/assets/images/平面图1.png") + ") ",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    todo: [
      {
        id: 1,
        content: '开发图表组件'
      },
      {
        id: 2,
        content: '开发拖拽组件'
      },
      {
        id: 3,
        content: '开发权限测试组件'
      }
    ],
    doing: [
      {
        id: 1,
        content: '开发登录注册页面'
      },
      {
        id: 2,
        content: '开发头部组件'
      },
      {
        id: 3,
        content: '开发表格相关组件'
      },
      {
        id: 4,
        content: '开发表单相关组件'
      }
    ],
    device:[
      {
        id: 1,
        content: '传感器1'
      },
      {
        id: 2,
        content: '传感器2'
      },
      {
        id: 3,
        content: '传感器3'
      },
      {
        id: 4,
        content: '传感器4'
      },
      {
        id: 5,
        content: '传感器5'
      },
      {
        id: 6,
        content: '传感器6'
      },
    ]
  }
},
components:{
  draggable
},
methods: {
  removeHandle(event){
    console.log(event);
    this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
  }
}
}
</script>

<style scoped>
.drag-box{
  display: flex;
  user-select: none;
}
.drag-box-item {
  flex: 1;
  max-width: 150px;
  min-width: 150px;
  background-color: #eff1f5;
  margin-right: 16px;
  border-radius: 6px;
  border: 1px #e1e4e8 solid;
}
.item-title{
  padding: 8px 8px 8px 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #24292e;
  font-weight: 600;
}
.item-ul{
  padding: 0 8px 8px;
  height: 500px;
  overflow-y: scroll;
}
.item-ul::-webkit-scrollbar{
  width: 0;
}
.drag-list {
  border: 1px #e1e4e8 solid;
  padding: 10px;
  margin: 5px 0 10px;
  list-style: none;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  -webkit-transition: border .3s ease-in;
  transition: border .3s ease-in;
}
.drag-list:hover {
  border: 1px solid #20a0ff;
}
.drag-title {
  font-weight: 400;
  line-height: 25px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}
.ghost-style{
  display: block;
  color: transparent;
  border-style: dashed
}
.img{
  width: 1000px;
  height: 600px;
}
</style>
