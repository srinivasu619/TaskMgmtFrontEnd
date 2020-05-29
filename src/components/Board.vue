<template>
  <div>
    <slot name="boardheader">
      <div
        class="flex items-center p-2 font-light border-b border-gray-300 text-gray-500 text-lg uppercase tracking-widest bg-gray-300"
      >{{name}}</div>
    </slot>
    <div class="taskContainer py-2 px-3 max-h-full overflow-auto">
      <task v-for="(task,index) in tasks" :key="index" :task="task"></task>
    </div>
    <div
      class="py-2 text-center mt-2 cursor-pointer bg-gray-300 w-1/2 mx-auto rounded-md"
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
    return {
    };
  },
  methods: {
    ...mapActions({
      fetchTaskList: 'fetchTaskList',
      incrementPhasePagination: 'incrementPhasePagination'
    }),
    loadMoreTasks(){
      this.incrementPhasePagination(this.value);
      this.fetchTaskList({
        phase: this.value, 
        append: true
      });
    }
  },
};
</script>
<style>
</style>