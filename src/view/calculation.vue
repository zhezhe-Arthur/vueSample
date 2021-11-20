<template>
    <div>
        <el-table :data="tableData" border style="width: 100%" @cell-click="clickCell" >
            <el-table-column prop="name" label="物料名" width="120"></el-table-column>
            <el-table-column prop="city" label="市区" width="120"></el-table-column>
            <el-table-column prop="zip" label="数量" width="120" ></el-table-column>
        </el-table>
        <el-dialog :visible.sync="dialogVisible" width="75%">
            <calculator @closeDialog='closeDialog'></calculator>
        </el-dialog>
    </div>
</template>
<script>
import calculator from '../components/calculator.vue'
export default {
    components: {
        calculator
    },
    data() {
        return {
            dialogVisible: false,
            tableData: [
                {
                    id: '01',
                    name: '机床1',
                    city: '福田',
                    zip: null
                }, 
                {
                    id: '02',
                    name: '机床2',
                    city: '罗湖',
                    zip: null
                },
            ]
        }
    },
    methods: {
        clickCell(row, column) {
            this.beIdClick = row.id
            if (column.property === 'zip') {
                this.dialogVisible = true
            }
        },
        closeDialog (val) {
            if (val === '0') {
                this.dialogVisible = false
            } else {
                this.dialogVisible = false
                for (let i = 0; i < this.tableData.length; i++) {
                    if (this.tableData[i].id === this.beIdClick) {
                        this.tableData[i].zip = val
                    }
                }
            }
        },
    }
}
</script>