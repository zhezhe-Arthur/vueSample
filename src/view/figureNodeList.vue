<template>
    <div>
        <!-- <div id="diagramContainer">
            <div id="item_left" class="item"></div>
            <div id="item_right" class="item" style="left:150px;"></div>
        </div> -->
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
import $ from 'jquery'
export default {
    props: {
        rowData: Object
    },
    data() {
        return {
            plumbIns: null,
            nodeId: 'nodeId',
            rowOnly: {},
            numId: 0,
            nodeList: []
        }
    },
    mounted() {
        this.dee()
        for (let index = 0; index < 12; index++) {
            var num = index + 1
            this.nodeList.push({ name: '节点'+ num +'', id: num })
        }
    },
    methods: {
        dee() {
            jsPlumb.ready(function () {
                jsPlumb.draggable('item_left')
                jsPlumb.draggable('item_right')
            })
        },
        dragstartFn(ev, item) {
            // this.dom = ev.currentTarget.cloneNode(true)   
            this.rowOnly = item 
        },
        dragoverFn(ev) {
            ev.preventDefault()
        },
        dropFn(ev) {
            let $that = this
            let x = ev.layerX
            let y = ev.layerY
            let nodeId = "nodeId" + this.numId
            let domOperator = `<div
                                id=${nodeId}'
                                draggable="false"
                                style='width: 40px;
                                position: absolute;
                                left: ${x}px;
                                top: ${y}px;
                                height: 40px;
                                border: solid .0125rem slategrey;
                                margin: 10px;
                                font-size: .00625rem;
                                cursor: pointer'>
                            <span>${this.rowOnly['name']}</span>
                        </div> ` 
            $("#nodeEditId").append(domOperator)
            jsPlumb.ready(function () {
                jsPlumb.draggable(nodeId)
            })
            this.numId++
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
    #diagramContainer {
      padding: 20px;
      width: 80%;
      height: 400px;
      border: 1px solid gray;
    }

    .item {
      position: absolute;
      height: 80px;
      width: 80px;
      border: 1px solid blue;
    }
</style>