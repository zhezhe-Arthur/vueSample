<template>
    <div>
        {{Jsplumb}}
    </div>
</template>
<script>
import {jsPlumb} from 'jsplumb'
export default { 
    data() {
        return {
            Jsplumb: 'Jsplumb'
        }
    },
    mounted() {
       let plumbIns = jsPlumb.getInstance();
       console.log(plumbIns);
    },
}
</script>