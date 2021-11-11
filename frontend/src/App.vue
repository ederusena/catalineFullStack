<template>
  <div>
    <p v-once>Estoque inicial: {{ stock }}</p>
    <p>Estoque atual: {{ stock }}</p>

    <button @click="stock++">Incrementar</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      stock: 1
    }
  },
})
</script>