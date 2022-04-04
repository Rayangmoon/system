<template>
  <div>
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>传感器模块</el-breadcrumb-item>
        <el-breadcrumb-item>数据管理</el-breadcrumb-item>
        <el-breadcrumb-item>日志阅读</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    name:'BreadCrumb',
}
</script>

<style>
.bread{
  margin-top: 10px;
}
</style>