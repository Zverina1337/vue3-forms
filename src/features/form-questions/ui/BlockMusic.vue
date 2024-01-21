<template>
  <fieldset>
    <legend>Do you like music?</legend>
    <Form.BaseRadioGroup
      :model-value="likeMusic"
      :options="baseOptions"
      name="music"
      :error="errors.likeMusic"
      vertical
      @update:model-value="handleUpdateLikeMusic"
    />
    <Form.BaseSelect
      :model-value="favouriteMusicGenres"
      v-if="likeMusic"
      label="Favourite music"
      :options="musicGenres"
      @update:model-value="handleUpdateFavouriteMusicGenres"
    />
  </fieldset>
</template>

<script setup>
import * as Form from "@/shared/form/";
import { baseOptions, musicGenres } from "@/features/form-questions/model/";

const emit = defineEmits(["update:likeMusic", "update:favouriteMusicGenres"])

defineProps({
  likeMusic: {
    type: Number,
    required: true
  },
  favouriteMusicGenres: {
    type: [String, Array],
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdateLikeMusic = (value) => emit("update:likeMusic", value);
const handleUpdateFavouriteMusicGenres = (value) => emit("update:favouriteMusicGenres", value);
</script>
