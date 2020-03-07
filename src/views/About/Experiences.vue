<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Experience</h4>
      <button
        type="button"
        class="btn btn-outline-success"
        data-toggle="modal"
        data-target="#exper"
      >
        <i class="feather icon-plus-square"></i>
      </button>
    </div>
    <div class="card-content">
      <div class="card-body">
        <div
          class="modal fade text-left"
          id="exper"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel33"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4>Experience</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form action="/student/addExperience" method="post">
                <!--   @csrf -->
                <div class="modal-body">
                  <div class="form-body">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Title</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="email-id"
                              class="form-control"
                              name="title"
                              placeholder="please enter the title"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Company</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="contact-info"
                              class="form-control"
                              name="company"
                              placeholder="please enter Company name."
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Location</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="contact-info"
                              class="form-control"
                              name="location"
                              placeholder="Please enter the location"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Start Date</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="contact-info"
                              class="form-control"
                              name="startDate"
                              placeholder="Start Date."
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>End Date</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="contact-info"
                              class="form-control"
                              name="endDate"
                              placeholder="Please enter End Date"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <fieldset class="form-group" style="padding: 12px; margin-left: 12em; width: 23.5em">
                          <textarea
                            name="description"
                            class="form-control"
                            id="basicTextarea"
                            rows="3"
                            placeholder="Description"
                          ></textarea>
                        </fieldset>
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
        </div>
        <!-- Here5 -->
        <!--  @if(!empty($experiences)) -->
        <div class="card-content">
          <div class="card-body">
            <div class="container">
              <!--
                                                @php $EditExperienceModal=0;  @endphp
              @foreach($experiences as $key=>$value)-->
              <div class="row">
                <div class="col-md-6 col-sm">
                  <h3>
                    Web Developer at
                    <strong title="Location: location">CB-MART</strong>
                  </h3>
                  <p>
                    <!--{{ $value->startDate }}-->
                    12-12-2012 ~
                    <!-- {{ $value->endDate }}-->
                    13-13-2013
                  </p>
                  <p>
                    <!--{{$value->location}}-->
                    Cairo, Egypt.
                  </p>
                  <small>
                    <!--{{ $value->description }}-->
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </small>
                </div>
                <div class="col-sm">
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    data-toggle="modal"
                    data-target="#exper"
                  >
                    <i class="feather icon-edit"></i>
                  </button>
                  <div
                    class="modal fade text-left"
                    id="exper"
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
                          <h4>Edit Experience</h4>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form action="/student/editExperience/valueid" method="post">
                          @csrf
                          <div class="modal-body">
                            <!-- I will Write Here -->
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>Title</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    value="new title"
                                    type="text"
                                    id="email-id"
                                    class="form-control"
                                    name="title"
                                    placeholder="please enter the title"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>Company</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    value="company name"
                                    type="text"
                                    id="contact-info"
                                    class="form-control"
                                    name="company"
                                    placeholder="please enter Company name."
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>Location</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    value="location"
                                    type="text"
                                    id="contact-info"
                                    class="form-control"
                                    name="location"
                                    placeholder="Please enter the location"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>Start Date</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    value="start-date"
                                    type="text"
                                    id="contact-info"
                                    class="form-control"
                                    name="startDate"
                                    placeholder="Start Date."
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>End Date</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    value="end-date"
                                    type="text"
                                    id="contact-info"
                                    class="form-control"
                                    name="endDate"
                                    placeholder="Please enter End Date"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <fieldset class="form-group">
                                <textarea
                                  name="description"
                                  class="form-control"
                                  id="basicTextarea"
                                  rows="3"
                                  placeholder="Description"
                                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</textarea>
                              </fieldset>
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
                    onclick="return confirm('Are you sure you want to Remove This Experience?');"
                    href="/student/deleteExperience/id"
                    class="btn btn-outline-danger mr-1 mb-1 waves-effect waves-light"
                  >
                    <i class="feather icon-trash"></i>
                  </a>
                </div>
              </div>
              <hr />
              <!--
                                                @php $EditExperienceModal++; @endphp
              @endforeach-->
            </div>
          </div>
        </div>
        <!--
        @endif-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiences"
};
</script>
