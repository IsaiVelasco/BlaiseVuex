<template>
    <header id="header" class="header">
    <div class="container">
      <!-- logo -->
      <div class="site-logo">
        <router-link to="/" class="site-logo__link">
          <picture>
            <source media="(max-width: 767px)" srcset="../images/logo-mob.png" />
            <source srcset="../images/logo.png" />
            <img class="site-logo__img" src="images/menu-logo.png" alt="logo" />
          </picture>
        </router-link>
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
                    <router-link to="/Ordenar" class="nav__link">Ordenar</router-link>
                  </li>
                  
                  
                  <li class="nav__item">
                    <a href="#categorias" class="nav__link">Categorías</a>
                  </li>
                  <li class="nav__item">
                    <a href="#tutorial" class="nav__link">Tutorial</a>
                  </li>

                  <li class="nav__item">
                    <a href="#reviews" class="nav__link">Contacto</a>
                  </li>
                  <li class="nav__item">
                    <router-link to="/admin" class="nav__link" >Admin</router-link>
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
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    
  }
}
</script>