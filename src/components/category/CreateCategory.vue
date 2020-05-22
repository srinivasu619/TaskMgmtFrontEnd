<template>
  <base-dialog v-if="open" :width="width">
    <div class="p-8 bg-gray-200 rounded-md">
      <div class="flex justify-between mb-3">
        <div class="text-2xl font-bold">Categories</div>
        <i class="fas fa-times text-xl cursor-pointer" @click="handlePopupEvent()"></i>
      </div>
      <div class="form-fields flex items-center mb-2">
        <div class="w-1/4 text-sm font-bold">Category Name</div>
        <div class="w-3/4">
          <input
            type="text"
            name="categoryName"
            id="categoryName"
            placeholder="Enter Category Name"
            v-model="category.catrgoryName"
            class="bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
      </div>
      <div class="form-fields flex mb-2">
        <div class="w-1/4 text-sm font-bold">Description</div>
        <div class="w-3/4">
          <textarea
            type="text"
            name="catDesc"
            id="catDesc"
            placeholder="Enter Category Description"
            v-model="category.categoryDescription"
            class="bg-gray-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal resize-none"
          />
        </div>
      </div>
      <div class="form-actions pt-1 flex justify-end">
        <button
          class="bg-blue-500 text-white px-2 py-1 rounded mr-4"
          @click="handlePopupEvent()"
        >Cancel</button>
        <button class="bg-blue-500 text-white px-2 py-1 rounded" @click="save" name="save">Save</button>
      </div>
    </div>
  </base-dialog>
</template>
<script>
import BaseDialog from "../base/BaseDialog";
import { saveCategory } from "../../services/category";
import { EVENT_ERROR, EVENT_CLOSE } from "../../constants/constant";
export default {
  name: "CreateCategory",
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
      width: 500,
      category: {
        catrgoryName: "",
        categoryDescription: ""
      }
    };
  },
  methods: {
    async save() {
      let info, eventType;
      try {
        const res = await saveCategory(this.category);
        info = res;
        eventType = EVENT_CLOSE;
      } catch (error) {
        info = error;
        eventType = EVENT_ERROR;
      }
      this.$emit("handlePopupEvent", {
        type: eventType,
        data: info
      });
    },
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