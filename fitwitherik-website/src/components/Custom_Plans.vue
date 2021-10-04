<template>
  <section class="custom-plans">
    <h2 class="custom-plans__title">{{ $t("customPlans.title") }}</h2>
    <div
      class="custom-plans__plan"
      v-for="(plan, index) in $t('customPlans.plans')"
      :key="index"
    >
      <h3 class="title">
        {{ plan.name }}
      </h3>
      <p class="info">
        {{ plan.info }}
      </p>
      <div class="types">
        <div
          class="type"
          v-for="(type, index) in $t('customPlans.types')"
          :key="index"
        >
          <p class="type__name">{{ type.name }}</p>
          <div
            class="type__item"
            v-for="(item, index) in type.items"
            :key="index"
          >
            <i class="fas fa-check" v-if="item.active"></i>
            <i class="fas fa-ban" v-else></i>
            {{ item.name }}
          </div>
          <button class="btn">{{ $t("customPlans.select") }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Custom_Plans",
  data: function () {
    return {};
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
  &__plan {
    background-color: $background-color;
    margin-top: 2rem;
    padding: 1rem;
    .title {
      font-size: 3rem;
      color: $primary-color;
    }
    .info {
      padding: 1em;
      font-size: 1.5rem;
    }
    .types {
      display: flex;
      width: 100%;
      gap: 1em;
      justify-content: space-evenly;
      flex-direction: column;
      .type {
        flex-grow: 1;
        border: 3px solid $primary-color;
        padding: 1em;
        &__name {
          font-size: 2em;
          text-transform: uppercase;
          text-decoration: underline;
          color: $primary-color;
          margin-bottom: 1em;
        }
        &__item {
          display: flex;
          justify-content: left;
          text-align: left;
          font-size: 1.25em;
          margin-bottom: 1em;
          .fas {
            margin-right: 1em;
          }
          .fa-check {
            color: $green;
          }
          .fa-ban {
            color: $red;
          }
        }
        .btn {
          margin-top: 1em;
        }
      }
    }
  }
}
@include media-md {
  .custom-plans {
    @include title-md-pd;
    &__title {
      font-size: $title-md;
    }
    &__plan {
      .types {
        flex-direction: row;
      }
    }
  }
}
</style>