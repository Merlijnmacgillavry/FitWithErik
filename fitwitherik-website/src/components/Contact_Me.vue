<template>
  <div class="contact_me">
    <h2 class="contact_me__title">Contact Me</h2>
    <section class="contact_me__questions">
      <div
        v-for="(question, index) in formData"
        :key="index"
        class="question"
        ref="name"
      >
        <p>{{ formFields[index] }}:</p>
        <textarea
          type="text"
          v-model="formData[index]"
          :placeholder="formFields[index] + '..'"
          v-if="formFields[index] === 'Question'"
        />
        <input
          v-else
          type="text"
          v-model="formData[index]"
          :placeholder="formFields[index] + '..'"
        />
        <p class="error" v-if="formErrors[index]">{{ formFeedback[index] }}</p>
      </div>
      <button class="btn" v-on:click="sendData">SEND DATA</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact Me",
  data: function () {
    return {
      formFields: {
        name: "Name",
        email: "Email Address",
        phoneNumber: "Phone Number",
        question: "Question",
      },
      formData: {
        name: null,
        email: null,
        phoneNumber: null,
        question: null,
      },
      formErrors: {
        name: false,
        email: false,
        phoneNumber: false,
        question: false,
      },
      formFeedback: {
        name: "Please provide a name",
        email: "Please provide an email",
        phoneNumber: "Please provide a (valid) phone number",
        question: "Please provide a question",
      },
    };
  },
  methods: {
    validateEmail: function (email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validateFormData: function () {
      this.resetFormErrors();
      if (this.formData.name === null) {
        this.formErrors.name = true;
      }
      if (
        this.formData.email === null ||
        !this.validateEmail(this.formData.email)
      ) {
        this.formErrors.email = true;
      }
      if (this.formData.phoneNumber === null) {
        this.formErrors.phoneNumber = true;
      }
      if (this.formData.question === null) {
        this.formErrors.question = true;
      }
    },
    resetFormErrors: function () {
      (this.formErrors.name = false),
        (this.formErrors.email = false),
        (this.formErrors.phoneNumber = false),
        (this.formErrors.question = false);
      console.log("works");
    },
    sendData: function () {
      this.validateFormData();
      console.log(this.formErrors);
      for (let error in this.formErrors) {
        console.log(error);
        if (this.formErrors[error]) {
          return;
        }
      }
      const { name, email, phoneNumber, question } = this.formData;
      this.axios.post("https://formsubmit.co/ajax/merlijnmac@gmail.com", {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        question: question,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.contact_me {
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
  .contact_me {
    @include title-md-pd;
    &__title {
      font-size: $title-md;
    }
    &__questions {
      padding: 1em 6em;
      .question {
        margin: 0.5em 0;
      }
    }
  }
}
</style>