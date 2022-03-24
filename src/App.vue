<template>
  <header id="header" class="header">
    <div class="container">
      <!-- logo -->
      <div class="site-logo">
        <a href="index.html" class="site-logo__link">
          <picture>
            <source media="(max-width: 767px)" srcset="./images/logo-mob.png" />
            <source srcset="./images/logo.png" />
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
                    <router-link to="/admin" class="nav__link" >Admin</router-link>
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
                  
                </ul>
                <!-- //nav__list -->
              </nav>
              <!-- //nav -->
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- //container -->
  </header>
  <!-- //site-header ddd -->

  <router-view />
</template>

<script>
  export default {
    data: () => ({
      
    }),
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js')
      document.head.appendChild(recaptchaScript)
      let recaptchaScript2 = document.createElement('script')
      recaptchaScript2.setAttribute('src', 'js/libs.min.js')
      document.head.appendChild(recaptchaScript2)
      let recaptchaScript3 = document.createElement('script')
      recaptchaScript3.setAttribute('src', 'js/main.js')
      document.head.appendChild(recaptchaScript3)
    },
    methods: {
      
    }
  }
</script>

<style>

@import "./css/libs.min.css";
@import "./css/main.css";
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap");

@import "./css/main.css";

</style>
