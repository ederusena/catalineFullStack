<template>
  <h1>{{message}}</h1>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      message: 'Hello Vue!'
    };
  },
  beforeCreate() {
    // beforeCreate is called before the component is mounted.

    // nao tem acesso ao Data aqui porque nao foi montado ainda
    console.log('beforeCreate');
  },
  created() {
    // The component has been mounted.
     // tem acesso ao Data aqui porque foi montado
    console.log('created');
  },
})
</script>