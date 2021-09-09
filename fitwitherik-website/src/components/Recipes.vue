<template>
  <section class="recipes">
    <h2 class="recipes__title">Recipes (Sneak Peek)</h2>
    <div
      class="recipes__card-container"
      v-for="(recipe, index) in recipes"
      :key="index"
    >
      <transition name="flip" mode="out-in">
        <div v-if="!recipe.flipped" key="card" class="card">
          <div class="card-img">
            <img :src="require(`@/assets/img/${recipe.img}`)" alt="" />
          </div>
          <div class="recipe">
            <h3 class="recipe__title">{{ recipe.name }}</h3>
            <div class="recipe__description item">
              {{ recipe.description }}
            </div>
            <div class="recipe__stats item">
              <p>Calories: {{ recipe.calories }}</p>
              <p>|</p>
              <p>Prep time: {{ recipe.duration }} Min</p>
              <p>|</p>
              <p>Serving size: {{ recipe.serving_size }}</p>
            </div>
            <div class="recipe__list">
              <p class="recipe__list__text">Ingredients:</p>
              <div class="recipe__list__lists">
                <ul>
                  <li
                    v-for="(ingredient, i) in recipe.ingredients.slice(
                      0,
                      recipe.ingredients.length / 2
                    )"
                    :key="i"
                  >
                    {{ ingredient.amount }} {{ ingredient.name }}
                  </li>
                </ul>
                <ul>
                  <li
                    v-for="(ingredient, i) in recipe.ingredients.slice(
                      recipe.ingredients.length / 2,
                      recipe.ingredients.length - 1
                    )"
                    :key="i"
                  >
                    {{ ingredient.amount }} {{ ingredient.name }}
                  </li>
                </ul>
              </div>
              <p class="recipe__list__text">
                Optional: add garlic to season the shrimp
              </p>
            </div>
            <button class="btn" v-on:click="toggleCard(recipe)">
              LET'S MAKE THIS
            </button>
          </div>
        </div>
        <div v-else key="back" class="card reverse">
          <div class="card-img">
            <div class="legend">
              <div class="label">
                <div class="color" id="red"></div>
                <p>Fats</p>
              </div>
              <div class="label">
                <div class="color" id="blue"></div>
                <p>Carbs</p>
              </div>
              <div class="label">
                <div class="color" id="green"></div>
                <p>Protein</p>
              </div>
            </div>
            <img class="chart" src="../assets/img/shrimp_chart.png" alt="" />
          </div>
          <div class="recipe">
            <h3 class="recipe__title">super shrimp pokébowl</h3>
            <div class="recipe__description item">
              Powerful bowl of healthy vegetables and fruit combined with shrimp
              as major protein source and rice as a base
            </div>
            <div class="recipe__stats item">
              <p>Calories: 625</p>
              <p>|</p>
              <p>Prep time: 30 min</p>
              <p>|</p>
              <p>Serving size: 1 [2 small]</p>
            </div>
            <div class="recipe__list">
              <p class="recipe__list__text">Steps:</p>
              <div class="recipe__list__lists flex-column">
                <ol>
                  <li
                    v-for="(step, i) in recipe.steps.slice(
                      0,
                      recipe.steps.length / 2
                    )"
                    :key="i"
                  >
                    {{ step }}
                  </li>
                </ol>
                <ol v-bind:start="recipe.steps.length / 2 + 1">
                  <li
                    v-for="(step, i) in recipe.steps.slice(
                      recipe.steps.length / 2,
                      recipe.steps.length - 1
                    )"
                    :key="i"
                  >
                    {{ step }}
                  </li>
                </ol>
              </div>
            </div>
            <button class="btn" v-on:click="toggleCard(recipe)">
              BACK TO INGREDIENTS
            </button>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import recipesList from "../assets/js/Recipes.js";
export default {
  name: "Recipes",
  data: function () {
    return {
      cards: [
        {
          flipped: false,
        },
      ],
      recipes: recipesList,
    };
  },
  methods: {
    toggleCard: function (card) {
      card.flipped = !card.flipped;
    },
  },
  mounted: function () {},
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.recipes {
  @include background-overlay("../assets/img/plans.jpg");
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
      height: 100%;
      width: 400px;
      max-width: 100%;
      margin: 2em auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 3px solid $primary-color;
      min-height: 940px;
      .card-img {
        .legend {
          display: flex;
          justify-content: space-evenly;
          .label {
            display: flex;
            margin-top: 1em;
            .color {
              width: 40px;
              height: 20px;
              border: 2px solid white;
            }
            #red {
              background-color: $red;
            }
            #green {
              background-color: $green;
            }
            #blue {
              background-color: #336699;
            }
            p {
              margin-left: 1em;
            }
          }
        }
        img {
          width: 100%;
          height: auto;
          border-bottom: 3px solid $primary-color;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
      }
      .recipe {
        padding: 1em 1em;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .item {
          margin: 0.5em 0;
        }
        &__title {
          font-size: 2rem;
          text-transform: uppercase;
        }

        &__stats {
          display: flex;
          justify-content: space-between;
          font-size: 1em;
          p:nth-child(even) {
            color: $primary-color;
          }
        }
        &__list__text {
          font-size: 1.25rem;
          margin: 1rem 0;
          &:nth-child(2) {
            font-size: 1rem;
          }
        }
        &__list__lists {
          display: flex;
          justify-content: space-evenly;
          flex-direction: row;
          font-size: 1.25em;
          ul {
            list-style: none;
            text-align: left;
            padding: 0.5em 0;
            li {
              padding: 0.25em 0;
            }
          }
          ol {
            text-align: left;
            padding: 0.5em 0.5em;
            &:nth-child(1) {
              padding-bottom: 0;
            }
            &:nth-child(2) {
              padding-top: 0em;
            }
            li {
              padding: 0.25em 0;
            }
          }
        }
        .flex-column {
          flex-direction: column;
          ol {
            &:nth-child(2) {
              text-align: left;
            }
          }
        }
        .btn {
          margin: 0.5em auto;
        }
      }
    }
  }
}

@include media-lg {
  .recipes {
    @include title-md-pd;
    &__title {
      font-size: $title-md;
    }
    &__card-container {
      width: 100%;
      height: 100%;
      .card {
        flex-direction: row;
        max-height: 600px;
        height: 100%;
        width: 100%;
        min-height: 0;
        .card-img {
          img {
            object-fit: cover;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            height: 100%;
            width: 100%;
            border-bottom: none;
            border-right: 3px solid $primary-color;
          }
          .chart {
            object-fit: contain;
          }
        }
        .recipe {
          width: 100%;
          padding: 2em 4em;
          justify-content: space-evenly;
          .recipe-title {
            font-size: 2rem;
          }
          &__description {
            font-size: 1rem;
          }
          &__stats {
            font-size: 1rem;
          }
          &__list {
            &__text {
              font-size: 1.5rem;
            }
            &__lists {
              font-size: 1.25rem;
            }
          }
        }
      }
      .reverse {
        flex-direction: row-reverse;
        .card-img {
          border-left: 3px solid $primary-color;

          img {
            border-right: none;
          }
        }
      }
    }
  }
}
@include media-xl {
  .recipes {
    &__card-container {
      .card {
        .recipe {
          &__title {
            font-size: 2rem;
          }
          &__description {
            font-size: 1.5rem;
          }
          &__stats {
            font-size: 1.5rem;
          }
          &__list {
            &__text {
              font-size: 1.5rem;
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