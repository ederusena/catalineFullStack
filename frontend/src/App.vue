<template>
  <div>
    <h1>{{ name }} {{ lastname }}</h1>
    <h1>{{ fullname }}</h1>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      name: 'Eder',
      lastname: 'Garcia',
      todos: [],
    };
  },
  computed: {
    fullname(): string {
      return `${this.name} ${this.lastname}`;
    },
    todosCount(): number {
      return this.todos.length;
    },
  },
  // serve para retornar um dado com algum tipo de alteraçao ou manipulaçao alterada.
  // propriedade computada serve para retornar um valor de uma propriedade de um componente filho que é passado como um valor de um componente pai (App.vue) e é chamado de um "computed property" ou "computed getter" (https://vuejs.org/v2/guide/computed.html#Computed-Properties)
})
</script>