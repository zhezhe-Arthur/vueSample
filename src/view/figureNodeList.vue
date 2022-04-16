<template>
    <div>
        {{'jsplumb'}}
    </div>
</template>
<script>
import { jsPlumb } from 'jsplumb'
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.logDataFn() 
    },
    methods: {
        logDataFn() {
            console.log(jsPlumb);
        }
    }
}
</script>