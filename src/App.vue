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
@import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap");
</style>
<style>
h1.main-header {
  margin-top: 80px;
  font-family: "Exo 2", sans-serif;
  font-size: 4em;
  text-align: center;
  padding: 0 40px;
}

@media only screen and (max-width: 560px) {
  h1.main-header {
    padding: 0;
    font-size: 3em;
  }
}
</style>
