<template>
  <div class="contact_me">
    <h2 class="contact_me__title">{{ $t("contactMe.title") }}</h2>
    <section class="contact_me__questions">
      <div
        v-for="(field, index) in $t('contactMe.form')"
        :key="index"
        class="question"
        ref="name"
      >
        <p>{{ $t("contactMe.form")[index]["fieldName"] }}:</p>
        <textarea
          maxlength="1000"
          type="text"
          v-model="$t('contactMe.form')[index]['data']"
          :placeholder="$t('contactMe.form')[index]['fieldName'] + '..'"
          v-if="$t('contactMe.form')[index]['fieldName'] === 'Question'"
        />
        <input
          v-else
          type="text"
          v-model="$t('contactMe.form')[index]['data']"
          :placeholder="$t('contactMe.form')[index]['fieldName'] + '..'"
        />
        <p class="error" v-if="$t('contactMe.form')[index]['error']">
          {{ $t("contactMe.form")[index]["feedback"] }}
        </p>
      </div>
      <input type="text" v-model="honey" name="_honey" style="display: none" />

      <button class="btn" v-on:click="sendData">
        {{ $t("contactMe.button") }}
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact_Me",
  data: function () {
    return {
      honey: "",
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
      if (this.$t("contactMe.form").name.data === "") {
        this.$t("contactMe.form").name.error = true;
      }
      if (
        this.$t("contactMe.form").email.data === "" ||
        !this.validateEmail(this.$t("contactMe.form").email.data)
      ) {
        this.$t("contactMe.form").email.error = true;
      }
      if (this.$t("contactMe.form").phoneNumber.data === "") {
        this.$t("contactMe.form").phoneNumber.error = true;
      }
      if (this.$t("contactMe.form").question.data === "") {
        this.$t("contactMe.form").question.error = true;
      }
    },
    resetFormErrors: function () {
      for (let field in this.$t("contactMe.form")) {
        this.$t("contactMe.form")[field]["error"] = false;
      }
    },
    sendData: function () {
      this.validateFormData();
      for (let field in this.$t("contactMe.form")) {
        if (this.$t("contactMe.form")[field].error) {
          return;
        }
      }
      const { name, email, phoneNumber, question } = this.$t("contactMe.form");
      if (this.honey === "") {
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
            this.$router.push({
              name: "Thank_You",
              params: { type: "question" },
            })
          );
      }
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
  @include background-overlay("../assets/img/contact_background.jpg", 90deg);
  @include section-style;
  background-position: 20% 30%;
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