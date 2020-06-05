<template>
  <nav class="flex items-center justify-between px-2 py-2">
    <div class="text-3xl font-bold tracking-widest text-gray-600 flex items-center" id="logo">
      <img src="../assets/logo.png" alt="task_logo.png" class="mr-4">
      <span>Task</span>
    </div>
    <div class="flex items-center">
      <!-- <div class="notifications mr-5 xl:mr-12">
        <i class="fas fa-bell text-sm text-gray-400"></i>
      </div>
      <div class="profile">
        <i class="far fa-user-circle text-2xl text-gray-400"></i>
      </div> -->
      <div class="text-gray-700 font-bold">
        Made for <span class="py-2 px-3 bg-blue-200 text-blue-800 rounded-md">StackHack 1.0</span>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style>
nav {
  height: 10vh;
}
#logo > img{
  height: 44px;
}
</style>