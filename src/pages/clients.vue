<template>
  <div class="clients">
    <div class="clients-get-user-by-id">
        <h1>Get user' name by ID</h1>
        <input type="number" min="0" :max="(store.serialId - 1)" v-model="userId">
        <p>total of: {{ store.serialId - 1 }} users</p>
        <h3>{{ userName }}</h3>
    </div>
    <div class="clients-add-user">
      <p style="color: #f60c0c;">{{ errMsg }}</p>
      <form @submit.prevent="addUser">
        <input type="text" placeholder="Your Name" v-model="newUser.name" required>
        <input type="email" placeholder="Your email" v-model="newUser.email" required>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/users';
import { ref, computed } from 'vue';

// pinia
const store = useUsersStore();

// data
const userId = ref();
const newUser = ref({
  name: '',
  email: ''
});
const errMsg = ref('');

// computed
const user = computed(() => store.getUserById(userId.value));
const userName = computed(() => user.value?.name);

// methods
const addUser = async () => {
  try {
    errMsg.value = '';
    await store.addUser(newUser.value);
    newUser.value = {
      name: '',
      email: ''
    };
  } catch (error) {
    errMsg.value = error;
  }
}

</script>

<style lang="scss" scoped>
.clients {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;
  .clients-add-user {
    padding: 1rem 0;
  }
}
</style>