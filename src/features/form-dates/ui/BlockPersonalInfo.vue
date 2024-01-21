<template>
  <fieldset>
    <legend>Personal info</legend>
    <Form.BaseInput
      :model-value="birthday"
      label="Birthday"
      type="datetime-local"
      :error="errors['personalInfo.birthday']"
      @update:model-valu="handleUpdateBirthday"
    />
    <Form.BaseInput
      :model-value="age"
      label="Age"
      type="number"
      :error="errors['personalInfo.age']"
      @update:model-value="handleUpdateAge"
    />
  </fieldset>
</template>

<script setup>
import * as Form from "@/shared/form";

const emit = defineEmits(["update:birthday", "update:age",])
defineProps({
  birthday: {
    type: [Date, String, null],
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdateBirthday = (value) => emit("update:birthday", value);
const handleUpdateAge = (value) => emit("update:age", value);
</script>
