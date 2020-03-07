<template>
  <div class="col-lg-7 col-12">
    <section id="dashboard-analytics">
      <div class="card bg-analytics text-white">
        <div class="card-content">
          <div class="card-body text-center">
            <img
              src="../../assets/images/decore-left.png"
              class="img-left"
              alt="card-img-left"
            />
            <img
              src="../../assets/images/decore-right.png"
              class="img-right"
              alt="card-img-right"
            />
            <div class="avatar avatar-xl bg-primary shadow mt-0">
              <div class="avatar-content">
                <i class="feather icon-award white font-large-1"></i>
              </div>
            </div>
            <div class="text-center">
              <h1 class="mb-2 text-white">Hello User,</h1>
              <p class="m-auto w-75">
                You have done
                <strong>57.6%</strong> Keep going fighting
                <i class="fa fa-hand-rock-o"></i>
                <i class="fa fa-heart"></i> .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  @if(session()->has('message'))-->
  <!--  <div class="alert alert-success">get message</div>-->
    <!--
                                @endif
                                 @if ($errors->any())
    @foreach ($errors->all() as $error)-->
  <!--  <div>Error</div>-->
    <!--
                                     @endforeach
    @endif-->
    <!-- text area for popup -->
    <div class="card">
      <div class="col-12">
        <fieldset class="form-group mt-4">
          <textarea
            class="form-control"
            placeholder="creat post"
            id="basicTextarea"
            rows="3"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@mdo"
          ></textarea>
        </fieldset>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New post</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form method="post" action="postcreate" enctype="multipart/form-data">
                <!--{{csrf_field()}}-->
                <div class="modal-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <label>Description</label>
                    </div>
                    <div class="col-sm-9">
                      <div class="form-group">
                        <div class="controls">
                          <textarea
                            class="form-control"
                            id="basicTextarea"
                            rows="3"
                            placeholder="Description"
                            name="body"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-sm-3">
                      <label for="basicInputFile">Add Photo</label>
                    </div>
                    <div class="col-sm-9">
                      <div class="form-group">
                        <div class="custom-file">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile01"
                            name="photos[]"
                            multiple
                          />
                          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row form-group">
                    <div class="col-sm-3">
                      <label for="basicInputFile">Add media</label>
                    </div>
                    <div class="col-sm-9">
                      <div class="form-group">
                        <div class="custom-file">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile01"
                            name="media[]"
                            multiple
                          />
                          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--
                                @if (count($posts) > 0)
                                @foreach ($posts as $post )
                                    @php

                                    $removedPosts=RemovePost::where('post_id',$post->id)->get();
                                    $groupsPosts=groupPosts::where('post_id',$post->id)->first();

                                    @endphp

    @if($removedPosts->count() == 0)-->

    <!-- begain form -->
    <div class="card">
      <div class="form-group breadcrum-light" style="float: right;">
        <div class="ml-auto dropdown" style="float: right;">
          <i
            id="basicTextarea"
            data-toggle="dropdown"
            data-whatever="@mdo"
            aria-haspopup="true"
            aria-expanded="false"
            class="feather icon-more-horizontal cursor-pointer"
          ></i>
          <div
            class="dropdown-menu dropdown-menu-right"
            style="    transform: translate3d(-85px, 17px, 0px);"
          >
            <!--@if($post->user_id == auth()->user()->id)-->
            <a data-toggle="modal" data-target="#edit" class="dropdown-item">Edit</a>
            <a class="dropdown-item" onclick="return confirm('Are you sure?')" href="postid">delete</a>
            <!-- @else-->
            <a class="dropdown-item" href="postid">Save Post</a>
            <a data-target class="dropdown-item">unfollow userFirstName</a>
            <a
              class="dropdown-item"
              onclick="return confirm('Are you sure?')"
              href="post id"
            >Remove post from this page</a>

            <!--   @endif-->
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="d-flex justify-content-start align-items-center mb-1">
          <div class="avatar mr-1">
            <!--  @php $photo = json_decode($post->user->image,true);@endphp-->
            <img src="../../assets/images/user-13.jpg" alt="avtar img holder" height="45" width="45" />
          </div>
          <div class="user-page-info">
            <p class="mb-0">
              post user first name
              post user last name
              <!--    @if($groupsPosts)-->
              <i class="fa fa-play"></i>
              <a href="../Course"> group name</a>
              <!-- @endif-->
            </p>

            <span class="font-small-2">postcreation</span>
          </div>

          <div
            class="ml-auto user-like text-danger interaction"
            data-post-id="postid}"
            data-is-like="postisliked"
          >
            <!--    @if($post->isLiked()) -->
            <a id="#LikePost" class="btn btn-default btn-xs like">
              <i style="Color:#EA5455" class="fa fa-heart"></i>
            </a>
            <!--    @else -->
            <a id="#LikePost" class="btn btn-default btn-xs like">
              <i style="Color:#C2C6DC" class="fa fa-heart"></i>
            </a>
            <!--    @endif -->
          </div>
        </div>
        <p>post body</p>
        <!--
                                        @php $photos = json_decode($post->images,true); @endphp
                                        @if(is_array($photos) && !empty($photos))
                                        @php $i= 0 ;@endphp
                                        @foreach ($photos as $photos)
        -->
        <img class="img-fluid card-img-top rounded-sm mb-2" src="../../assets/images/25.jpg" alt="avtar img holder" />
        <!--
                                        @break;
                                        @php $i++;@endphp
                                        @endforeach
        @endif-->
        <div class="d-flex justify-content-start align-items-center mb-1">
          <div class="d-flex align-items-center">
            <i style="padding-right: 10px" class="fa fa-heart"></i>
            <!--  @if($post->likes()->count()) -->
            <span id="likes-count-postid">+20</span>
            <!--   @else-->
            <span id="likes-count-postid"></span>
            <!--   @endif-->
          </div>
          <div class="ml-2">
            <ul
              class="list-unstyled users-list m-0 d-flex align-items-center"
              id="usersLike"
              data-auth-id="authid"
            >
              <!--
                                                  @php $photo = json_decode(auth()->user()->image,true);@endphp
              @if($post->isLiked())-->
              <li
                data-toggle="tooltip"
                style
                id="like-user-id"
                data-popup="tooltip-custom"
                data-placement="bottom"
                data-original-title="user-auth"
                class="avatar pull-up"
              >
                <img
                  class="media-object rounded-circle"
                  src="../../assets/images/user-06.jpg"
                  alt="Avatar"
                  height="30"
                  width="30"
                />
              </li>
              <!--
                                                @endif

                                                  @if($post->likes()->count())
                                                  @foreach($post->likes as $like)
                                                    @php $photo = json_decode($like->user->image,true);@endphp
              @if($like->user->id != auth()->user()->id)-->
              <li
                data-toggle="tooltip"
                data-popup="tooltip-custom"
                data-placement="bottom"
                data-original-title="userFirstNameLastName"
                class="avatar pull-up"
              >
                <img
                  class="media-object rounded-circle"
                  src="../../assets/images/user-01.jpg"
                  alt="Avatar"
                  height="30"
                  width="30"
                />
              </li>
              <!--
                                                    @endif
              @endforeach-->
              <li class="d-inline-block pl-50">
                <span>+140 more</span>
              </li>
              <!-- @endif-->
            </ul>
          </div>
          <!--
                                            @if ($errors->any())
          @foreach ($errors->all() as $error)-->
          <div>Error</div>
          <!--
                                                 @endforeach
          @endif-->
          <p class="ml-auto d-flex align-items-center">
            <i class="feather icon-message-square font-medium-2 mr-50"></i>77
          </p>
        </div>
        <!-- @include('student.commentsDisplay', ['comments' => $post->comments, 'post_id' => $post->id])-->
        <form method="post" action="commentcreate">
          <!-- @csrf-->
          <fieldset class="form-label-group mb-50">
            <textarea
              name="body"
              class="form-control"
              id="label-textarea"
              rows="3"
              placeholder="Add Comment"
            ></textarea>
            <label for="label-textarea">Add Comment</label>
          </fieldset>
          <input type="hidden" name="post_id" value="postid" />
          <button type="submit" class="btn btn-sm btn-primary">Post Comment</button>
        </form>
      </div>
    </div>
    <div
      class="modal fade text-left"
      id="edit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel18"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel17">Edit post</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- model popup to edite -->
          <form method="post" action="postupdate" enctype="multipart/form-data">
            <!-- {{csrf_field()}}-->
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-2">
                  <label>Description</label>
                </div>
                <div class="col-sm-10">
                  <div class="form-group">
                    <div class="controls">
                      <textarea
                        class="form-control"
                        id="basicTextarea"
                        rows="3"
                        placeholder="Description"
                        name="body"
                      >Post Body</textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-sm-3">
                  <label for="basicInputFile">Add Photo</label>
                </div>
                <div class="col-sm-9">
                  <div class="form-group">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="inputGroupFile01"
                        name="photos[]"
                        multiple
                      />
                      <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-sm-3">
                  <label for="basicInputFile">Add media</label>
                </div>
                <div class="col-sm-9">
                  <div class="form-group">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="inputGroupFile01"
                        name="media[]"
                        multiple
                      />
                      <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="modal fade text-left"
      id
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel18"
      aria-modal="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
        role="document"
      >
        <div class="modal-content"></div>
      </div>
    </div>
    <!--
                                @endif
                                @endforeach
    @endif-->
  </div>
</template>

<script>
export default {
  name: "LeftSide"
};
</script>
