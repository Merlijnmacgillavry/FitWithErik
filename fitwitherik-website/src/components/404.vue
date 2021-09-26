<template>
  <div class="error">
    <section class="error__1">
      <div class="error__1__title">
        <h1>404</h1>
        <h2>{{ $t("page404.tagLine") }}</h2>
      </div>
      <router-link to="/"
        ><button class="btn">{{ $t("page404.button") }}</button>
      </router-link>
    </section>
    <div class="amigo">
      <span class="amigo__text"> "{{ $t("page404.amigoText") }}" </span>
      <img src="../assets/img/amigo.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  methods: {},
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.error {
  @include background-overlay("../assets/img/home.jpeg");
  background-position: center 50%;
  text-align: center;
  overflow: hidden;
  .error__1 {
    background-color: rgba(black, 0.75);
    @include section-style;
    padding-top: 10%;
    .btn {
      margin: 1.5em auto;
    }
    &__title {
      color: $primary-color;
      h1 {
        font-size: 10rem;
      }
      h2 {
        font-size: 3rem;
      }
      h1,
      h2 {
        display: inline-block;
      }
    }
  }
}
.amigo {
  position: fixed;
  bottom: -10%;
  right: -5%;
  height: 50%;
  &__text {
    position: absolute;
    color: white;
    right: 85%;
    width: 100%;
    font-size: 1em;
    top: 20%;
  }
  img {
    height: 100%;
  }
}
@include media-md {
  .error {
    .error__1 {
      padding-top: 12.5%;
      &__title {
        h2 {
          margin-left: 1.2em;
        }
      }
    }
  }
  .amigo {
    right: 0;
  }
}
</style>