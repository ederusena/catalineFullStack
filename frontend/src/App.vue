<template>
  <div>
    <h1 v-highlight="'red'">Hello brows!</h1>
    <h1 v-highlight.background.shadow="'red'">Hello brows!</h1>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
})
</script>