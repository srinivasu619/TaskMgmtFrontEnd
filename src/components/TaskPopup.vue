<template>
  <base-dialog v-if="open" :width="width">
    <div class="p-8 bg-gray-200 rounded-md">
      <div class="flex justify-between mb-3">
        <div v-if="mode ==='detail'" class="text-2xl font-bold">{{ taskDetail.taskName }}</div>
        <div v-if="mode ==='edit'" class="w-3/4">
          <input
            v-model="updatedTaskDetail.taskName"
            type="text"
            placeholder="Enter Title"
            class="bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
        <i
          class="fas fa-times text-xl cursor-pointer"
          @click="handleActionButtonClick(EVENT_CLOSE)"
        ></i>
      </div>

      <div class="form-fields flex">
        <div class="text-sm font-bold">Description</div>
      </div>
      <div v-if="mode ==='detail'" class="form-fields flex mb-3">
        <div>{{ taskDetail.description }}</div>
      </div>
      <div v-if="mode ==='edit'" class="form-fields flex mb-5">
        <textarea
          v-model="updatedTaskDetail.description"
          type="text"
          placeholder="Enter Task Description"
          class="bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
        />
      </div>

      <div class="form-fields flex mb-2">
        <div class="w-2/4">
          <div class="flex mb-2 items-center pr-2">
            <div class="w-1/4 text-sm font-bold">Status</div>
            <div v-if="mode ==='detail'" class="w-3/4">{{ taskDetail.status }}</div>
            <div v-if="mode ==='edit'" class="w-3/4 inline-block relative">
              <select
                v-model="updatedTaskDetail.status"
                class="block bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
              >
                <option
                  :value="status.value"
                  v-for="(status,index) in statusList"
                  :key="index"
                >{{status.name}}</option>
              </select>
              <div
                class="pointer-events-none mt-1 absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="w-2/4">
          <div class="flex mb-2 items-center pl-2">
            <div class="w-1/4 text-sm font-bold">Due Date</div>
            <div v-if="mode ==='detail'" class="w-3/4">{{ taskDetail.dueDate }}</div>
            <div v-if="mode ==='edit'" class="w-3/4">
              <input
                type="date"
                name="taskDueDate"
                id="taskDueDate"
                v-model="updatedTaskDetail.dueDate"
                class="bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="form-fields flex mb-2">
        <div class="w-2/4">
          <div class="flex mb-2 items-center pr-2">
            <div class="w-1/4 text-sm font-bold">Priority</div>
            <div v-if="mode ==='detail'" class="w-3/4">{{ taskDetail.priority }}</div>
            <div v-if="mode ==='edit'" class="w-3/4 inline-block relative">
              <select
                v-model="updatedTaskDetail.priority"
                class="block bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
              >
                <option
                  :value="priority.value"
                  v-for="(priority,index) in priorityList"
                  :key="index"
                >{{priority.name}}</option>
              </select>
              <div
                class="pointer-events-none mt-1 absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="w-2/4">
          <div class="flex items-center pl-2">
            <div class="w-1/4 text-sm font-bold">Category</div>
            <div v-if="mode ==='detail'" class="w-3/4">{{ taskDetail.category.categoryName }}</div>
            <div v-if="mode ==='edit'" class="w-3/4 inline-block relative">
              <select
                v-model="updatedTaskDetail.categoryId"
                name="taskCat"
                id="taskCat"
                class="block bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
              >
                <option
                  :value="category.categoryId"
                  v-for="(category,index) in categories"
                  :key="index"
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
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-actions pt-1 flex justify-end">
        <button
          v-if="mode === 'detail'"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded focus:outline-none"
          @click="handleActionButtonClick(EDIT)"
        >Edit</button>
        <button
          v-if="mode === 'edit'"
          class="focus:outline-none hover:bg-blue-100 text-blue-600 font-semibold border border-blue-600 rounded text-white px-4 py-1 mr-4"
          @click="handleActionButtonClick(CANCEL)"
        >Cancel</button>
        <button
          v-if="mode === 'edit'"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded focus:outline-none"
          @click="handleActionButtonClick(EVENT_SAVE)"
        >Save</button>
      </div>
    </div>
  </base-dialog>
</template>
<script>
import BaseDialog from "./base/BaseDialog";
import { mapActions, mapState } from "vuex";
import {
  EVENT_CLOSE,
  EVENT_SAVE,
  EVENT_ERROR,
  CANCEL,
  EDIT
} from "../constants/constant";
import { phases, priorityList } from "../constants/constant";
export default {
  name: "TaskPopup",
  components: {
    BaseDialog
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    taskId: Number
  },
  created() {
    this.getTaskDetails();
  },
  data() {
    return {
      width: 600,
      EVENT_SAVE: EVENT_SAVE,
      EVENT_CLOSE: EVENT_CLOSE,
      EVENT_ERROR: EVENT_ERROR,
      CANCEL: CANCEL,
      EDIT: EDIT,
      mode: "detail",
      taskDetail: {
        taskName: "",
        description: "",
        dueDate: "",
        priority: "",
        category: {},
        status: ""
      },
      updatedTaskDetail: {
        id: "",
        taskName: "",
        description: "",
        dueDate: "",
        priority: "",
        categoryId: "",
        status: ""
      },
      statusList: phases,
      priorityList: priorityList,
      isTaskModified: false
    };
  },
  computed: {
    ...mapState({
      categories: state => state.CategoryState.categories
    })
  },
  methods: {
    ...mapActions({
      updateTask: "updateTask",
      fetchTaskDetails: "fetchTaskDetails"
    }),
    getTaskDetails() {
      this.fetchTaskDetails(this.taskId)
        .then(res => {
          this.taskDetail = res.data;
          this.taskDetail.dueDate = this.taskDetail.dueDate.slice(0, 10);
        })
        .catch(err => console.log(err));
    },
    handleActionButtonClick(action) {
      switch (action) {
        case EDIT:
          this.updatedTaskDetail.id = this.taskDetail.id;
          this.updatedTaskDetail.taskName = this.taskDetail.taskName;
          this.updatedTaskDetail.description = this.taskDetail.description;
          this.updatedTaskDetail.status = this.taskDetail.status;
          this.updatedTaskDetail.priority = this.taskDetail.priority;
          this.updatedTaskDetail.dueDate = this.taskDetail.dueDate;
          this.updatedTaskDetail.categoryId = this.taskDetail.category.categoryId;
          this.mode = "edit";
          break;
        case EVENT_SAVE:
          this.updateTask(this.updatedTaskDetail)
            .then(res => {
              this.taskDetail = res.data
              this.taskDetail.dueDate = this.taskDetail.dueDate.slice(0, 10)
              this.isTaskModified = true
            })
            .catch(err => console.log(err))
            .finally(() => (this.mode = "detail"));
          break;
        case CANCEL:
          this.mode = "detail";
          break;
        case EVENT_CLOSE:
          this.$emit("handlePopupEvent", {
            type: action,
            isTaskModified: this.isTaskModified
          });
          break;
        default:
          break;
      }
    }
  }
};
</script>