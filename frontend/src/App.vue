<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count++">Incrementar</button>
    <button @click="DestroyComponent">Destroy</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  methods: {
    DestroyComponent() {
      this.$.appContext.app.unmount(this.$el)
    }
  }
})
</script>