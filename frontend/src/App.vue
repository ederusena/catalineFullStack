<template>
  <h1 v-text="message"></h1>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
})
</script>