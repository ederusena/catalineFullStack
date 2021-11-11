<template>
  <h1>
    <h1>{{ count }}</h1>
    <button @click="count++">Incrementar</button>
  </h1>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  beforeCreate() {
    // Nao tem acesso ao DOM nem ao DATA
    console.log(`beforeCreate, Data:${this.count}, DOM: ${this.$el}`)
  },
  created() {
    // Nao tem acesso ao DOM e tem acesso ao DATA
    console.log(`created, Data:${this.count}, DOM: ${this.$el}`)
  },
  beforeMount() {
    // Nao tem acesso ao DOM e tem acesso ao Data
    console.log(`beforeMount, Data:${this.count}, DOM: ${this.$el}`)
  },
  mounted() {
    // Tem acesso ao DOM e tem acesso ao Data
    console.log(`mounted , Data:${this.count}, 
    DOM: ${this.$el}`)
  },
  beforeUpdate() {
    // Tem acesso ao DOM e tem acesso ao Data
    setTimeout(() => {
      console.log(`UAAAAAA`)
    }, 500)
    console.log(`beforeUpdate, Data:${this.count}, DOM: ${this.$el}`)
  },
  updated() {
    // Tem acesso ao DOM e tem acesso ao Data
    // this.$el.style.background = 'blue'

    if(this.count % 2 === 0) {
      this.$el.style.color = 'red'
    } else {
      this.$el.style.color = 'blue'
    }
    console.log(`updated, Data:${this.count}, DOM: ${this.$el}`)
  }
})
</script>