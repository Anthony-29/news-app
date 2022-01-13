<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-8 col-md-10 col-sm-12 list-wrapper">
        <ul class="list-group">
          <li class="list-group-item clearfix">
            <img
              class="img-responsive img-rounded"
              :src="img"
              alt="Article Image"
            />
            <h4 class="list-group-item-heading">
              {{ title }}
            </h4>
            <p class="list-group-item-text lead">
              {{ desc }}
              <br />
            </p>
            <a class="details-link" :href="link" target="__blank"
              ><small>Details&#8230;</small></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayNews",
  props: ["img", "title", "desc", "link"],
  data() {
    return {
      abc: [],
    };
  },
  methods: {
    test() {
      console.log(this.news);
    },
  },
  async created() {
    this.abc = await this.news;
  },
};
</script>

<style scoped>
.list-wrapper {
  margin: 30px auto;
}

.list-group {
  box-shadow: 0px 11px 23px 5px rgba(0, 0, 0, 0.34);
}

.list-group-item {
  background-color: rgba(255, 255, 255, 0.7);
  border: 0;
}

.pull-right {
  float: right;
}

.details-link {
  float: right;
}

img {
  float: left;
  margin-right: 15px;
  height: 128px;
  width: 128px;
}

.img-rounded,
.label {
  border-radius: 6px;
}
.btn {
  padding: 6px 18px;
}
/* ==== FONTS ==== */
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300);
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
}
html,
body {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased !important;
}
.active a {
  color: #c7ddef;
}
</style>
