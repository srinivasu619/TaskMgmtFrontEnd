<template>
  <base-dialog v-if="open" :width="width">
    <div class="p-8 bg-gray-200 rounded-md">
      <div class="flex justify-between mb-3">
        <div class="text-2xl font-bold">Create Task</div>
        <i class="fas fa-times text-xl cursor-pointer" @click="handlePopupEvent(EVENT_CLOSE)"></i>
      </div>
      <div class="form-fields flex items-center mb-2">
        <div class="w-1/4 text-sm font-bold">Task Title</div>
        <div class="w-3/4">
          <input
            type="text"
            name="taskTitle"
            id="taskTitle"
            placeholder="Enter Title"
            v-model="taskDetail.taskName"
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
            v-model="taskDetail.description"
            class="bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
          />
        </div>
      </div>
      <div class="form-fields flex mb-2">
        <div class="w-1/4 text-sm font-bold">Due Date</div>
        <div class="w-3/4">
          <input
            type="date"
            name="taskDueDate"
            id="taskDueDate"
            v-model="taskDetail.dueDate"
            class="bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
          />
        </div>
      </div>
      <div class="form-fields flex mb-2">
        <div class="w-1/4 text-sm font-bold">Category</div>
        <div class="w-3/4">
          <select
            name="taskCat"
            id="taskCat"
            v-model="taskDetail.categoryId"
            class="block bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
          >
            <option
              :value="category.categoryId"
              v-for="(category,index) in categories"
              :key="index"
            >{{category.categoryName}}</option>
          </select>
        </div>
      </div>
      <div class="form-fields flex mb-2">
        <div class="w-1/4 text-sm font-bold">Priority</div>
        <div class="w-3/4">
          <select
            name="taskPriority"
            id="taskPriority"
            v-model="taskDetail.priority"
            class="block bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
          >
            <option
              :value="priority.value"
              v-for="(priority,index) in priorityList"
              :key="index"
            >{{priority.name}}</option>
          </select>
        </div>
      </div>
      <!-- <div class="form-fields flex mb-2">
        <div class="w-1/4 text-sm font-bold">Status</div>
        <div class="w-3/4">
          <select
            name="taskStatus"
            id="taskStatus"
            v-model="taskDetail.status"
            class="block bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
          >
            <option
              :value="status.value"
              v-for="(status,index) in statusList"
              :key="index"
            >{{status.name}}</option>
          </select>
        </div>
      </div> -->
      <div class="form-actions pt-1 flex justify-end">
        <button
          class="bg-blue-500 text-white px-2 py-1 rounded mr-4"
          @click="handlePopupEvent(EVENT_CLOSE)"
        >Cancel</button>
        <button
          class="bg-blue-500 text-white px-2 py-1 rounded"
          @click="handlePopupEvent(EVENT_SAVE)"
          name="save"
        >Save</button>
      </div>
    </div>
  </base-dialog>
</template>
<script>
import BaseDialog from "./base/BaseDialog";
import {
  EVENT_CLOSE,
  EVENT_SAVE,
  EVENT_ERROR,
  priorityList
} from "../constants/constant";
import { mapActions, mapState } from "vuex";
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
  computed: {
    ...mapState({
      categories: state => state.CategoryState.categories
    })
  },
  data() {
    return {
      width: 700,
      EVENT_SAVE: EVENT_SAVE,
      EVENT_CLOSE: EVENT_CLOSE,
      EVENT_ERROR: EVENT_ERROR,
      eventType: null,
      eventMessage: "",
      taskDetail: {
        taskName: "",
        description: "",
        dueDate: new Date().toString().slice(0, 10),
        priority: "",
        category: ""
      },
      priorityList: priorityList
    };
  },
  methods: {
    ...mapActions({
      createTask: "createNewTask"
    }),
    handlePopupEvent(event) {
      this.eventType = event;
      switch (event) {
        case this.EVENT_SAVE:
          this.createTask(this.taskDetail)
            .then(res => {
              this.message = res.message;
              this.emitPopupEvent();
            })
            .catch((err) => {
              this.message = err;
              this.eventType = this.EVENT_ERROR;
              this.emitPopupEvent();
            });
          break;
        case this.EVENT_CLOSE:
          this.emitPopupEvent();
          break;
        default:
          break;
      }
    },
    emitPopupEvent() {
      this.$emit("handlePopupEvent", {
        type: this.eventType,
        message: this.message
      });
    }
  }
};
</script>
<style>
</style>