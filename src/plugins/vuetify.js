import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import themes from "@common/style/style.js";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes,
  },
});
