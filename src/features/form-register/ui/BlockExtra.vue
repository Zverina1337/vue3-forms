<template>
  <fieldset>
    <legend>Extra</legend>
    <fieldset>
      <legend>Do you have favourite Animal?</legend>
      <base-radio-group
        :model-value="hasFavouriteAnimal"
        :options="hasFavouriteAnimalOptions"
        @update:model-value="handleUpdateHasFavouriteAnimal"
        name="animals"
        vertical
      />
      <base-select
        v-if="hasFavouriteAnimal"
        :model-value="favouriteAnimal"
        :options="animals"
        @update:model-value="handleUpdateFavouriteAnimal"
      />
    </fieldset>
    <fieldset>
      <legend>Do you have favourite Eat?</legend>
      <base-radio-group
        :model-value="hasFavouriteEat"
        :options="hasFavouriteEatOptions"
        @update:model-value="handleUpdateHasFavouriteEat"
        name="eats"
        vertical
      />
      <base-select
        v-if="hasFavouriteEat"
        :model-value="favouriteEat"
        :options="eats"
        @update:model-value="handleUpdateFavouriteEat"
      />
    </fieldset>
    <fieldset>
      <legend>Personal info</legend>

      <p>Can send personal info?</p>
      <div class="field">
        <base-checkbox
          label="Yes"
          :model-value="canSendPersonalInfo"
          @update:model-value="handleUpdateCanSendPersonalInfo"
        />
      </div>
    </fieldset>
  </fieldset>
</template>

<script setup>
import { BaseRadioGroup, BaseSelect, BaseCheckbox } from "@/shared/form/index.js";
import {
  eats,
  animals,
  hasFavouriteEatOptions,
  hasFavouriteAnimalOptions
} from "@/features/form-register/model/index.js";

const emit = defineEmits([
  "update:hasFavouriteAnimal",
  "update:hasFavouriteEat",
  "update:favouriteAnimal",
  "update:favouriteEat",
  "update:canSendPersonalInfo",
])

defineProps({
  hasFavouriteAnimal: {
    type: Number,
    required: true
  },
  hasFavouriteEat: {
    type: Number,
    required: true
  },
  favouriteAnimal: {
    type: String,
    required: true
  },
  favouriteEat: {
    type: String,
    required: true
  },
  canSendPersonalInfo: {
    type: Boolean,
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdateHasFavouriteAnimal = (value) => emit("update:hasFavouriteAnimal", value);
const handleUpdateHasFavouriteEat = (value) => emit("update:hasFavouriteEat", value);
const handleUpdateFavouriteAnimal = (value) => emit("update:favouriteAnimal", value);
const handleUpdateFavouriteEat = (value) => emit("update:favouriteEat", value);
const handleUpdateCanSendPersonalInfo = (value) => emit("update:canSendPersonalInfo", value);

</script>

<style lang="scss" scoped>
.field {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
</style>