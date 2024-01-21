<template>
  <fieldset>
    <legend>Socials</legend>
    <div class="field">
      <Form.BaseCheckbox
        label="I like YouTube"
        :model-value="likeYoutube"
        :error="errors.likeYoutube"
        @update:model-value="handleUpdateLikeYoutube"
      />
    </div>
    <div class="field">
      <Form.BaseCheckbox
        label="I like VK"
        :model-value="likeVK"
        :error="errors.likeVK"
        @update:model-value="handleUpdateLikeVK"
      />
    </div>
    <div class="field">
      <Form.BaseCheckbox
        label="I like Instagram"
        :model-value="likeInstagram"
        :error="errors.likeInstagram"
        @update:model-value="handleUpdateLikeInstagram"
      />
    </div>
    <div class="field">
      <Form.BaseCheckbox
        label="I like Twitch"
        :model-value="likeTwitch"
        :error="errors.likeTwitch"
        @update:model-value="handleUpdateLikeTwitch"
      />
    </div>
    <div class="field">
      <Form.BaseCheckbox
        label="I like OK"
        :model-value="likeOK"
        :error="errors.likeOK"
        @update:model-value="handleUpdateLikeOK"
      />
    </div>
  </fieldset>
</template>

<script setup>
import * as Form from "@/shared/form/";

const emit = defineEmits([
  "update:likeYoutube",
  "update:likeVK",
  "update:likeInstagram",
  "update:likeTwitch",
  "update:likeOK"
])

defineProps({
  likeYoutube: {
    type: Boolean,
    required: true
  },
  likeVK: {
    type: Boolean,
    required: true
  },
  likeInstagram: {
    type: Boolean,
    required: true
  },
  likeTwitch: {
    type: Boolean,
    required: true
  },
  likeOK: {
    type: Boolean,
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})

const handleUpdateLikeYoutube = (value) => emit("update:likeYoutube", value);
const handleUpdateLikeVK = (value) => emit("update:likeVK", value);
const handleUpdateLikeInstagram = (value) => emit("update:likeInstagram", value);
const handleUpdateLikeTwitch = (value) => emit("update:likeTwitch", value);
const handleUpdateLikeOK = (value) => emit("update:likeOK", value);
</script>

<style lang="scss" scoped>
.field {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>