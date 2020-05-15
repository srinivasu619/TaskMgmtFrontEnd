<template>
  <div>
    <slot name="boardheader">
      <div
        class="flex items-center p-2 font-bold border-b border-gray-300 text-gray-500 text-xl"
      >TODO</div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "Board"
};
</script>
<style>
</style>