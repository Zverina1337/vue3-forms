<template>
  <label :for="uniqueId">{{ label }}</label>
  <input
    :id="uniqueId"
    type="radio"
    name="favouriteAnimal"
    :checked="modelValue === value"
    :value="value"
    v-bind="attrs"
    :aria-describedby="error ? `${uniqueId}-error` : null"
    :aria-invalid="error ? true : null"
    @change="handleChange(value)"
  />
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
import { getId } from "@/shared/composables/useUUID.js";

const attrs = useAttrs();
const uniqueId = getId();

const emit = defineEmits(["update:modelValue"]);

defineProps({
  label: {
    type: String,
    default: ""
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  value: {
    type: [String, Number],
    required: true
  },
  error: {
    type: String,
    default: ""
  }
})

const handleChange = (value) => emit("update:modelValue", value)

</script>

<style lang="scss" scoped>
.error-message {
  color: red;
}
.input {
  border-color: v-bind(border);
}
</style>