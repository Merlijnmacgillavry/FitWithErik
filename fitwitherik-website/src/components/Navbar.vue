<template>
  <div>
    <div class="menu-btn" v-on:click="toggleMenu">
      <span class="menu-btn__burger" ref="hamburger"></span>
    </div>

    <nav class="nav" ref="nav">
      <ul class="menu-nav" ref="menuNav">
        <li class="menu-nav__item">
          <h1 class="menu-nav__link">FIT WITH ERIK COACHING</h1>
        </li>
        <li
          class="menu-nav__item"
          v-for="({ name }, index) in links"
          :key="index"
        >
          <a href="#!" class="menu-nav__link active">{{ name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      showMenu: false,
      links: [
        {
          name: "Online Coaching",
        },
        {
          name: "Custom Plans",
        },
        {
          name: "Recipes",
        },
        {
          name: "About me",
        },
        {
          name: "Contact",
        },
      ],
    };
  },
  methods: {
    changeActive: function () {},
    toggleMenu: function () {
      let hamburger = this.$refs.hamburger;
      let nav = this.$refs.nav;
      let navItems = this.$el.querySelectorAll(".menu-nav__item");
      let menuNav = this.$refs.menuNav;
      if (!this.showMenu) {
        hamburger.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach((item) => item.classList.add("open"));
      } else {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach((item) => item.classList.remove("open"));
      }
      this.showMenu = !this.showMenu;
    },
  },
  mounted: function () {},
};
</script>

<style lang="scss" scoped>
@import "../_config.scss";
.menu-btn {
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 1rem;
  height: 20px;
  width: 28px;
  cursor: pointer;
  @include transition-ease;

  &__burger {
    position: absolute;
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

  &.open {
    visibility: visible;
  }
  .menu-nav {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    background: $background-color;
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
      font-size: 2rem;
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

  @for $i from 1 through 8 {
    .menu-nav__item:nth-child(#{$i}) {
      transition-delay: ($i * 0.1s) + 0.15s;
    }
  }
}
@include media-md {
  .menu-btn {
    visibility: hidden;
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
      &__item:first-child h1 {
        position: absolute;
        left: 0;
        padding: 2rem;
        border: none;
      }

      &__link {
        font-size: 1.5rem;
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
    }
  }
}
</style>