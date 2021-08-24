<template>
  <div class="content">
    <Navbar />
    <Home />
  </div>
</template>

<script>
import Home from "./components/home.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Home, Navbar },
};
</script>

<style lang=scss>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
}
</style>
