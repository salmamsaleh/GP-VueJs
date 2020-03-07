<template>
    <div id="profile-info">
        <div class="row">
            <profile-about></profile-about>
            <!--
            <profile-projects></profile-projects>
            -->
            <div class="col-lg-6 col-12">
                <experiences></experiences>
                <skills></skills>
                <eduction></eduction>
            </div>
            <latest-projects></latest-projects>
            <div class="row">
                <div class="col-12 text-center">
                    <button type="button" class="btn btn-primary block-element">Load More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileAbout from "./ProfileAbout.vue";
//import ProfileProjects from "./ProfileProjects.vue";
import Experiences from "./Experiences.vue";
import Skills from "./Skills.vue";
import Eduction from "./Education.vue";
import LatestProjects from "./LatestProjects.vue";

export default {
    name: "ProfileInfo",
    components: {
        ProfileAbout,
        //ProfileProjects,
        Experiences,
        Skills,
        Eduction,
        LatestProjects,
    }
};
</script>

<style>
button.btn.btn-primary.block-element {
    margin-left: 40em;
}
button.btn.btn-sm.btn-icon.btn-primary.mr-25.p-25 {
    margin-right: 0.5em;
    padding: 0.3rem;
}
span.font-small-2 {
    margin-left: 0;
}
</style>

