<template>
  <Header title="Daily News API" />
  <div class="container">
    <div class="row">
      <div class="col-12 img-wrapper">
        <img class="newspaper-img" src="../assets/newspaper.png" alt="" />
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-10 col-sm-12 col-12 h3-wrapper">
        <h3>
          Do you want to keep up with the latest news? Well, now you can! This
          app uses <a href="https://newsapi.org">newsapi.org</a> API to find
          news in a variety of categories. The top 5 search results for each
          category will be displayed on the screen for you to view.
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";

export default {
  name: "MainPage",
  data() {
    return {
      news: [],
    };
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.img-wrapper {
  margin: 50px auto;
  text-align: center;
}

.h3-wrapper {
  margin: 20px auto;
  padding: 0 20px;
}

.h3-wrapper h3 {
  font-family: "Source Serif Pro", serif;
  text-align: justify;
}

a {
  color: black;
}
</style>
