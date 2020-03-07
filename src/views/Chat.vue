<template>
  <div class="content-left-sidebar chat-application chatt">
    <div class="app-content content">
    <chat-sidebar></chat-sidebar>
  </div>
  </div>
</template>

<script>
import ChatSidebar from "../views/Chat/ChatSidebar.vue";
export default {
  name: "Chat",
  components: {
    ChatSidebar
  }
};
</script>

<style>
.content-left-sidebar.chat-application.chatt {
    margin-top: -7.5em;
}
</style>
