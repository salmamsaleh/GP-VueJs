<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Personal Details</h4>
    </div>
    <div class="card-content">
      <div class="card-body">
        <form
          class="form form-horizontal"
          method="post"
          action="/student/editBasicInfo/userid"
        >
          <!--  @csrf  -->
          <div class="form-body">
            <div class="row">
              <div class="col-12">
                <div class="form-group row">
                  <div class="col-md-4">
                    <span>First Name</span>
                  </div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      id="first-name"
                      class="form-control"
                      name="firstname"
                      value="firstname"
                      placeholder="Enter the first name"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group row">
                  <div class="col-md-4">
                    <span>Last Name</span>
                  </div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      id="first-name"
                      class="form-control"
                      name="lastname"
                      value="lastname"
                      placeholder="Enter the last name"
                    />
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="form-group row">
                  <div class="col-md-4">
                    <span>Email</span>
                  </div>
                  <div class="col-md-8">
                    <input
                      type="email"
                      id="email-id"
                      class="form-control"
                      name="email"
                      placeholder="info@yahoo.com"
                      value="user-email"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group row">
                  <div class="col-md-4">
                    <span>Address</span>
                  </div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      id="contact-info"
                      class="form-control"
                      name="address"
                      placeholder="Cairo, Egypt."
                      value="user-address"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group row">
                  <div class="col-md-4">
                    <span>Mobile</span>
                  </div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      id="contact-info"
                      class="form-control"
                      name="phone"
                      placeholder="Please enter your phone number"
                      value="user-phone"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group row">
                  <div class="col-md-4">
                    <span>Birth day</span>
                  </div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      name="birthdate"
                      value="12-12-2012 "
                      class="form-control pickadate-disable"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-primary mr-1 mb-1">Save</button>
                <button type="reset" class="btn btn-outline-warning mr-1 mb-1">Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalDetails"
};
</script>

