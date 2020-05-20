<template>
  <base-dialog v-if="open" :width="width">
    <div class="p-8 bg-gray-200 rounded-md">
      <div class="flex justify-between mb-3">
        <div class="text-2xl font-bold">Create Task</div>
        <i class="fas fa-times text-xl cursor-pointer" @click="handlePopupEvent()"></i>
      </div>
      <div class="form-fields flex items-center mb-2">
        <div class="w-1/4 text-sm font-bold">Task Title</div>
        <div class="w-3/4">
          <input
            type="text"
            name="taskTitle"
            id="taskTitle"
            placeholder="Enter Title"
            class="bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
      </div>
      <div class="form-fields flex mb-2">
        <div class="w-1/4 text-sm font-bold">Task Description</div>
        <div class="w-3/4">
          <textarea
            type="text"
            name="taskDesc"
            id="taskDesc"
            placeholder="Enter Task Description"
            class="bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
          />
        </div>
      </div>
      <div class="form-actions pt-1 flex justify-end">
        <button class="bg-blue-500 text-white px-2 py-1 rounded" @click="handlePopupEvent()">Close</button>
      </div>
    </div>
  </base-dialog>
</template>
<script>
import BaseDialog from "./base/BaseDialog";
import { EVENT_CLOSE } from "../constants/constant";
export default {
  name: "CreateTask",
  components: {
    BaseDialog
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      width: 700
    };
  },
  methods: {
    handlePopupEvent() {
      this.$emit("handlePopupEvent", {
        type: EVENT_CLOSE
      });
    }
  }
};
</script>
<style>
</style>