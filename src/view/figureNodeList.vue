<template>
    <div>
        <div class="content">
            <div class="listNode">
                <div class="nodeOlay"
                    draggable="true"
                    @dragstart="dragstartFn($event, item)"
                    v-for="(item, index) in nodeList" 
                    :key="index">
                    <img :src="a1" style="width:100%; height:100%">
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
import $ from 'jquery'
import a1 from "@/assets/image/1.png"
import a2 from "@/assets/image/2.png"
import a3 from "@/assets/image/3.png"
export default {
    props: {
        rowData: Object
    },
    data() {
        return {
            a1: a1,
            a2: a2,
            a3: a3,
            plumbIns: null,
            nodeId: 'nodeId',
            rowOnly: {},
            numId: 0,
            nodeList: []
        }
    },
    mounted() {
        for (let index = 0; index < 3; index++) {
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
            this.jsPlumbFn(nodeId)
        },
        jsPlumbFn(nodeId) {
            jsPlumb.draggable(nodeId, {
                containment: 'nodeEditId'
            })           
            this.numId++
        }
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
        width: 70%;
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