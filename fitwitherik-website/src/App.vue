<template>
  <div class="content">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Navbar, Footer },
};
</script>

<style lang=scss >
@import "./scss/_config.scss";
</style>
