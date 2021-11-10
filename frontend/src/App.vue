<template>
  <h1>{{ person.name }}</h1>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

interface Person {
  name: string;
  age: number;
}

export default defineComponent({
  data() {
    return {
      person: {
        name: '',
        age: 0,
      } as Person,
    };
  },
})
</script>