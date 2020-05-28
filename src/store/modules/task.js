import { PAGE_SIZE } from "../../constants/constant";
import { getTasks } from "../../services/task";
const state = {
  TODO: [],
  IN_PROGRESS: [],
  DONE: [],
  pagination: {},
  filterObject: {},
};

const mutations = {
  INTIALIZE(state, phases) {
    phases.forEach((phase) => {
      const name = phase.value;
      state.pagination[name] = {
        page: 0,
        size: PAGE_SIZE
      };
    });
  },
  UPDATE_FILTERS(state, filters) {
    state.filterObject = filters;
  },
  SET_TASK_LIST(state, {phase, list, append}){
    if(append){
      state[phase] = state[phase].concat(list);
      state.pagination[phase].page++;
    }
    else{
      state[phase] = state[phase].concat(list);
      state.pagination[phase].page = 0;
    }
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
  },
  async fetchTaskList({commit, state}, phase, append) {
    const filterObject = {...state.pagination[phase]};
    filterObject["status"] = phase;
    const res = await getTasks(filterObject);
    commit("SET_TASK_LIST", {
      phase,
      list: res.data.data,
      append
    })
  }
};

export default {
  state,
  mutations,
  actions,
};
