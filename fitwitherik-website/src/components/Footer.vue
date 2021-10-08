<template>
  <div class="footer" ref="footer">
    <p class="footer__text">{{ $t("footer.text") }}</p>
    <button v-on:click="consent()" class="btn">
      {{ $t("footer.button") }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    fadeIn: function () {
      let footer = this.$refs.footer;
      footer.classList.add("visible");
    },
    fadeOut: function () {
      let footer = this.$refs.footer;
      footer.classList.remove("visible");
    },
    consent: function () {
      this.$cookies.set("consent", true, "1d");
      this.fadeOut();
    },
  },
  mounted() {
    if (!this.$cookies.get("consent")) {
      this.fadeIn();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_config";
.footer {
  pointer-events: none;
  transition: 0.5s opacity ease-in-out;
  width: 100vw;
  position: fixed;
  bottom: 0;
  background: $background-color;
  display: flex;
  justify-content: center;
  padding: 2em;
  align-items: center;
  opacity: 0;
  &__text {
    font-size: 1em;
    padding: 0 0.5em;
  }
  .btn {
    padding: 0.5em 1em;
  }
}
.visible {
  opacity: 1;
  pointer-events: all;
}
@include media-md {
  .footer {
    padding: 1em 2rem;
    &__text {
      font-size: 1.5rem;
      padding: 0 1em;
    }
  }
}
</style>