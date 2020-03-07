import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sidebar from "../components/global/Sidebar.vue";
import Navbar from "../components/global/Navbar.vue";
import ContentHeader from "../components/global/ContentHeader.vue";
import Footer from "../components/global/Footer.vue";
import Group from "../views/groups/Group.vue";
import Course from "../views/Course.vue";
import Profile from "../views/Profile.vue";
import Todo from "../views/Todo.vue";
import Chat from "../views/Chat.vue";
import Lecture from "../views/groups/Lecture.vue";
import Login from "../auth/Login.vue";
import Registration from "../auth/Registration.vue";
import ProfileAbout from "../views/About/ProfileAbout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Sidebar",
    name: "Sidebar",
    component: Sidebar
  },
  {
    path: "/Navbar",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/ContentHeader",
    name: "ContentHeader",
    component: ContentHeader
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer
  },
  {
    path: "/Group",
    name: "Group",
    component: Group
  },
  {
    path: "/Course",
    name: "Course",
    component: Course
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/Todo",
    name: "Todo",
    component: Todo
  },
  {
    path: "/Chat",
    name: "Chat",
    component: Chat
  },
  {
    path: "/Lecture",
    name: "Lecture",
    component: Lecture
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: { hideNavigation: true }
  },
  {
    path: "/Registration",
    name: "Registration",
    component: Registration,
    meta: { hideNavigation: true }
  },
  {
    path: "/ProfileAbout",
    name: "ProfileAbout",
    component: ProfileAbout
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
