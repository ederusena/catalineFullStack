<template>
  <h1>{{ message }}</h1>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  beforeCreate() {
    // Nao tem acesso ao DOM nem ao DATA
    console.log(`beforeCreate, Data:${this.message}, DOM: ${this.$el}`)
  },
  created() {
    // Nao tem acesso ao DOM e tem acesso ao DATA
    console.log(`created, Data:${this.message}, DOM: ${this.$el}`)
  },
  beforeMount() {
    // Nao tem acesso ao DOM e tem acesso ao Data
    console.log(`beforeMount, Data:${this.message}, DOM: ${this.$el}`)
  },
  mounted() {
    // Tem acesso ao DOM e tem acesso ao Data
    this.$el.style.color = 'red'
    console.log(`mounted , Data:${this.message}, 
    DOM: ${this.$el}`)
  }
})
</script>