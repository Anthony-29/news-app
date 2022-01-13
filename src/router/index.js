import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import TopHeadlines from "../views/TopHeadlines.vue";
import Sports from "../views/Sports.vue";
import Covid from "../views/Covid.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/Top",
    name: "TopHeadlines",
    component: TopHeadlines,
  },
  {
    path: "/Sports",
    name: "Sports",
    component: Sports,
  },
  {
    path: "/Covid",
    name: "Covid",
    component: Covid,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
