<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    v-bind="attrs"
    class="field"
  >
    <base-radio
      :label="option.label"
      :value="option.value"
      :name="name"
      :model-value="modelValue"
      @update:model-value="handleUpdate"
      :aria-describedby="error ? `${uniqueId}-error` : null"
      :aria-invalid="error ? true : null"
    />
  </component>
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
import BaseRadio from "@/shared/form/BaseRadio.vue";
import { useAttrs } from "vue";
import {getId} from "@/shared/composables/useUUID.js";

const attrs = useAttrs();
const uniqueId = getId();

const emit = defineEmits(["update:modelValue"]);

defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [Number, String],
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  vertical: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ""
  }
})
const handleUpdate = (value) => emit("update:modelValue", value)

</script>

<style lang="scss" scoped>
.field {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
</style>