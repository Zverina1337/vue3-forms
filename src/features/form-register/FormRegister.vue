<template>
  <section>
    <form @submit.prevent="registerFormSubmit">
      <legend>Register Form</legend>
      <RegisterForm.BlockLogin
        v-model:phone.number="phone"
        v-model:email.trim="email"
        v-model:login.trim="login"
        :errors="registerFormErrors"
      />
      <RegisterForm.BlockAddress
        v-model:country.trim="country"
        v-model:city.trim="city"
        v-model:street.trim="street"
        v-model:home.number="home"
        :errors="registerFormErrors"
      />
      <RegisterForm.BlockFullname
        v-model:patronymic.trim="patronymic"
        v-model:surname.trim="surname"
        v-model:name.trim="name"
        :errors="registerFormErrors"
      />
      <RegisterForm.BlockExtra
        v-model:favourite-eat="favouriteEat"
        v-model:favourite-animal="favouriteAnimal"
        v-model:has-favourite-eat="hasFavouriteEat"
        v-model:has-favourite-animal="hasFavouriteAnimal"
        v-model:can-send-personal-info="canSendPersonalInfo"
        :errors="registerFormErrors"
      />
      <RegisterForm.BlockPasswords
        v-model:repeat-password.trim="repeatPassword"
        v-model:password.trim="password"
        :errors="registerFormErrors"
      />
      <button type="submit">Register</button>
    </form>
    <pre>
      {{ registerFormValues }}
    </pre>
  </section>
</template>

<script setup>
import * as RegisterForm from "@/features/form-register/ui/index.js";
import {
  login,
  email,
  phone,
  country,
  city,
  street,
  home,
  name,
  surname,
  patronymic,
  hasFavouriteAnimal,
  favouriteAnimal,
  hasFavouriteEat,
  favouriteEat,
  canSendPersonalInfo,
  password,
  repeatPassword,
  registerFormSubmit,
  registerFormValues,
  registerFormErrors
} from "@/features/form-register/model/";
</script>
