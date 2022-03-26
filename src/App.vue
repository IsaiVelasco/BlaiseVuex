<template>
  <!-- //site-header ddd -->
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({}),
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://code.jquery.com/jquery-3.4.1.min.js"
    );
    document.head.appendChild(recaptchaScript);
    let recaptchaScript2 = document.createElement("script");
    recaptchaScript2.setAttribute(
      "src",
      "http://blaisepastel.000webhostapp.com/js/libs.min.js"
    );
    document.head.appendChild(recaptchaScript2);
    let recaptchaScript3 = document.createElement("script");
    recaptchaScript3.setAttribute(
      "src",
      "http://blaisepastel.000webhostapp.com/js/main.js"
    );
    document.head.appendChild(recaptchaScript3);
  },
  methods: {},
};
</script>

<style>
@import "./css/libs.min.css";
@import "./css/main.css";
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap");

@import "./css/main.css";
</style>
