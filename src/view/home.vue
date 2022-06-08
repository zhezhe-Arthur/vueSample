<template>
    <div>
        <router-link to='/figureNodeList'>节点图</router-link><br/>
        <div class="row"></div>
        <router-link to='/calculation'>计算器</router-link>
        <div style="margin-top: 20px">
            <button @click='urlParameterFn("status")'>url取参数</button>
        </div>   
    </div>
</template>
<script>
export default {
    methods:{
        urlParameterFn(name) {
            const urlReg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            let parameter = ""
            if (window.location.search) {
                parameter = window.location.search.substr(1).match(urlReg); 
            } else {
                parameter = window.location.hash.split("?")[1].match(urlReg)
            }
            if (parameter[2]) {
               console.log(unescape(parameter[2]));
               return unescape(parameter[2])
            }
        }
    }
    
}
</script>
<style lang="">
    
</style>
