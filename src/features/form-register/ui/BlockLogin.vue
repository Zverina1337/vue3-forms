<template>
  <fieldset>
    <legend>Personal info</legend>
    <base-input
      :model-value="login"
      label="Login"
      @update:model-value="handleUpdateLogin"
      :error="errors.login"
    />
    <base-input
      :model-value="email"
      label="E-mail"
      type="email"
      @update:model-value="handleUpdateEmail"
      :error="errors.email"
    />
    <base-input
      :model-value="phone"
      label="Phone"
      type="tel"
      @update:model-value="handleUpdatePhone"
      :error="errors.phone"
    />
  </fieldset>
</template>

<script setup>
import { BaseInput } from "@/shared/form/index.js";

const emit = defineEmits(["update:login", "update:email", "update:phone"])

defineProps({
  login: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdateLogin = (value) => emit("update:login", value)
const handleUpdateEmail = (value) => emit("update:email", value)
const handleUpdatePhone = (value) => emit("update:phone", value)

</script>
