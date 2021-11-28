<template>
    <div>
        <div v-if="!editStatus">
          <el-table
            :data="tableData"
            border
            width='500'
            style="width: 100%">
                <el-table-column
                    type="index"
                    width="50">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="180">
                        <template slot-scope="scope">
                            <el-button @click="editTaskFn(scope.row)" type="primary" size="small">编辑</el-button>
                        </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="节点图名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="type"
                     width="180"
                    label="属性">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="创建日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="修改日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="idTask"
                    label="编号">
                </el-table-column>
            </el-table>
        </div>
        <div v-if="editStatus">
            <figure-node-edit :rowData='rowDataList'></figure-node-edit>
        </div>
    </div>
</template>
<script>

import figureNodeEdit from '@/components/figureNodeEdit.vue'
export default { 
    components: {
        figureNodeEdit
    },
    data() {
        return {
            editStatus: false,
            rowDataList: {},
            tableData: [
                {
                    date: '2022-03-02',
                    name: '节点图1',
                    type: 'text',
                    idTask: 'ab19183rjh82889d'
                },
                {
                    date: '2017-11-09',
                    name: '节点图2',
                    type: 'text',
                    idTask: 'ab1sd4ddjh824rt9'
                },
                {
                    date: '2016-05-01',
                    name: '节点图3',
                    type: 'text',
                    idTask: 'ab1946gtjh82883f'
                },
                {
                    date: '2016-08-25',
                    name: '节点图4',
                    type: 'text',
                    idTask: '23ft18ddjh834666'
                }]
        }
    },
    mounted() {
       let plumbIns = jsPlumb.getInstance();
       console.log(plumbIns);
    },
    methods: {
        editTaskFn(row) {
            this.editStatus = !this.editStatus
            this.rowDataList = row
        }
    }
}
</script>