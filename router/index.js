import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("../layout/layout.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/home.vue"),
      },
      // {
      //     path: "/news",
      //     name: "news",
      //     component: () => import("../views/news.vue"),
      // },
      // {
      //     path: "/news_content",
      //     name: "news_content",
      //     component: () => import("../views/news/content.vue"),
      // },
      // {
      //     path: "/case",
      //     name: "case",
      //     component: () => import("../views/case.vue"),
      // },
      // {
      //     path: "/case_content",
      //     name: "case_content",
      //     component: () => import("../views/case/content.vue"),
      // },
      // {
      //     path: "/train",
      //     name: "train",
      //     component: () => import("../views/train.vue"),
      // },
      {
        path: "/exam",
        name: "Exam",
        component: () => import("../views/exam.vue"),
        props: (route) => {
          return { id: route.query.id };
        },
      },
      {
        path: "/result",
        name: "Result",
        component: () => import("../views/result.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
