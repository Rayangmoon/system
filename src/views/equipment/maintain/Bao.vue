<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="设备名称">
                <el-input v-model="formInline.user" placeholder="输入设备名称"></el-input>
            </el-form-item>
            <el-form-item label="设备分类">
                <el-select v-model="formInline.region" placeholder="选择设备分类">
                <el-option label="传感器" value="sensor"></el-option>
                <el-option label="能源" value="energy"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询保养次数</el-button>
            </el-form-item>
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
            prop="equip_id"
            label="设备编号"
            width="120"
            >
            </el-table-column>

            <el-table-column
            prop="equip_type"
            label="设备分类">
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
            prop="wei"
            label="保养内容"
            >
            </el-table-column>
           
            <el-table-column
            prop="location"
            label="安装位置"
            >
            </el-table-column>

            <el-table-column
            prop="last_replace_date"
            label="保养日期"
            >
            </el-table-column>

            
            
        </el-table>
    </div>

</template>

<script>
export default {
    methods: {
        onSubmit() {
            console.log('submit!');
        },
    },
    data() {
    return {
        
        formInline: {
          user: '',
          region: ''
        },
        tableData: [
            {
                id:'1',
                equip_id:'15687686',
                equip_type:'传感器',
                name:'风管温度传感器',
                model:'H8040N0021',
                specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                location:'主楼1F空调机房',
                last_replace_date:'2021/7/17',
                wei:'栓帽维护'
            },
            {
                id:'2',
                equip_id:'15687686',
                equip_type:'传感器',
                name:'风管温度传感器',
                model:'H8040N0021',
                specification:'传感器元件NTC20K 防护等级IP54 温度范围-40~70℃',
                location:'主楼1F空调机房',
                last_replace_date:'2021/7/15',
                wei:'风管清洁'
            },
            
        ]
    }
    }
}
</script>
<style scoped>
    
</style>