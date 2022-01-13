<template>
  <Header title="Home" />
  <p>
    Do you want to keep up with the latest news? Well now you can, this News Api
    App uses the API from <a href="#">NewsApi.com</a> to display the top 5
    articles in 3 categories: Top Headlines in Canada, Sports, and Covid. The
    articles get automatically updated every morning at 8:00am EST
  </p>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";

export default {
  name: "MainPage",
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>
