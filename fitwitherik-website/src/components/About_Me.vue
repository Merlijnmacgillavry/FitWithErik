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
      <div class="about__1__starts-here" v-on:click="scrollDown">
        <p>And my journey starts here...</p>
        <i class="fa fa-angle-down"></i>
      </div>
    </section>
    <section class="about__2" ref="about__2">
      <div class="about__section reverse">
        <div class="text">
          At 17 years old, I grew to be 201 cm (6’7ft) tall but weighed only 75
          kg (165 lbs). According to the the WHO (World Health Organization) was
          just at the border of being underweight. <br /><br />
          Action was required and the time for change has come...
        </div>
        <div class="img">
          <img src="../assets/about_2.png" alt="" />
        </div>
      </div>
      <div class="about__section">
        <div class="text">
          After the first few years of training I discovered how to build muscle
          and gained approximately 33 kg/72 lbs! Unfortunately, some of that was
          fat as well and I still didn’t look how I wanted to. Then I learned
          how to diet properly, what approaches work and how to structure a diet
          to stick to it...
        </div>
        <div class="img">
          <img src="../assets/about_3.png" alt="" />
        </div>
      </div>
    </section>
    <section class="about__3">
      <div class="about__section reverse">
        <div class="text">
          I lost about 15 kg/33 lbs of weight during the cut and maintained as
          much muscle as possible. Now I’m in the best shape of my life! After
          all these years of learning, making mistakes that I shouldn’t have, I
          know that it would have been easier and faster progress with guidance.
          That’s when I realized that I could be that guidance for other
          people’s fitness journey. Help them avoid mistakes and take correct
          approaches to their goals to get there as fast and in the best way
          possible.
        </div>
        <div class="img">
          <img src="../assets/about_4.png" alt="" />
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
      display: none;
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
      &__starts-here {
        display: block;
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