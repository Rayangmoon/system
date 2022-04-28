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
            console.log('submit!');
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row, tableData) {
            tableData.splice(index , 1)
            console.log(row.device_id)
            let th = {
                params:{
                   'device_id':row.device_id
                }
            }
            api.equipmentApi.delDevice(th).then(res => {
                console.log('删除成功',res)
            }).catch(
                res => {
                console.log('error',res)
                }
            )

        },
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val}`);
            this.getDevice()
        }
    },
    data() {
    return {
        currentPage: 1,
        totalPage:1,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
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