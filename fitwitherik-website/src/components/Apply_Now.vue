<template>
  <div class="apply_now">
    <h2 class="apply_now__title">Application Form</h2>

    <section v-if="currentStep === 0" class="apply_now__questions">
      <h3 class="title">
        These questions give me a good overview to see if you're a good fit for
        my program!
      </h3>
      <div
        v-for="(field, index) in step_1"
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
      <button class="btn" v-on:click="this.completeStep_1">NEXT</button>
    </section>
    <section v-if="currentStep === 1" class="apply_now__questions">
      <div class="back">
        <button class="btn" v-on:click="goBack">BACK</button>
      </div>
      <h3 class="title">
        The next questions are about what you know, what you want to achieve
        this year and what is stopping you from achieving this.
      </h3>

      <div
        v-for="(field, index) in step_2"
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
            :class="{ active: step_2[index]['options'][o]['active'] }"
            v-on:click="setField(index, option['data'], o)"
            :key="o"
          >
            {{ option["data"] }}
          </button>
        </div>
        <div class="other" v-if="field['types'].includes('other')">
          <textarea
            v-show="
              step_2[index]['options'][
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
      <button class="btn" v-on:click="completeStep_2">SUBMIT</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Apply_Now",
  data: function () {
    return {
      currentStep: 0,
      step_1: {
        name: {
          fieldName: "Name",
          placeholder: "Name...",
          data: "",
          error: false,
          feedback: "Please provide a Name",
        },
        email: {
          fieldName: "Email",
          placeholder: "example@gmail.com",
          data: "",
          error: false,
          feedback: "Please provide a valid email",
        },
        phoneNumber: {
          fieldName: "Phone Number",
          placeholder: "Phone Number...",
          data: "",
          error: false,
          feedback: "Please provide a phone number",
        },
        age: {
          fieldName: "What is your Age?",
          data: "",
          placeholder: "Age...",
          error: false,
          feedback: "Please provide your age",
        },
        height: {
          fieldName: "What is your height? (cm)",
          data: "",
          placeholder: "Height...",
          error: false,
          feedback: "Please provide your height",
        },
        weight: {
          fieldName: "What is your weight? (kg)",
          data: "",
          placeholder: "Weight...",
          error: false,
          feedback: "Please provide your weight",
        },
      },
      step_2: {
        plan: {
          fieldName: "What type of plan do you want to apply for?",
          placeholder: "Plan...",
          data: "",
          error: false,
          feedback: "Please choose a plan",
          types: ["button"],
          options: [
            { data: "1 week plan", active: false },
            { data: "4 week plan", active: false },
            { data: "16 week plan", active: false },
          ],
        },
        current_routine: {
          fieldName:
            "What does your current fitness routine look like? (#days a week training, which exercises)",
          placeholder: "My current Fitness Routine is...",
          data: "",
          error: false,
          feedback:
            "Please provide your routine (if you don't have one type 'none')",
          types: ["text"],
        },
        current_diet: {
          fieldName:
            "What does your current diet/ average day of eating look like? (how much calories, number of meals a day, what kind of foods)",
          placeholder: "My current diet is...",
          data: "",
          error: false,
          feedback: "Please provide your diet",
          types: ["text"],
        },
        goal: {
          fieldName:
            "In a year from now, what would your dream body look like? (be specific; weight, bodyfat %, etc)",
          placeholder: "My dream body would be...",
          data: "",
          error: false,
          feedback: "Please provide your dream body",
          types: ["text"],
        },
        hurdles: {
          fieldName: "What stops you from achieving this dream body?",
          placeholder: "Other namely, ...",
          data: "",
          error: false,
          feedback: "Please choose an option",
          types: ["button", "other"],
          options: [
            { data: "Accountability", active: false },
            { data: "Not enought food knowledge", active: false },
            { data: "Not enought training knowledge", active: false },
            { data: "Dont know where to start", active: false },
            { data: "Other", active: false },
          ],
        },
        current_progress: {
          fieldName: "What does your current fitness progress look like?",
          data: "",
          error: false,
          feedback: "Please choose an option",
          types: ["button"],
          options: [
            { data: "Bad(Almost no progress or none)", active: false },
            {
              data: "Struggling (little progress but not as fast as you'd like)",
              active: false,
            },
            {
              data: "Successful (good progress, just looking to sustain it)",
              active: false,
            },
          ],
        },
        interested: {
          fieldName:
            "If you could make fast progress towards your fitness goals, would you be interested?",
          data: "",
          error: false,
          feedback: "Please choose an option",
          types: ["button"],
          options: [
            { data: "No", active: false },
            { data: "Maybe", active: false },
            { data: "Yes, Definitely!", active: false },
          ],
        },
      },
    };
  },
  methods: {
    setField: function (field, value, o) {
      this.step_2[field]["data"] = value;
      for (let opt in this.step_2[field]["options"]) {
        this.step_2[field]["options"][opt]["active"] = false;
      }

      this.step_2[field]["options"][o]["active"] =
        !this.step_2[field]["options"][o]["active"];
    },
    resetFormErrors: function () {
      for (let field in this.step_1) {
        this.step_1[field]["error"] = false;
      }
      for (let field in this.step_2) {
        this.step_2[field]["error"] = false;
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
      for (let field in this.step_1) {
        if (this.step_1[field]["data"] === "") {
          this.step_1[field]["error"] = true;
          errors = true;
        }
      }
      if (
        !this.validateEmail(this.step_1["email"]["data"]) &&
        !this.step_1["email"]["error"]
      ) {
        this.step_1["email"]["error"] = true;
        this.step_1["email"]["feedback"] = "Fill in a valid email address";
        errors = true;
      }
      if (
        !this.validateAge(this.step_1["age"]["data"]) &&
        !this.step_1["age"]["error"]
      ) {
        this.step_1["age"]["error"] = true;
        this.step_1["age"]["feedback"] =
          "Fill in an age between 15 and 100 please";
        errors = true;
      }
      if (
        !this.validateHeight(this.step_1["height"]["data"]) &&
        !this.step_1["height"]["error"]
      ) {
        this.step_1["height"]["error"] = true;
        this.step_1["height"]["feedback"] = "Fill in a valid weight";
        errors = true;
      }
      if (
        !this.validateWeight(this.step_1["weight"]["data"]) &&
        !this.step_1["weight"]["error"]
      ) {
        this.step_1["weight"]["error"] = true;
        this.step_1["weight"]["feedback"] = "Fill in a valid weight";
        errors = true;
      }
      return errors;
    },
    validateStep_2: function () {
      let errors = false;
      this.resetFormErrors();
      errors = this.validateStep_1();
      for (let field in this.step_2) {
        if (this.step_2[field]["data"] === "") {
          this.step_2[field]["error"] = true;
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
        const { name, email, phoneNumber, age, height, weight } = this.step_1;
        const {
          current_routine,
          current_diet,
          goal,
          hurdles,
          current_progress,
          interested,
        } = this.step_2;
        this.axios
          .post("https://formsubmit.co/ajax/fitwitherik@gmail.com", {
            _subject: "Application",
            _template: "table",
            name: name.data,
            email: email.data,
            phoneNumber: phoneNumber.data,
            age: age.data,
            heigh: height.data,
            weight: weight.data,
            current_routine: current_routine.data,
            current_diet: current_diet.data,
            goal: goal.data,
            hurdles: hurdles.data,
            current_progress: current_progress.data,
            interested: interested.data,
          })
          .then(() =>
            this.$router.push({
              name: "Thank_You",
              params: { type: "apply" },
            })
          );
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
        this.step_2.plan.options[1].active = true;
        this.step_2.plan.data = this.step_2.plan.options[1].data;
        break;
      case 2:
        this.step_2.plan.options[2].active = true;
        this.step_2.plan.data = this.step_2.plan.options[2].data;
        break;
      default:
        this.step_2.plan.options[0].active = true;
        this.step_2.plan.data = this.step_2.plan.options[0].data;
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
    padding: 2em 2em;
    .title {
      font-size: 2rem;
      color: $primary-color;
      margin: 2em 0px;
    }
    .back {
      width: 100%;
      text-align: left;
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
      }
    }
    .error {
      border: 3px solid $red;
      padding: 0.25em 0.5em;
      margin: 0.5em 0;
      color: $red;
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
    &__progress {
      padding: 0em 6em;
    }
    &__questions {
      padding: 1em 6em;

      .question {
        margin: 1em 0;
        .buttons {
          display: flex;
          flex-wrap: wrap;
          button {
            margin: 1em 2.5%;
            flex: 40%;
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