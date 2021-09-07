<template>
  <div class="contact_me">
    <h2 class="contact_me__title">Contact Me</h2>
    <button class="btn" v-on:click="sendData">SEND DATA</button>
  </div>
</template>

<script>
export default {
  name: "Contact Me",
  methods: {
    sendData: function () {
      this.axios.post("https://formsubmit.co/ajax/merlijnmac@gmail.com", {
        name: "FormSubmit",
        message: "I'm from Devro LABS",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.contact_me {
  @include background-overlay("../assets/img/about_background.jpg");
  @include section-style;
  background-position: center 60%;
  text-align: center;
  overflow-x: hidden;
  &__title {
    @include section-title;
  }
}
</style>