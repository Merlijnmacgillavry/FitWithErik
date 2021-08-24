<template>
  <div class="content">
    <div class="navbar"></div>
    <Home />
  </div>
</template>

<script>
import Home from "./components/home.vue";

export default {
  name: "App",
  components: { Home },
};
</script>

<style lang=scss>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
