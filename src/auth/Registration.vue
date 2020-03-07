<template>
  <div class="content-wrapper">
    <div class="content-body">
      <!-- Form wizard with step validation section start -->
      <section id="validation">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Student Community</h4>
              </div>
              <div class="card-content">
                <div class="card-body">
                  <form
                    id="form"
                    method="post"
                    enctype="multipart/form-data"
                    class="steps-validation wizard-circle"
                  >
                    <!-- Step 1 -->
                    
                    <h6>
                      <i class="step-icon feather icon-home"></i> Step 1
                    </h6>
                    <fieldset>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input
                              type="text"
                              class="form-control required"
                              id="firstName"
                              name="firstName"
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label
                              for="lastName3"
                            >Last Name (optional for companies / workingspaces)</label>
                            <input type="text" class="form-control" id="lastName3" name="lastName" />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control required" name="email" />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group form-group validate">
                            <label for="firstName3">Password</label>
                            <div class="controls">
                              <input
                                type="password"
                                name="password"
                                class="form-control"
                                placeholder="Your Password"
                                required
                                data-validation-required-message="The password field is required"
                                minlength="6"
                              />
                              <div class="help-block"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group form-group validate">
                            <label for="lastName3">Confirm Password</label>
                            <div class="form-group">
                              <div class="controls">
                                <input
                                  type="password"
                                  name="con-password"
                                  class="form-control"
                                  placeholder="Confirm Password"
                                  required
                                  data-validation-match-match="password"
                                  data-validation-required-message="The Confirm password field is required"
                                  minlength="6"
                                />
                                <div class="help-block"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="custom-file">
                            <label for="img">Picture</label>
                            <div class="custom-file">
                              <input
                                name="photo"
                                type="file"
                                class="custom-file-input"
                                id="inputGroupFile01"
                              />
                              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="userphone">Phone</label>
                            <input type="text" class="form-control" name="phone" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-group">
                              <label for="address">Address</label>
                              <input
                                type="text"
                                class="form-control required"
                                id="address"
                                name="address"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="role">Role</label>
                            <select
                              class="custom-select form-control"
                              required
                              name="role"
                              id="actor"
                            >
                              <option value class="actors">Choose Role</option>
                              <option value="stu" class="actors">Student</option>
                              <option value="doc" class="actors">Doctor</option>
                              <option value="TA" class="actors">TA</option>
                              <option value="com" class="actors">Company</option>
                              <option value="ws" class="actors">Workspace</option>
                              <option value="du" class="actors">Defult</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <!-- Step 2 -->

                    <h6>
                      <i class="step-icon feather icon-briefcase"></i> Step 2
                    </h6>
                    <fieldset>
                      <div class="row" id="part1">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="gender">Gender</label>
                            <select class="custom-select form-control" name="gender">
                              <option value>Choose gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="founded">BirthDate</label>
                            <input
                              type="text"
                              name="birthdate"
                              class="form-control pickadate-disable"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row" id="part2">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="founded">Founded at</label>
                            <input
                              type="text"
                              name="founded"
                              class="form-control pickadate-disable"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <!-- Step 3 -->
                    <h6>
                      <i class="step-icon feather icon-image"></i> Step 3
                    </h6>
                    <fieldset>
                      <div class="row" id="stu">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="uni">Your University</label>
                            <select class="custom-select form-control" name="studentuni">
                              <option selected>University</option>
                              <option value="1">Cairo</option>
                              <option value="2">Ain Shams</option>
                              <option value="3">Helwan</option>
                              <option value="4">Banha</option>
                              <option value="5">Mansoura</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="faculty">Your Faculty</label>
                            <select
                              class="custom-select form-control"
                              id="eventStatus3"
                              name="studentfaculty"
                            >
                              <option selected>Faculty</option>
                              <option value="Computer Science">Computer Science</option>
                              <option value="Computer Science">Computer Science</option>
                              <option value="Computer Science">Information Technology</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="level">Your Level</label>
                            <select
                              class="custom-select mr-sm-2"
                              id="inlineFormCustomSelect"
                              name="level"
                            >
                              <option selected>Level</option>
                              <option value="1">Level 1</option>
                              <option value="2">Level 2</option>
                              <option value="3">Level 3</option>
                              <option value="4">Level 4</option>
                              <option value="5">Level 5</option>
                              <option value="6">Level 6</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="row" id="doc">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="uni">Your University</label>
                            <select class="custom-select form-control required" name="doctoruni">
                              <option selected>University</option>
                              <option value="1">Cairo</option>
                              <option value="2">Ain Shams</option>
                              <option value="3">Helwan</option>
                              <option value="4">Banha</option>
                              <option value="5">Mansoura</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="faculty">Your Faculty</label>
                            <select
                              class="custom-select form-control"
                              id="eventStatus3"
                              name="doctorfaculty"
                            >
                              <option selected>Faculty</option>
                              <option value="Computer Science">Computer Science</option>
                              <option value="Computer Science">Computer Science</option>
                              <option value="Computer Science">Information Technology</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="level">Your Degree</label>
                            <select
                              class="custom-select mr-sm-2"
                              id="inlineFormCustomSelect"
                              name="degree"
                            >
                              <option selected>Degree</option>
                              <option value="1">Level 1</option>
                              <option value="2">Level 2</option>
                              <option value="3">Level 3</option>
                              <option value="4">Level 4</option>
                              <option value="5">Level 5</option>
                              <option value="6">Level 6</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="row" id="du">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="defultuni">Your University</label>
                            <select class="custom-select form-control" name="defultuni">
                              <option selected>University</option>
                              <option value="1">Cairo</option>
                              <option value="2">Ain Shams</option>
                              <option value="3">Helwan</option>
                              <option value="4">Banha</option>
                              <option value="5">Mansoura</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="faculty">Your Faculty</label>
                            <select
                              class="custom-select form-control"
                              id="eventStatus3"
                              name="defultfaculty"
                            >
                              <option selected>Faculty</option>
                              <option value="CS">Computer Science</option>
                              <option value="IS">Computer Science</option>
                              <option value="IT">Information Technology</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="career">Your Career</label>
                            <select
                              class="custom-select mr-sm-2"
                              id="inlineFormCustomSelect"
                              name="career"
                            >
                              <option selected>Career</option>
                              <option value="1">Doctor</option>
                              <option value="2">Engineer</option>
                              <option value="3">Translator</option>
                              <option value="4">Actor</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="row" id="com">
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-group">
                              <label for="fax">Fax Number</label>
                              <input type="text" class="form-control" id="fax" name="fax" />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-group">
                              <label>Website URL</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  name="website"
                                  class="form-control"
                                  data-validation-regex-regex="^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
                                  data-validation-regex-message="Must be a valid url"
                                  placeholder="Enter valid url"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-group">
                              <label for="services">Services Scope</label>
                              <div class="form-group">
                                <select
                                  class="select2 form-control"
                                  multiple="multiple"
                                  name="scope"
                                >
                                  <option value>Your Scope</option>
                                  <option value="it">IT</option>
                                  <option value="is">IS</option>
                                  <option value="cs">CS</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-group">
                              <label for="mission">Mission</label>
                              <textarea
                                class="form-control"
                                name="mission"
                                rows="3"
                                placeholder="Mission"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row" id="ws">
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-group">
                              <label for="workdays">Workdays</label>
                              <div class="form-group">
                                <select
                                  class="select2 form-control"
                                  multiple="multiple"
                                  name="workdays"
                                >
                                  <option value="sunday">Sunday</option>
                                  <option value="monday">Monday</option>
                                  <option value="tuesday">Tuesday</option>
                                  <option value="Wednesday">Wednesday</option>
                                  <option value="thursday">Thursday</option>
                                  <option value="friday">Friday</option>
                                  <option value="saturday">Saturday</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-group">
                              <label for="roomnumber">Number of rooms</label>
                              <input
                                type="text"
                                class="form-control"
                                id="roomnumber"
                                name="roomnumber"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-group">
                              <label for="starth">Start at</label>
                              <input type="text" class="form-control pickatime" name="starth" />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <div class="form-group">
                              <label for="endh">End at</label>
                              <input type="text" class="form-control pickatime" name="endh" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="divider" id="line">
                        <div class="divider-text">Owner Info.</div>
                      </div>

                      <div class="row" id="owner">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="ownerfirstName">First Name</label>
                            <input type="text" class="form-control" name="ownerfirstName" />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="ownerlastName">Last Name</label>
                            <input type="text" class="form-control" name="ownerlastName" />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="owneremail">Email</label>
                            <input type="email" class="form-control" name="owneremail" />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="ownerphone">Phone</label>
                            <input type="text" class="form-control" name="ownerphone" />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group custom-file">
                            <label for="img">Picture</label>
                            <div class="custom-file">
                              <input
                                name="ownerimage"
                                type="file"
                                class="custom-file-input"
                                id="owner-inputGroupFile01"
                              />
                              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Form wizard with step validation section end -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration"
};
</script>


