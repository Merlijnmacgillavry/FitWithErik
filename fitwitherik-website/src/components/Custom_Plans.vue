<template>
  <section class="custom-plans">
    <h2 class="custom-plans__title">Custom Plans</h2>
    <div class="custom-plans__card-container">
      <transition name="flip" mode="out-in">
        <div v-if="!cards[0].flipped" key="front" class="card">
          <img class="front-img" src="../assets/img/plans_1.png" alt="" />
          <div class="front-content">
            <h3>MUSCLE MAXIMIZATION</h3>
            <p>Training plan</p>
          </div>
          <button class="btn" v-on:click="toggleCard(cards[0])">
            MORE INFO
          </button>
        </div>
        <div v-else key="back" class="card">
          <h3 class="back-title">THE MUSCLE MAXIMIZATION PLAN</h3>
          <ul class="back-items">
            <li>
              <i class="fas fa-check"></i>
              <p>A 16-week personalized muscle building plan</p>
            </li>
            <li>
              <i class="fas fa-check"></i>
              <p>Adjusted to your needs every 4 weeks</p>
            </li>
            <li>
              <i class="fas fa-check"></i>
              <p>Access to my coaching app</p>
            </li>
            <li>
              <i class="fas fa-check"></i>
              <p>24/7 text support</p>
            </li>
          </ul>
          <button class="btn" v-on:click="toggleCard(cards[0])">
            LESS INFO
          </button>
        </div>
      </transition>
      <router-link to="/apply"
        ><button class="btn" id="apply">CHANGE YOUR LIFE</button></router-link
      >
      <transition name="flip" mode="out-in" key="front">
        <div v-if="!cards[1].flipped" class="card">
          <img class="front-img" src="../assets/img/plans_2.png" alt="" />
          <div class="front-content">
            <h3>FATLOSS FATALITY</h3>
            <p>Diet plan</p>
          </div>
          <button class="btn" v-on:click="toggleCard(cards[1])">
            MORE INFO
          </button>
        </div>
        <div class="card" v-else key="back">
          <h3 class="back-title">THE FATLOSS FATALITY DIET PLAN</h3>
          <ul class="back-items">
            <li>
              <i class="fas fa-check"></i>
              <p>A 16-week personalized fat burning diet plan</p>
            </li>
            <li>
              <i class="fas fa-check"></i>
              <p>Adjusted to your needs every 2 weeks</p>
            </li>
            <li>
              <i class="fas fa-check"></i>
              <p>Access to my coaching app</p>
            </li>
            <li>
              <i class="fas fa-check"></i>
              <p>24/7 text support</p>
            </li>
          </ul>
          <button class="btn" v-on:click="toggleCard(cards[1])">
            LESS INFO
          </button>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "Custom_Plans",
  data: function () {
    return {
      cards: [
        {
          flipped: false,
        },
        {
          flipped: false,
        },
      ],
    };
  },
  methods: {
    toggleCard: function (card) {
      card.flipped = !card.flipped;
    },
  },
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.custom-plans {
  @include background-overlay("../assets/img/plans.jpg", 225deg);
  background-position: center 50%;
  text-align: center;
  @include section-style;
  &__title {
    @include section-title;
  }
  &__card-container {
    display: flex;
    flex-direction: column;
    #apply {
      align-self: flex-end;
      margin: 2rem auto;
      order: 3;
    }
    .card {
      background: rgba(255, 255, 255, 0.2);
      @include frosted-glass;
      @include lifted;
      border-radius: 4px;
      height: 600px;
      width: 400px;
      max-width: 100%;
      margin: 2em auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 3px solid $primary-color;
      .btn {
        margin: auto 1em 1em 1em;
      }
      .front-img {
        width: 100%;
        border-bottom: 3px solid $primary-color;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .front-content {
        padding: 1em 1em;
        h3 {
          font-size: 2em;
          text-decoration: underline;
          text-decoration-color: $primary-color;
        }
        p {
          font-size: 1.5em;
        }
      }

      .back-title {
        padding: 1em;
        font-size: 2em;
        text-decoration: underline;
        text-decoration-color: $primary-color;
      }
      .back-items {
        padding: 0 4em;
        text-align: left;
        list-style-type: none;
        li {
          margin: 0.5em 0;
          font-size: 1.5em;
          display: inline-flex;
          p {
            margin-left: 0.5em;
          }
          i {
            color: $green;
          }
        }
      }
      &:hover {
        border: 3px solid white;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
          0 0 20px rgba(255, 255, 255, 0.2);
      }
    }
  }
}
@include media-md {
  .custom-plans {
    @include title-md-pd;
    &__card-container {
      flex-direction: row;
      justify-content: space-between;
      #apply {
        order: 0;
      }
    }
    &__title {
      font-size: $title-md;
    }
  }
}
</style>