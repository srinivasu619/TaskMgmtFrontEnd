<template>
  <div class="flex-col h-full">
    <div class="flex justify-end">
      <button
        class="bg-blue-600 hover:bg-blue-700 text-white my-1 py-1 px-4 h-8 rounded"
        @click="open=!open"
      >
        <i class="fas fa-tasks"></i> &nbsp; &nbsp;Create Task
      </button>
      <button
        class="bg-blue-600 text-white my-1 py-1 px-4 h-8 rounded ml-2"
        @click="catOpen=!catOpen"
      >
        <i class="fas fa-th-large"></i> &nbsp; &nbsp;Add Category
      </button>
      <button
        class="bg-blue-600 text-white my-1 py-1 px-4 h-8 rounded ml-2"
        @click="filtersVisible=!filtersVisible"
      >
        <i class="fas fa-filter"></i>
      </button>
    </div>
    <div v-show="filtersVisible">
      <task-filter @load="loadTasks"></task-filter>
    </div>
    <div class="flex py-4 h-full">
      <div class="w-1/3 mx-2 h-full bg-gray-100" v-for="(phase, index) in phases" :key="index">
        <board :name="phase.name" :value="phase.value"  @actionIconClick="handleTaskActionClick"/>
      </div>
      <create-task v-if="open" :open="open" @handlePopupEvent="handleCreateTaskEvent"></create-task>
      <create-category v-if="catOpen" :open="catOpen" @handlePopupEvent="handleCatEvent"></create-category>
      <task-popup
        v-if="showTaskPopup"
        :open="showTaskPopup"
        @handlePopupEvent="handleTaskPopupEvent"
        :taskId="taskId"
      ></task-popup>
    </div>
  </div>
</template>
<script>
import Board from "../components/Board";
import CreateTask from "../components/CreateTask";
import TaskFilter from "../components/TaskFilter";
import TaskPopup from "../components/TaskPopup";
import CreateCategory from "../components/category/CreateCategory";
import { phases, EVENT_CLOSE, EVENT_SAVE } from "../constants/constant";
import { mapActions, mapState } from "vuex";
export default {
  name: "BoardView",
  components: {
    Board,
    CreateTask,
    CreateCategory,
    TaskFilter,
    TaskPopup
  },
  data() {
    return {
      phases: phases,
      open: false,
      catOpen: false,
      loadBoards: false,
      filtersVisible: false,
      showTaskPopup: false,
      taskId: null
    };
  },
  computed: {
    ...mapState({
      categories: state => state.CategoryState.categories
    })
  },
  created() {
    this.initializeTaskLists(phases);
    this.fetchAllCategories();
    this.loadBoards = true;
    this.loadTasks();
  },
  methods: {
    ...mapActions({
      fetchAllCategories: "fetchAllCategories",
      initializeTaskLists: "initializeTaskLists",
      fetchTaskList: "fetchTaskList",
      resetPhasePagination: "resetPhasePagination"
    }),
    handleCreateTaskEvent(event) {
      if (event.type === EVENT_CLOSE) this.open = false;
      else if (event.type === EVENT_SAVE) {
        this.loadTasks();
        this.open = false;
      }
    },
    handleCatEvent(event) {
      if (event.type === EVENT_CLOSE) this.catOpen = false;
      else if (event.type === EVENT_SAVE) {
        this.fetchAllCategories();
        this.catOpen = false;
      }
    },
    loadTasks() {
      this.phases.forEach(phase => {
        this.resetPhasePagination(phase.value);
        this.fetchTaskList({
          phase: phase.value,
          append: false
        });
      });
    },
    handleTaskActionClick(action) {
      switch (action.actionName) {
        case 'expand':
          this.showTaskPopup = true;
          this.taskId = action.data;
          break;
        default:
          break;
      }
      
    },
    handleTaskPopupEvent(action) {
      if(action.isTaskModified) {
        this.loadTasks();
      }
      this.showTaskPopup = false;
    }
  }
};
</script>
<style>
</style>