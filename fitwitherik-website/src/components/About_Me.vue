<template>
  <div class="about">
    <section class="about__1">
      <h2 class="about__1__title">{{ $t("about.title") }}</h2>
      <div class="about__1__intro about__section">
        <div class="text item">
          {{ $t("about.about_1.item_1") }} <br /><br />
          {{ $t("about.about_1.item_2") }}
          <span class="green">{{ $t("about.about_1.positive_1") }}</span>
          {{ $t("about.about_1.item_3") }}

          <span class="red">{{ $t("about.about_1.negative") }}</span>
          <br /><br />
          {{ $t("about.about_1.item_4") }}

          <span class="green"> {{ $t("about.about_1.positive_2") }} </span>
          {{ $t("about.about_1.item_5") }}
        </div>
        <div class="img item">
          <img src="../assets/img/about_1.png" alt="" />
        </div>
      </div>
    </section>
    <section class="about__2" ref="about__2">
      <div class="about__section reverse">
        <div class="text">
          {{ $t("about.about_2.item_1") }}

          <br /><br />
          {{ $t("about.about_2.item_2") }}
        </div>
        <div class="img">
          <img src="../assets/img/about_2.png" alt="" />
        </div>
      </div>
      <div class="about__section">
        <div class="text">
          {{ $t("about.about_2.item_3") }}
        </div>
        <div class="img">
          <img src="../assets/img/about_3.png" alt="" />
        </div>
      </div>
    </section>
    <section class="about__3">
      <div class="about__section reverse">
        <div class="text">{{ $t("about.about_2.item_4") }}</div>
        <div class="img">
          <img src="../assets/img/about_4.png" alt="" />
        </div>
      </div>
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wtNjegvvMYg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About_Me",
  methods: {
    scrollDown: function () {
      let about__2 = this.$refs.about__2;
      const y = about__2.getBoundingClientRect().top;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.about {
  @include background-overlay("../assets/img/about_background.jpg", 225deg);
  background-position: center 60%;
  text-align: center;
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
    @include section-style;
    padding-top: 5%;
  }
}
@include media-md {
  .about {
    .about__1 {
      @include title-md-pd;
      &__title {
        font-size: $title-md;
      }
    }
    .about__3 {
      .video {
        margin-top: 10%;
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