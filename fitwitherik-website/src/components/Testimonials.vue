<template>
  <div class="testimonials">
    <h2 class="testimonials__title">Testimonials</h2>
    <section
      v-for="(t, index) in testimonials"
      :key="index"
      class="testimonials__section"
    >
      <div class="cards">
        <div key="front" class="card">
          <img
            :src="require(`@/assets/img/${t.imgBefore}`)"
            alt=""
            class="card__img"
          />
          <h2 class="card__name">Before</h2>
          <div class="card__stats">
            <p>
              <span class="orange">Bodyfat:</span>
              <span>{{ t.bfBefore }}%</span>
            </p>
            <p>
              <span class="orange">Bodyweight:</span>
              <span>{{ t.bwBefore }} kg</span>
            </p>
            <p>
              <span class="orange">Confidence:</span>
              <span>{{ t.cBefore }}/10</span>
            </p>
          </div>
        </div>
        <div key="back" class="card">
          <img
            :src="require(`@/assets/img/${t.imgAfter}`)"
            alt=""
            class="card__img"
          />
          <h2 class="card__name">After</h2>
          <div class="card__stats">
            <p>
              <span class="orange">Bodyfat:</span> <span>{{ t.bfAfter }}%</span>
            </p>
            <p>
              <span class="orange">Bodyweight:</span>
              <span>{{ t.bwAfter }} kg</span>
            </p>
            <p>
              <span class="orange">Confidence:</span>
              <span>{{ t.cAfter }}/10</span>
            </p>
          </div>
        </div>
      </div>
      <div class="info">
        <h3 class="info__title">
          {{ t.program }} Program - {{ Math.round(t.bwBefore - t.bwAfter) }} kg
        </h3>
        <h4 class="info__person">{{ t.name }}, {{ t.age }} years old</h4>
        <div class="info__review">"{{ t.review }}"</div>
        <p class="info__question">What's your favorite recipe?</p>
        <p class="info__answer">"{{ t.favRecipe }}"</p>
        <p class="info__question">
          Do you have a favorite exercise from the program?
        </p>
        <p class="info__answer">"{{ t.favExercise }}"</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  data: function () {
    return {
      testimonials: [
        {
          imgBefore: "merlijnBefore.png",
          imgAfter: "merlijnAfter.png",
          name: "Merlijn",
          age: 24,
          program: "Online Coaching",
          review:
            "Before getting coached by Erik, I had been training in the gym for about 4 years. Of which most of the time I had practically no idea of what I was doing and how I should be training. Ofcourse I got stronger but I also got fat and was just eating very unhealthy. When starting with Erik I learned that getting fit isn't just training. It's about food, sleep, water intake and also the right kind of training. With Erik I lost a lot of weight while keeping (maybe even gaining muscle). I FEEL better and I'm also doing better in all aspects of my life. I'll be continueing my coaching by Erik because I know it is actually worth it.",
          favRecipe:
            "My favorite recipe is definitely the protein pancake! I'm eating it everyday!",
          favExercise:
            "Although I liked them all, I think my favorite was the chest supported lat pulldown.",
          bfBefore: 20,
          bfAfter: 13,
          bwBefore: 88.9,
          bwAfter: 78.5,
          cBefore: 6,
          cAfter: 9,
        },
      ],
    };
  },
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.testimonials {
  @include background-overlay("../assets/img/testimonials.jpg", 180deg);
  text-align: center;
  @include section-style;
  &__title {
    @include section-title;
  }
  &__section {
    display: flex;
    flex-direction: column;
    border: 3px solid $primary-color;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.2);
    @include frosted-glass;
    @include lifted;
    margin-top: 2rem;
    .cards {
      display: flex;
    }
    .card {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &__img {
        width: 100%;
      }
      &__name {
        padding-top: 0.5em;
        font-size: 2rem;
        text-decoration: underline $primary-color;
      }
      &__stats {
        p {
          display: flex;
          justify-content: space-between;
          .orange {
            color: $primary-color;
            text-transform: uppercase;
          }
        }
        padding: 0.5em;
        font-size: 1rem;
        text-align: left;
      }
      .btn {
        margin: auto 1em 1em 1em;
      }
    }
    .info {
      margin: 0em 1em;
      padding: 1em;
      text-align: left;
      &__title {
        color: $primary-color;
        font-size: 3rem;
      }
      &__person {
        font-size: 2rem;
        padding: 0.5em 0;
      }
      &__review,
      &__answer {
        font-size: 1.25rem;
        font-style: italic;
        padding: 0.5em 0;
      }
      &__question {
        padding-top: 1em;
        font-size: 1.5rem;
      }
    }
  }
}
@include media-md {
  .testimonials {
    @include title-md-pd;
    &__section {
      flex-direction: row;
      justify-content: space-evenly;
      .card {
        min-height: 500px;
        &__img {
          max-height: 350px;
          width: auto;
        }
        &__stats {
          font-size: 1.5rem;
          padding-bottom: 1rem;
        }
        .btn {
          padding: 0.5em 1em;
        }
      }
      .info {
        &__title {
          font-size: 2rem;
        }
        &__person {
          font-size: 1.5rem;
        }
        &__review,
        &__answer {
          font-size: 1rem;
          font-style: italic;
        }
        &__question {
          font-size: 1.25rem;
        }
      }
    }
    &__title {
      font-size: $title-md;
    }
  }
}
@include media-lg {
  .testimonials {
    &__section {
      .info {
        &__title {
          font-size: 3rem;
        }
        &__person {
          font-size: 2rem;
        }
        &__review,
        &__answer {
          font-size: 1.25rem;
          font-style: italic;
        }
        &__question {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>