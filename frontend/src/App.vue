<template>
  <div>
    <button @click="filterAZ">Filtro A-Z</button>
    <button @click="filterZA">Filtro Z-A</button>
    <transition-group
      name="fade"
      enter-active-class="animate__animated animate__fadeIn
"
      leave-active-class="animate__animated animate__fadeOut
"
      @before-enter="beforeEnter"
      appear
      mode="out-in"
    >
      <li v-for="user in users" :key="user">
        {{ user }}
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data() {
    return {
      users: ['Yung', 'João', 'Maria', 'Pedro', 'Joana']
    }
  },

  methods: {
    beforeEnter(el: HTMLElement) {
      console.log(el)
    },
    filterAZ() {
      this.users = this.users.sort()
    },
    filterZA() {
      this.users = this.users.sort().reverse()
    }
  }
})
</script>

<style scoped>
.v-move {
  transition: transform 0.5s;
}
</style>
