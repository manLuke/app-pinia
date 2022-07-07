<template>
  <div class="jokes">
    <h1>Add very funny joke</h1>
    <form @submit.prevent="addJoke">
      <select v-model="newJoke.userId">
        <option v-for="user in usersStore.users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
      <input type="text" v-model="newJoke.content" required>
      <button type="submit">Add</button>
    </form>
    <div class="jokes-list">
      <singleJoke v-for="(item, index) in jokesStore.jokes" :key="index" :joke="item" />
    </div>
  </div>
</template>

<script setup>
import singleJoke from '@/components/singleJoke.vue';
import { useJokesStore } from '@/stores/jokes';
import { useUsersStore } from '@/stores/users';
import { ref } from 'vue';

// pinia
const jokesStore = useJokesStore();
const usersStore = useUsersStore();

// data
const newJoke = ref({
  content: '',
  userId: 1
});

// methods
const addJoke = () => {
  jokesStore.addJoke(newJoke.value);
  newJoke.value = {
    content: '',
    userId: 1
  };
};

</script>

<style lang="scss" scoped>
.jokes {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;
}

.jokes-list {
  display: grid;
  place-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

</style>