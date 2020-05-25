const state = {
  filterObject: {},
};

const mutations = {
  INTIALIZE(state, phases) {
    phases.forEach((phase) => {
      const name = `${phase.name.toLowerCase()}List`;
      state[name] = [];
    });
  },
  UPDATE_FILTERS(state, filters) {
    state.filterObject = filters;
  }
};

const actions = {
  initializeTaskLists(context, phases) {
    context.commit("INTIALIZE", phases);
  },
  updateFilterObject(context, filters) {
    if(!filters)
      filters = {};  
    context.commit("UPDATE_FILTERS", filters);
  }
};

export default {
  state,
  mutations,
  actions,
};
