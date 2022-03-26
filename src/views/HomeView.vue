<template>
  <main id="main" class="main">
    <section class="section main-section">
      <div class="container">
        <div class="row">
          <div class="col col_7 col_desktop-12 order-desktop-2">
            <div class="photo-list main-photo">
              <FondoSgv/>
              <div class="photo-item main-photo-item main-photo-item-1">
                <div class="photo-img">
                  <div class="photo-img__block">
                    <img
                      src="https://i.postimg.cc/Px2WXwbY/vainilla-fresa-durazno.jpg"
                      alt="main-page-1"
                    />
                  </div>
                </div>
                <div class="photo-info wysiwyg"></div>
              </div>
              <div class="photo-item main-photo-item main-photo-item-2">
                <div class="photo-img">
                  <div class="photo-img__block">
                    <img
                      src="../images/content/new-card-blaise.png"
                      alt="main-page-2"
                    />
                  </div>
                </div>
                <div class="photo-info wysiwyg">
                  <p>Ponte creativo</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col col_5 col_desktop-12 order-desktop-1">
            <div class="main-container">
              <h1 class="h1 main-title">
                Arma a tu estilo con<br /><span
                  class="round-border round-border-1"
                  >Blaise Pastel</span
                >
              </h1>
              <div class="wysiwyg main-description">
                Elige el pastel que más te guste, o arma uno con los sabores y
                adornos que prefieras
              </div>
              <router-link to="/Ordenar" class="btn">Ordenar</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="categorias" class="section">
      <div class="container">
        <div class="row">
          <div class="dignity-item col col_4 col_mob-12">
            <div class="dignity-block">
              <div class="dignity-title">
                <h3 class="h3 title">Clásico</h3>
                <div class="dignity-image">
                  <img
                    src="../images/content/icon/present-1.svg"
                    alt="present-1"
                  />
                </div>
              </div>
              <div class="dignity-description wysiwyg">
                <p>
                  Mollis sit odio sit aliquet facilisi. Feugiat nullam bibendum
                  suspendisse consequat morbi et scelerisque
                </p>
              </div>
            </div>
          </div>
          <div class="dignity-item col col_4 col_mob-12">
            <div class="dignity-block">
              <div class="dignity-title">
                <h3 class="h3 title">Cumpleaños</h3>
                <div class="dignity-image">
                  <img
                    src="../images/content/icon/present-2.svg"
                    alt="present-2"
                  />
                </div>
              </div>
              <div class="dignity-description wysiwyg">
                <p>
                  Sit odio sit aliquet facilisi. Feugiat nullam bibendum
                  suspendisse consequat morbi et scelerisque
                </p>
              </div>
            </div>
          </div>
          <div class="dignity-item col col_4 col_mob-12">
            <div class="dignity-block">
              <div class="dignity-title">
                <h3 class="h3 title">Bodas</h3>
                <div class="dignity-image">
                  <img
                    src="../images/content/icon/present-3.svg"
                    alt="present-3"
                  />
                </div>
              </div>
              <div class="dignity-description wysiwyg">
                <p>
                  Follis sit odio sit aliquet facilisi. Feugiat nullam bibendum
                  suspendisse consequat morbi et scelerisque
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //content -->
    </section>
    <section id="tutorial" class="section">
      <div class="container">
        <div class="row">
          <div class="col col_6 col_desktop-12">
            <div class="photo-list emotional-photo">
              <div
                class="photo-item emotional-photo__item emotional-photo__item-1"
              >
                <div class="photo-img">
                  <div class="photo-img__block">
                    <img
                      src="https://i.postimg.cc/5tJL83n8/queso.jpg"
                      alt="main-page-3"
                    />
                  </div>
                </div>
                <div class="photo-info wysiwyg"></div>
              </div>
              <div
                class="photo-item emotional-photo__item emotional-photo__item-2"
              >
                <div class="photo-img">
                  <div class="photo-img__block">
                    <img
                      src="https://i.postimg.cc/VkfZMv8N/velas.jpg"
                      alt="main-page-4"
                    />
                  </div>
                </div>
                <div class="photo-info wysiwyg"></div>
              </div>
              <div
                class="photo-item emotional-photo__item emotional-photo__item-3"
              >
                <div class="photo-img">
                  <div class="photo-img__block">
                    <img
                      src="https://i.postimg.cc/MZ37g1p8/queso-sarzamora.jpg"
                      alt="main-page-5"
                    />
                  </div>
                </div>
                <div class="photo-info wysiwyg"></div>
              </div>
            </div>
          </div>
          <div class="col col_6 col_desktop-12">
            <h2 class="h2 emotional-title">
              Ponte creativo con tu pedido en tres sencillos pasos
            </h2>
            <div class="emotional-list">
              <div class="emotional-item">
                <div class="emotional-block">
                  <div class="emotional-icon">
                    <img
                      src="../images/content/icon/present-1.svg"
                      alt="present-4"
                    />
                  </div>
                  <div class="emotional-info">
                    <h3 class="h3 emotional-subtitle">Ingresa los sabores</h3>
                    <div class="emotional-description wysiwyg">
                      <p>
                        Después de dar clic en el botón "Armar ahora" da clic en
                        el sabor que quieras agregar. Puedes combinar tantos
                        como desees
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="emotional-item">
                <div class="emotional-block">
                  <div class="emotional-icon">
                    <img
                      src="../images/content/icon/present-1.svg"
                      alt="present-5"
                    />
                  </div>
                  <div class="emotional-info">
                    <h3 class="h3 emotional-subtitle">
                      Selecciona los adornos que quieras
                    </h3>
                    <div class="emotional-description wysiwyg">
                      <p>
                        Baja un poco el scroll y ahora agrega tandos adornos y
                        decoraciones com gustes (cubierta como accesorios)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="emotional-item">
                <div class="emotional-block">
                  <div class="emotional-icon">
                    <img
                      src="../images/content/icon/subscription.svg"
                      alt="present-6"
                    />
                  </div>
                  <div class="emotional-info">
                    <h3 class="h3 emotional-subtitle">
                      Rellena el formulario para identificarte
                    </h3>
                    <div class="emotional-description wysiwyg">
                      <p>
                        Se te pediran tus datos de contacto para hacerte tu
                        pedido. Clic en "ordenar" y ¡listo!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Informacion />
  </main>
  <!-- //middle -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Informacion from "@/components/Informacion.vue";
import FondoSgv from "@/components/FondoSgv.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Informacion,
    FondoSgv
  },
};
</script>
