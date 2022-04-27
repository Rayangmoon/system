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
            :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
            style="width: 100%"
            max-height='500px'
            >
            <el-table-column 
                label="序号" 
                width="50px" 
                align="center">
                    <template slot-scope="scope">
                    {{ scope.$index + (currentPage - 1) * pageSize + 1 }}
                    </template>
            </el-table-column>
            <el-table-column
            prop="equip_id"
            label="设备编号"
            width="120"
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
            prop="description"
            label="设备描述"
            >
            </el-table-column>
            <el-table-column
            prop="location"
            label="安装位置"
            >
            </el-table-column>
            <el-table-column
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
            prop="status"
            label="状况"
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
            </el-table-column>
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
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[4, 6, 8, 10]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
        </el-pagination>
    </div>

</template>

<script>
export default {
    methods: {
        filterTag(value, row) {
            return row.type === value;
        },
        onSubmit() {
            console.log('submit!');
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
            this.pageSize = val
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val}`);
        }
    },
    data() {
    return {
        currentPage: 1,
        pageSize:10,
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
            {
                equip_id:'15687686',
                type:'BA',
                equip_type:'传感器',
                property:'无',
                name:'风管温度传感器',
                model:'H8040N0021',
                specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                production:'霍尼韦尔',
                description:'AHU-1-1回风温度',
                location:'主楼1F空调机房',
                out_id:'2021.7.1',
                service_life:'10',
                year_of_use:'2021',
                month_of_use:'7',
                status:'在用',
                remark:'',
                last_replace_date:'2021/7/17',
                expected_replace_year:'2031',
                expected_replace_month:'7',
                replace_record:'2019/7/13'
            },
            {
                equip_id:'15687686',
                type:'BA',
                equip_type:'传感器',
                property:'无',
                name:'风管温度传感器',
                model:'H8040N0021',
                specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                production:'霍尼韦尔',
                description:'AHU-1-1回风温度',
                location:'主楼1F空调机房',
                out_id:'2021.7.1',
                service_life:'10',
                year_of_use:'2021',
                month_of_use:'7',
                status:'在用',
                remark:'',
                last_replace_date:'2021/7/17',
                expected_replace_year:'2031',
                expected_replace_month:'7',
                replace_record:'2019/7/13'
            },
            {
                equip_id:'15687686',
                type:'BA',
                equip_type:'传感器',
                property:'无',
                name:'风管温度传感器',
                model:'H8040N0021',
                specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                production:'霍尼韦尔',
                description:'AHU-1-1回风温度',
                location:'主楼1F空调机房',
                out_id:'2021.7.1',
                service_life:'10',
                year_of_use:'2021',
                month_of_use:'7',
                status:'在用',
                remark:'',
                last_replace_date:'2021/7/17',
                expected_replace_year:'2031',
                expected_replace_month:'7',
                replace_record:'2019/7/13'
            },
            {
                equip_id:'15687686',
                type:'BA',
                equip_type:'传感器',
                property:'无',
                name:'风管温度传感器',
                model:'H8040N0021',
                specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                production:'霍尼韦尔',
                description:'AHU-1-1回风温度',
                location:'主楼1F空调机房',
                out_id:'2021.7.1',
                service_life:'10',
                year_of_use:'2021',
                month_of_use:'7',
                status:'在用',
                remark:'',
                last_replace_date:'2021/7/17',
                expected_replace_year:'2031',
                expected_replace_month:'7',
                replace_record:'2019/7/13'
            },
            {
                equip_id:'15687686',
                type:'BA',
                equip_type:'传感器',
                property:'无',
                name:'风管温度传感器',
                model:'H8040N0021',
                specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                production:'霍尼韦尔',
                description:'AHU-1-1回风温度',
                location:'主楼1F空调机房',
                out_id:'2021.7.1',
                service_life:'10',
                year_of_use:'2021',
                month_of_use:'7',
                status:'在用',
                remark:'',
                last_replace_date:'2021/7/17',
                expected_replace_year:'2031',
                expected_replace_month:'7',
                replace_record:'2019/7/13'
            },
            {
                equip_id:'15687686',
                type:'BA',
                equip_type:'传感器',
                property:'无',
                name:'风管温度传感器',
                model:'H8040N0021',
                specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                production:'霍尼韦尔',
                description:'AHU-1-1回风温度',
                location:'主楼1F空调机房',
                out_id:'2021.7.1',
                service_life:'10',
                year_of_use:'2021',
                month_of_use:'7',
                status:'在用',
                remark:'',
                last_replace_date:'2021/7/17',
                expected_replace_year:'2031',
                expected_replace_month:'7',
                replace_record:'2019/7/13'
            },
            {
                equip_id:'15687686',
                type:'BA',
                equip_type:'传感器',
                property:'无',
                name:'风管温度传感器',
                model:'H8040N0021',
                specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                production:'霍尼韦尔',
                description:'AHU-1-1回风温度',
                location:'主楼1F空调机房',
                out_id:'2021.7.1',
                service_life:'10',
                year_of_use:'2021',
                month_of_use:'7',
                status:'在用',
                remark:'',
                last_replace_date:'2021/7/17',
                expected_replace_year:'2031',
                expected_replace_month:'7',
                replace_record:'2019/7/13'
            },
            {
                equip_id:'15687686',
                type:'BA',
                equip_type:'传感器',
                property:'无',
                name:'风管温度传感器',
                model:'H8040N0021',
                specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                production:'霍尼韦尔',
                description:'AHU-1-1回风温度',
                location:'主楼1F空调机房',
                out_id:'2021.7.1',
                service_life:'10',
                year_of_use:'2021',
                month_of_use:'7',
                status:'在用',
                remark:'',
                last_replace_date:'2021/7/17',
                expected_replace_year:'2031',
                expected_replace_month:'7',
                replace_record:'2019/7/13'
            },
            
        ]
    }
    }
}
</script>
<style scoped>
    
</style>