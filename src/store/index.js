import Vue from "vue";
import Vuex from "vuex";
import CategoryState from "./modules/category";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CategoryState,
  },
});
