<template>
  <fieldset>
    <legend>Current Date</legend>
    <Form.BaseInput
      :model-value="currentDate"
      type="date"
      :error="errors['currentDate']"
      @update:model-value="handleUpdateCurrentDate"
    />
  </fieldset>
  <fieldset>
    <legend>Current Month</legend>
    <Form.BaseInput
      :model-value="currentMonth"
      type="month"
      :error="errors['currentMonth']"
      @update:model-value="handleUpdateCurrentMonth"
    />
  </fieldset>
  <fieldset>
    <legend>Current Week</legend>
    <Form.BaseInput
      :model-value="currentWeek"
      type="week"
      :error="errors['currentWeek']"
      @update:model-value="handleUpdateCurrentWeek"
    />
  </fieldset>
  <fieldset>
    <legend>Current Time</legend>
    <Form.BaseInput
      :model-value="currentWeek"
      type="time"
      :error="errors['currentTime']"
      @update:model-value="handleUpdateCurrentTime"
    />
  </fieldset>
</template>

<script setup>
import * as Form from "@/shared/form";

const emit = defineEmits([
  "update:currentDate",
  "update:currentMonth",
  "update:currentWeek",
  "update:currentTime",
])

defineProps({
  currentDate: {
    type: [Date, String],
    required: true
  },
  currentMonth: {
    type: [Date, String],
    required: true
  },
  currentWeek: {
    type: String,
    required: true
  },
  currentTime: {
    type: String,
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdateCurrentDate = (value) => emit("update:currentDate", value);
const handleUpdateCurrentMonth = (value) => emit("update:currentMonth", value);
const handleUpdateCurrentWeek = (value) => emit("update:currentWeek", value);
const handleUpdateCurrentTime = (value) => emit("update:currentTime", value);
</script>

<style lang="scss" scoped>

</style>