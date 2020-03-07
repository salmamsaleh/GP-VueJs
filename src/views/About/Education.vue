<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Educations</h4>
      <button
        type="button"
        class="btn btn-outline-success"
        data-toggle="modal"
        data-target="#educations"
      >
        <i class="feather icon-plus-square"></i>
      </button>
    </div>
    <div class="card-content">
      <div class="card-body">
        <div
          class="modal fade text-left"
          id="educations"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel33"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4>Educations</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form action="/student/addEduc" method="post">
                <!--  @csrf-->
                <div class="modal-body">
                  <div class="form-body">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>School</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="email-id"
                              class="form-control"
                              name="school"
                              placeholder="Ex:Cairo Univeristy"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Degree</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="email-id"
                              class="form-control"
                              name="degree"
                              placeholder="Ex:Bachelor's"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Field Of Study</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="email-id"
                              class="form-control"
                              name="fieldOfStudy"
                              placeholder="Ex: Business"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Grade</span>
                          </div>
                          <div class="col-md-8">
                            <select class="select2 form-control" name="grade">
                              <option value></option>
                              <option value="A+">A+</option>
                              <option value="A">A</option>
                              <option value="B+">B+</option>
                              <option value="B">B</option>
                              <option value="C+">C+</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Start Year</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="email-id"
                              class="form-control"
                              name="startDate"
                              placeholder="please enter your skill"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>End Year (or expected)</span>
                          </div>
                          <div class="col-md-8">
                            <input
                              type="text"
                              id="email-id"
                              class="form-control"
                              name="endDate"
                              placeholder="please enter your skill"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Activities and societies</span>
                          </div>
                          <div class="col-md-8">
                            <fieldset class="form-group">
                              <textarea
                                name="activites"
                                class="form-control"
                                id="basicTextarea"
                                rows="3"
                              ></textarea>
                              <small>Ex: Alpha Phi Omega, Marching Band, Volleyball</small>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group row">
                          <div class="col-md-4">
                            <span>Description</span>
                          </div>
                          <div class="col-md-8">
                            <fieldset class="form-group">
                              <textarea
                                name="description"
                                class="form-control"
                                id="basicTextarea"
                                rows="3"
                              ></textarea>
                            </fieldset>
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
        <!-- @if(!empty($educations))-->
        <div class="card-content">
          <div class="card-body">
            <div class="container">
              <!--
                                                    @php $EditEducationModal=0;  @endphp
              @foreach($educations as $key=>$value)-->
              <div class="row">
                <div class="col-md-6 col-sm">
                  <h3>
                    <!--{{$value->school}}-->
                    FCIH
                  </h3>
                  <h5>
                    <!--{{$value->degree}}, {{$value->grade}} -->
                    Degree, Grade
                  </h5>
                  <small>
                    <!--{{ $value->startDate }}  ~  {{ $value->endDate }}-->
                    12-12-2012 ~ 13-13-2013
                  </small>
                  <br />
                  <small>
                    Activities and Societies:
                    <!--{{$value->activites}}-->
                    Activities
                  </small>
                  <br />
                  <br />
                  <h7>
                    <!--{{$value->description}}-->
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h7>
                </div>
                <div class="col-sm">
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    data-toggle="modal"
                    data-target="#educ"
                  >
                    <i class="feather icon-edit"></i>
                  </button>
                  <!-- Modal -->
                  <div
                    class="modal fade text-left"
                    id="educ"
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
                        <form action="/student/editEduc/id" method="post">
                          <!-- @csrf -->
                          <div class="modal-body">
                            <!-- I will Write Here -->
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>School</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    type="text"
                                    id="email-id"
                                    class="form-control"
                                    name="school"
                                    value="FCIH"
                                    placeholder="Ex:Cairo Univeristy"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>Degree</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    type="text"
                                    id="email-id"
                                    class="form-control"
                                    name="degree"
                                    value="Master"
                                    placeholder="Ex:Bachelor's"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>Field Of Study</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    type="text"
                                    id="email-id"
                                    class="form-control"
                                    name="fieldOfStudy"
                                    value="Field Of Study"
                                    placeholder="Ex: Business"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>Grade</span>
                                </div>
                                <div class="col-md-8">
                                  <select class="select2 form-control" name="grade">
                                    <option value>Choose Yuor grade</option>
                                    <option value="A+">A+</option>
                                    <option value="A">A</option>
                                    <option value="B+">B+</option>
                                    <option value="B">B</option>
                                    <option value="C+">C+</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>Start Year</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    type="text"
                                    id="email-id"
                                    class="form-control"
                                    name="startDate"
                                    value="12-12-2012"
                                    placeholder="please enter your skill"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>End Year (or expected)</span>
                                </div>
                                <div class="col-md-8">
                                  <input
                                    type="text"
                                    id="email-id"
                                    class="form-control"
                                    name="endDate"
                                    value="13-13-2013"
                                    placeholder="please enter your skill"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>Activities and societies</span>
                                </div>
                                <div class="col-md-8">
                                  <fieldset class="form-group">
                                    <textarea
                                      name="activites"
                                      class="form-control"
                                      id="basicTextarea"
                                      rows="3"
                                      value
                                    >Activities</textarea>
                                    <small>Ex: Alpha Phi Omega, Marching Band, Volleyball</small>
                                  </fieldset>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group row">
                                <div class="col-md-4">
                                  <span>Description</span>
                                </div>
                                <div class="col-md-8">
                                  <fieldset class="form-group">
                                    <textarea
                                      name="description"
                                      class="form-control"
                                      id="basicTextarea"
                                      rows="3"
                                      value
                                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.</textarea>
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
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <a
                    onclick="return confirm('Are you sure you want to Remove This Education?');"
                    href="/student/deleteEduc/id"
                    class="btn btn-outline-danger mr-1 mb-1 waves-effect waves-light"
                  >
                    <i class="feather icon-trash"></i>
                  </a>
                </div>
              </div>
              <hr />
              <!--
                                                    @php $EditEducationModal++; @endphp
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
  name: "Education"
};
</script>
