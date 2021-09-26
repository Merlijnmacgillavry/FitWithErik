<template>
  <div>
    <div class="menu-btn" v-on:click="toggleMenu">
      <span class="menu-btn__burger" ref="hamburger"></span>
    </div>
    <div class="languages" ref="languages">
      <button class="btn" v-on:click="changeLang('nl')">
        <span>Dutch</span> <img src="../assets/img/nl.png" alt="" />
      </button>
      <button class="btn" v-on:click="changeLang('en')">
        <span>English</span> <img src="../assets/img/usa.png" />
      </button>
    </div>
    <nav class="nav" ref="nav">
      <ul class="menu-nav" ref="menuNav">
        <li class="menu-nav__item">
          <span v-on:click="toggleMenu">
            <router-link v-on:click="toggleMenu" to="/" class="menu-nav__link"
              >FIT WITH ERIK COACHING</router-link
            >
          </span>
        </li>
        <li
          class="menu-nav__item"
          v-for="({ name, path }, index) in $t('navbar.links')"
          :key="index"
        >
          <span v-on:click="toggleMenu"
            ><router-link :to="{ path: path }" class="menu-nav__link">{{
              name
            }}</router-link></span
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data: function () {
    this.$i18n.locale = "nl";
    return {
      showMenu: false,
    };
  },
  methods: {
    changeLang: function (lang) {
      this.$i18n.locale = lang;
    },
    toggleMenu: function () {
      if (window.innerWidth < 768) {
        let languages = this.$refs.languages;
        let hamburger = this.$refs.hamburger;
        let nav = this.$refs.nav;
        let navItems = this.$el.querySelectorAll(".menu-nav__item");
        let menuNav = this.$refs.menuNav;
        if (!this.showMenu) {
          languages.classList.add("languages-open");
          document.body.style.overflowY = "hidden";
          hamburger.classList.add("open");
          nav.classList.add("open");
          menuNav.classList.add("open");
          navItems.forEach((item) => item.classList.add("open"));
        } else {
          languages.classList.remove("languages-open");
          hamburger.classList.remove("open");
          nav.classList.remove("open");
          menuNav.classList.remove("open");
          navItems.forEach((item) => item.classList.remove("open"));
          document.body.style.overflowY = "scroll";
        }
        this.showMenu = !this.showMenu;
      }
    },
  },
  mounted: function () {},
};
</script>

<style lang="scss" scoped>
@import "../scss/_config.scss";

.languages {
  position: fixed;
  z-index: 3;
  left: 100vw;
  top: 1rem;
  height: 30px;
  display: flex;
  gap: 1em;
  transition: 0.5s left ease-in-out;
  @include transition-ease;
  .btn {
    width: 120px;
    height: 30px;
    line-height: 20px;
    padding: 0.75em 0;
    justify-content: center;
    display: flex;
    span {
      align-self: center;
      text-transform: uppercase;
      font-size: 1rem;
    }
    img {
      align-self: center;
      height: 20px;
      margin-left: 0.5em;
      // margin: auto 1em;
    }
  }
}
.languages-open {
  left: 1em;
}
.menu-btn {
  position: fixed;
  z-index: 3;
  right: 1rem;
  top: 1rem;
  height: 20px;
  width: 28px;
  cursor: pointer;
  @include transition-ease;

  &__burger {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0.5rem;
    width: 28px;
    height: 3px;
    background: white;
    @include transition-ease;

    &::before {
      content: "";
      position: absolute;
      top: -8px;
      width: 28px;
      height: 3px;
      background: white;
      @include transition-ease;
    }
    &::after {
      content: "";
      position: absolute;
      top: 8px;
      width: 20px;
      height: 3px;
      background: white;
      @include transition-ease;
    }
    &.open {
      transform: rotate(720deg);
      background: transparent;
      &::before {
        transform: rotate(45deg) translate(5px, 8px);
      }
      &::after {
        width: 28px;
        transform: rotate(-45deg) translate(3px, -7px);
      }
    }
  }
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  opacity: 0.98;
  visibility: hidden;
  z-index: 1;
  &.open {
    visibility: visible;
  }
  .menu-nav {
    @include lifted;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    background: $background-color;
    opacity: 0.95;
    list-style-type: none;
    padding-right: 1rem;
    transform: translateY(-100%);
    @include transition-ease;

    &.open {
      transform: translateY(0);
    }

    &__item {
      transform: translateX(100vw);
      @include transition-ease;
      &.open {
        transform: translateX(0);
      }
      &.active > a {
        color: white;
      }
    }
    &__link {
      display: inline-block;
      font-size: 1.5rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: 300;
      @include transition-ease;

      &:hover {
        color: $primary-hover-color;
      }
    }
    h1 {
      padding: 0%;
    }
  }

  // Automate with vue

  @for $i from 1 through 7 {
    .menu-nav__item:nth-child(#{$i}) {
      transition-delay: ($i * 0.1s) + 0.3s;
    }
  }
}
@include media-md {
  .menu-btn {
    visibility: hidden;
  }
  .languages,
  .languages-open {
    left: auto;
    top: 1.5rem;
    right: 1rem !important;
  }
  .nav {
    visibility: visible;
    .menu-nav {
      display: block;
      transform: translateY(0);
      height: 100%;
      background: gradient(to-right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85));
      text-align: right;

      &__item {
        display: inline;
        padding-right: 1.5rem;
      }
      &__item:first-child a {
        position: absolute;
        left: 0;
        padding: 2rem;
      }

      &__link {
        font-size: 1rem;
      }
      .active {
        border-bottom: 2px solid $primary-color;
      }
      :hover {
        border-color: $primary-hover-color;
      }
    }
  }
}
@include media-lg {
  .nav {
    .menu-nav {
      text-align: center;
      &__link {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
