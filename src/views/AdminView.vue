<template>
  <main id="main" class="main">
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col col_7 col_desktop-12 order-desktop-2">
            <div class="photo-list main-photo">
              <form action="index.html" method="POST">
                <div class="container px-4 px-lg-5 mt-5">
                  <FondoSgv/>
                  <Inventario/>
                  <Pedidos/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- //middle -->
</template>

<script>
// @ is an alias to /src
import Inventario from "@/components/Inventario.vue";
import FondoSgv from "@/components/FondoSgv.vue";
import Pedidos from "@/components/Pedidos.vue";

export default {
  name: "HomeView",
  components: {
    Inventario,
    FondoSgv,
    Pedidos
  },
};
</script>