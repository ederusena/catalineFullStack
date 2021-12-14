<template>
  <div class="main">
    <div class="container">
      <div class="item"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style>
.main {
  background: #3494e6;
  height: 100vh;
  overflow-y: hidden;
  font-family: sans-serif;
}

.container {
  display: grid;
  grid-template-columns: minmax(400px, 900px);
  grid-template-rows: minmax(400px, 900px);
  grid-auto-rows: minmax(400px, 900px);
  grid-auto-columns: minmax(400px, 900px);

  grid-gap: 1rem;
  padding: 1rem;
}

.item {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  border: 1px solid #000;
}
</style>
