<template>
  <div class="apply_now">
    <h2 class="apply_now__title">{{ $t("applyNow.title") }}</h2>

    <section v-if="currentStep === 0" class="apply_now__questions">
      <h3 class="title">
        {{ $t("applyNow.tagLine_1") }}
      </h3>
      <div
        v-for="(field, index) in $t('applyNow.step_1')"
        :key="index"
        class="question"
        ref="name"
      >
        <p>{{ field["fieldName"] }}:</p>

        <input
          type="text"
          v-model="field['data']"
          :placeholder="field['placeholder']"
        />
        <p class="error" v-if="field['error']">
          {{ field["feedback"] }}
        </p>
      </div>
      <button class="btn" v-on:click="this.completeStep_1">
        {{ $t("applyNow.next") }}
      </button>
    </section>
    <section v-if="currentStep === 1" class="apply_now__questions">
      <h3 class="title">
        {{ $t("applyNow.tagLine_2") }}
      </h3>

      <div
        v-for="(field, index) in $t('applyNow.step_2')"
        :key="index"
        class="question"
        ref="name"
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
              active: $t('applyNow.step_2')[index]['options'][o]['active'],
            }"
            v-on:click="setField(index, option['data'], o)"
            :key="o"
          >
            {{ option["data"] }}
          </button>
        </div>
        <div class="other" v-if="field['types'].includes('other')">
          <textarea
            v-show="
              $t('applyNow.step_2')[index]['options'][
                Object.keys(field['options']).length - 1
              ]['active']
            "
            maxlength="500"
            type="text"
            v-model="field['data']"
            :placeholder="field['placeholder']"
          />
        </div>
        <p class="error" v-if="field['error']">
          {{ field["feedback"] }}
        </p>
      </div>
      <div class="end">
        <input
          type="text"
          v-model="honey"
          name="_honey"
          style="display: none"
        />
        <button class="btn" v-on:click="goBack">
          {{ $t("applyNow.back") }}
        </button>
        <button class="btn" v-on:click="completeStep_2">
          {{ $t("applyNow.submit") }}
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Apply_Now",
  data: function () {
    return {
      honey: "",
      currentStep: 0,
    };
  },
  methods: {
    setField: function (field, value, o) {
      if (this.$t("applyNow.step_2")[field]["types"].includes("multiple")) {
        this.$t("applyNow.step_2")[field]["options"][o]["active"] =
          !this.$t("applyNow.step_2")[field]["options"][o]["active"];
        if (!this.$t("applyNow.step_2")[field]["data"].includes(value)) {
          this.$t("applyNow.step_2")[field]["data"] =
            this.$t("applyNow.step_2")[field]["data"] + value + ", ";
        } else {
          this.$t("applyNow.step_2")[field]["data"] = this.$t(
            "applyNow.step_2"
          )[field]["data"].replace(value + ", ", "");
        }
      } else {
        this.$t("applyNow.step_2")[field]["data"] = value;
        for (let opt in this.$t("applyNow.step_2")[field]["options"]) {
          this.$t("applyNow.step_2")[field]["options"][opt]["active"] = false;
        }

        this.$t("applyNow.step_2")[field]["options"][o]["active"] =
          !this.$t("applyNow.step_2")[field]["options"][o]["active"];
      }
    },

    resetFormErrors: function () {
      for (let field in this.$t("applyNow.step_1")) {
        this.$t("applyNow.step_1")[field]["error"] = false;
      }
      for (let field in this.$t("applyNow.step_2")) {
        this.$t("applyNow.step_2")[field]["error"] = false;
      }
    },
    resetForm: function () {
      for (let field in this.$t("applyNow.step_1")) {
        this.$t("applyNow.step_1")[field]["data"] = "";
      }
      for (let field in this.$t("applyNow.step_2")) {
        this.$t("applyNow.step_2")[field]["data"] = "";
      }
    },
    validateHeight: function (height) {
      if (this.validateNumber(height)) {
        const heightNumber = parseFloat(height).toFixed(1);
        if (heightNumber > 20 && heightNumber < 220) {
          return true;
        }
      }
      return false;
    },
    validateWeight: function (weight) {
      if (this.validateNumber(weight)) {
        const weightNumber = parseFloat(weight).toFixed(1);
        if (weightNumber > 40 && weightNumber < 300) {
          return true;
        }
      }
      return false;
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
    validateStep_1: function () {
      let errors = false;
      this.resetFormErrors();
      for (let field in this.$t("applyNow.step_1")) {
        if (this.$t("applyNow.step_1")[field]["data"] === "") {
          this.$t("applyNow.step_1")[field]["error"] = true;
          errors = true;
        }
      }
      if (
        !this.validateEmail(this.$t("applyNow.step_1")["email"]["data"]) &&
        !this.$t("applyNow.step_1")["email"]["error"]
      ) {
        this.$t("applyNow.step_1")["email"]["error"] = true;
        errors = true;
      }
      if (
        !this.validateAge(this.$t("applyNow.step_1")["age"]["data"]) &&
        !this.$t("applyNow.step_1")["age"]["error"]
      ) {
        this.$t("applyNow.step_1")["age"]["error"] = true;

        errors = true;
      }
      if (
        !this.validateHeight(this.$t("applyNow.step_1")["height"]["data"]) &&
        !this.$t("applyNow.step_1")["height"]["error"]
      ) {
        this.$t("applyNow.step_1")["height"]["error"] = true;

        errors = true;
      }
      if (
        !this.validateWeight(this.$t("applyNow.step_1")["weight"]["data"]) &&
        !this.$t("applyNow.step_1")["weight"]["error"]
      ) {
        this.$t("applyNow.step_1")["weight"]["error"] = true;

        errors = true;
      }
      return errors;
    },
    validateStep_2: function () {
      let errors = false;
      this.resetFormErrors();
      errors = this.validateStep_1();
      for (let field in this.$t("applyNow.step_2")) {
        if (this.$t("applyNow.step_2")[field]["data"] === "") {
          this.$t("applyNow.step_2")[field]["error"] = true;
          errors = true;
        }
      }
      return errors;
    },
    completeStep_1: function () {
      if (!this.validateStep_1()) {
        this.currentStep++;
        window.scrollTo(0, 0);
      }
    },
    completeStep_2: function () {
      if (!this.validateStep_2()) {
        const { name, email, phoneNumber, age, height, weight } =
          this.$t("applyNow.step_1");
        const {
          current_routine,
          current_diet,
          goal,
          hurdles,
          current_progress,
          interested,
          plan,
        } = this.$t("applyNow.step_2");
        if (this.honey === "") {
          this.axios
            .post("https://formsubmit.co/ajax/fitwitherik@gmail.com", {
              _subject: "Application",
              _template: "table",
              name: name.data,
              email: email.data,
              phoneNumber: phoneNumber.data,
              age: age.data,
              height: height.data,
              weight: weight.data,
              plan: plan.data,
              current_routine: current_routine.data,
              current_diet: current_diet.data,
              goal: goal.data,
              hurdles: hurdles.data,
              current_progress: current_progress.data,
              interested: interested.data,
              _honey: this.honey,
            })
            .then(() => {
              this.$router.push({
                name: "Thank_You",
                params: { type: "apply" },
              });
              this.resetForm();
            });
        }
      }
    },
    goBack: function () {
      if (this.currentStep == 1) {
        this.currentStep--;
      }
    },
  },
  created: function () {
    window.scrollTo(0, 0);
    switch (this.$route.params.plan) {
      case 1:
        this.$t("applyNow.step_2").plan.options[1].active = true;
        this.$t("applyNow.step_2").plan.data =
          this.$t("applyNow.step_2").plan.options[1].data;
        break;
      case 2:
        this.$t("applyNow.step_2").plan.options[2].active = true;
        this.$t("applyNow.step_2").plan.data =
          this.$t("applyNow.step_2").plan.options[2].data;
        break;
      default:
        this.$t("applyNow.step_2").plan.options[0].active = true;
        this.$t("applyNow.step_2").plan.data =
          this.$t("applyNow.step_2").plan.options[0].data;
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";

.apply_now {
  @include background-overlay("../assets/img/contact_background.jpg", 270deg);
  @include section-style;
  background-position: 20% 30%;
  text-align: center;
  overflow-x: hidden;

  &__title {
    @include section-title;
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
</style>