import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import TopHeadlines from "../views/TopHeadlines.vue";
import NHL from "../views/NHL.vue";
import NFL from "../views/NFL.vue";
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
    path: "/NHL",
    name: "NHL",
    component: NHL,
  },
  {
    path: "/NFL",
    name: "NFL",
    component: NFL,
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
