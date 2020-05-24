<template>
  <div class="flex py-4 h-full">
    <div class="w-1/3 mx-2 h-full bg-gray-100" v-for="(phase, index) in phases" :key="index">
      <board :name="phase.name" :value="phase.value" />
    </div>
    <create-task :open="open" @handlePopupEvent="handleEvent"></create-task>
    <create-category :open="catOpen" @handlePopupEvent="handleCatEvent"></create-category>
  </div>
</template>
<script>
import Board from "../components/Board";
import CreateTask from "../components/CreateTask";
import CreateCategory from "../components/category/CreateCategory";
import { phases, EVENT_CLOSE } from "../constants/constant";
import { mapActions, mapState } from "vuex";
export default {
  name: "BoardView",
  components: {
    Board,
    CreateTask,
    CreateCategory
  },
  data() {
    return {
      phases: phases,
      open: false,
      catOpen: false
    };
  },
  computed: {
    ...mapState({
      categories: state => state.CategoryState.categories
    })
  },
  created() {
    this.fetchAllCategories();
  },
  methods: {
    ...mapActions({
      fetchAllCategories: "fetchAllCategories"
    }),
    handleEvent(event) {
      if (event.type === EVENT_CLOSE) this.open = false;
    },
    handleCatEvent(event) {
      if (event.type === EVENT_CLOSE) this.catOpen = false;
      else this.catOpen = false;
    }
  }
};
</script>
<style>
</style>