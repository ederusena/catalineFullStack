<template>
  <div>
    <ButtonStyled text="Facebook" color="primary" :user="user">
      <template #before>
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
      </template>
    </ButtonStyled>

    <ButtonStyled text="Editar" color="success" />
    <ButtonStyled text="Listar" color="danger" />
  </div>
</template>

<script>

export default {
  name: 'IndexPage'
}
</script>
