<template>
  <rating />
  <router-link to="/">Home</router-link> |
  <router-link to="/jokes">Jokes</router-link>
  <router-view />
</template>

<script setup>
import rating from '@/components/rating.vue';

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 5vh 0 0 0;
}

</style>
