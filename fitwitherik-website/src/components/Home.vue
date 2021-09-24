<template>
  <section class="home">
    <div class="home__content">
      <h1 class="home__content__title">FIT WITH ERIK COACHING</h1>
      <p class="home__content__tag-line">{{ $t("home.tagLine") }}</p>
      <div class="home__content__btn">
        <router-link to="/apply"
          ><button class="btn">{{ $t("home.button") }}</button></router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_config.scss";

.home {
  @include background-overlay("../assets/img/home.jpeg", 135deg);
  min-height: 100vh;
  background-size: cover;
  background-position: center 50%;
  .home__content {
    padding: 40% 5% 0 5%;
    font-family: "Bebas Neue";
    &__title {
      text-align: center;
      color: $secondary-color;
      border: none;
      font-size: 3.8rem;
    }
    &__tag-line {
      font-family: "Big Shoulders Text", bold 500;
      text-align: center;
      font-size: 2rem;
      text-transform: uppercase;
    }
    &__btn,
    button {
      margin: 1.5em auto;
      min-width: 260px;
      text-align: center;
    }
  }
}

@include media-md {
  .home {
    .home__content {
      padding-top: 25%;
    }
  }
}
</style>