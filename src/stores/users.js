import { defineStore } from "pinia";

export const useUsersStore = defineStore('users', {
  state: () => ({
    serialId: 1,
    users: [],
  }),
  getters: {
    getUserById: (state) => {
      return (id) => state.users.find(user => user.id === id)
    }
  },
  actions: {
    addUser (newUser) {
      return new Promise ((res, rej) => {
        if (this.users.some(item => item.email === newUser.email)) {
          rej('Email address must be unique')
        }
        else {
          this.users.push({ name: newUser.name, email: newUser.email, id: this.serialId })
          this.serialId++
          res(console.log('User added'))
        }
      })
    }
  }
})