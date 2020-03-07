(function () {
    
    var chatApp = document.getElementsByClassName("chat-application");
    var sidebar_profile_toggle = document.getElementsByClassName("sidebar-profile-toggle");
    var chat_profile_sidebar = document.getElementsByClassName("chat-profile-sidebar");
    var chat_overlay = document.getElementsByClassName("chat-overlay");
    var user_profile_toggle = document.getElementsByClassName("user-profile-toggle");
    var user_profile_sidebar = document.getElementsByClassName("user-profile-sidebar");

// Chat Profile sidebar toggle
    chatApp.onclick = () => {
        chat_profile_sidebar.classList.add("show");
        chat_overlay.classList.add("show");
    }
    sidebar_profile_toggle.onclick = () => {
        chat_profile_sidebar.classList.add("show");
        chat_overlay.classList.add("show");
    }

// User Profile sidebar toggle
    chatApp.onclick = () => {
        user_profile_sidebar.classList.add("show");
        chat_overlay.classList.add("show");
    }
    user_profile_toggle.onclick = () => {
        user_profile_sidebar.classList.add("show");
        chat_overlay.classList.add("show");
    }


    // Update status by clickin on Radio
    var user_status = document.getElementsByClassName("user-status");
   var input = document.getElementsByClassName("input:radio[name=userStatus]");
   chatApp.onchange(() => {
       var val = input.value;
       var $className;
       var $classval = "avatar-status-" + val;
       $classval;
       document.getElementsByClassName("header-profile-sidebar avatar span").classList.remove();
       document.getElementsByClassName("sidebar-profile-toggle avatar span").classList.remove();
       document.getElementsByClassName("header-profile-sidebar avatar span").classList.add($className + " avatar-status-lg");
       document.getElementsByClassName("sidebar-profile-toggle avatar span").classList.add($className);
   });
   user_status.onchange(() => {
    var val = input.value;
    var $className;
    var $classval = "avatar-status-" + val;
    $classval;
    document.getElementsByClassName("header-profile-sidebar avatar span").classList.remove();
    document.getElementsByClassName("sidebar-profile-toggle avatar span").classList.remove();
    document.getElementsByClassName("header-profile-sidebar avatar span").classList.add($className + " avatar-status-lg");
    document.getElementsByClassName("sidebar-profile-toggle avatar span").classList.add($className);
});
input.onchange(() => {
    var val = input.value;
    var $className;
    var $classval = "avatar-status-" + val;
    $classval;
    document.getElementsByClassName("header-profile-sidebar avatar span").classList.remove();
    document.getElementsByClassName("sidebar-profile-toggle avatar span").classList.remove();
    document.getElementsByClassName("header-profile-sidebar avatar span").classList.add($className + " avatar-status-lg");
    document.getElementsByClassName("sidebar-profile-toggle avatar span").classList.add($className);
});


});
