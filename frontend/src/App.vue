<template>
  <div class="main">
    <div class="container">
      <div class="item">
        <h1>1</h1>
      </div>

      <div class="item">
        <h1>2</h1>
      </div>

      <div class="item">
        <h1>3</h1>
      </div>

      <div class="item">
        <h1>4</h1>
      </div>
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
  margin: 2rem;
  height: 500px;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 5px;

  /* grid */
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-gap: 1rem;

  /* alinhamento conteudo horizontal */
  justify-content: stretch;
  /* justify-content: start; */
  /* justify-content: end; */
  /* justify-content: space-around; */
  /* justify-content: space-between; */
  /* justify-content: space-evenly; */

  /* alinhamento conteudo vertical */
  align-content: stretch;
  /* align-content: stretch; */
  /* align-content: start; */
  /* align-content: end; */
  /* align-content: space-around; */
  /* align-content: space-between; */
  /* align-content: space-evenly; */

  /* alinhamento de itens na horizontal */
  justify-items: stretch;
  /* justify-items: start; */
  /* justify-items: end; */
  /* justify-items: stretch; */
  /* justify-items: baseline; */

  /* alinhamento de itens na vertical */
  align-items: stretch;
  /* align-items: start; */
  /* align-items: end; */
  /* align-items: stretch; */
  /* align-items: baseline; */
}

.item:nth-child(1) {
  /* alinhamento de itens na vertical */
  justify-self: center;
  /* justify-self: start; */
  /* justify-self: end; */
  /* justify-self: stretch; */
  /* justify-self: baseline; */
}

.item:nth-child(2) {
  /* alinhamento de itens na horizontal */
  align-self: center;
  /* align-self: start; */
  /* align-self: end; */
  /* align-self: stretch; */
  /* align-self: baseline; */
}
.item {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
}
</style>
