<template>
  <label v-if="label" :for="uniqueId">
    {{ label }}
  </label>
  <input
    :id="uniqueId"
    type="text"
    :value="modelValue"
    :placeholder="label"
    v-bind="attrs"
    :aria-describedby="error ? `${uniqueId}-error` : null"
    :aria-invalid="error ? true : null"
    @change="handleChange"
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
import {computed, useAttrs} from "vue";
import {getId} from "@/shared/composables/useUUID.js";

const attrs = useAttrs();
const uniqueId = getId();

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    default: ""
  },
  modelValue: {
    type: [Number, String],
    default: ""
  },
  error: {
    type: String,
    default: ""
  }
})

const handleChange = (event) => emit("update:modelValue", event.target.value)
const border = computed(() => {
  return props.error ? 'red' : 'auto';
})

</script>

<style lang="scss" scoped>
.error-message {
  color: red;
}
.input {
  border-color: v-bind(border);
}
</style>