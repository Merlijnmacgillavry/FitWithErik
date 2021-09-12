<template>
  <div class="contact">
    <h2 class="contact__title">Contact</h2>
    <div class="contact__text">
      For any general questions about coaching, plans, recipes, or other choose
      <span class="primary">CONTACT ME</span>. If you want to apply for online
      coaching or talk to me about online coaching choose
      <span class="primary">APPLY NOW</span>, You will be redirected to the
      proper page where you can fill in the information required.
    </div>
    <div class="contact__buttons">
      <router-link to="/contact_me">
        <button class="btn">Contact Me</button></router-link
      >
      <router-link to="/apply">
        <button class="btn">Apply Now</button>
      </router-link>
    </div>
    <div class="contact__icons">
      <a
        href="https://www.youtube.com/channel/UCxZUxW676fzg2aXocWbhSuw"
        target="_blank"
      >
        <i class="fab fa-youtube fa-2x"></i>
      </a>
      <a href="https://www.facebook.com/FitwithErik" target="_blank">
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
  @include background-overlay("../assets/img/about_background.jpg");
  @include section-style;
  background-position: center 60%;
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
    &__buttons {
      flex-direction: row;
    }
  }
}
</style>
