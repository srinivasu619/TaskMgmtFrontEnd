<template>
  <div class="flex py-4 h-full">
    <div class="w-1/3 mx-2 h-full border border-gray-300">
      <board />
    </div>
    <div class="w-1/3 mx-2 h-full border border-gray-300">
      <board />
    </div>
    <div class="w-1/3 mx-2 h-full border border-gray-300">
      <board />
    </div>
  </div>
</template>
<script>
import Board from "../components/Board";
export default {
  name: "BoardView",
  components: {
    Board
  }
};
</script>
<style>
</style>