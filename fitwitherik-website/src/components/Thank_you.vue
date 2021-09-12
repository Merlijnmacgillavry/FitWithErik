<template>
  <div class="thank_you">
    <h2 class="thank_you__title">Thank You!</h2>
    <h3 class="thank_you__message">
      {{
        $route.params.type === "apply"
          ? "Thank you for submitting your application!"
          : "Thank you for submitting your question!"
      }}
    </h3>
    <router-link to="/">
      <button class="btn">GO BACK TO THE SITE</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Thank_You",
  props: ["type"],
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.thank_you {
  @include background-overlay("../assets/img/about_background.jpg");
  @include section-style;
  background-position: center 60%;
  text-align: center;
  overflow-x: hidden;
  &__title {
    @include section-title;
  }
  &__message {
    font-size: 1.2rem;
    margin: 1em;
  }
  .btn {
    margin-top: 2em;
  }
}
@include media-md {
  .thank_you {
    @include title-md-pd;
    &__title {
      font-size: $title-md;
    }
    &__message {
      font-size: 1.4rem;
    }
  }
}
</style>