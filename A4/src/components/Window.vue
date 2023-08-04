<template>
    {{ calculatorValue || 0 }}
</template>

<script>
    export default {
        name: 'Window',
        props: {
            msg: String
        },
        data(){
            return{
                calculatorValue: '',
            }
        }
    }
</script>
