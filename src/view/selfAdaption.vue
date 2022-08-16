<template>
  <div>
    <div 
      class="selfDom"
      :style="selfDomFn(v)"
      v-for="(i, v) in stedList" 
      :key="v">
      {{stedList[v].value}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stedList: [
        {value: 5},
        {value: 8},
        {value: 3},
        {value: 4},
        {value: 9},
        {value: 7},
      ] 
    }
  },
  methods: {
    selfDomFn(v) {
      let w = "width:48px; float: left;"
      let index = this.stedList.length - 1
      if (index !== v) {
        let s = Math.ceil(48/index)
        w = `width:calc(${Math.floor(98/index)}% - ${s}px); float: left;`
        // w = "width:calc(32% - 16px); float: left;"
      }
      return w
    }
  }
}
</script>
<style>
.selfDom {
  border: 1px greenyellow solid;
  height: 30px;
  
}
</style>