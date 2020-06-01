import { PAGE_SIZE } from "../../constants/constant";
import { getTasks, createTask, updateTask, getTaskDetails } from "../../services/task";
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
  RESET_PAGINATION(state, phase){
    state.pagination[phase].page = 0;
  },
  INC_PAGINATION(state, phase){
    state.pagination[phase].page++;
  },
  UPDATE_FILTERS(state, filters) {
    state.filterObject = filters;
  },
  SET_TASK_LIST(state, {phase, list, append}){
    if(append){
      state[phase] = state[phase].concat(list);
    }
    else{
      state[phase] = list;
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
  async fetchTaskList({commit, state}, {phase, append}) {
    const filterObject = {...state.pagination[phase], ...state.filterObject};
    filterObject["status"] = phase;
    const res = await getTasks(filterObject);
    commit("SET_TASK_LIST", {
      phase,
      list: res.data.data,
      append
    })
  },
  resetPhasePagination({commit}, phase){
    commit("RESET_PAGINATION", phase);
  },
  incrementPhasePagination({commit}, phase){
    commit("INC_PAGINATION", phase);
  },
  async createNewTask(context, task) {
    try {
      const response = await createTask(task)
      return response.data;
    } catch(err) {
      console.log(err);
      throw err;
    }
  },
  async updateTask(context, task) {
    try {
      const response = await updateTask(task)
      return response.data;
    } catch(err) {
      console.log(err);
      throw err;
    }
  },
  async fetchTaskDetails(context, taskId) {
    try {
      const response = await getTaskDetails(taskId)
      return response.data;
    } catch(err) {
      console.log(err);
      throw err;
    }
  }
};

export default {
  state,
  mutations,
  actions,
};
