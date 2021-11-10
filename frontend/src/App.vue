<template>
  <div>
    <p v-for="todo in doneTodos" :key="todo.text">
      {{ todo.text }}
    </p>
    <button @click="checkAllTodos">Finalizar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Todo {
  text: string
  done: boolean
}

export default defineComponent({
  data() {
    return {
      todos: [] as Todo[]
    }
  },
  computed: {
    doneTodos(): Todo[] {
      return this.todos.filter((todo) => todo.done)
    }
  },
  watch: {
    todos(newValue: Todo[]) {
      const isFinished = newValue.every((todo) => todo.done)

      if (isFinished){
        alert('Todos os todos foram finalizados!');
      }
  },
  created() {
    this.todos = [
      { text: 'Estudar Typescript', done: true },
      { text: 'Lavar os pratos', done: false },
      { text: 'Aprender Nuxt.js', done: true }
    ],
  },
  methods: {
    checkAllTodos() {
      this.todos = this.todos.map(({ text }) => {
        return { text, done: true }
      })
    },
  },
})
</script>
