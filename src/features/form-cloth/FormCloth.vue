<template>
  <section>
    <form @submit.prevent="submit">
      <legend>Cloth Form</legend>
      <fieldset>
        <legend>Type of cloth</legend>
        <Form.BaseRadioGroup
          :options="clothTypes"
          name="clothType"
        />
      </fieldset>
    </form>
    <pre>
      {{ values }}
    </pre>
  </section>
</template>

<script setup>
import * as Form from "@/shared/form";
import { useForm } from "vee-validate";
import { object } from "yup";

const clothTypes = [
  { label: "T-shirt", value: 1 },
  { label: "Pants", value: 1 },
  { label: "Shoe", value: 1 },
  { label: "Hoodies", value: 1 },
  { label: "Accessories", value: 1 },
]

const { handleSubmit, values, errors } = useForm({
  validationSchema: object({

  })
});

const submit = handleSubmit(values => {
  console.log(values);
})

</script>
