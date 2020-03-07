<template>
    <div>
        <div class="content-body">
            <div id="user-profile">
                <GroupHeader></GroupHeader>
                <section id="profile-info">
                        <div class="row">
                            <div class="col-lg-8 col-12">
                                <section id="nav-justified">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="card overflow-hidden">
                                                    <div class="card-content">
                                                        <div class="card-body">
                                                            <ul class="nav nav-tabs nav-justified" id="myTab2" role="tablist">
                                                                <li class="nav-item">
                                                                    <a class="nav-link active" id="home-tab-justified" data-toggle="tab" href="#home-just" role="tab" aria-controls="home-just" aria-selected="true">Posts</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" id="home-tab-justified" data-toggle="tab" href="#materials" role="tab" aria-controls="home-just" aria-selected="true">Materials</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" id="messages-tab-justified" data-toggle="tab" href="#messages-just" role="tab" aria-controls="messages-just" aria-selected="false">Extra Materials</a>
                                                                </li>
                                                            </ul>
                    
                                                            <!-- Tab panes -->
                                                            <div class="tab-content pt-1">
                                                                <div class="tab-pane active" id="home-just" role="tabpanel" aria-labelledby="home-tab-justified">
                                                                 <GroupPost></GroupPost>
                                                                </div>
                                                                <div class="tab-pane" id="materials" role="tabpanel" aria-labelledby="home-tab-justified">
                                                                    <group-materials></group-materials>
                                                                </div>
                                                                <div class="tab-pane" id="messages-just" role="tabpanel" aria-labelledby="messages-tab-justified">
                                                                   <group-extra-materials></group-extra-materials>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </section>
                            </div>
                            <div class="col-lg-4 col-12">
                                <latest-posts></latest-posts>
                                <suggest></suggest>
                            </div>
                        </div>
                    </section>
            </div>
        </div>
    </div>
</template>

<script>
import GroupHeader from "./GroupHeader.vue";
import GroupPost from "./GroupPost.vue";
import GroupMaterials from "./GroupMaterials.vue";
import GroupExtraMaterials from "./GroupExtraMaterials.vue";
import LatestPosts from "./LatestPosts.vue";
import Suggest from "./Suggest.vue";
export default {
    name: "Group",
    components: {
        GroupHeader,
        GroupPost,
        GroupMaterials,
        GroupExtraMaterials,
        LatestPosts,
        Suggest
    }
};
</script>

<style>
.bg-cover {
    margin-top: -7em;
    margin-bottom: 1em;
}
</style>
