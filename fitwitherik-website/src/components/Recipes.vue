<template>
  <section class="recipes">
    <h2 class="recipes__title">Recipes (Sneak Peek)</h2>
    <div class="recipes__card-container">
      <transition name="flip" mode="out-in">
        <div v-if="!cards[0].flipped" key="front" class="card">
          <div class="front-img">
            <img src="../assets/super_shrimp.jpg" alt="" />
          </div>
          <div class="front-content">
            <h3 class="recipe-title">super shrimp pokébowl</h3>
            <div class="recipe-description">
              Powerful bowl of healthy vegetables and fruit combined with shrimp
              as major protein source and rice as a base
            </div>
            <div class="recipe-stats">
              <p class="stats-item">Calories: 625</p>
              <p class="stats-item">|</p>
              <p class="stats-item">Prep time: 30 min</p>
              <p class="stats-item">|</p>
              <p class="stats-item">Serving size: 1 [2 small]</p>
            </div>
            <div class="recipe-ingredients">
              <p class="recipe-ingredients__text">Ingredients:</p>
              <div class="recipe-ingredients__lists">
                <ul>
                  <li>75 g Rice</li>
                  <li>150 g Shrimp</li>
                  <li>50 g Mango</li>
                  <li>50 g Paprika</li>
                </ul>
                <ul>
                  <li>50 g Cucumber</li>
                  <li>50 g Avacado</li>
                  <li>50 g Edamame</li>
                  <li>1 dash of wasabi seeds</li>
                </ul>
              </div>
              <p class="recipe-ingredients__text">
                Optional: add garlic to season the shrimp
              </p>
            </div>
            <button class="btn" v-on:click="toggleCard(cards[0])">
              LET'S MAKE THIS
            </button>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "Recipes",
  data: function () {
    return {
      cards: [
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
.recipes {
  @include background-overlay("../assets/plans.jpg");
  background-position: center 50%;
  text-align: center;
  @include section-style;
  &__title {
    @include section-title;
  }
  &__card-container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    .card {
      background: rgba(255, 255, 255, 0.2);
      @include frosted-glass;
      @include lifted;
      border-radius: 4px;
      min-height: 800px;
      width: 400px;
      max-width: 100%;
      margin: 2em auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 3px solid $primary-color;
      .front-img {
        img {
          width: 100%;
          height: auto;
          border-bottom: 3px solid $primary-color;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
      }
      .front-content {
        padding: 1em 1em;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .recipe-title {
          font-size: 2rem;
          text-transform: uppercase;
        }

        .recipe-stats {
          display: flex;
          justify-content: space-between;
          font-size: 0.9em;
        }
        .recipe-ingredients__text {
          font-size: 1.25rem;
          margin: 1rem 0;
          &:nth-child(2) {
            font-size: 1rem;
          }
        }
        .recipe-ingredients__lists {
          display: flex;
          justify-content: space-evenly;
          ul {
            font-size: 0.9rem;
            list-style: none;
            text-align: left;
            padding: 0.5em 0;
            &:nth-child(2) {
              text-align: right;
            }
          }
        }

        .btn {
          margin: 1em auto;
        }
      }
    }
  }
}
@include media-md {
  .recipes {
    color: pink;
  }
}
@include media-xl {
  .recipes {
    @include title-md-pd;
    &__title {
      font-size: $title-md;
    }
    &__card-container {
      width: 100%;
      flex-direction: row;
      .card {
        flex-direction: row;
        height: 600px;
        width: 100%;
        min-height: 100%;
        .front-img {
          width: 100%;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom: none;
          border-right: 3px solid $primary-color;
          img {
            height: 100%;
            width: auto;
          }
        }
        .front-content {
          width: 100%;
          padding: 2em 4em;
          justify-content: space-evenly;
          .recipe-title {
            font-size: 3rem;
          }
          .recipe-description {
            font-size: 2rem;
          }
          .recipe-stats {
            font-size: 1.5rem;
          }
          .recipe-ingredients {
            &__text {
              font-size: 2rem;
            }
            &__lists {
              ul {
                font-size: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>