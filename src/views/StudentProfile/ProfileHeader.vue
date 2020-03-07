<template>
    <div class="profile-header row">
        <div class="col-12">
            <div class="profile-header mb-2">
                <div class="relative">
                    <div class="cover-container">
                        <img class="img-fluid bg-cover rounded-0 w-100" src="../../assets/images/cover.jpg" alt="User Profile Image">
                    </div>
                    <div class="profile-img-container d-flex align-items-center justify-content-between">
                        <img src="../../assets/images/user-13.jpg" class="rounded-circle img-border box-shadow-1" alt="Card image">
                        <div class="float-right">
                            <button type="button" class="btn btn-icon btn-icon rounded-circle btn-primary mr-1">
                                <i class="feather icon-edit-2"></i>
                            </button>
                            <button type="button" class="btn btn-icon btn-icon rounded-circle btn-primary">
                                <i class="feather icon-settings"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end align-items-center profile-header-nav">
                    <nav class="navbar navbar-expand-sm w-100 pr-0">
                        <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"><i class="feather icon-align-justify"></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav justify-content-around w-75 ml-sm-auto">
                                <li class="nav-item px-sm-0">
                                    <a href="/" class="nav-link font-small-3">Timeline</a>
                                </li>
                                <li class="nav-item px-sm-0">
                                    <a href="../../ProfileAbout" class="nav-link font-small-3">About</a>
                                </li>
                                <li class="nav-item px-sm-0">
                                    <a href="#" class="nav-link font-small-3">Photos</a>
                                </li>
                                <li class="nav-item px-sm-0">
                                    <a href="#" class="nav-link font-small-3">Friends</a>
                                </li>
                                <li class="nav-item px-sm-0">
                                    <a href="#" class="nav-link font-small-3">Videos</a>
                                </li>
                                <li class="nav-item px-sm-0">
                                    <a href="#" class="nav-link font-small-3">Events</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileHeader"
};
</script>

<style>
#user-profile .profile-header-nav {
    margin-top: -1em;
}
.profile-header{
    margin-bottom: 1em
}
</style>


