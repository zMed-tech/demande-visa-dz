import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/visa/:visa",
    name: "Visa",
    props: true,
    component: () =>
      import(/* webpakChunkName: "VisaView" */ "@/views/VisaView.vue"),
  },

  {
    path: "/contact",
    name: "Contact",
    props: true,
    component: () =>
      import(/* webpakChunkName: "VisaView" */ "@/views/Contact.vue"),
  },

  {
    path: "*",
    name: "Error",
    props: true,
    component: () =>
      import(/* webpakChunkName: "VisaView" */ "@/views/ErrorPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
