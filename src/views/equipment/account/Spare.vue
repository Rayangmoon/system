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
        </el-form>

        <el-dialog title="新增备件" :visible.sync="dialogFormVisible">
                <el-form :model="deviceForm" :rules="deviceRules" label-width="100px" ref="deviceForm">
                    <el-form-item label="备件名称" :label-width="formLabelWidth" prop="device_name">
                        <el-input v-model="deviceForm.device_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="备件编号" :label-width="formLabelWidth" prop="device_id">
                        <el-input v-model="deviceForm.device_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="备件类型" :label-width="formLabelWidth" prop="type_id">
                        <el-select v-model="deviceForm.type_id" placeholder="请选择设备类型">
                            <el-option label="能源" value="1"></el-option>
                            <el-option label="传感器" value="2" :disabled="true"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="型号参数" :label-width="formLabelWidth">
                        <el-input type="textarea" v-model="deviceForm.param" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="生产商信息" :label-width="formLabelWidth">
                        <el-input v-model="deviceForm.manu_info" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="数量" :label-width="formLabelWidth" prop="rest_num">
                        <el-input type="rest_num" v-model.number="deviceForm.rest_num" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitSpare('deviceForm')">创建备件</el-button>
                        <el-button @click="resetSpare('deviceForm')">重置</el-button>
                    </el-form-item>
                </el-form>
        </el-dialog>

        <el-table
            ref="filterTable"
            :data="tableData"
            style="width: 100%"
            max-height='500px'
            >
            <el-table-column
            prop="id"
            label="序号"
            width="50">
            </el-table-column>

            <el-table-column
            prop="device_id"
            label="备件编号"
            width="120"
            >
            </el-table-column>

            <el-table-column
            prop="type_id"
            label="分类号"
            width="40"
            >
            </el-table-column>

            <el-table-column
            prop="equip_type"
            label="备件分类">
                <template slot-scope="scope">
                    {{ handleDeviceType(scope.row.type_id) }}
                </template>
            </el-table-column>

            <el-table-column
            prop="device_name"
            label="备件名称"
            >
            </el-table-column>

            <el-table-column
            prop="param"
            label="型号参数"
            >
            </el-table-column>

            <el-table-column
            prop="manu_info"
            label="制造商信息"
            >
            </el-table-column>

            <el-table-column
            prop="rest_num"
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
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="prev, pager, next, jumper"
            :total="totalPage">
        </el-pagination>
        <el-dialog
            title="备件入库"
            :visible.sync="InDialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item
                        label="新增入库件"
                        prop="rest_num"
                        :rules="[
                        { required: true, message: '件数不能为空'},
                        { type: 'number', message: '件数必须为数字值'}
                        ]"
                    >
                        <el-input type="rest_num" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="InDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCount(numberValidateForm.age , numberValidateForm.index)">新 增</el-button>
            </span>
        </el-dialog>

        <el-dialog title="出库编辑" :visible.sync="outDialogVisible">
            <el-form :model="deviceAddForm" :rules="deviceAddRules" ref="deviceAddForm">
                <el-form-item label="设备名称" :label-width="formLabelWidth" prop="device_name">
                <el-input v-model="deviceAddForm.device_name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="设备编号" :label-width="formLabelWidth" prop="device_id">
                    <el-input v-model="deviceAddForm.device_id" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="安装区域" :label-width="formLabelWidth" prop="address_id">
                <el-select v-model="deviceAddForm.address_id" placeholder="请选择安装区域">
                    <el-option label="安全出口" value="1" :disabled="true"></el-option>
                    <el-option label="中央大厅" value="2"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="下次维保时间" :label-width="formLabelWidth" prop="next_maintain_time">
                    <el-date-picker
                        v-model="deviceAddForm.next_maintain_time"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        style="width: 100%;"
                        type="date"
                        placeholder="选择下次维保时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="到期时间" :label-width="formLabelWidth" prop="expired_time">
                    <el-date-picker
                        v-model="deviceAddForm.expired_time"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        style="width: 100%;"
                        type="date"
                        placeholder="选择到期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="状态" :label-width="formLabelWidth">
                    <el-radio-group v-model="deviceAddForm.status">
                        <el-radio label="启动"></el-radio>
                        <el-radio label="闲置"></el-radio>
                        <el-radio label="故障"></el-radio>
                        <el-radio label="报废"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="投用日期" :label-width="formLabelWidth" prop="create_time">
                    <el-date-picker
                        v-model="deviceAddForm.create_time"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        style="width: 100%;"
                        type="date"
                        placeholder="选择投用日期">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="设备类型" :label-width="formLabelWidth" prop="type_id" >
                    <el-select v-model="deviceAddForm.type_id" placeholder="请选择设备类型" disabled>
                        <el-option label="能源" value="1"></el-option>
                        <el-option label="传感器" value="2" :disabled="true"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="型号参数" :label-width="formLabelWidth" >
                    <el-input type="textarea" v-model="deviceAddForm.param" autocomplete="off" disabled></el-input>
                </el-form-item>
                <el-form-item label="生产商信息" :label-width="formLabelWidth" >
                    <el-input v-model="deviceAddForm.manu_info" autocomplete="off" disabled></el-input>
                </el-form-item>   


            </el-form>
            <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="submitOut('deviceAddForm')">创建出库设备</el-button>
                    <el-button @click="resetOut('deviceAddForm')">重置</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
import api from '../../../api/api'
import XLSX from 'xlsx'
export default {
    mounted() {
        this.getStore()
    },
    methods: {
        getStore(){
            api.storeApi.getStore(this.currentPage).then(res => {
                // if(res.code == "200"){
                console.log(res)
                console.log('看一下这的测试数据',res.data.data)
                this.totalPage = res.data.data.total_page
                this.tableData = res.data.data.result
                
            }).catch(
                res => {
                console.log('error',res)
                }
            )
        },
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
        submitSpare(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    api.storeApi.addStore(this.deviceForm).then(res => {
                        console.log('post传输备件信息:',res)
                    }).catch(
                        res => {
                            console.log('error msg :', res)
                        }
                    )
                    console.log(this.deviceAddForm)

                    this.dialogFormVisible = false
                    alert('新增备件成功');
                } else {
                    console.log('error submit!!')
                    return false
                }
            });
        },
        resetSpare(formName) {
            this.$refs[formName].resetFields();
        },
        submitOut(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // if(this.tableData) this.tableData.push(this.deviceForm)
                    // else this.tableData = [this.deviceForm]
                    
                    api.equipmentApi.addDevice(this.deviceAddForm).then(res => {
                        console.log('post出库设备信息:',res)
                    }).catch(
                        res => {
                            console.log('error msg :', res)
                        }
                    )
                    // let formData = this.createData()
                    // console.log(formData)
                    console.log(this.deviceAddForm)

                    this.outDialogVisible = false
                    alert('出库设备成功');
                } else {
                    console.log('error submit!!')
                    return false
                }
            });
        },
        resetOut(formName) {
            this.$refs[formName].resetFields();
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
            this.deviceAddForm.device_name = row.device_name
            this.deviceAddForm.type_id = row.type_id
            this.deviceAddForm.param = row.param
            this.deviceAddForm.manu_info = row.manu_info
            console.log(row);
            
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
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val}`)
            this.getDevice()
        },

        handleDeviceType(typeId){
            if(typeId == 1) return '能源'
            else if(typeId == 2) return '传感器'
        },
    },
    data() {
        return {
            currentPage: 1,
            totalPage:1,
            dialogFormVisible: false,

            fileList: [],
            InDialogVisible:false,
            outDialogVisible:false,

            numberValidateForm: {
                age: '',
                index:''
            },
            deviceForm: {
                device_name: '',
                device_id: '',
                type_id: '',
                address_id: '',
                param: '',
                manu_info: '',
                next_maintain_time: '',
                expired_time:'',
                status:'',
                create_time:'',
                rest_num:''
            },
            deviceAddForm:{
                device_name: '',
                device_id: '',
                type_id: '',
                address_id: '',
                param: '',
                manu_info: '',
                next_maintain_time: '',
                expired_time:'',
                status:'',
                create_time:'',
            },
            deviceRules:{
                device_name: [
                    { required: true, message: '请输入备件名称', trigger: 'blur' },
                    { min: 0, max: 15, message: '长度不超过15个字符', trigger: 'blur' }
                ],
                device_id: [
                    { required: true, message: '请输入备件编号', trigger: 'blur' },
                ],
                type_id: [
                    { required: true, message: '请选择备件类型', trigger: 'change' },
                ],
                rest_num: [
                    { required: true, message: '件数不能为空'},
                    { type: 'number', message: '件数必须为数字值'}
                ]
            },
            deviceAddRules:{
                device_name: [
                    { required: true, message: '请输入设备名称', trigger: 'blur' },
                    { min: 0, max: 15, message: '长度不超过15个字符', trigger: 'blur' }
                ],
                device_id: [
                    { required: true, message: '请输入设备编号', trigger: 'blur' },
                ],
                address_id: [
                    { required: true, message: '请选择设备安装位置', trigger: 'change' },
                ],
                next_maintain_time: [
                    { required: true , message: '请选择下次维保时间', trigger: 'change'}
                ],
                expired_time: [
                    { required: true , message: '请选择到期时间', trigger: 'change'}
                ],
                create_time: [
                    { required: true , message: '请选择投用日期', trigger: 'change'}
                ],
            },
            formLabelWidth: '100px',
            formInline: {
            user: '',
            region: ''
            },
            tableData: [
            ]
        }
    }
}
</script>
<style scoped>

</style>
