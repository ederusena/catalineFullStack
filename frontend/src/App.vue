<template>
  <div>
    <a
      v-bind:href="product.url"
      v-bind:class="handleClass"
    >
      {{ product.name }}
    </a>

    <button v-on:click="!product.stock">Buy product</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      product: {
        name: 'Camisa',
        url: 'http://www.google.com',
        stock: true
      }
    }
  },
  computed: {
    handleClass(): string{
      return this.product.stock ? 'success' : 'danger'
    },
  }
})
</script>

<style>
.success {
  color: green;
}

.danger {
  color: red;
}
</style>