<template>
    <h3 class="display-4 color-on-primary text-center">Pedidos Realizados</h3>     
                                    <br>   
                                    <div class="">
                                        <table class="table">
                                            <thead>
                                              <tr>
                                                <th class="small-col" scope="col">Núm</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Correo</th>
                                                <th scope="col">Telefono</th>
                                                <th scope="col">Descripción</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <th scope="row">1</th>
                                                <td>Mark Jacob</td>
                                                <td>Otto@email.com</td>
                                                <td>+52 134 876 49000</td>
                                                <td>
                                                    <p>Sabores: Chocolate | Queso</p>                                               
                                                    <p>Adornos: Velas | Sarzamora</p> 
                                                </td>
                                              </tr>
                                              <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob Marck</td>
                                                <td>Thornton@email.com</td>
                                                <td>+52 134 876 49000</td>
                                                <td><p>Sabores: Chocolate | Queso</p>                                               
                                                    <p>Adornos: Velas | Sarzamora</p> </td>
                                              </tr>
                                              <tr>
                                                <th scope="row">3</th>
                                                <td>Larry Henrry</td>
                                                <td>theBird@email.com</td>
                                                <td>+52 134 876 49000</td>
                                                <td><p>Sabores: Chocolate | Queso</p>                                               
                                                    <p>Adornos: Velas | Sarzamora</p> </td>
                                              </tr>
                                            </tbody>
                                          </table>   
                                    </div> 
</template>

<script>
export default {
  name: "Inventario",
  props: {},
};
</script>