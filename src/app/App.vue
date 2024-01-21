<template>
  <section class="forms">
    <form-login class="forms__form"/>
    <form-register class="forms__form"/>
    <form-questions class="forms__form"/>
    <form-dates class="forms__form"/>
    <form-cloth class="forms__form"/>
  </section>
</template>

<script setup>
import FormLogin from "@/features/form-login/FormLogin.vue";
import FormRegister from "@/features/form-register/FormRegister.vue";
import FormQuestions from "@/features/form-questions/FormQuestions.vue";
import FormDates from "@/features/form-dates/FormDates.vue";
import FormCloth from "@/features/form-cloth/FormCloth.vue";
</script>

<style lang="scss" scoped>
.forms {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;

  &__form {
    padding: 0 10px;
  }
}
</style>
