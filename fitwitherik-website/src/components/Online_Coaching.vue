<template>
  <div class="coaching">
    <section class="coaching__1">
      <h2 class="coaching__1__title">
        {{ $t("onlineCoaching.title") }}
      </h2>
      <h3 class="coaching__1__tagLine">
        {{ $t("onlineCoaching.tagLine") }}
      </h3>
      <div class="coaching__1__text">
        <h4>{{ $t("onlineCoaching.experience") }}</h4>
        <p
          class="italic"
          v-for="(experience, index) in $t('onlineCoaching.experiences')"
          :key="index"
        >
          {{ experience }}
        </p>
      </div>
      <div class="coaching__1__text">
        <h4>{{ $t("onlineCoaching.want") }}</h4>
        <p
          class="italic"
          :key="index"
          v-for="(want, index) in $t('onlineCoaching.wants')"
        >
          {{ want }}
        </p>
      </div>
      <div class="coaching__1__find-out" v-on:click="scrollDown">
        <p>{{ $t("onlineCoaching.find") }}</p>
        <i class="fa fa-angle-down"></i>
      </div>
    </section>
    <section class="coaching__2" ref="coaching__2">
      <h2 class="coaching__2__title">{{ $t("onlineCoaching.title_2") }}</h2>
      <div class="coaching__2__cards">
        <div
          class="card"
          v-for="(card, index) in $t('onlineCoaching.cards')"
          :key="index"
        >
          <h4 class="card__title">{{ card.title }}</h4>
          <p class="card__text">
            {{ card.text }}
          </p>
        </div>
      </div>
      <div class="coaching__2__pricing">
        <div
          class="price"
          v-for="(plan, index) in $t('onlineCoaching.plans')"
          :key="index"
          v-on:click="selectPlan(plan.name)"
          :class="{ selected: plan.selected }"
        >
          <p class="name">{{ plan.name.toUpperCase() }} PLAN</p>
          <p class="discount">{{ plan.discount.toUpperCase() }}</p>
        </div>
      </div>
      <router-link
        :to="{ name: 'Apply_Now', params: { plan: this.getSelectedPlan() } }"
      >
        <button class="btn">
          {{ $t("onlineCoaching.button") }}
        </button></router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Online_Coaching",
  data: function () {
    return {};
  },
  methods: {
    isNL: function () {
      if (this.$i18n.locale === "nl") {
        return true;
      }
      return false;
    },
    selectPlan: function (name) {
      for (let plan in this.$t("onlineCoaching.plans")) {
        if (this.$t("onlineCoaching.plans")[plan].name === name) {
          this.$t("onlineCoaching.plans")[plan].selected = true;
        } else {
          this.$t("onlineCoaching.plans")[plan].selected = false;
        }
      }
    },
    getSelectedPlan: function () {
      for (let plan in this.$t("onlineCoaching.plans")) {
        if (this.$t("onlineCoaching.plans")[plan].selected) {
          return this.$t("onlineCoaching.plans")[plan].index;
        }
      }
      return "";
    },
    scrollDown: function () {
      let coaching__2 = this.$refs.coaching__2;
      const y = coaching__2.getBoundingClientRect().top;
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
.coaching {
  @include background-overlay("../assets/img/transformation2.jpg", 180deg);
  background-position: 93% top;
  text-align: center;
  background-attachment: fixed;
  .coaching__1 {
    @include section-style;
    &__title {
      @include section-title;
    }
    &__tagLine {
      font-size: 1.2rem;
      margin-top: 1em;
    }
    &__text {
      margin: 1.5em 0px;
      h4 {
        color: $primary-color;
        font-size: 1.4rem;
        margin-bottom: 1em;
      }
      p {
        margin: 1em 0px;
        font-size: 1.2rem;
      }
      .italic {
        font-style: italic;
      }
    }
    &__find-out {
      @include unselectable;
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
        @include frosted-glass;
        @include lifted;
        margin: 2em 0px;
        background: $background-color-25;
        border: 3px solid $primary-color;
        border-radius: 4px;
        padding: 2em 1em;
        &:hover {
          cursor: pointer;
          border: 3px solid white;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
            0 0 20px rgba(255, 255, 255, 0.2);
        }
        &__title {
          font-size: 2em;
          text-transform: uppercase;
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
      justify-content: space-between;

      .price {
        .name {
          font-size: 1em;
        }
        .discount {
          font-size: 0.75em;
        }
        &:hover {
          @include bounce;
          cursor: pointer;
        }
      }
      .selected {
        color: $primary-color;
        .name {
          font-size: 1.1em;
        }
        .discount {
          font-size: 0.85em;
        }
      }
    }
  }
  .btn,
  button {
    margin: 2.5em auto;
    min-width: 260px;
  }
}

@include media-md {
  .coaching {
    background-position: center top;
    .coaching__1 {
      @include title-md-pd;
      &__title {
        font-size: $title-md;
      }
      &__tagLine {
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
      min-height: 0;
      padding-top: 6.75%;
      &__title {
        font-size: $title-md;
      }
      &__pricing {
        justify-content: space-evenly;
        .price {
          .name {
            font-size: 1.5em;
          }
          .discount {
            font-size: 1em;
          }
        }
        .selected {
          color: $primary-color;
          .name {
            font-size: 1.6em;
          }
          .discount {
            font-size: 1.1em;
          }
        }
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