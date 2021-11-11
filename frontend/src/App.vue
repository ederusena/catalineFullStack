<template>
  <div>
    <a href="#interno" v-on:click.once.prevent="something"> Link Interno </a>
    <br />
    <input type="text" @keyup.enter="something" />
    <br />
    <input type="text" @keyup.k="something" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    something() {
      console.log('Clicked!')
    }
  }
})
</script>