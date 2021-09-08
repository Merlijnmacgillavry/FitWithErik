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
      <button class="btn" v-on:click="completeStep_1">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Apply Now",
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
        current_routine: {
          fieldName:
            "What does your current fitness routine look like? (#days a week training, which exercises)",
          data: "",
          error: false,
          feedback:
            "Please provide your routine (if you don't have one type 'none')",
        },
        current_diet: {
          fieldName:
            "What does your current diet/ average day of eating look like? (how much calories, number of meals a day, what kind of foods)",
          data: "",
          error: false,
          feedback: "Please provide your diet",
        },
        goal: {
          fieldName:
            "In a year from now, what would your dream body look like? (be specific; weight, bodyfat %, etc)",
          data: "",
          error: false,
          feedback: "Please provide your diet",
        },
        hurdles: {
          fieldName:
            "In a year from now, what would your dream body look like? (be specific; weight, bodyfat %, etc)",
          data: "",
          error: false,
          feedback: "Please provide your diet",
        },
      },
    };
  },
  methods: {
    validateEmail: function (email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validateStep_1: function () {
      this.resetFormErrors();
      if (this.step_1.name.data === "") {
        this.step_1.name.error = true;
      }
      if (
        this.step_1.email.data === "" ||
        !this.validateEmail(this.step_1.email.data)
      ) {
        this.step_1.email.error = true;
      }
      if (this.step_1.phoneNumber.data === "") {
        this.step_1.phoneNumber.error = true;
      }
      if (this.step_1.age.data === "") {
        this.step_1.age.error = true;
      }
      if (this.step_1.height.data === "") {
        this.step_1.height.error = true;
      }
      if (this.step_1.weight.data === "") {
        this.step_1.weight.error = true;
      }
    },
    validateStep_2: function () {
      this.resetFormErrors();
      if (this.step_1.name.data === "") {
        this.step_1.name.error = true;
      }
      if (
        this.step_1.email.data === "" ||
        !this.validateEmail(this.step_1.email.data)
      ) {
        this.step_1.email.error = true;
      }
      if (this.step_1.phoneNumber.data === "") {
        this.step_1.phoneNumber.error = true;
      }
      if (this.step_1.age.data === "") {
        this.step_1.age.error = true;
      }
      if (this.step_1.height.data === "") {
        this.step_1.height.error = true;
      }
      if (this.step_1.weight.data === "") {
        this.step_1.weight.error = true;
      }
    },
    resetFormErrors: function () {
      for (let field in this.step_1) {
        this.step_1[field]["error"] = false;
      }
    },
    completeStep_1: function () {
      this.validateStep_1();
      let errors = false;
      for (let field in this.step_1) {
        if (this.step_1[field].error) {
          errors = true;
        }
      }
      if (!errors) {
        this.currentStep++;
      }
      window.scrollTo(0, 0);

      // const { name, email, phoneNumber, question } = this.form;
      // this.axios
      //   .post("https://formsubmit.co/ajax/fitwitherik@gmail.com", {
      //     name: name.data,
      //     email: email.data,
      //     phoneNumber: phoneNumber.data,
      //     question: question.data,
      //   })
      //   .then(() =>
      //     this.$router.push({ name: "Thank You", params: { type: "question" } })
      //   );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.apply_now {
  @include background-overlay("../assets/img/about_background.jpg");
  @include section-style;
  background-position: center 60%;
  text-align: center;
  overflow-x: hidden;

  &__title {
    @include section-title;
  }
  &__questions {
    width: 100%;
    padding: 2em 4em;
    .question {
      margin: 3em 0;
      width: 100%;
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
        margin: 0.5em 0;
      }
      .btn {
        margin-top: 1em;
      }
    }
  }
}
</style>