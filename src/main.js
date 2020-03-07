import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store"
/*
import jQuery from "jquery";
global.jQuery = jQuery;
import JQuery from 'jquery';
window.$ = JQuery;*/
import LoadScript from 'vue-plugin-load-script';
 
Vue.use(LoadScript);


require("@/assets/css/vendors.min.css");
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
require("@/assets/css/bootstrap-extended.css");
require("@/assets/css/colors.css");
require("@/assets/css/components.css");
require("@/assets/css/dark-layout.css");
require("@/assets/css/semi-dark-layout.css");
require("@/assets/css/vertical-menu.css");
require("@/assets/css/palette-gradient.css");
require("@/assets/css/users.css");
require("@/assets/css/app-todo.css");
require("@/assets/css/app-chat.css");
require("@/assets/css/profile.css");
require("@/assets/css/login.css");
require("@/assets/css/wizard.css");
require("@/assets/css/style.css");
require("@/assets/js/vendors.min");
//require("@/assets/js/app-chat");
require("@/assets/js/components");
//require("@/assets/js/app-todo");
/*
=======================================================
*/
//require ("@/assets/js/app-chat");
require("@/assets/js/jquery.steps.min");
require("@/assets/js/jquery.validate.min");
require("@/assets/js/wizard-steps");
require("@/assets/js/myForm");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
