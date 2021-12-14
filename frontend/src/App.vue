<template>
  <div class="main">
    <div class="container">
      <header class="header item">
        <h1>Cabeçalho</h1>
      </header>
      <main class="content item">
        <h1>Conteúdo</h1>
      </main>
      <footer class="footer item">
        <h1>Rodapé</h1>
      </footer>
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

.header {
  grid-area: header;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}

.container {
  margin: 2rem;
  display: grid;
  grid:
    'header' auto
    'content' 500px
    'footer' auto
    / 1fr;
  grid-gap: 1rem;
}

.item {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
}
</style>
