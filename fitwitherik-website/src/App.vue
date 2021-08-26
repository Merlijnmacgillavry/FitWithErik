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

<style lang=scss >
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100;300;400;500;600;700;800;900&display=swap");

@import "./_config.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@mixin transition-ease {
  transition: all 0.5s ease-in-out;
}
body {
  font-family: "Big Shoulders Text";
  background: lighten($background-color, $amount: 10);
  color: $primary-color;
}
h1 {
  max-width: 80rem;
  font-size: 3rem;
  border-bottom: 4px solid $primary-color;
  font-family: "Big Shoulders Text", bold 700;
  cursor: pointer;
}
</style>
