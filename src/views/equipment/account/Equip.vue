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
                <el-button type="success" icon="el-icon-plus" @click="dialogFormVisible = true">增加</el-button>
            </el-form-item>

            
        </el-form>

        <el-dialog title="新增设备" :visible.sync="dialogFormVisible">
                <el-form :model="deviceForm" :rules="deviceRules" label-width="100px" ref="deviceForm">
                    <el-form-item label="设备名称" :label-width="formLabelWidth" prop="device_name">
                        <el-input v-model="deviceForm.device_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="设备编号" :label-width="formLabelWidth" prop="device_id">
                        <el-input v-model="deviceForm.device_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="设备类型" :label-width="formLabelWidth" prop="type_id">
                        <el-select v-model="deviceForm.type_id" placeholder="请选择设备类型">
                            <el-option label="能源" value="1"></el-option>
                            <el-option label="传感器" value="2" :disabled="true"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="安装位置" :label-width="formLabelWidth" prop="address_id">
                        <el-select v-model="deviceForm.address_id" placeholder="请选择安装位置">
                            <el-option label="安全出口" value="1" :disabled="true"></el-option>
                            <el-option label="中央大厅" value="2"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="型号参数" :label-width="formLabelWidth">
                        <el-input type="textarea" v-model="deviceForm.param" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="生产商信息" :label-width="formLabelWidth">
                        <el-input v-model="deviceForm.manu_info" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="下次维保时间" :label-width="formLabelWidth" prop="next_maintain_time">
                        <el-date-picker
                            v-model="deviceForm.next_maintain_time"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd"
                            style="width: 100%;"
                            type="date"
                            placeholder="选择下次维保时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="到期时间" :label-width="formLabelWidth" prop="expired_time">
                        <el-date-picker
                            v-model="deviceForm.expired_time"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd"
                            style="width: 100%;"
                            type="date"
                            placeholder="选择到期时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="状态" :label-width="formLabelWidth">
                        <el-radio-group v-model="deviceForm.status">
                            <el-radio label="启动"></el-radio>
                            <el-radio label="闲置"></el-radio>
                            <el-radio label="故障"></el-radio>
                            <el-radio label="报废"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="投用日期" :label-width="formLabelWidth" prop="create_time">
                        <el-date-picker
                            v-model="deviceForm.create_time"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd"
                            style="width: 100%;"
                            type="date"
                            placeholder="选择投用日期">
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('deviceForm')">立即创建</el-button>
                        <el-button @click="resetForm('deviceForm')">重置</el-button>
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
            label="设备编号"
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
            label="设备分类">
                <template slot-scope="scope">
                    {{ handleDeviceType(scope.row.type_id) }}
                </template>
            </el-table-column>
            <!-- <el-table-column
            prop="property"
            label="固定资产编号"
            >
            </el-table-column> -->


            <el-table-column
            prop="device_name"
            label="设备名称"
            >
            </el-table-column>


            <el-table-column
            prop="param"
            label="型号参数"
            >
            </el-table-column>


            <!-- <el-table-column
            prop="specification"
            label="规格"
            width='220'
            >
            </el-table-column> -->


            <el-table-column
            prop="manu_info"
            label="制造商信息"
            >
            </el-table-column>


            <el-table-column
            prop="description"
            label="设备描述"
            >
            </el-table-column>
            <el-table-column
            prop="address_id"
            label="安装位置"
            >
                <template slot-scope="scope">
                    {{ handleAddress(scope.row.address_id) }}
                </template>
            </el-table-column>




            <el-table-column
            prop="status"
            label="状况"
            >
            </el-table-column>

            <el-table-column
            prop="next_maintain_time"
            label="预计更换日期"
            >
            </el-table-column>
            <el-table-column
            prop="expired_time"
            label="到期时间"
            >
            </el-table-column>
            <el-table-column
            prop="create_time"
            label="投用日期"
            >
            </el-table-column>

            <!-- <el-table-column
            prop="out_id"
            label="出厂编号"
            >
            </el-table-column>
            <el-table-column
            prop="service_life"
            label="预计使用年限"
            >
            </el-table-column>
            <el-table-column
            prop="year_of_use"
            label="投用日期(年)"
            >
            </el-table-column>
            <el-table-column
            prop="month_of_use"
            label="投用日期(月)"
            >
            </el-table-column>

            <el-table-column
            prop="remark"
            label="备注"
            >
            </el-table-column>
            <el-table-column
            prop="last_replace_date"
            label="最近更换日期"
            >
            </el-table-column>
            <el-table-column
            prop="expected_replace_year"
            label="预期更换日期(年)"
            >
            </el-table-column>
            <el-table-column
            prop="expected_replace_month"
            label="预期更换日期(月)"
            >
            </el-table-column>
            <el-table-column
            prop="replace_record"
            label="设备更换记录"
            > 
            </el-table-column>  -->
            <el-table-column
            fixed="right"
            label="操作"
            width="148">
                
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="info"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row, tableData)">删除</el-button>
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
    </div>

</template>

<script>
import api from '../../../api/api'
export default {
    mounted() {
        this.getDevice()
    },
    methods: {
        createData(){
            let device_name = this.deviceForm.device_name 
            let device_id = this.deviceForm.device_id 
            let type_id = this.deviceForm.type_id 
            let address_id = this.deviceForm.address_id 

            let param = this.deviceForm.param 
            let manu_info = this.deviceForm.manu_info 
            let next_maintain_time = this.deviceForm.next_maintain_time 
            let expired_time = this.deviceForm.expired_time 
            let status = this.deviceForm.status 
            let create_time = this.deviceForm.create_time 

            let formData=new FormData()
            formData.append("device_name",device_name)
            formData.append("device_id",device_id)
            formData.append("type_id",type_id)
            formData.append("address_id",address_id)
            formData.append("param",param)
            formData.append("manu_info",manu_info)
            formData.append("next_maintain_time",next_maintain_time)
            formData.append("expired_time",expired_time)
            formData.append("status",status)
            formData.append("create_time",create_time)

            return formData
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                if(this.tableData) this.tableData.push(this.deviceForm)
                else this.tableData = [this.deviceForm]
                
                api.equipmentApi.addDevice(this.deviceForm).then(res => {
                    console.log('post传输:',res)
                }).catch(
                    res => {
                        console.log('error msg :', res)
                    }
                )
                let formData = this.createData()
                console.log(formData)
                console.log(this.deviceForm)

                this.dialogFormVisible = false
                alert('新增设备成功');
            } else {
                console.log('error submit!!')
                return false
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        getDevice(){
            api.equipmentApi.getDevice(this.currentPage).then(res => {
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
        filterTag(value, row) {
            return row.type === value;
        },
        onSubmit() {
            console.log('submit!')
        },
        handleEdit(index, row) {
            console.log(index, row)
        },
        handleDelete(index, row, tableData) {
            tableData.splice(index , 1)
            console.log(row.device_id)
            let device_id = row.device_id
            // let th = {
            //     params:{
            //        'device_id':row.device_id
            //     }
            // }
            api.equipmentApi.delDevice(device_id).then(res => {
                console.log('删除成功',res)
            }).catch(
                res => {
                console.log('error',res)
                }
            )

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
        handleAddress(addressId){
            if(addressId == 1) return '安全出口'
            else if(addressId == 2) return '中央大厅'
        },
    },
    data() {
        return {
            currentPage: 1,
            totalPage:1,
            dialogFormVisible: false,
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
                create_time:''
            },
            deviceRules:{
                device_name: [
                    { required: true, message: '请输入设备名称', trigger: 'blur' },
                    { min: 0, max: 15, message: '长度不超过15个字符', trigger: 'blur' }
                ],
                device_id: [
                    { required: true, message: '请输入设备编号', trigger: 'blur' },
                ],
                type_id: [
                    { required: true, message: '请选择设备类型', trigger: 'change' },
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
            formLabelWidth: '120px',
            formInline: {
            user: '',
            region: ''
            },
            tableData: []
        }
    },
}
</script>
<style scoped>
    
</style>