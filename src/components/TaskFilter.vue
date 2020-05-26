<template>
  <div class="flex-grow mx-2">
    <div class="flex mx-1">
      <div class="flex items-end w-2/12 my-1 mx-1">
        <button
          class="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold my-1 py-1 px-4 h-8 border border-gray-400 rounded"
        >Add Task</button>
      </div>
    </div>
    <div class="flex justify-end mx-1">
      <div class="flex-col mx-1 my-1 w-3/12">
        <div>Category</div>
        <div class="inline-block h-8 w-full relative my-1">
          <select
            class="block h-8 cursor-pointer text-gray-800 font-semibold appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded leading-tight focus:outline-none"
            v-model="filterObject.categoryId"
          >
            <option value="" disabled selected hidden>Select category</option>
            <option
              class="hover:bg-gray-100 text-gray-800 font-semibold"
              v-for="(category, index) in categories"
              :key="index"
              :value="category.categoryId"
            >{{category.categoryName}}</option>
          </select>
          <div
            class="pointer-events-none mt-1 absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="flex-col mx-1 my-1 w-4/12">
        <div>Priority</div>
        <button-group :buttonArray="priorityBtnArray" :resetClicked="resetPriority" @btnGroupSelect="updatePriority"></button-group>
      </div>
      <div class="flex mx-1 my-2 items-end w-3/12">
        <input
          type="text"
          v-model="filterObject.name"
          class="bg-grey-lighter border border-gray-400 h-8 px-1 py-1 w-full rounded"
          placeholder="Search By Name"
        />
      </div>
      <div class="flex w-1/12 items-end my-1 mx-1">
        <button
          class="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold my-1 py-1 px-4 h-8 border border-gray-400 rounded"
          @click="applyFilters"
        >Apply</button>
      </div>
      <div class="flex w-1/12 items-end my-1 mx-1">
        <button
          class="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold my-1 py-1 px-4 h-8 border border-gray-400 rounded"
          @click="resetFilters"
        >Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import ButtonGroup from "../components/common/ButtonGroup";
import { priorityButtons } from "../constants/constant.js";

export default {
  name: "TaskFilter",
  components: {
    ButtonGroup
  },
  data() {
    return {
      filterObject: {
        name: "",
        categoryId: "",
        priority: ""
      },
      resetPriority: false,
      priorityBtnArray: priorityButtons
    };
  },
  computed: {
    ...mapState({
      categories: state => state.CategoryState.categories
    }),
  },
  methods: {
    ...mapActions({
      updateFilterObject: "updateFilterObject"
    }),
    updatePriority(e) {
      this.filterObject.priority = e;
    },
    applyFilters() {
      this.updateFilterObject(this.filterObject);
    },
    // TODO: Reset funtionality for Button Group
    resetFilters() {
      this.resetPriority = true;
      this.filterObject.name = "";
      this.filterObject.categoryId = "";
      this.updateFilterObject();

      this.$nextTick(() => {
        this.resetPriority = false;
      });
    }
  }
};
</script>

<style>
</style>