import Vue from "vue";
import Vuex from "vuex";
import CategoryState from "./modules/category";
import TaskState from "./modules/task";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CategoryState,
    TaskState,
  },
});
