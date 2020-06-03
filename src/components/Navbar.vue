<template>
  <nav class="flex items-center justify-between px-4 py-2">
    <div class="text-3xl font-bold uppercase text-gray-500" id="logo">Task</div>
    <!-- <div class="flex items-center">
      <div class="notifications mr-5 xl:mr-12">
        <i class="fas fa-bell text-sm text-gray-400"></i>
      </div>
      <div class="profile">
        <i class="far fa-user-circle text-2xl text-gray-400"></i>
      </div>
    </div> -->
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
#logo {
  font-family: "Major Mono Display";
}
</style>