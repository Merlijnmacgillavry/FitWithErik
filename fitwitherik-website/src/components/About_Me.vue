<template>
  <div class="about">
    <section class="about__1">
      <h2 class="about__1__title">About me</h2>
      <div class="about__1__intro about__section">
        <div class="text item">
          My name is Erik Sunderman and I’m a 24 year old Online Fitness Coach.
          <br /><br />
          When I first started training at the age of 17 I wanted to know
          everything there is to know about
          <span class="green"
            >health, resistance training, nutrition and goal setting.</span
          >
          Soon I found out that the amount of available information was enormous
          and it has taken me several years to gather enough knowledge and
          filter through <span class="red">ineffective approaches.</span>
          <br /><br />
          My journey has given me the ability to not only use this knowledge for
          my own, but also help people improve their health and reach their
          goals <span class="green">faster</span> without the need to do
          research for years.
        </div>
        <div class="img item">
          <img src="../assets/about_1.png" alt="" />
        </div>
      </div>
      <div class="about__1__starts-here">
        <p>And my journey starts here...</p>
        <i class="fa fa-angle-down"></i>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About_Me",
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.about {
  background: linear-gradient(
      to bottom right,
      rgba($background-color, 0.6),
      rgba($background-color, 0.95)
    ),
    url("../assets/about_background.jpg");
  min-height: 100vh;
  background-size: cover;
  background-position: center 60%;
  text-align: center;
  background-attachment: fixed;
  overflow-x: hidden;
  .about__section {
    display: flex;
    flex-direction: column-reverse;
    margin: 3em 0px;
    .text {
      font-size: 1.2rem;
      margin: 1em;
    }
    .img {
      width: 50%;
      margin: auto;
      img {
        border: 3px solid $primary-color;
        width: 100%;
      }
    }
  }
  .about__1 {
    background-color: rgba(black, 0.75);
    @include section-style;
    &__title {
      @include section-title;
    }
  }
}
@include media-md {
  .about {
    .about__1 {
      padding-top: 12.5%;
      &__title {
        font-size: 6rem;
      }
    }
    .about__section {
      flex-direction: row;
      align-items: center;
      .text {
        flex: 3;
      }
      .img {
        flex: 1;
        width: 100%;
      }
    }
  }
}
</style>