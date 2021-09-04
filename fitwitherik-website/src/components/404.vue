<template>
  <div class="error">
    <section class="error__1">
      <div class="error__1__title">
        <h1>404</h1>
        <h2>GAINS NOT FOUND</h2>
      </div>
      <button class="btn" v-on:click="returnHome">Go Back to the Site</button>
    </section>
    <div class="amigo">
      <span class="amigo__text">
        "You're on the wrong page there buddy, please click on the button to
        return to the site or else I will become big and strong and make you!"
      </span>
      <img src="../assets/img/amigo.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  methods: {
    returnHome: function () {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.error {
  background: linear-gradient(
      to bottom right,
      rgba($background-color, 0.6),
      rgba($background-color, 0.95)
    ),
    url("../assets/img/plans.jpg");
  background-size: cover;
  background-position: center 50%;
  text-align: center;
  background-attachment: fixed;
  overflow-x: hidden;
  min-height: 100vh;
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
  position: absolute;
  bottom: -5%;
  right: 0%;
  height: 50%;
  &__text {
    position: absolute;
    color: white;
    right: 80%;
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
}
</style>