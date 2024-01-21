<template>
  <label v-if="label" :for="uniqueId">{{ label }}</label>
  <input
    :id="uniqueId"
    type="checkbox"
    :checked="modelValue"
    @change="handleUpdate"
    v-bind="attrs"
    :aria-describedby="error ? `${uniqueId}-error` : null"
    :aria-invalid="error ? true : null"
    class="input"
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

const attrs = useAttrs()
const emit = defineEmits(["update:model-value"])
const uniqueId = getId();

defineProps({
  label: {
    type: String,
    default: ""
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ""
  }
})

const handleUpdate = (event) => emit("update:model-value", event.target.checked)

</script>

<style lang="scss" scoped>
.error-message {
  color: red;
}
.input {
  border-color: v-bind(border);
}
</style>