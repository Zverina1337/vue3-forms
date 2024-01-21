<template>
  <section>
    <form @submit.prevent="datesFormSubmit">
      <legend>Dates Form</legend>
      <FormDatesUi.BlockPersonalInfo
        v-model:age="age"
        v-model:birthday="birthday"
        :errors="datesFormErrors"
      />
      <FormDatesUi.BlockDates
        v-model:current-time="currentTime"
        v-model:current-week="currentWeek"
        v-model:current-month="currentMonth"
        v-model:current-date="currentDate"
        :errors="datesFormErrors"
      />
      <button type="submit">Submit</button>
    </form>
    <pre>
      {{ datesFormErrors }}
    </pre>
    <pre>
      {{ datesFormValues }}
    </pre>
  </section>
</template>

<script setup>
import * as FormDatesUi from "@/features/form-dates/ui"
import {
  datesFormSubmit,
  datesFormErrors,
  datesFormValues,
  age,
  birthday,
  currentTime,
  currentWeek,
  currentMonth,
  currentDate
} from "@/features/form-dates/model";
</script>