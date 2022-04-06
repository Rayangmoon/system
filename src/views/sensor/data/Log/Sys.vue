<template>
<el-table
    ref="filterTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column
    prop="id"
    label="序号"
    >
    </el-table-column>
    <el-table-column
    prop="content"
    label="日志内容"
    width="220">
    </el-table-column>
    <el-table-column
    prop="address"
    label="ip地址">
    </el-table-column>
    <el-table-column
    prop="type"
    label="日志类型"
    width="100"
    :filters="[{ text: '数据更新', value: '数据更新' }, { text: '连接异常', value: '连接异常' }]"
    :filter-method="filterTag"
    filter-placement="bottom-end"
    >
        <template slot-scope="scope">
            <el-tag
                :type="scope.row.type === '数据更新' ? 'primary' : 'success'"
                disable-transitions>{{scope.row.type}}
            </el-tag>
        </template>

    </el-table-column>
    <el-table-column
    prop="time"
    label="创建时间"
    width="180">
    </el-table-column>
</el-table>
</template>

<script>
export default {
    methods: {
        filterTag(value, row) {
            return row.type === value;
        },
    },
    data() {
    return {
        tableData: [
            {
                id:'256',
                content:'设备xxx传感器1上传数据成功',
                address:'10.10.10.2',
                type:'数据更新',
                time:'2022-04-05 23:43:38',
            },
            {
                id:'255',
                content:'设备x传感器23连接中断',
                address:'10.10.102.1',
                type:'连接异常',
                time:'2022-04-05 23:22:38',
            },
            {
                id:'254',
                content:'设备xx传感器04连接成功',
                address:'10.10.23.2',
                type:'数据更新',
                time:'2022-04-05 23:10:38',
            },
            {
                id:'253',
                content:'设备x传感器23连接中断',
                address:'10.10.10.2',
                type:'连接异常',
                time:'2022-04-05 22:43:38',
            },
            {
                id:'253',
                content:'设备xxx传感器1上传数据成功',
                address:'10.10.10.2',
                type:'数据更新',
                time:'2022-04-05 21:43:38',
            },
            {
                id:'252',
                content:'设备x传感器23连接中断',
                address:'10.10.10.2',
                type:'连接异常',
                time:'2022-04-05 20:43:38',
            },
            {
                id:'251',
                content:'设备xxx传感器1上传数据成功',
                address:'10.10.10.2',
                type:'数据更新',
                time:'2022-04-05 19:43:38',
            }
        ]
    }
    }
}
</script>
<style scoped>
    
</style>