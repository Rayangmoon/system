<template>
  <el-button type="success" icon="el-icon-upload" @click="exportEvent">导出</el-button>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  name: "DaoChu",
  data() {
    return {};
  },
  //需要的参数
  props: {
    id: {
      type: String,
      default: "Table",
    },
    name: {
      type: String,
      default: "Table",
    },
  },
  methods: {
    // 导出Excel表格事件
    exportEvent() {
      let gatherData = { raw: true };
      let grid = XLSX.utils.table_to_book(
          document.querySelector("#" + this.id),
          gatherData
      );
      let workbook = XLSX.write(grid, {
        bookType: "xlsx",
        bookSST: true,
        type: "array",
      });
      try {
        FileSaver.saveAs(
            new Blob([workbook], {
              type: "application/octet-stream",
            }),
            this.name + ".xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, workbook);
      }
      return workbook;
    },
  },
}
</script>

<style scoped>

</style>
