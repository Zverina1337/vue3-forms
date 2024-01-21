<template>
  <label v-if="label" :for="uniqueId">{{ label }}</label>
  <select
    :value="modelValue"
    v-bind="attrs"
    @change="handleChange"
    :id="uniqueId"
    :aria-describedby="error ? `${uniqueId}-error` : null"
    :aria-invalid="error ? true : null"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
  <p
    v-if="error"
    aria-live="assertive"
    :id="`${uniqueId}-error`"
    class="error-message"
  >
    {{ error }}
  </p>
</template>

<script setup>
import { useAttrs } from "vue";
import {getId} from "@/shared/composables/useUUID.js";

const attrs = useAttrs();
const uniqueId = getId();

const emit = defineEmits(["update:modelValue"]);

// TODO: MULTI-SELECT

defineProps({
  label: {
    type: String,
    default: ""
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  options: {
    type: Array,
    required: true
  },
  error: {
    type: String,
    default: ""
  }
})

const handleChange = (event) => emit("update:modelValue", event.target.value)

</script>

<style lang="scss" scoped>

</style>