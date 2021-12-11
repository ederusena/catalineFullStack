<template>
  <div>
    <ul>
      <li @click="currentView = 'Home'">Home</li>
      <li @click="currentView = 'About'">Sobre</li>
      <li @click="currentView = 'Contact'">Contato</li>
    </ul>
    <component :is="currentView" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'

export default defineComponent({
  components: {
    Home,
    About,
    Contact
  },
  data() {
    return {
      currentView: 'Home'
    }
  }
})
</script>

<style scoped></style>
