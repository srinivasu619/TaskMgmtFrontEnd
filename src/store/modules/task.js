const state = {};

const mutations = {
  INTIALIZE(state, phases) {
    phases.forEach((phase) => {
      const name = `${phase.name.toLowerCase()}List`;
      state[name] = { ...state, name: [] };
    });
  },
};

const actions = {
  initializeTaskLists(context, phases) {
    context.commit("INTIALIZE", phases);
  },
};

export default {
  state,
  mutations,
  actions,
};
