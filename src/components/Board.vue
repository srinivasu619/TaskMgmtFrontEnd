<template>
  <div class="h-full pb-2">
    <div
      class="board-header flex items-center p-2 font-light border-b border-gray-300 text-gray-500 text-lg uppercase tracking-widest bg-gray-300"
    >{{name}}</div>
    <div class="board-content taskContainer py-2 px-3 max-h-full overflow-auto">
      <task v-for="(task,index) in tasks" :key="index" :task="task" @actionIconClick="handleActionIconClick"></task>
    </div>
    <div
      class="board-footer text-center cursor-pointer bg-gray-300 w-1/2 mx-auto rounded-md"
      @click="loadMoreTasks()"
    >Load More...</div>
  </div>
</template>
<script>
import Task from "./Task";
import { mapState, mapActions } from "vuex";
export default {
  name: "Board",
  components: {
    Task
  },
  props: {
    name: {
      type: String
    },
    value: {
      type: String
    }
  },
  computed: {
    ...mapState({
      tasks(state) {
        return state.TaskState[this.value];
      }
    })
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchTaskList: "fetchTaskList",
      incrementPhasePagination: "incrementPhasePagination"
    }),
    loadMoreTasks() {
      this.incrementPhasePagination(this.value);
      this.fetchTaskList({
        phase: this.value,
        append: true
      });
    },
    handleActionIconClick(action) {
      this.$emit('actionIconClick', action)
      
    }
  }
};
</script>

<style>
.board-header {
  height: 40px;
}

.board-content {
  height: calc(100% - 70px);
}

.board-footer {
  height: 30px;
}
</style>