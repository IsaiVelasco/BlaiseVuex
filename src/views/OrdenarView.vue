<template>
  <main id="main" class="main">
        
        <section class="section">            
            <div class="container">
                
                <div class="row">
                    
                    <div class="col col_7 col_desktop-12 order-desktop-2">
                        <div class="photo-list main-photo">
                            <FondoSgv/>
                            
                            <form action="index.html" method="POST">
                                
                                <Sabores/>
                                <Adornos/>
                                <Formulario/>
                                <br>
                                <div class="center-swit">
                                    <input  type="submit" class="btn primary-button btn-lg" value="ORDENAR"/>
                                </div>
                                
                            </form>

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
    </main><!-- //middle -->
</template>
<script>
// @ is an alias to /src
import Sabores from '@/components/Sabores.vue'
import Adornos from '@/components/Adornos.vue'
import Formulario from '@/components/Formulario.vue'
import FondoSgv from "@/components/FondoSgv.vue";
export default {
  name: 'OrdenarView',
  components: {
    Sabores,
    Adornos,
    Formulario,
    FondoSgv
  }
}
</script>
