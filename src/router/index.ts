import { createRouter, createWebHistory } from "vue-router";
import TheGame from "../components/TheGame.vue";
const routes = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/game", component: TheGame }],
});
export default routes;
