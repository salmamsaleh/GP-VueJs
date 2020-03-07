<template>
  <div class="app-content content lecture">
    <div class="content-wrapper">
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
                            <a
                              class="nav-link active"
                              id="home-tab-justified"
                              data-toggle="tab"
                              href="#home-just"
                              role="tab"
                              aria-controls="home-just"
                              aria-selected="true"
                            >
                              <i class="fa fa-files-o"></i> Text
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              id="messages-tab-justified"
                              data-toggle="tab"
                              href="#panel2"
                              role="tab"
                              aria-controls="messages-just"
                              aria-selected="false"
                            >
                              <i class="fa fa-indent"></i> Video/Audio
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              id="home-tab-justified"
                              data-toggle="tab"
                              href="#panel3"
                              role="tab"
                              aria-controls="home-just"
                              aria-selected="false"
                            >
                              <i class="fa fa-picture-o"></i> Images
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              id="messages-tab-justified"
                              data-toggle="tab"
                              href="#panel4"
                              role="tab"
                              aria-controls="messages-just"
                              aria-selected="false"
                            >
                              <i class="fa fa-file-text-o"></i> Labs
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              id="home-tab-justified"
                              data-toggle="tab"
                              href="#panel5"
                              role="tab"
                              aria-controls="home-just"
                              aria-selected="false"
                            >
                              <i class="fa fa-pencil"></i> Quiz & Answers
                            </a>
                          </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content pt-1">
                          <div
                            class="tab-pane active"
                            id="home-just"
                            role="tabpanel"
                            aria-labelledby="home-tab-justified"
                          >
                          <lecture-text></lecture-text>
                          </div>
                          <div
                            class="tab-pane"
                            id="panel2"
                            role="tabpanel"
                            aria-labelledby="messages-tab-justified"
                          >
                          <lecture-video></lecture-video>
                          </div>
                          <div
                            class="tab-pane"
                            id="panel3"
                            role="tabpane3"
                            aria-labelledby="messages-tab-justified"
                          >
                          <lecture-img></lecture-img>
                          </div>
                          <div
                            class="tab-pane"
                            id="panel4"
                            role="tabpane4"
                            aria-labelledby="messages-tab-justified"
                          >
                          <lecture-labs></lecture-labs>
                          </div>
                          <div
                            class="tab-pane"
                            id="panel5"
                            role="tabpane5"
                            aria-labelledby="messages-tab-justified"
                          >
                          <lecture-quiz></lecture-quiz>
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
</template>


<script>
import LectureText from "./LectureText.vue";
import LectureVideo from "./LectureVideo.vue";
import LectureImg from "./LectureImg.vue";
import LectureLabs from "./LectureLabs.vue";
import LectureQuiz from "./LectureQuiz.vue";
import LatestPosts from "./LatestPosts.vue";
import Suggest from "./Suggest.vue";
export default {
  name: "Lecture",
  components: {
    LectureText,
    LectureVideo,
    LectureImg,
    LectureLabs,
    LectureQuiz,
    LatestPosts,
    Suggest
  }
};
</script>

<style>
.lecture{
    margin-top: -7.6em
}
</style>

