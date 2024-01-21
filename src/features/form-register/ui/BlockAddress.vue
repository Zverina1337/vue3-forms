<template>
  <fieldset v-bind="attrs">
    <legend>Address</legend>
    <base-input
      :model-value="country"
      label="Country"
      @update:model-value="handleUpdateCountry"
      :error="errors['address.country']"
    />
    <base-input
      :model-value="city"
      label="City"
      @update:model-value="handleUpdateCity"
      :error="errors['address.city']"
    />
    <base-input
      :model-value="street"
      label="Street"
      @update:model-value="handleUpdateStreet"
      :error="errors['address.street']"
    />
    <base-input
      :model-value="home"
      label="Home"
      type="number"
      @update:model-value="handleUpdateHome"
      :error="errors['address.home']"
    />
  </fieldset>
</template>

<script setup>
import {BaseInput} from "@/shared/form/index.js";
import {useAttrs} from "vue";

const attrs = useAttrs();
const emit = defineEmits(["update:country", "update:city","update:home", "update:street"])

defineProps({
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  home: {
    type: Number,
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdateCountry = (value) => emit("update:country", value);
const handleUpdateCity = (value) => emit("update:city", value);
const handleUpdateStreet = (value) => emit("update:street", value);
const handleUpdateHome = (value) => emit("update:home", value);
</script>

<style lang="scss" scoped>

</style>