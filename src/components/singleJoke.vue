<template>
  <div class="singleJoke">
    <div class="joke-content">{{ joke.content }}</div>
    <div class="joke-author">
      <p>from: <a>{{ joke.userName }}</a></p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// props
defineProps({
  joke: Object
})


</script>

<style lang="scss" scoped>

.singleJoke {
  width: 90%;
  border: 1px solid #000;
  max-width: 600px;
  padding: .5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .joke-content {
    width: 75%;
  }
  .joke-author {
    gap: 1rem;
    width: 25%;
    a {
      cursor: pointer;
      text-decoration: underline;
      color: #3f30de;
      &:hover {
        opacity: .85;
      }
    }
  }
}

</style>