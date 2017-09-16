import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {name: "Incoming"},
    rooms: []
  },

  mutations: {
    save(state) {
      state.user.name = "Femi";
    }
  }
});

export default store;
