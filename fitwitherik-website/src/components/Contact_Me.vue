<template>
  <div class="contact_me">
    <h2 class="contact_me__title">Contact Me</h2>
    <section class="contact_me__questions">
      <div
        v-for="(field, index) in form"
        :key="index"
        class="question"
        ref="name"
      >
        <p>{{ form[index]["fieldName"] }}:</p>
        <textarea
          maxlength="1000"
          type="text"
          v-model="form[index]['data']"
          :placeholder="form[index]['fieldName'] + '..'"
          v-if="form[index]['fieldName'] === 'Question'"
        />
        <input
          v-else
          type="text"
          v-model="form[index]['data']"
          :placeholder="form[index]['fieldName'] + '..'"
        />
        <p class="error" v-if="form[index]['error']">
          {{ form[index]["feedback"] }}
        </p>
      </div>
      <button class="btn" v-on:click="sendData">SEND DATA</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact_Me",
  data: function () {
    return {
      form: {
        name: {
          fieldName: "Name",
          data: "",
          error: false,
          feedback: "Please provide a Name",
        },
        email: {
          fieldName: "Email",
          data: "",
          error: false,
          feedback: "Please provide a valid email",
        },
        phoneNumber: {
          fieldName: "Phone Number",
          data: "",
          error: false,
          feedback: "Please provide a phone number",
        },
        question: {
          fieldName: "Question",
          data: "",
          error: false,
          feedback: "Please provide a question",
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
    validateFormData: function () {
      this.resetFormErrors();
      if (this.form.name.data === "") {
        this.form.name.error = true;
      }
      if (
        this.form.email.data === "" ||
        !this.validateEmail(this.form.email.data)
      ) {
        this.form.email.error = true;
      }
      if (this.form.phoneNumber.data === "") {
        this.form.phoneNumber.error = true;
      }
      if (this.form.question.data === "") {
        this.form.question.error = true;
      }
    },
    resetFormErrors: function () {
      for (let field in this.form) {
        this.form[field]["error"] = false;
      }
    },
    sendData: function () {
      this.validateFormData();
      for (let field in this.form) {
        if (this.form[field].error) {
          return;
        }
      }
      const { name, email, phoneNumber, question } = this.form;
      this.axios
        .post("https://formsubmit.co/ajax/fitwitherik@gmail.com", {
          _subject: "Question",
          _template: "table",
          name: name.data,
          email: email.data,
          phoneNumber: phoneNumber.data,
          question: question.data,
        })
        .then(() =>
          this.$router.push({ name: "Thank_You", params: { type: "question" } })
        );
    },
  },
  created: function () {
    window.scrollTo(0, 0);
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
      .btn {
        margin-top: 1em;
      }
    }
  }
}
</style>