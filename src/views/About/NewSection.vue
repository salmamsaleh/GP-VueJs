<template>
  <div class="card">
    <div class="card-header">
      <button
        type="button"
        class="btn btn-outline-success"
        data-toggle="modal"
        data-target="#inlineForm"
      >Create New Section</button>
      <div
        class="modal fade text-left"
        id="inlineForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel33"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <form action="/student/createNewSection" method="post">
              <!--   @csrf-->
              <div class="modal-header">
                <h4>Write Section Name</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Section Name"
                    class="form-control"
                    name="sectionName"
                  />
                  <br />
                  <br />
                  <textarea
                    name="sectionContent"
                    class="form-control"
                    id="label-textarea"
                    rows="3"
                    placeholder="Content of Section"
                  ></textarea>
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
    <div class="card-content">
      <div class="card-body">
        <!--  @if(!empty($AddedSections))-->
        <div class="container">
          <!--
                                            @php $EditSectionModal=0;  @endphp
          @foreach($AddedSections as $key=>$value)-->
          <div class="row">
            <div class="col-md-6 col-sm">
              <h3>Section Name</h3>
              <pre style="color: white; background: transparent;">Section Content</pre>
            </div>

            <div class="col-sm">
              <button
                type="button"
                class="btn btn-outline-success"
                data-toggle="modal"
                data-target="#experr"
              >
                <i class="feather icon-edit"></i>
              </button>
              <!-- Modal -->
              <div
                class="modal fade text-left"
                id="experr"
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
                      <h4>Edit Section Name</h4>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form action="/student/editSection/id" method="post">
                      <!--  @csrf -->
                      <div class="modal-body">
                        <div class="modal-body">
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="Section Name"
                              class="form-control"
                              value="Section Name"
                              name="sectionName"
                            />
                            <br />
                            <br />
                            <textarea
                              name="sectionContent"
                              class="form-control"
                              id="label-textarea"
                              rows="3"
                              placeholder="Content of Section"
                            >Section Content</textarea>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="submit" class="btn btn-primary">Save</button>
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <a
                onclick="return confirm('Are you sure you want to Remove This Section?');"
                href="/student/deleteSection/id"
                class="btn btn-outline-danger mr-1 mb-1 waves-effect waves-light"
              >
                <i class="feather icon-trash"></i>
              </a>
            </div>
          </div>
          <hr />
          <!--
                                            @php $EditSectionModal++; @endphp
          @endforeach-->
        </div>
        <!--  @endif-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewSection"
};
</script>
