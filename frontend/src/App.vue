<template>
  <p>Acesse: <span v-html="link" /></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      link: '<a href="https://cataline.io">Cataline</a>'
    }
  }
})
</script>