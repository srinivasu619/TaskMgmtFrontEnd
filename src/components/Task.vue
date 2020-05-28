<template>
  <div class="shadow-lg p-2 mb-2 bg-white cursor-pointer">
    <div
      class="category uppercase text-blue-300 mb-1 font-bold tracking-widest text-xs"
    >{{task.category.categoryName}}</div>
    <h2 class="font-bold">{{task.taskName}}</h2>
    <p>{{task.description}}</p>
    <div class="flex items-center justify-between">
      <div class="flex items-center px-2 py-1 text-gray-600 bg-gray-200 rounded-full">
        <i class="far fa-clock text-xs mr-1"></i>
        <span class="text-xs">10 Days</span>
      </div>
      <i class="far fa-arrow-alt-circle-up text-red-400"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object
    }
  }
};
</script>
<style>
</style>