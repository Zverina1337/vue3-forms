<template>
  <section>
    <form @submit.prevent="questionsFormSubmit">
      <legend>Questions Form</legend>
      <FormQuestionsUI.BlockAnimals
        v-model:favourite-animals="favouriteAnimals"
        v-model:like-animals="likeAnimals"
        :errors="questionsFormErrors"
      />
      <FormQuestionsUI.BlockFruits
        v-model:favourite-fruits="favouriteFruits"
        v-model:like-fruits="likeFruits"
        :errors="questionsFormErrors"
      />
      <FormQuestionsUI.BlockMusic
        v-model:favourite-music-genres="favouriteMusicGenres"
        v-model:like-music="likeMusic"
        :errors="questionsFormErrors"
      />
      <FormQuestionsUI.BlockSocials
        v-model:like-o-k="likeOK"
        v-model:like-twitch="likeTwitch"
        v-model:like-instagram="likeInstagram"
        v-model:like-v-k="likeVK"
        v-model:like-youtube="likeYoutube"
        :errors="questionsFormErrors"
      />
      <button type="submit">Send</button>
    </form>
    <pre>
    {{ questionsFormValues }}
    </pre>
    <pre>
    {{ questionsFormErrors }}
    </pre>
  </section>
</template>

<script setup>
import * as FormQuestionsUI from "@/features/form-questions/ui";
import {
  questionsFormValues,
  questionsFormErrors,
  likeAnimals,
  favouriteAnimals,
  likeFruits,
  favouriteFruits,
  likeMusic,
  favouriteMusicGenres,
  likeYoutube,
  likeVK,
  likeInstagram,
  likeTwitch,
  likeOK,
  questionsFormSubmit
} from "@/features/form-questions/model/index.js";

// TODO: DO INPUTS
// color
// file
// image
// range
// search
// url

</script>
