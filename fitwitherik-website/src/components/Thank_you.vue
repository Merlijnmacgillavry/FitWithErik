<template>
  <div class="thank_you">
    <h2 class="thank_you__title">{{ $t("thankYou.title") }}</h2>
    <!-- <h3 class="thank_you_message" v-if="$">

    </h3> -->
    <h3 class="thank_you__message">
      {{
        $route.params.type === "apply"
          ? $t("thankYou.tagLine_a")
          : $t("thankYou.tagLine_q")
      }}
    </h3>
    <div class="applied" v-if="$route.params.type === 'apply'">
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/fitwitherik?hide_gdpr_banner=0"
        style="min-width: 320px; height: 750px"
      ></div>
    </div>
    <router-link to="/">
      <button class="btn">{{ $t("thankYou.button") }}</button>
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
   mounted () {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    document.head.appendChild(recaptchaScript)
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.thank_you {
  @include background-overlay("../assets/img/contact_background.jpg");
  @include section-style;
  background-position: 20% 30%;
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