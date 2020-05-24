<template>
  <div>
    <slot name="boardheader">
      <div
        class="flex items-center p-2 font-light border-b border-gray-300 text-gray-500 text-lg uppercase tracking-widest bg-gray-300"
      >{{name}}</div>
    </slot>
    <div class="taskContainer py-2 px-3">
      <task v-for="(task,index) in tasks" :key="index" :task="task"></task>
    </div>
  </div>
</template>
<script>
import Task from "./Task";
import { mapState } from "vuex";
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
        return state.TaskState[`${this.name}List`];
      }
    })
  },
  data() {
    return {
      // tasks: [
      //   {
      //     category: "DEVELOPMENT",
      //     title: "TASK 1",
      //     description: "This is the description..."
      //   },
      //   {
      //     category: "SHOPPING",
      //     title: "TASK 22",
      //     description: "This is the description..."
      //   },
      //   {
      //     category: "PERSONAL",
      //     title: "TASK 4",
      //     description: "This is the description..."
      //   }
      // ]
    };
  }
};
</script>
<style>
</style>