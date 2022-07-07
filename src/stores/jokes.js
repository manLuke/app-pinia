import { defineStore } from "pinia";
import { useUsersStore } from "./users";
import { ref, computed } from "vue";


export const useJokesStore = defineStore('jokes', () => {
  const jokes = ref([]);
  const users = useUsersStore();

  // getters
  const getJokeById = computed((id) => jokes.value.find(joke => joke.id === id));

  // actions
  const addJoke = (newJoke) => {
    jokes.value.push({ userId: newJoke.userId, content: newJoke.content, userName: users.getUserById(newJoke.userId).name });
  }

  return {
    jokes,
    getJokeById,
    addJoke
  }
})