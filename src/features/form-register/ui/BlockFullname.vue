<template>
  <fieldset>
    <legend>FullName</legend>
    <base-input
      :model-value="name"
      label="Name"
      @update:model-value="handleUpdateName"
      :error="errors['fullName.name']"
    />
    <base-input
      :model-value="surname"
      label="Surname"
      @update:model-value="handleUpdateSurname"
      :error="errors['fullName.surname']"
    />
    <base-input
      :model-value="patronymic"
      label="Patronymic"
      @update:model-value="handleUpdatePatronymic"
      :error="errors['fullName.patronymic']"
    />
  </fieldset>
</template>

<script setup>
import {BaseInput} from "@/shared/form/index.js";

const emit = defineEmits(["update:name", "update:surname", "update:patronymic"])

defineProps({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  patronymic: {
    type: String,
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdateName = (value) => emit("update:name", value)
const handleUpdateSurname = (value) => emit("update:surname", value)
const handleUpdatePatronymic = (value) => emit("update:patronymic", value)
</script>

<style lang="scss" scoped>

</style>