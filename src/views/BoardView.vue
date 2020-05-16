<template>
  <div class="flex py-4 h-full">
    <div
      class="w-1/3 mx-2 h-full bg-gray-100"
      v-for="(phase, index) in phases"
      :key="index"
    >
      <board :name="phase.name" :value="phase.value" />
    </div>
  </div>
</template>
<script>
import Board from "../components/Board";
import { phases } from "../constants/constant";
export default {
  name: "BoardView",
  components: {
    Board
  },
  data() {
    return {
      phases: phases
    };
  }
};
</script>
<style>
</style>