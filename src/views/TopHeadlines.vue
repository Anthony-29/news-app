<template>
  <Header title="Top Headlines In Canada" />
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
      try {
        const data = res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    this.news = await this.fetchNews();
    console.log("yea", this.news);
  },
};
</script>
