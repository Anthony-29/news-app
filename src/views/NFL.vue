<template>
  <Header title="NFL News" />
  <DisplayNews
    v-if="news.articles"
    :img="news.articles[0].urlToImage"
    :title="news.articles[0].title"
    :desc="news.articles[0].description"
    :link="news.articles[0].url"
  />
  <DisplayNews
    v-if="news.articles"
    :img="news.articles[1].urlToImage"
    :title="news.articles[1].title"
    :desc="news.articles[1].description"
    :link="news.articles[1].url"
  />
  <DisplayNews
    v-if="news.articles"
    :img="news.articles[2].urlToImage"
    :title="news.articles[2].title"
    :desc="news.articles[2].description"
    :link="news.articles[2].url"
  />
  <DisplayNews
    v-if="news.articles"
    :img="news.articles[3].urlToImage"
    :title="news.articles[3].title"
    :desc="news.articles[3].description"
    :link="news.articles[3].url"
  />
  <DisplayNews
    v-if="news.articles"
    :img="news.articles[4].urlToImage"
    :title="news.articles[4].title"
    :desc="news.articles[4].description"
    :link="news.articles[4].url"
  />
</template>

<script>
import Header from "../components/Header";
import DisplayNews from "../components/DisplayNews";

export default {
  name: "NHL",
  components: {
    Header,
    DisplayNews,
  },
  data() {
    return {
      news: [],
      todaysDate: "",
      m: "",
      d: "",
      y: "",
      link: `https://newsapi.org/v2/everything?q=nfl&from=2022-01-12&sortBy=popularity&apiKey=${process.env.VUE_APP_API_KEY}`,
    };
  },
  methods: {
    async fetchNews() {
      const res = await fetch(this.link);
      try {
        const data = res.json();
        console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    getCurrentDate() {
      var today = new Date();
      var dd = String(today.getDate() - 1).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      this.y = yyyy;
      this.m = mm;
      this.d = dd;
      return yyyy + "-" + mm + "-" + dd;
    },
    getYesterdaysDate() {
      var today = new Date();
      var dd = String(today.getDate() - 7).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      this.yesterdaysDate = yyyy + "-" + mm + "-" + dd;
    },
  },
  async created() {
    this.news = await this.fetchNews();
    this.todaysDate = this.getCurrentDate();
    this.link = `https://newsapi.org/v2/everything?q=nfl&from=${this.y}-${this.m}-${this.d}&sortBy=popularity&apiKey=${process.env.VUE_APP_API_KEY}`
  },
};
</script>
