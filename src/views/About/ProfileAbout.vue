<template>
  <div class="app-content content">
    <div class="content-wrapper">
      <div id="user-profile">
        <profile-header></profile-header>
        <div id="profile-info">
          <div class="row">
              <div class="col-lg-9 col-12">
                  <personal-details></personal-details>
                  <experiences></experiences>
                  <skills></skills>
                  <education></education>
                  <new-section></new-section>
              </div>
              <latest-projects></latest-projects>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "../StudentProfile/ProfileHeader.vue";
import PersonalDetails from "./PersonalDetails.vue";
import Experiences from "./Experiences.vue";
import Skills from "./Skills.vue";
import Education from "./Education.vue";
import NewSection from "./NewSection.vue";
import LatestProjects from "../StudentProfile/LatestProjects.vue";
export default {
  name: "ProfileAbout",
  components: {
    ProfileHeader,
    PersonalDetails,
    Experiences,
    Skills,
    Education,
    NewSection,
    LatestProjects
  }
};
</script>
