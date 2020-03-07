<template>
<div class="content-left-sidebar todo-application todoo">
    <div class="app-content content">
    <div class="content-area-wrapper">
      <todo-sidebar></todo-sidebar>
      <todo-content></todo-content>
    </div>
  </div>
  </div>
</template>

<script>
import TodoSidebar from "../views/ToDo/TodoSidebar.vue";
import TodoContent from "../views/ToDo/TodoContent.vue";
import jQuery from "jquery";
global.jQuery = jQuery;
export default {
    name: "Todo",
    components: {
        TodoSidebar,
        TodoContent
    }
};
</script>

<style>
.todoo .content{
  margin-top: -7.6em
}
</style>


