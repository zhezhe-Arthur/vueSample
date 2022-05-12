const jsPlumbJs = {
    jsPlumbFn(nodeId, jsPlumb, $that) {
        jsPlumb.draggable(nodeId, { // 可拖动
            containment: 'nodeEditId' // 限制拖动范围
        })           
        $that.numId++ // 新增一个页面id
        jsPlumbJs.initNodeConfig(nodeId, jsPlumb, $that)
        
    },
    initNodeConfig (nodeId, jsPlumb, $that) { // 配置链接瞄点
        var config = {
            isSource: true,
            isTarget: true,
            connector: 'Straight',
            endpoint: 'Dot',
            overlays: [ ['Arrow', { width: 12, length: 12, location: 0.5 }] ],
            paintStyle: { stroke: 'lightblue', fill: 'lightblue', strokeWidth: 1 },
        }
        // 添加四个锚点
        jsPlumb.addEndpoint(nodeId, {
            anchor: ['Right'],
        }, config);
        jsPlumb.addEndpoint(nodeId, {
            anchor: ['Left'],
        }, config);
        jsPlumb.addEndpoint(nodeId, {
            anchor: ['Top'],
        }, config);
        jsPlumb.addEndpoint(nodeId, {
            anchor: ['BottomCenter'],
        }, config);
    }
}
export default jsPlumbJs