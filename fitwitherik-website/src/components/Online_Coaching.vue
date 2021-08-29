<template>
  <div class="coaching">
    <section class="coaching__1">
      <h2 class="coaching__1__title">Online Coaching Program</h2>
      <p class="coaching__1__tagline">
        You want to get the results that you've been aiming for all along?
      </p>
      <div class="coaching__1__text">
        <h4>Are you experiencing this?</h4>
        <p class="red">
          Tried out countless diet plans but none of them seem to work?
        </p>
        <p class="red">Don't know where to start with nutrition or training?</p>
      </div>
      <div class="coaching__1__text">
        <h4>Do you want to...</h4>
        <p class="green">...eat the foods you like and LOSE weight?</p>
        <p class="green">...see amazing results in a matter of weeks?</p>
        <p class="green">
          ...get amazing results without giving up your social life?
        </p>
      </div>
      <div class="coaching__1__find-out" v-on:click="scrollDown">
        <p>Find out more...</p>
        <i class="fa fa-angle-down"></i>
      </div>
    </section>
    <section class="coaching__2" ref="coaching__2">
      <h2 class="coaching__2__title">What's included in the program?</h2>
      <div class="coaching__2__cards">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <h4 class="card__title">{{ card.title }}</h4>
          <p class="card__text">
            {{ card.text }}
          </p>
        </div>
      </div>
      <div class="coaching__2__pricing">
        <div class="price">
          <p class="name">WEEKLY PLAN</p>
          <p class="discount" style="text-decoration: line-through">
            NO DISCOUNT
          </p>
        </div>
        <div class="price">
          <p class="name">4 WEEKLY PLAN</p>
          <p class="discount">12.5% OFF/WEEK</p>
        </div>
        <div class="price">
          <p class="name">16 WEEK PLAN</p>
          <p class="discount">25% OFF/WEEK</p>
        </div>
      </div>
      <button class="btn">CHANGE YOUR LIFE</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Online_Coaching",
  data: function () {
    return {
      cards: [
        {
          title: "Consultation call",
          text: "We talk about your past experiences and what kind of results you want",
        },
        {
          title: "Access to private FB group",
          text: "Join the community and get extra encourament from people with the same mindset!",
        },
        {
          title: "Personalized workouts",
          text: "Your custom workout plan without guesswork and better results!",
        },
        {
          title: "Personalized nutrition",
          text: "Your custom nutrition plan with the foods you like including acces to my recipe book!",
        },
        {
          title: "1 on 1 checkin calls",
          text: "Every 2 weeks online meeting where we adjust our plan and I can keep you accountable!",
        },
        {
          title: "Access to Fitness APP",
          text: "Get access to my fitness app where you can track your workouts, nutrition and communicate with me!",
        },
        {
          title: "24/7 support",
          text: "Text support 24/7 to ask questions and get help whenever necessary",
        },
        {
          title: "Money Back Guarantee",
          text: "I offer money back guarantee to assure you this program works!",
        },
      ],
    };
  },
  methods: {
    scrollDown: function () {
      let coaching__2 = this.$refs.coaching__2;
      const y = coaching__2.getBoundingClientRect().top;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.coaching {
  background: linear-gradient(
      to bottom right,
      rgba($background-color, 0.6),
      rgba($background-color, 0.95)
    ),
    url("../assets/transformation2.jpg");
  min-height: 100vh;
  background-size: cover;
  background-position: 93% top;
  text-align: center;
  background-attachment: fixed;
  .coaching__1 {
    background-color: rgba(black, 0.75);
    @include section-style;
    &__title {
      @include section-title;
    }
    &__tagline {
      font-size: 1.2rem;
      margin: 1em 0px;
    }
    &__text {
      margin: 3em 0px;
      h4 {
        font-size: 1.4rem;
        margin-bottom: 1em;
      }
      p {
        margin: 1em 0px;
        font-size: 1.2rem;
      }
    }
    &__find-out {
      font-size: 1.2rem;
      cursor: pointer;
      &:hover {
        @include bounce;
      }
    }
  }
  .coaching__2 {
    @include section-style;
    &__title {
      @include section-title;
    }
    &__cards {
      margin: 2em 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .card {
        margin: 2em 0px;
        background: rgba(255, 255, 255, 0.2);
        border: 3px solid $primary-color;
        border-radius: 4px;
        padding: 2em 0px;
        &:hover {
          @include grow;
          cursor: pointer;
        }
        &__title {
          font-size: 2em;
          font-family: "Big Shoulders Text", bold;
        }
        &__text {
          margin-top: 1em;
        }
      }
    }
    &__pricing {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      .price {
        .name {
          font-size: 1.5em;
        }
        &:hover {
          @include bounce;
          cursor: pointer;
        }
      }
    }
  }
}

@include media-md {
  .coaching {
    background-position: center top;
    .coaching__1 {
      padding-top: 12.5%;
      &__title {
        font-size: 6rem;
      }
      &__tagline {
        font-size: 1.6rem;
      }
      &__text {
        h4 {
          font-size: 1.8rem;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
    .coaching__2 {
      padding-top: 12.5%;
      &__title {
        font-size: 6rem;
      }
      &__cards {
        flex-direction: row;
        flex-wrap: wrap;
        .card {
          flex: 1 0 40%;
          margin: 1em;
          padding: 2em 4em;
        }
      }
    }
  }
}
@include media-xl {
  .coaching {
    .coaching__2 {
      &__cards {
        .card {
          flex: 1 0 21%;
        }
      }
    }
  }
}
</style>