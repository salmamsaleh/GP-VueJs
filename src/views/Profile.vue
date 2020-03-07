<template>
<div class="app-content content">
    <div class="content-wrapper">
      <div id="user-profile">
          <profile-header></profile-header>
          <profile-info></profile-info>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "./StudentProfile/ProfileHeader.vue";
import ProfileInfo from "./StudentProfile/ProfileInfo.vue";
export default {
    name: "Profile",
    components: {
        ProfileHeader,
        ProfileInfo
    }
};
</script>
