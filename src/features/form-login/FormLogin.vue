<template>
  <section>
    <form
      @submit.prevent="submit"
    >
      <legend>Login Form</legend>
      <fieldset>
        <legend>Login Info</legend>
        <base-input
          v-model="login"
          label="Login"
          :error="errors.login"
        />
        <base-input
          v-model="password"
          label="Password"
          type="password"
          :error="errors.password"
        />
      </fieldset>
      <button type="submit">Login</button>
    </form>
    <pre>
      {{ values }}
    </pre>
  </section>
</template>

<script setup>
import { BaseInput }  from "@/shared/form/index.js";
import { useForm } from "vee-validate";
import { object, string } from "yup";


const { handleSubmit, errors, defineField, values } = useForm({
  validationSchema: object({
    login: string().required("This field is required"),
    password: string().required("This field is required"),
  }),
  initialValues: {
    login: '',
    password: ''
  }
})

const [ login ] = defineField('login');
const [ password ] = defineField('password');

const submit = handleSubmit(values => {
  console.log(values);
})
</script>