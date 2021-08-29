<template>
  <div>ABOUT ME</div>
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
    margin: 0em 0px;
    .text {
      font-size: 1.2rem;
      margin: 1em;
      text-align: justify;
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
    .about__section {
      margin: 3rem 0;
    }
    &__title {
      @include section-title;
    }
    &__starts-here {
      visibility: hidden;
      @include unselectable;
      font-size: 1.2rem;
      cursor: pointer;
      &:hover {
        @include bounce;
      }
    }
  }
  .about__3 {
    background-color: rgba(black, 0.75);
    @include section-style;
    padding-top: 5%;
    &__title {
      @include section-title;
    }
    .video {
      position: relative;
      display: block;
      margin: 0 auto;
      max-width: 100%;
      margin-top: 2em;
      padding-bottom: 40%;
      iframe {
        border: 3px solid $primary-color;
        position: absolute;
        top: 0;
        left: 20%;
        width: 60%;
        height: 90%;
      }
    }
  }
  .about__2 {
    background-color: rgba(black, 0.75);
    @include section-style;
    padding-top: 5%;
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
        font-size: 1.4rem;
      }
      .img {
        flex: 1;
        width: 100%;
      }
    }

    .reverse {
      flex-direction: row-reverse;
    }
  }
}
</style>