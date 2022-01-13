<template>
  <div id="nav">
    <Nav />
  </div>
  <router-view />
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap");
</style>
<style>
h1.main-header {
  margin-top: 80px;
  font-family: "Playfair Display", serif;
  font-size: 4em;
  text-align: center;
  font-weight: bold;
}
</style>
