<template>
  <div id="app" class="h-full w-9/12 mx-auto">
    <navbar></navbar>
    <main class="view">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  font-family: "Inconsolata", sans-serif;
}
.view {
  height: 90vh;
}
</style>
