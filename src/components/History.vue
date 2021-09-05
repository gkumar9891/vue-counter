<template>
    <div class="history">
          <h3>History</h3>
          <div class="d-flex">
              <p v-for="(number, index) in history" :key="index" v-bind:class="activeIndexes(value).includes(index) && 'bold' "> {{ number }}</p>
          </div>

          <input type="number" placeholder="seach by integer" v-model="value">
     
        {{ activeIndexes(value) }}
        {{ }}


    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

   export default {
    data() {
        return {
            value: 0
        }
    },

    computed: {
        ...mapState(["history"]),
        ...mapGetters(['activeIndexes'])
    }, 
  }
</script>

<style>
   .d-flex {
       display: flex;
       max-width: 200px;
       margin: auto;
       flex-wrap: wrap;
   }

   .d-flex p {
       margin: 5px;
   }

   .bold {
       font-weight: 900;
   }
</style>