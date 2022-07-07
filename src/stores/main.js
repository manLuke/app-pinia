import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({
        rating: 0,
    }),
})