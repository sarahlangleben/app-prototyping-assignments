<template>
    {{ calculatorVal || 0 }}
    <b-button v-for="n in calculatorNum" :key="n" @click="action(n)">{{ n }}</b-button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            msg: String
        },
        data(){
            return{
                calculatorNum: ['C', 'x', '/', 7, 8, 9, 4, 5, 6, 1, 2, 3],
                calculatorVal: '',
            }
        },
        methods: {
            action(n){
                if(!isNaN(n) || n =='.'){
                    this.calculatorVal+= n;
                }
            }
        }
    }
</script>
