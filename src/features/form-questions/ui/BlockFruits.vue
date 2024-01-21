<template>
  <fieldset>
    <legend>Do you like fruits?</legend>
    <Form.BaseRadioGroup
      :model-value="likeFruits"
      :options="baseOptions"
      name="fruits"
      :error="errors.likeFruits"
      @update:model-value="handleUpdateLikeFruits"
      vertical
    />
    <Form.BaseSelect
      :model-value="favouriteFruits"
      v-if="likeFruits"
      label="Favourite fruits"
      :options="fruits"
      @update:model-value="handleUpdateFavouriteFruits"
    />
  </fieldset>
</template>

<script setup>
import * as Form from "@/shared/form/";
import { baseOptions, fruits } from "@/features/form-questions/model/";

const emit = defineEmits(["update:likeFruits", "update:favouriteFruits"])

defineProps({
  likeFruits: {
    type: Number,
    required: true
  },
  favouriteFruits: {
    type: [String, Array],
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdateLikeFruits = (value) => emit("update:likeFruits", value);
const handleUpdateFavouriteFruits = (value) => emit("update:favouriteFruits", value);
</script>
