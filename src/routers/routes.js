import { defineComponent } from "vue";

const base_path = "/project_yojulab_front"; // for build
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

// Festival - Toys
const FestivalList = () => {
  return import("../components/festivals/FestivalList.vue");
};
const FestivalView = () => {
  return import("../components/festivals/FestivalView.vue");
};

// Toys List
const LessonsToyProjectList = () => {
  return import("../components/lessons/ToyProjectList_html.vue");
};
// Translation - Toys
const TranslationReady = () => {
  return import("../components/translation/Ready.vue");
};
const TranslationMain = () => {
  return import("../components/translation/Main.vue");
};

// Lessons List
const LessonsList = () => {
  return import("../components/lessons/LessonList_html.vue");
};
const LessonsLesson = () => {
  return import("../components/lessons/Lesson_html.vue");
};

// Polls
const PollsPollOnePage = () => {
  return import("../components/polls/PollOnePage.vue");
};

const NotFound = defineComponent({
  template: "<div>Not Found</div>",
});
const routes = [
  {
    path: base_path + "/PollsPollOnePage",
    component: PollsPollOnePage,
    name: "PollsPollOnePage",
  },
  {
    path: base_path + "/LessonsToyProjectList",
    component: LessonsToyProjectList,
    name: "LessonsToyProjectList",
  },
  {
    path: base_path + "/LessonsLesson",
    component: LessonsLesson,
    name: "LessonsLesson",
  },
  {
    path: base_path + "/LessonsList",
    component: LessonsList,
    name: "LessonsList",
  },
  {
    path: base_path + "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  { path: base_path + "/", redirect: base_path + "/main", name: "Home" },
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
    path: base_path + "/TranslationReady",
    component: TranslationReady,
    name: "TranslationReady",
  },
  {
    path: base_path + "/TranslationMain",
    component: TranslationMain,
    name: "TranslationMain",
  },
];

export default routes;
