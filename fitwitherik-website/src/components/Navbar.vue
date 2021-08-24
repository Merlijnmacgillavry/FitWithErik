<template>
  <nav class="navbar">
    <div class="nav-icon">
      <img src="../assets/logo.png" alt="" />
    </div>
    <ul class="menu-nav">
      <li class="menu-nav__item">
        <a href="#!" class="menu-nav__link">Home</a>
      </li>
      <li class="menu-nav__item">
        <a href="#!" class="menu-nav__link">Online Coaching</a>
      </li>
      <li class="menu-nav__item">
        <a href="#!" class="menu-nav__link">Custom Plans</a>
      </li>
      <li class="menu-nav__item">
        <a href="#!" class="menu-nav__link">Recipes</a>
      </li>
      <li class="menu-nav__item">
        <a href="#!" class="menu-nav__link">About me</a>
      </li>
      <li class="menu-nav__item">
        <a href="#!" class="menu-nav__link">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  opacity: 0.98;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  background: pink;
  .nav-icon {
    padding-left: 1rem;
    display: flex;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 60px;
      cursor: pointer;
    }
  }
  .menu-nav {
    display: block;
    height: 100%;
    text-align: right;
    list-style-type: none;
    padding-right: 1rem;
    &__item {
      display: inline;
      padding-right: 1.5rem;
    }
    &__link {
      display: inline-block;
      padding: 1rem 0;
      font-size: 1.3em;
    }
  }
}
</style>