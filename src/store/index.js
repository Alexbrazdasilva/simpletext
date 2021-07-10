import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elements: {
      block: "É um bloco de texto",
      h1: "<h1>Aqui vai um texto de nível 1</h1>",
      h2: "<h2>Aqui vai um texto de nível 2</h2>",
      h3: "<h3>Aqui vai um texto de nível 3</h3>",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
