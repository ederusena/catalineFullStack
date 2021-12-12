<template>
  <div>
    <button @click="show = !show">Toggle</button>

    <!-- 
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="before Leave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false"
    -->

    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeIn
"
      leave-active-class="animate__animated animate__fadeOut
"
      @before-enter="beforeEnter"
      appear
    >
      <h1 v-if="show">Cataline</h1>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data() {
    return {
      show: false
    }
  },
  methods: {
    // --------
    // ENTERING
    // --------
    beforeEnter(el: HTMLElement) {
      console.log(el)
    },
    enter(el, done) {
      // ...
      done()
    },
    afterEnter(el) {
      // ...
    },
    enterCancelled(el) {
      // ...
    },

    // --------
    // LEAVING
    // --------
    beforeLeave(el) {
      // ...
    },
    leave(el, done) {
      // ...
      done()
    },
    afterLeave(el) {
      // ...
    },
    // disponível apenas com v-show
    leaveCancelled(el) {
      // ...
    }
  }
})
</script>
