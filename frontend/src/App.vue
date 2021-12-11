<template>
  <div>
    <ButtonStyled text="Facebook">
      <template v-slot:before>
        <i class="fab fa-facebook-f"></i>
      </template>

      <template v-slot:after>
        <i class="fab fa-facebook"></i>
      </template>
    </ButtonStyled>

    <ButtonStyled text="Facebook" color="success">
      <template v-slot:after>
        <i class="fab fa-facebook-f"></i>
      </template>
    </ButtonStyled>

    <ButtonStyled text="Botão" @passarinho="action($event)"> </ButtonStyled>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from './components/ButtonStyled.vue'

export default defineComponent({
  methods: {
    action(eventData: string) {
      alert(eventData)
    }
  },
  components: {
    ButtonStyled
  }
})
</script>
