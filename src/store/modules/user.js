const state = {
  user: {},
  todos: [],
  isAuthenticated: false,
};

const getters = {
  user: (state) => state.user,
  todos: (state) => state.todos,
  isAuthenticated: (state) => state.isAuthenticated,
};

const actions = {
  REGISTER_USER: ({ commit }, payload) =>
    new Promise((resolve) => commit("REGISTER_USER", payload) ?? resolve()),

  ADD_TODO: ({ commit }, payload) =>
    new Promise((resolve) => commit("ADD_TODO", payload) ?? resolve()),

  REMOVE_TODO: ({ commit }, payload) =>
    new Promise((resolve) => commit("ADD_TODO", payload) ?? resolve()),
};

const mutations = {
  REGISTER_USER: (state, payload) => {
    state.user = payload;
    state.isAuthenticated = true;
  },

  ADD_TODO: (state, payload) => state.todos.push(payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
