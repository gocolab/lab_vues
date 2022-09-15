import { defineComponent } from "vue";

const base_path = "";
// lazy load components for better performance
const Main = () => {
  return import("../components/Main.vue");
};
const UserLogin = () => {
  return import("../components/users/UserLogin.vue");
};
const UserRegister = () => {
  return import("../components/users/UserRegister.vue");
};
const FestivalList = () => {
  return import("../components/festivals/FestivalList.vue");
};
const FestivalView = () => {
  return import("../components/festivals/FestivalView.vue");
};
const TranslatorReady = () => {
  return import("../components/fortranslator/Ready.vue");
};
const TranslatorMain = () => {
  return import("../components/fortranslator/Main.vue");
};
const NotFound = defineComponent({
  template: "<div>Not Found</div>",
});
const routes = [
  {
    path: base_path + "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  { path: base_path + "/", redirect: "/main", name: "Home" },
  {
    path: base_path + "/main",
    component: Main,
    name: "Main",
  },
  {
    path: base_path + "/login",
    component: UserLogin,
    name: "UserLogin",
  },
  {
    path: base_path + "/register",
    component: UserRegister,
    name: "UserRegister",
  },
  {
    path: base_path + "/festivalList",
    component: FestivalList,
    name: "FestivalList",
  },
  {
    path: base_path + "/festivalView",
    component: FestivalView,
    name: "FestivalView",
  },
  {
    path: base_path + "/translatorReady",
    component: TranslatorReady,
    name: "TranslatorReady",
  },
  {
    path: base_path + "/translatorMain",
    component: TranslatorMain,
    name: "TranslatorMain",
  },
];

export default routes;
