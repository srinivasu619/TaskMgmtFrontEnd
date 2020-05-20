<template>
  <div class="flex py-4 h-full">
    <div class="w-1/3 mx-2 h-full bg-gray-100" v-for="(phase, index) in phases" :key="index">
      <board :name="phase.name" :value="phase.value" />
    </div>
    <create-task :open="open" @handlePopupEvent="handleEvent"></create-task>
  </div>
</template>
<script>
import Board from "../components/Board";
import CreateTask from "../components/CreateTask";
import { phases, EVENT_CLOSE } from "../constants/constant";
export default {
  name: "BoardView",
  components: {
    Board,
    CreateTask
  },
  data() {
    return {
      phases: phases,
      open: false,
      width: 500
    };
  },
  methods: {
    handleEvent(event) {
      if (event.type === EVENT_CLOSE) this.open = false;
    }
  }
};
</script>
<style>
</style>