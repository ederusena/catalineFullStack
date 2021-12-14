<template>
  <div class="main">
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
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
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: repeat(3, 100px);  */
  grid-auto-columns: 1fr;
  grid-auto-rows: 100px;
  grid-gap: 1rem;
}

.item {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  border: 1px solid #000;
}
</style>
