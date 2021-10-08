<template>
  <div class="apply_custom_plans">
    <h2 class="apply_custom_plans__title">{{ $t("applyCustomPlan.title") }}</h2>
    <section class="apply_custom_plans__questions">
      <div
        class="question"
        v-for="(field, index) in $t('applyCustomPlan.form')"
        :key="index"
      >
        <p>{{ field["fieldName"] }}:</p>

        <textarea
          v-if="field['types'].includes('text')"
          type="text"
          v-model="field['data']"
          :placeholder="field['placeholder']"
        />
        <div class="buttons" v-if="field['types'].includes('button')">
          <button
            class="btn"
            v-for="(option, o) in field['options']"
            :class="{
              active: $t('applyCustomPlan.form')[index]['options'][o]['active'],
            }"
            v-on:click="setField(index, option['data'], o)"
            :key="o"
          >
            {{ option["data"] }}
          </button>
        </div>
        <p class="error" v-if="field['error']">
          {{ field["feedback"] }}
        </p>
      </div>
      <button class="btn" v-on:click="sendForm">
        {{ $t("applyCustomPlan.submit") }}
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Apply_Custom_Plans",
  methods: {
    validateForm: function () {
      let errors = false;
      this.resetFormErrors();

      for (let field in this.$t("applyCustomPlan.form")) {
        if (this.$t("applyCustomPlan.form")[field]["data"] === "") {
          this.$t("applyCustomPlan.form")[field]["error"] = true;
          errors = true;
        }
      }
      if (
        !this.validateEmail(this.$t("applyCustomPlan.form")["email"]["data"]) &&
        !this.$t("applyCustomPlan.form")["email"]["error"]
      ) {
        this.$t("applyCustomPlan.form")["email"]["error"] = true;
        errors = true;
      }

      return errors;
    },
    sendForm: function () {
      if (!this.validateForm()) {
        const { name, email, phoneNumber, plan, type } = this.$t(
          "applyCustomPlan.form"
        );
        this.axios
          .post("https://formsubmit.co/ajax/merlijnmac@gmail.com", {
            _subject: "Custom Plan",
            _template: "table",
            name: name.data,
            email: email.data,
            phoneNumber: phoneNumber.data,
            plan: plan.data,
            type: type.data,
          })
          .then(() => {
            this.$router.push({
              name: "Thank_You",
              params: { type: "apply" },
            });
            this.resetData();
          });
      }
    },
    resetData: function () {
      for (let field in this.$t("applyCustomPlan.form")) {
        this.$t("applyCustomPlan.form")[field]["data"] = "";
      }
    },
    resetFormErrors: function () {
      for (let field in this.$t("applyCustomPlan.form")) {
        this.$t("applyCustomPlan.form")[field]["error"] = false;
      }
    },
    setField: function (field, value, o) {
      this.$t("applyCustomPlan.form")[field]["data"] = value;
      for (let opt in this.$t("applyCustomPlan.form")[field]["options"]) {
        this.$t("applyCustomPlan.form")[field]["options"][opt][
          "active"
        ] = false;
      }

      this.$t("applyCustomPlan.form")[field]["options"][o]["active"] = !this.$t(
        "applyCustomPlan.form"
      )[field]["options"][o]["active"];
    },
    validateAge: function (age) {
      if (this.validateNumber(age)) {
        const ageNumber = parseInt(age, 10);
        if (ageNumber > 15 && ageNumber < 100) {
          return true;
        }
      }
      return false;
    },
    validateNumber: function (value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    },
    validateEmail: function (email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
  created: function () {
    switch (this.$route.params.plan) {
      case 0: {
        this.$t("applyCustomPlan.form").plan.options[0].active = true;
        this.$t("applyCustomPlan.form").plan.data = this.$t(
          "applyCustomPlan.form"
        ).plan.options[0].data;
        break;
      }
      case 1: {
        this.$t("applyCustomPlan.form").plan.options[1].active = true;
        this.$t("applyCustomPlan.form").plan.data = this.$t(
          "applyCustomPlan.form"
        ).plan.options[1].data;
        break;
      }
      default:
        break;
    }
    switch (this.$route.params.type) {
      case 0: {
        this.$t("applyCustomPlan.form").type.options[0].active = true;
        this.$t("applyCustomPlan.form").type.data = this.$t(
          "applyCustomPlan.form"
        ).type.options[0].data;
        break;
      }
      case 1: {
        this.$t("applyCustomPlan.form").type.options[1].active = true;
        this.$t("applyCustomPlan.form").type.data = this.$t(
          "applyCustomPlan.form"
        ).type.options[1].data;
        break;
      }
      default:
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.apply_custom_plans {
  @include background-overlay("../assets/img/contact_background.jpg", 270deg);
  @include section-style;
  background-position: 20% 30%;
  text-align: center;
  overflow-x: hidden;

  &__title {
    @include section-title;
    text-transform: uppercase;
  }
  &__questions {
    width: 100%;
    padding: 2em 0.5em;
    .title {
      font-size: 2rem;
      // color: $primary-color;
      margin: 2em 0px;
    }
    .back {
      width: 100%;
      text-align: left;
    }
    .end {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .btn {
        width: 100%;
        margin: 0.5em auto;
      }
    }
    .question {
      margin: 3em 0;
      width: 100%;
      .buttons {
        margin-bottom: 1em;
        button {
          width: 100%;
          margin: 0.5em 0;
        }
        .active {
          color: $primary-color;

          border: 3px solid white;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
            0 0 20px rgba(255, 255, 255, 0.2);
        }
      }
      .other {
        button {
          margin: 0.5em 0;
        }
      }
      p {
        text-align: left;
        font-size: 1.5rem;
        margin-bottom: 0.5em;
      }
      input,
      textarea {
        width: 100%;
        height: 3em;
        font-family: inherit;
        padding: 0.25em 0.5em;
        border: 3px solid $primary-color;
        color: $secondary-color;
        font-size: 1.25rem;
        background-color: $background-color;
        border-radius: 4px;
        resize: vertical;
      }
    }
    .error {
      border: 3px solid $secondary-color;
      background: $red;
      padding: 0.25em 0.5em;
      margin: 0.5em 0;
      color: $secondary-color;
      border-radius: 4px;
    }
  }
  @include media-md {
    .apply_now {
      @include title-md-pd;
      &__title {
        font-size: $title-md;
      }
      &__questions {
        padding: 1em 6em;
        .end {
          flex-direction: row;
          .btn {
            margin: 0;
            width: 180px;
          }
        }
        .question {
          margin: 1em 0;
          textarea,
          input {
            margin: 0.5em 0;
            width: 100%;
          }
          .buttons {
            button {
              margin: 0.5em 0px;
              width: 100%;
            }
          }
        }
        .btn {
          margin-top: 1em;
        }
      }
    }
  }
}
</style>