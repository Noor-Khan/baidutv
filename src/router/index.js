import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Concept from "../views/Concept.vue";
import Product from "../views/Product.vue";
import Download from "../views/Download.vue";
import Company from "../views/Company.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/concept",
    name: "Concept",
    component: Concept
  },
  {
    path: "/product",
    name: "Product",
    component: Product
  },
  {
    path: "/download",
    name: "Download",
    component: Download
  },
  {
    path: "/company",
    name: "Company",
    component: Company
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;