<template>
  <header id="header" class="header">
    <div class="container">
      <!-- logo -->
      <div class="site-logo">
        <a href="index.html" class="site-logo__link">
          <picture>
            <source media="(max-width: 767px)" srcset="images/logo-mob.png" />
            <source srcset="images/logo.png" />
            <img class="site-logo__img" src="images/menu-logo.png" alt="logo" />
          </picture>
        </a>
      </div>
      <div class="header-mobile">
        <div class="header-nav">
          <div class="nav-toggle">
            <span class="nav-toggle__link"></span
            ><span class="nav-toggle__link"></span
            ><span class="nav-toggle__link"></span>
          </div>
          <div class="header-nav__container">
            <div class="header-nav__menu">
              <nav class="nav">
                <ul class="nav__list">
                  <li class="nav__item">
                    <router-link to="/" class="nav__link">Home</router-link>
                  </li>
                  <li class="nav__item">
                    <router-link to="/about" class="nav__link" >About</router-link>
                  </li>
                  <li class="nav__item">
                    <router-link to="/Ordenar" class="nav__link">Ordenar</router-link>
                  </li>
                  <li class="nav__item">
                    <a href="#categorias" class="nav__link">Categorías</a>
                  </li>
                  <li class="nav__item">
                    <a href="#tutorial" class="nav__link">Tutorial</a>
                  </li>

                  <li class="nav__item">
                    <a href="#pasteles" class="nav__link">Pasteles</a>
                  </li>
                  <li class="nav__item">
                    <a href="#reviews" class="nav__link">Contacto</a>
                  </li>
                  <li class="nav__item">
                    <a href="admin.html" class="nav__link">Admin</a>
                  </li>
                </ul>
                <!-- //nav__list -->
              </nav>
              <!-- //nav -->
            </div>
            <div class="header-nav__info">
              <a href="tel:9999912345678">+52 546 254 9875</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //container -->
  </header>
  <!-- //site-header -->

  <router-view />
</template>


<style>
@import "./css/libs.min.css";
@import "./css/main.css";
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap");
@import "./css/main.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
