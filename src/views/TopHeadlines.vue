<template>
  <Header title="Top Headlines In Canada" />
  <DisplayNews
    :img="news.articles[0].urlToImage"
    :title="news.articles[0].title"
    :desc="news.articles[0].description"
    :link="news.articles[0].url"
  />
  <DisplayNews
    :img="news.articles[1].urlToImage"
    :title="news.articles[1].title"
    :desc="news.articles[1].description"
    :link="news.articles[1].url"
  />
  <DisplayNews
    :img="news.articles[2].urlToImage"
    :title="news.articles[2].title"
    :desc="news.articles[2].description"
    :link="news.articles[2].url"
  />
  <DisplayNews
    :img="news.articles[3].urlToImage"
    :title="news.articles[3].title"
    :desc="news.articles[3].description"
    :link="news.articles[3].url"
  />
</template>

<script>
import Header from "../components/Header";
import DisplayNews from "../components/DisplayNews";

export default {
  name: "TopHeadlines",
  components: {
    Header,
    DisplayNews,
  },
  data() {
    return {
      news: [],
    };
  },
  methods: {
    async fetchNews() {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${process.env.VUE_APP_API_KEY}`
      );
      const data = res.json();
      return data;
    },
  },
  async created() {
    this.news = await this.fetchNews();
    console.log("yea", this.news);
  },
};
</script>
