<template>
  <div>
    <h1 class="static">
      Cataline
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: false,
    };
  },
})
</script>