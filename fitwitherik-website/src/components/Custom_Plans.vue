<template>
  <section class="custom-plans">
    <h2 class="custom-plans__title">Custom Plans</h2>
    <div class="custom-plans__card-container">
      <div class="card">
        <div v-if="!cards[0].flipped" class="front">
          <img src="../assets/plans_1.png" alt="" />
          <div class="content">
            <h3>MUSCLE MAXIMIZATION</h3>
            <p>Training plan</p>
          </div>
          <button class="btn" v-on:click="toggleCard(cards[0])">
            MORE INFO
          </button>
        </div>

        <div v-if="cards[0].flipped" class="back">
          <h3 class="title">THE MUSCLE MAXIMIZATION PLAN</h3>
          <ul class="items">
            <li>A 16-week personalized muscle building training program</li>
            <li>Adjusted to your needs every 4 weeks</li>
            <li>Access to my coaching app</li>
            <li>24/7 text support</li>
          </ul>
          <button class="btn" v-on:click="toggleCard(cards[0])">
            LESS INFO
          </button>
        </div>
      </div>
      <div class="card">
        <div v-if="!cards[1].flipped" class="front">
          <img src="../assets/plans_2.png" alt="" />
          <div class="content">
            <h3>FATLOSS FATALITY</h3>
            <p>Diet plan</p>
          </div>
          <button class="btn" v-on:click="toggleCard(cards[1])">
            MORE INFO
          </button>
        </div>

        <div v-if="cards[1].flipped" class="back">
          <h3 class="title">THE FATLOSS FATALITY DIET PLAN</h3>
          <ul class="items">
            <li>A 16-week personalized fat burning diet plan</li>
            <li>Adjusted to your needs every 2 weeks</li>
            <li>Access to my coaching app</li>
            <li>24/7 text support</li>
          </ul>
          <button class="btn" v-on:click="toggleCard(cards[1])">
            LESS INFO
          </button>
        </div>
      </div>
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
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.custom-plans {
  background: linear-gradient(
      to bottom right,
      rgba($background-color, 0.6),
      rgba($background-color, 0.95)
    ),
    url("../assets/plans.jpg");
  min-height: 100vh;
  background-size: cover;
  background-position: center 50%;
  text-align: center;
  @include section-style;
  &__title {
    @include section-title;
  }
  &__card-container {
    display: flex;
    flex-direction: column;
    .card {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      height: 600px;
      width: 400px;
      margin: 2em auto;
      webkit-box-shadow: 9px 10px 22px -8px rgba($background-color, 0.5);
      -moz-box-shadow: 9px 10px 22px -8px rgba($background-color, 0.5);
      box-shadow: 9px 10px 22px -8px rgba($background-color, 0.5);
      .btn {
        margin: auto 1em 1em 1em;
      }
      .front {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
          width: 100%;
          height: 357x;
          border-bottom: 3px solid $primary-color;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        .content {
          padding: 1em 1em;
          h3 {
            font-size: 2em;
          }
          p {
            font-size: 1.5em;
          }
        }
      }
      .back {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .title {
          padding: 1em;
          font-size: 2em;
          text-decoration: underline;
          text-decoration-color: $primary-color;
        }
        .items {
          padding: 0 4em;
          text-align: left;
          list-style-type: square;
          li {
            font-size: 1.5em;
          }
        }
      }
    }
  }
  .flip-enter-active {
    transition: all 0.4s ease;
  }

  .flip-leave-active {
    display: none;
  }

  .flip-enter,
  .flip-leave {
    transform: rotateY(180deg);
    opacity: 0;
  }
}
@include media-md {
  .custom-plans {
    &__card-container {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>