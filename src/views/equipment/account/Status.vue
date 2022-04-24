<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="id"
      label="设备编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="model"
      label="型号规格">
    </el-table-column>
    <el-table-column
      prop="status"
      label="运行状态">
    </el-table-column>
  </el-table>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table .danger-row {
    background: rgb(253, 235, 230);
  }

</style>

<script>
  export default {
    methods: {
      tableRowClassName({row}) {
        if (row.status == '报废') {
          return 'warning-row';
        } else if (row.status == '启动') {
          return 'success-row';
        } else if (row.status == '故障'){
          return 'danger-row'
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [
          {
            id:'15687686',
            name:'风管温度传感器',
            model:'H8040N0021',
            status:'启动',
          },
          {
            id:'25387686',
            name:'水管温度传感器',
            model:'H8040xxxxx',
            status:'报废',
          },
          {
            id:'15687687',
            name:'风管温度传感器',
            model:'H8040N0021',
            status:'闲置',
          },
          {
            id:'25387645',
            name:'水管温度传感器',
            model:'H8040xxxxx',
            status:'故障',
          },
          {
            id:'15687686',
            name:'风管温度传感器',
            model:'H8040N0021',
            status:'启动',
          },
          {
            id:'15687686',
            name:'风管温度传感器',
            model:'H8040N0021',
            status:'启动',
          },
        ]
      }
    }
  }
</script>