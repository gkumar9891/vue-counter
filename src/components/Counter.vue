<template>
    <div class="counter-dash">
    <div class="value"><span>{{ counter }}</span></div>
    <form @submit.prevent >
        <button @click="subtractFromCounter(value)"> - </button>
        <input type="number" v-model="value">
        <button @click="addToCounter(value)"> + </button>
        <button class="random-trigger" @click="requestRandomNumber()">click to add any random number</button>
    </form>
    </div>
</template>

<script>

import {mapState, mapMutations, mapActions} from 'vuex';

export default {
    data() {
        return {
            value: 0
        }
    },

    computed: {
        ...mapState(['counter']),
    },

    methods: {
        ...mapMutations(['addToCounter', 'subtractFromCounter']),
        ...mapActions(['requestRandomNumber'])

    }
}
</script>

<style>
    .counter-dash .value{
        font-size: 4rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 2rem;
    }

    input {
        text-align: center;
        margin: 0 10px;
    }

    .random-trigger {
        display: block;
        max-width: 420px;
        color: #fff;
        background-color: rgb(2, 215, 223);
        margin: 20px auto;
        border: 0;
        font-size: 1.2rem;
        padding: 5px;
        }
</style>
