<template>
  <div class="testimonials">
    <h2 class="testimonials__title">{{ $t("testimonials.title") }}</h2>
    <section
      v-for="(t, index) in $t('testimonials.testimonials')"
      :key="index"
      class="testimonials__section"
    >
      <div class="cards">
        <div key="front" class="card">
          <img
            :src="require(`@/assets/img/${t.imgBefore}`)"
            alt=""
            class="card__img"
            style="border-top-left-radius: 3px"
          />
          <h2 class="card__name">{{ $t("testimonials.constants.before") }}</h2>
          <div class="card__stats">
            <p>
              <span class="orange"
                >{{ $t("testimonials.constants.bodyFat") }}:</span
              >
              <span>{{ t.bfBefore }}%</span>
            </p>
            <p>
              <span class="orange"
                >{{ $t("testimonials.constants.bodyWeight") }}:</span
              >
              <span>{{ t.bwBefore }} kg</span>
            </p>
            <p>
              <span class="orange"
                >{{ $t("testimonials.constants.confidence") }}:</span
              >
              <span>{{ t.cBefore }}/10</span>
            </p>
          </div>
        </div>
        <div key="back" class="card">
          <img
            :src="require(`@/assets/img/${t.imgAfter}`)"
            alt=""
            class="card__img"
            style="border-top-right-radius: 3px"
          />
          <h2 class="card__name">{{ $t("testimonials.constants.after") }}</h2>
          <div class="card__stats">
            <p>
              <span class="orange"
                >{{ $t("testimonials.constants.bodyFat") }}:</span
              >
              <span>{{ t.bfAfter }}%</span>
            </p>
            <p>
              <span class="orange"
                >{{ $t("testimonials.constants.bodyWeight") }}:</span
              >
              <span>{{ t.bwAfter }} kg</span>
            </p>
            <p>
              <span class="orange"
                >{{ $t("testimonials.constants.confidence") }}:</span
              >
              <span>{{ t.cAfter }}/10</span>
            </p>
          </div>
        </div>
      </div>
      <div class="info">
        <h3 class="info__title">
          {{ t.program }} {{ $t("testimonials.constants.program") }} -
          {{ Math.round(t.bwBefore - t.bwAfter) }} kg
        </h3>
        <h4 class="info__person">
          {{ t.name }}, {{ t.age }} {{ $t("testimonials.constants.age") }}
        </h4>
        <div class="info__review">"{{ t.review }}"</div>
        <p class="info__question">
          {{ $t("testimonials.constants.question_1") }}
        </p>
        <p class="info__answer">"{{ t.favRecipe }}"</p>
        <p class="info__question">
          {{ $t("testimonials.constants.question_2") }}
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
    return {};
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
    background-color: rgba($background-color, 0.6);
    margin-top: 2rem;
    .cards {
      display: flex;
    }
    .card {
      background-color: $background-color;
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