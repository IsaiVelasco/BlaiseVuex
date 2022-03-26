<template>
<h3 class="display-4 color-on-primary text-center">
                    Inventario
                  </h3>
                  <br />
                  <div class="">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="small-col" scope="col">Núm</th>
                          <th scope="col">Sabores</th>
                          <th scope="col">Adornos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Queso: 12 pzas.</td>
                          <td>Sarzamora: 12 kg.</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Chocolate: 22 pzas.</td>
                          <td>Fresas: 5 kg.</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Vainilla: 30 pzas.</td>
                          <td>Durazno: 25 kg.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
</template>
<script>
export default {
  name: "Pedidos",
  props: {},
};
</script>