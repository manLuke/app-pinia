<template>
  <div class="rating">
    <h3>Rate page</h3>
    <button @click="store.rating--">-</button>
    <span>{{ store.rating }}</span>
    <button @click="store.rating++">+</button>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main';

// pinia
const store = useMainStore();

</script>

<style lang="scss" scoped>
.rating {
  display: block;
  position: absolute;
  top: 5px;
  right: 5px;
  h3 {
    font-size: 1.2rem;
    margin: .5rem 0;
  }
  span {
    font-size: 1.25em;
    font-weight: 400;
    margin: 0 0.5rem;
  }
  button {
    width: 25px;
    height: 25px;
  }
}
</style>
