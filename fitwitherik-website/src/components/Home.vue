<template>
  <section class="home">
    <div class="home__content">
      <h1 class="home__content__title">FIT WITH ERIK COACHING</h1>
      <p class="home__content__tag-line">
        Helps you lose fat, build muscle and feel great WITHOUT giving up your
        personal life!
      </p>
      <div class="home__content__btn">
        <button class="btn">CHANGE YOUR LIFE</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "../_config.scss";

.home {
  background: linear-gradient(
      to bottom right,
      rgba($background-color, 0.6),
      rgba($background-color, 0.95)
    ),
    url("../assets/home.jpeg");
  min-height: 100vh;
  background-size: cover;
  background-position: center top;

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
    &__btn {
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