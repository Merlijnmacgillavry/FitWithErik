<template>
  <div class="contact">
    <h2 class="contact__title">{{ $t("contact.title") }}</h2>
    <div class="contact__text">
      {{ $t("contact.text_1") }}
      <span class="primary">{{ $t("contact.button_1") }}</span
      >{{ $t("contact.text_2") }}
      <span class="primary">{{ $t("contact.button_2") }}</span
      >{{ $t("contact.text_3") }}
    </div>
    <div class="contact__buttons">
      <router-link to="/contact_me">
        <button class="btn">{{ $t("contact.button_1") }}</button></router-link
      >
      <router-link to="/apply_custom_plans/">
        <button class="btn">{{ $t("contact.button_3") }}</button></router-link
      >
      <router-link to="/apply">
        <button class="btn">{{ $t("contact.button_2") }}</button>
      </router-link>
    </div>
    <div class="contact__icons">
      <a
        href="https://www.youtube.com/channel/UCxZUxW676fzg2aXocWbhSuw"
        target="_blank"
      >
        <i class="fab fa-youtube fa-2x"></i>
      </a>
      <a href="https://www.facebook.com/erik.sunderman" target="_blank">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a target="_blank" href="https://www.instagram.com/fitwitherik">
        <i class="fab fa-instagram fa-2x"></i>
      </a>
      <a href="https://www.tiktok.com/@fitwitherik" target="_blank">
        <i class="fab fa-tiktok fa-2x"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.contact {
  @include background-overlay("../assets/img/contact_background.jpg", 180deg);
  @include section-style;
  background-position: 20% 30%;
  text-align: center;
  overflow-x: hidden;
  &__title {
    @include section-title;
  }
  &__text {
    font-size: 1.2rem;
    margin: 1em;
  }
  &__buttons {
    margin: 1em auto;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    button {
      width: 100%;
      margin: 1em 0;
      text-transform: uppercase;
    }
  }
  &__icons {
    display: flex;
    justify-content: center;
    a {
      padding: 2em 1rem;
      &:hover {
        color: $secondary-color;
      }
    }
  }
}
@include media-md {
  .contact {
    @include title-md-pd;
    &__title {
      font-size: $title-md;
    }
    &__text {
      font-size: 1.4rem;
    }
  }
}
</style>
