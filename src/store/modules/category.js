import { getAllCategories } from "../../services/category";
const state = {
  categories: [],
};

const mutations = {
  SET_CATEGORIES(state, catList) {
    state.categories = catList.data;
  },
};

const actions = {
  async fetchAllCategories(context) {
    const list = await getAllCategories();
    context.commit("SET_CATEGORIES", list.data);
  },
};

export default { state, mutations, actions };
