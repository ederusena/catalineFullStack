<template>
  <div>
    <h1 v-if="gender === 'Masculino'">Masculino</h1>
    <h1 v-else-if="gender === 'Feminino'">Feminino</h1>
    <h1 v-else>Outros</h1>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      gender: 'Masculino'
    };
  },
})
</script>