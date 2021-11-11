<template>
  <div>
    <h1 v-show="gender === 'Masculino'">Masculino</h1>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      gender: 'Masculino'
    }
  }
})
</script>