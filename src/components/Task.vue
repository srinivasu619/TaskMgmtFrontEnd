<template>
  <div class="shadow-xs p-2 mb-2 bg-white">
    <div class="flex items-center justify-between">
      <div
        class="flex category uppercase text-blue-300 mb-1 font-bold tracking-widest text-xs"
      >{{task.category.categoryName}}</div>
      <div class="flex items-center">
        <i class="fas rotate-icon fa-arrows-alt-v text-gray-500 mr-1 cursor-pointer" @click="expand"></i>
        <!-- <i class="fas fa-ellipsis-h text-gray-500 text-xs cursor-pointer"></i> -->
      </div>
    </div>
    <h2 class="font-bold">{{task.taskName}}</h2>
    <p>{{task.description}}</p>
    <div class="flex items-center justify-between mt-2">
      <div v-if="task.completionDate" class="flex items-center px-2 py-1 bg-green-200 rounded-full font-bold tracking-wider text-green-600">
        <i class="far fa-clock text-xs mr-1"></i>
        <span class="text-xs">Completed</span>
      </div>
      <div
        v-else-if="task.dueDate >= 0"
        class="flex items-center px-2 py-1 text-gray-600 bg-gray-200 rounded-full font-bold tracking-wider"
      >
        <i class="far fa-clock text-xs mr-1"></i>
        <span class="text-xs">{{task.dueDate}} days</span>
      </div>
      <div v-else class="flex items-center px-2 py-1 bg-red-300 rounded-full font-bold tracking-wider text-red-600">
        <i class="far fa-clock text-xs mr-1"></i>
        <span class="text-xs">Overdue</span>
      </div>
      <i class="far fa-arrow-alt-circle-up text-red-400" v-if="task.priority === 'HIGH'"></i>
      <i class="far fa-arrow-alt-circle-down text-green-400" v-else-if="task.priority === 'LOW'"></i>
      <i class="far fa-dot-circle text-yellow-400" v-else></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Task",
  components: {
  },
  props: {
    task: {
      type: Object
    }
  },
  data() {
    return {
      showTaskPopup: false,
      currentComponent: null
    };
  },
  methods: {
    expand() {
      this.$emit('actionIconClick', {'actionName': 'expand', 'data':this.task.id} )
    }
  }
};
</script>

<style>
.rotate-icon {
  transform: rotate(45deg);
}
</style>