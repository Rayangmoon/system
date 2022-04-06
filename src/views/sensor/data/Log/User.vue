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
    :filters="[{ text: '登录日志', value: '登录日志' }, { text: '用户变更', value: '用户变更' }]"
    :filter-method="filterTag"
    filter-placement="bottom-end"
    >
        <template slot-scope="scope">
            <el-tag
                :type="scope.row.type === '登录日志' ? 'primary' : 'success'"
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
                id:'8',
                content:'用户gf_duty登陆',
                address:'192.10.101.1',
                type:'登录日志',
                time:'2022-04-06 09:43:38',
            },
            {
                id:'7',
                content:'注册管理员qf_duty',
                address:'192.10.102.3',
                type:'用户变更',
                time:'2022-04-06 09:22:38',
            },
            {
                id:'6',
                content:'用户zq_duty登退',
                address:'192.10.102.4',
                type:'登录日志',
                time:'2022-04-05 23:10:38',
            },
            {
                id:'5',
                content:'用户zq_duty登录',
                address:'192.10.102.4',
                type:'登录日志',
                time:'2022-04-05 22:43:38',
            },
            {
                id:'4',
                content:'用户gf_duty变更信息',
                address:'192.10.101.1',
                type:'用户变更',
                time:'2022-04-05 21:43:38',
            },
            {
                id:'3',
                content:'用户gf_duty登退',
                address:'192.10.101.1',
                type:'登录日志',
                time:'2022-04-05 20:43:38',
            },
            {
                id:'2',
                content:'用户gf_duty登录',
                address:'192.10.101.1',
                type:'登录日志',
                time:'2022-04-05 19:43:38',
            }
        ]
    }
    }
}
</script>
<style scoped>
    
</style>