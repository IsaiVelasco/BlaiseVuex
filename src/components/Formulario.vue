<template>
  <div class="container px-4 px-lg-5 mt-5">
    <h3 class="display-4 color-on-primary text-center">
      Agrega tus datos de contacto
    </h3>
    <br />

    <div class="form-group">
      <label for="nombreCliente" class="color-on-primary lead fw-normal mb-0"
        >Nombre</label
      >
      <input
        type="text"
        class="form-control"
        id="nombreCliente"
        placeholder="Ingresa tu nombre completo"
      />
    </div>
    <br />
    <div class="form-group">
      <label for="telefonoCliente" class="color-on-primary lead fw-normal mb-0"
        >Teléfono</label
      >
      <input
        type="text"
        class="form-control"
        id="telefonoCliente"
        placeholder="Ingresa tu número de Teléfono"
      />
    </div>
    <br />
    <div class="form-group">
      <label for="correoCliente" class="color-on-primary lead fw-normal mb-0"
        >Correo</label
      >
      <input
        type="email"
        class="form-control"
        id="correoCliente"
        aria-describedby="emailHelp"
        placeholder="Ingresa tu correo"
      />
    </div>
    <br />
    <div class="form-group">
      <label for="direccionCliente" class="color-on-primary lead fw-normal mb-0"
        >Dirección de envío</label
      >
      <input
        type="text"
        class="form-control"
        id="direccionCliente"
        aria-describedby="emailHelp"
        placeholder="Ingresa tu dirección para el envío"
      />
    </div>

    <br />
  </div>
</template>

<script>
export default {
  name: "Formulario",
  props: {},
};
</script>
