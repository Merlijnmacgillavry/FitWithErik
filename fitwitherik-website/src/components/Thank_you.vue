<template>
  <div class="thank_you">
    <h2 class="thank_you__title">Thank You!</h2>
    <h3 v-if="$route.params.type === 'apply'" class="thank_you__message">
      Thank you for submitting your application!
      <br />
      Please schedule a meeting with me to further work out your goals and needs
    </h3>
    <h3 v-else>Thank you for submitting your question!</h3>
    <div
      v-if="$route.params.type === 'apply'"
      class="calendly-inline-widget"
      data-url="https://calendly.com/fitwitherik?background_color=0f0f0f&text_color=ffffff&primary_color=ff5f1f"
      style="min-width: 320px; height: 700px"
    ></div>
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
    color: $primary-color;
  }
  .btn {
    margin-top: 2em;
  }
  .calendly-inline-widget {
    height: 100%;
    * {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
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