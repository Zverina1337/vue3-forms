<template>
  <fieldset>
    <legend>Passwords</legend>
    <base-input
      :model-value="password"
      label="Password"
      type="password"
      @update:model-value="handleUpdatePassword"
      :error="errors['passwords.password']"
    />
    <base-input
      :model-value="repeatPassword"
      label="Repeat Password"
      type="password"
      @update:model-value="handleUpdateRepeatPassword"
      :error="errors['passwords.repeatPassword']"
    />
  </fieldset>
</template>

<script setup>
import { BaseInput } from "@/shared/form/index.js";

const emit = defineEmits(["update:password", "update:repeatPassword"])

defineProps({
  password: {
    type: String,
    required: true
  },
  repeatPassword: {
    type: String,
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdatePassword = (value) => emit("update:password", value)
const handleUpdateRepeatPassword = (value) => emit("update:repeatPassword", value)

</script>

<style lang="scss" scoped>

</style>