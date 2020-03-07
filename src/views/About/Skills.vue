<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Skills</h4>
      <button
        type="button"
        class="btn btn-outline-success"
        data-toggle="modal"
        data-target="#skills"
      >
        <i class="feather icon-plus-square"></i>
      </button>
    </div>
    <div class="card-content">
      <div class="card-body">
        <div
          class="modal fade text-left"
          id="skills"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel33"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4>Skills</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form action="/student/addSkill" method="post">
                <!-- @csrf -->
                <div class="modal-body">
                  <div class="form-body">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Name</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="email-id"
                              class="form-control"
                              name="skill"
                              placeholder="please enter your skill"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Save</button>
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
              </form>
            </div>
            <!-- Here3 -->
          </div>
          <!-- Here4 -->
        </div>
        <!-- Here5 -->
        <!--  @if(!empty($skills)) -->
        <div class="card-content">
          <div class="card-body">
            <div class="container">
              <!--
                                                    @php $EditSkillModal=0;  @endphp
              @foreach($skills as $key=>$value)-->
              <div class="row">
                <div class="col-md-6 col-sm">
                  <h6>
                    <!--{{$value->skill}}-->
                    Skill
                  </h6>
                </div>
                <div class="col-sm">
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    data-toggle="modal"
                    data-target="#skill"
                  >
                    <i class="feather icon-edit"></i>
                  </button>
                  <!-- Modal -->
                  <div
                    class="modal fade text-left"
                    id="skill"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel33"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4>Edit Skill</h4>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form action="/student/editSkill/id" method="post">
                          <!--  @csrf-->
                          <div class="modal-body">
                            <!-- I will Write Here -->
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>name</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    value="skill"
                                    type="text"
                                    id="email-id"
                                    class="form-control"
                                    name="skill"
                                    placeholder="please enter the title"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Save</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <a
                    onclick="return confirm('Are you sure you want to Remove This Skill?');"
                    href="/student/deleteSkill/id"
                    class="btn btn-outline-danger mr-1 mb-1 waves-effect waves-light"
                  >
                    <i class="feather icon-trash"></i>
                  </a>
                </div>
              </div>
              <hr />
              <!--
                                                    @php $EditSkillModal++; @endphp
              @endforeach-->
            </div>
          </div>
        </div>
        <!--  @endif -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills"
};
</script>
