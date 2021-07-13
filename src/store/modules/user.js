const state = {
  user: {},
  todos: [],
};

const getters = {
  user: (state) => state.user,
  todos: (state) => state.todos,
};

const actions = {
  [SET_USER]: ({ commit }, payload) => {
    commit(SET_USER, payload);
  },
};

const mutations = {
  [SET_USER]: (state, payload) => {
    state.user = payload;
  },
};
