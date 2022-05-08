<template>
  <button :class="['button-styled', color]">
    <slot name="before" />
    {{ text }}
  </button>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    text: {
      type: [String, Number],
      required: true
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return ['success', 'danger', 'primary'].includes(value)
      }
    }
  }
}
</script>

<style scoped>
.button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
}

.success {
  background-color: green;
}

.danger {
  background-color: red;
}

.primary {
  background-color: #2d6cea;
}
</style>
