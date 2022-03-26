<template>
    <div class="container px-4 px-lg-5 mt-5">
                                    
                                    <h3 class="display-4 color-on-primary text-center">Selecciona los sabores</h3>     
                                    <br>           
                                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                        <div class="col mb-5">
                                            <div class="card h-100 add-shadow">
                                                <!-- Product image-->
                                                <img class="card-img-top" src="https://i.postimg.cc/5tJL83n8/queso.jpg" alt="..." />
                                                <!-- Product details-->
                                                <div class="card-body p-4 color-on-primary">
                                                    <div class="text-center">
                                                        <!-- Product name-->
                                                        <h5 class="fw-bolder ">Queso</h5>
                                                        <!-- Product price-->
                                                        $80.00
                                                    </div>
                                                </div>
                                                <!-- Product actions-->
                                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent justify-content-center">
                                                    <div class="center-swit">
                                                        <div class="form-check form-switch ">
                                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckQueso">
                                                            <label class="form-check-label" for="flexSwitchCheckQueso">Agregar</label>
                                                        </div>
                                                    </div>                                                            
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-5">
                                            <div class="card h-100 add-shadow">
                                                <!-- Sale badge-->
                                                <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                                                <!-- Product image-->
                                                <img class="card-img-top" src="https://i.postimg.cc/BbLnYm3h/chocolate.jpg" alt="..." />
                                                <!-- Product details-->
                                                <div class="card-body p-4 color-on-primary">
                                                    <div class="text-center">
                                                        <!-- Product name-->
                                                        <h5 class="fw-bolder">Chocolate</h5>
                                                        <!-- Product reviews-->
                                                        <div class="d-flex justify-content-center small text-warning mb-2">
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                        </div>
                                                        <!-- Product price-->
                                                        <span class="text-muted text-decoration-line-through">$20.00</span>
                                                        $18.00
                                                    </div>
                                                </div>
                                                <!-- Product actions-->
                                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div class="center-swit">
                                                        <div class="form-check form-switch ">
                                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChoco">
                                                            <label class="form-check-label" for="flexSwitchCheckChoco">Agregar</label>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-5">
                                            <div class="card h-100 add-shadow">
                                                <!-- Sale badge-->
                                                <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                                                <!-- Product image-->
                                                <img class="card-img-top" src="https://i.postimg.cc/Y2Z9GBNT/vainilla.jpg" alt="..." />
                                                <!-- Product details-->
                                                <div class="card-body p-4">
                                                    <div class="text-center">
                                                        <!-- Product name-->
                                                        <h5 class="fw-bolder">Vainilla</h5>
                                                        <!-- Product price-->
                                                        <span class="text-muted text-decoration-line-through">$50.00</span>
                                                        $25.00
                                                    </div>
                                                </div>
                                                <!-- Product actions-->
                                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div class="center-swit">
                                                        <div class="form-check form-switch ">
                                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckVainilla">
                                                            <label class="form-check-label" for="flexSwitchCheckVainilla">Agregar</label>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-5">
                                            <div class="card h-100 add-shadow">
                                                <!-- Product image-->
                                                <img class="card-img-top" src="https://i.postimg.cc/NF3fWRfQ/tres-leches.jpg" alt="..." />
                                                <!-- Product details-->
                                                <div class="card-body p-4">
                                                    <div class="text-center">
                                                        <!-- Product name-->
                                                        <h5 class="fw-bolder">Tres Leches</h5>
                                                        <!-- Product reviews-->
                                                        <div class="d-flex justify-content-center small text-warning mb-2">
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                        </div>
                                                        <!-- Product price-->
                                                        $40.00
                                                    </div>
                                                </div>
                                                <!-- Product actions-->
                                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div class="center-swit">
                                                        <div class="form-check form-switch ">
                                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckTresL">
                                                            <label class="form-check-label" for="flexSwitchCheckTresL">Agregar</label>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>                    
                                    </div>
                                </div>
</template>

<script>
export default {
  name: 'Sabores',
  props: {
    
  }
}
</script>