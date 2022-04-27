<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="设备名称">
                <el-input v-model="formInline.user" placeholder="设备名称"></el-input>
            </el-form-item>
            <el-form-item label="设备分类">
                <el-select v-model="formInline.region" placeholder="设备分类">
                <el-option label="传感器" value="sensor"></el-option>
                <el-option label="能源" value="energy"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="success" icon="el-icon-plus" @click="dialogFormVisible = true">添加</el-button>
            </el-form-item>
            <el-form-item>
                <el-upload
                    ref="upload"
                    action="/"
                    :show-file-list="false"
                    :on-change="readExcel"
                    accept=".xls, .xlsx"
                    :auto-upload="false">
                    <el-button
                        slot="trigger"
                        icon="el-icon-upload"
                        size="small"
                        type="primary">
                        批量上传
                    </el-button>
                    <div slot="tip" class="el-upload__tip">只能上传xls/xlsx文件</div>
                </el-upload>
            </el-form-item>


            <el-dialog title="新增设备" :visible.sync="dialogFormVisible">

                <el-form :model="form">
                    <el-form-item label="设备名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="设备类型" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择设备类型">
                            <el-option label="传感器" value="sensor"></el-option>
                            <el-option label="能源" value="energy"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="分类" :label-width="formLabelWidth">
                        <el-input v-model="form.type" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="固定资产编号" :label-width="formLabelWidth">
                        <el-input v-model="form.property" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="型号" :label-width="formLabelWidth">
                        <el-input v-model="form.model" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="规格" :label-width="formLabelWidth">
                        <el-input v-model="form.specification" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="制造商" :label-width="formLabelWidth">
                        <el-input v-model="form.production" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="数量" :label-width="formLabelWidth">
                        <el-input v-model="form.count" autocomplete="off"></el-input>
                    </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </el-form>

        <el-table
            ref="filterTable"
            :data="tableData"
            style="width: 100%"
            max-height='500px'
            >
            <el-table-column
            prop="id"
            label="序号"
            width="40"
            fixed="left"
            >
            </el-table-column>

            <el-table-column
            prop="type"
            label="分类"
            width="40"
            >
            </el-table-column>
            <el-table-column
            prop="equip_type"
            label="设备分类">
            </el-table-column>
            <el-table-column
            prop="property"
            label="固定资产编号"
            >
            </el-table-column>
            <el-table-column
            prop="name"
            label="设备名称"
            >
            </el-table-column>
            <el-table-column
            prop="model"
            label="型号"
            >
            </el-table-column>
            <el-table-column
            prop="specification"
            label="规格"
            width='220'
            >
            </el-table-column>
            <el-table-column
            prop="production"
            label="制造商"
            >
            </el-table-column>

            <el-table-column
            prop="count"
            label="数量"
            >
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                    <el-button @click="handleIn(scope.$index, scope.row, tableData)" type="text" size="small">入库</el-button>
                    <el-button @click="handleOut(scope.$index, scope.row, tableData)" type="text" size="small">出库</el-button>
            </template>

            </el-table-column>

        </el-table>

        <el-dialog
            title="备件入库"
            :visible.sync="InDialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item
                        label="新增入库件"
                        prop="count"
                        :rules="[
                        { required: true, message: '件数不能为空'},
                        { type: 'number', message: '件数必须为数字值'}
                        ]"
                    >
                        <el-input type="count" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="InDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCount(numberValidateForm.age , numberValidateForm.index)">新 增</el-button>
            </span>
        </el-dialog>

        <el-dialog title="出库编辑" :visible.sync="outDialogVisible">
            <el-form :model="form">
                <el-form-item label="设备名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="安装区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择安装区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="outDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="outDialogVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>

// import * as XLSX from 'xlsx/xlsx.mjs'
export default {

    methods: {
        readExcel(file) {
            const types = file.name.split('.')[1]
            const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
            if (!fileType) {
                this.$message('格式错误！请重新选择')
                return
            }
            this.file2Xce(file).then(tabJson => {
                if (tabJson && tabJson.length > 0) {
                    this.xlsxJson = tabJson
                    console.log('数据:', this.xlsxJson)
                    // xlsxJson就是解析出来的json数据,数据格式如下
                    // [
                    //   {
                    //     sheetName: sheet1
                    //     sheet: sheetData
                    //   }
                    // ]
                }
            })
        },
        file2Xce(file) {
            return new Promise(function(resolve, reject) {
                const reader = new FileReader()
                reader.onload = function(e) {
                const data = e.target.result
                this.wb = XLSX.read(data, {
                    type: 'binary'
                })
                const result = []
                this.wb.SheetNames.forEach((sheetName) => {
                    result.push({
                    sheetName: sheetName,
                    sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
                    })
                })
                resolve(result)
                }
                reader.readAsBinaryString(file.raw)
                // reader.readAsBinaryString(file)     //使用原始input方法
            })
        },

        filterTag(value, row) {
            return row.type === value;
        },
        onSubmit() {
            console.log('submit!');
        },
        handleIn(index, row ,rows) {
            this.InDialogVisible = true
            this.numberValidateForm.index = index
            console.log(index, row , rows);
        },
        handleOut(index, row ,rows) {
            this.outDialogVisible = true
            console.log(index, row , rows);
        },
        addCount(add , index){
            this.InDialogVisible = false
            let count = Number(this.tableData[index].count)
            this.tableData[index].count = (count + add).toString()
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
    },
    data() {
        return {
            fileList: [],
            InDialogVisible:false,
            outDialogVisible:false,
            dialogFormVisible: false,
            numberValidateForm: {
            age: '',
            index:''
            },
            form: {
            name: '',
            region: '',
            type: '',
            property: '',
            model: '',
            specification: '',
            production: '',
            count: ''
            },
            formLabelWidth: '100px',
            formInline: {
            user: '',
            region: ''
            },
            tableData: [
                {
                    id:'1',
                    type:'BA',
                    equip_type:'传感器',
                    property:'无',
                    name:'风管温度传感器',
                    model:'H8040N0021',
                    specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                    production:'霍尼韦尔',
                    count:'3',
                },
            ]
        }
    }
}
</script>
<style scoped>

</style>
