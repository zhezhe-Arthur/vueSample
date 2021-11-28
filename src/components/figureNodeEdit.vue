<template>
    <div>
        <div class="content">
            <el-row>
                <el-col :span="5">
                    <div class="listNode">
                        <div class="nodeOlay"
                            draggable="true"
                            @dragstart="dragstartFn($event, item)"
                            v-for="(item, index) in nodeList" 
                            :key="index">
                            <span>{{item.name}}</span>
                        </div>      
                    </div>
                </el-col>
                <el-col :span="18">
                    <div class="listNodeEdit"
                        @dragover="dragoverFn"
                        @drop="dropFn"
                        id="nodeEditId">
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-row>
            <el-col :span="24">
                <div>
                    <el-button>返回</el-button>
                    <el-button type="primary">保存</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { jsPlumb } from 'jsplumb'
export default {
    props: {
        rowData: Object
    },
    data() {
        return {
            plumbIns: null,
            nodeId: 'nodeId',
            rowOnly: {},
            nodeList: [
            ]
        }
    },
    mounted() {
        for (let index = 0; index < 12; index++) {
            var num = index + 1
            this.nodeList.push({ name: '节点'+ num +'', id: num })
        }
    },
    methods: {
        dragstartFn(ev, item) {
            this.dom = ev.currentTarget.cloneNode(true)   
            this.rowOnly = item 
        },
        dragoverFn(ev) {
            ev.preventDefault()
        },
        dropFn() {
            var node = document.getElementById('nodeEditId')
            var dom = `<div style='width: 40px;
                                    height: 40px;
                                    border: solid .0125rem slategrey;
                                    margin: 10px;
                                    font-size: .00625rem;
                                    display: inline-block;
                                    cursor: pointer;
                                    left: 10px;'
                            id=nodeId'`+ 1 +`'>
                            <span>`+ this.rowOnly.name +`</span>
                        </div> `           
            // node.innerHTML = dom
            node.appendChild(this.dom )
            var plumbIns = jsPlumb.getInstance();
            plumbIns.ready(function () {
                plumbIns.connect({
                    source: 'nodeId1',
                    target: 'nodeId',
                    anchor: ['Left', 'Right', 'Top', 'Bottom', [0.3, 0, 0, -1], [0.7, 0, 0, -1], [0.3, 1, 0, 1], [0.7, 1, 0, 1]],
                    connector: ['StateMachine'],
                    endpoint: 'Blank',
                    overlays: [ ['Arrow', { width: 8, length: 8, location: 1 }] ], // overlay
                    // 添加样式
                    paintStyle: { stroke: '#909399', strokeWidth: 2 }, // connector
                    // endpointStyle: { fill: '#909399', outlineStroke: '#606266', outlineWidth: 1 } // endpoint
                })
            })
        }
    },
}
</script>
<style scoped>
    .listNode{
        height: 800px;
        background: #f0f0f0;
    }
    .listNodeEdit{
        height: 800px;
        border: gray 1px solid;
    }
    .content{
        padding: 20px 0 10px 50px;
    }
    .nodeOlay{
        width: 40px;
        height: 40px;
        border: solid .0125rem slategrey;
        margin: 10px;
        font-size: .00625rem;
        display: inline-block;
        cursor: pointer;
        left: 10px;
    }
</style>