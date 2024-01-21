<template>
  <fieldset>
    <legend>Do you like animals?</legend>
    <Form.BaseRadioGroup
      name="animals"
      :model-value="likeAnimals"
      :options="baseOptions"
      :error="errors.likeAnimals"
      @update:model-value="handleUpdateLikeAnimals"
      vertical
    />
    <Form.BaseSelect
      v-if="likeAnimals"
      :model-value="favouriteAnimals"
      label="Favourite animals"
      :options="animals"
      @update:model-value="handleUpdateFavouriteAnimals"
    />
  </fieldset>
</template>

<script setup>
import * as Form from "@/shared/form/";
import { animals, baseOptions } from "@/features/form-questions/model/";

const emit = defineEmits(["update:likeAnimals", "update:favouriteAnimals"])

defineProps({
  likeAnimals: {
    type: Number,
    required: true
  },
  favouriteAnimals: {
    type: [String, Array],
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdateLikeAnimals = (value) => emit("update:likeAnimals", value);
const handleUpdateFavouriteAnimals = (value) => emit("update:favouriteAnimals", value);
</script>
