<template>
    <div>
        <div class="content">
            <div class="listNode">
                <div class="nodeOlay"
                    draggable="true"
                    @dragstart="dragstartFn($event, item)"
                    v-for="(item, index) in nodeList" 
                    :key="index">
                    <img :src="`./static/image/${index+1}.png`" style="width:100%; height:100%">
                    <div>{{item.name}}</div>
                </div>      
            </div>
            <div class="listNodeEdit"
                @dragover="dragoverFn"
                @drop="dropFn"
                id="nodeEditId">
            </div>
        </div>
        <!-- <div class="opert">
            <el-button>返回</el-button>
            <el-button type="primary">保存</el-button>
        </div> -->
    </div>
</template>
<script>
import { jsPlumb } from 'jsplumb'
import jsPlumbJs from '@/assets/js/figureNodeList.js'

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
        for (let index = 0; index < 10; index++) {
            var num = index + 1
            this.nodeList.push({ name: '节点'+ num +'', id: num })
        }
    },
    methods: {
        dragstartFn(ev, item) {
            this.srcImg = ev.path[0].src || ""
            this.rowOnly = item 
        },
        dragoverFn(ev) {
            ev.preventDefault()
        },
        dropFn(ev) {
            let x = ev.layerX
            let y = ev.layerY
            let nodeId = "nodeId" + this.numId
            let domOperator = `<div
                                id=${nodeId}
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
                            <img src="${this.srcImg}"
                                style="width:100%; height:100%">
                            <div>${this.rowOnly['name']}</div>
                        </div> ` 
            $("#nodeEditId").append(domOperator)
            jsPlumbJs.jsPlumbFn(nodeId, jsPlumb, this)
        },
    },
}
</script>
<style scoped>
    .listNode{
        display: inline-block;
        height: 800px;
        background: #f0f0f0;
        width: 20%;
        position: absolute;
        left: 0;
    }
    .listNodeEdit{
        height: 800px;
        width: 62.5rem;
        border: gray 1px solid;
        display: inline-block;
        position: absolute;
        left: 20%;
    }
    .content{
        padding: 20px 0 10px 50px;
    }
    .opert {
        display: block;
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