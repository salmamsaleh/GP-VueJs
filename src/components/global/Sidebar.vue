<template>
  <!-- BEGIN: Main Menu-->
  <div
    class="main-menu menu-fixed menu-light menu-accordion menu-shadow"
    data-scroll-to-active="true"
  >
    <div class="navbar-header">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto">
          <a class="navbar-brand">
            <div class="brand-logo"></div>
            <h2 class="brand-text mb-0">CB-Mart</h2>
          </a>
        </li>
        <li class="nav-item nav-toggle">
          <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
            <i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i>
            <i
              class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary"
              data-ticon="icon-disc"
            ></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
      <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
        <li class="nav-item">
          <a href="index.html">
            <i class="feather icon-home"></i>
            <span class="menu-title" data-i18n="Dashboard">Dashboard</span>
            <span class="badge badge badge-warning badge-pill float-right mr-2"
              >2</span>
          </a>
          <ul class="menu-content">
            <li>
              <a href="dashboard-analytics.html">
                <i class="feather icon-circle"></i>
                <span class="menu-item" data-i18n="Analytics">Analytics</span>
              </a>
            </li>
            <li>
              <a href="dashboard-ecommerce.html">
                <i class="feather icon-circle"></i>
                <span class="menu-item" data-i18n="eCommerce">eCommerce</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="navigation-header">
          <span>Apps</span>
        </li>
        <li class="nav-item">
          <a href="app-email.html">
            <i class="feather icon-mail"></i>
            <span class="menu-title" data-i18n="Email">Email</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="../../Chat">
            <i class="feather icon-message-square"></i>
            <span class="menu-title" data-i18n="Chat">Chat</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="../../Todo">
            <i class="feather icon-check-square"></i>
            <span class="menu-title" data-i18n="Todo">Todo</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="app-calender.html">
            <i class="feather icon-calendar"></i>
            <span class="menu-title" data-i18n="Calender">Calender</span>
          </a>
        </li>
        <li class=" nav-item"><a href="../../Course"><i class="fa fa-list-alt"></i><span class="menu-title" data-i18n="Ecommerce">Courses</span></a>
                    <ul class="menu-content">
                        <li><a href="../../Course"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Shop">Course Name</span></a>
                        </li>
                        <li><a href="../../Course"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Wish List">Course Name</span></a>
                        </li>
                        <li><a href="../../Course"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Checkout">Course Name</span></a>
                        </li>
                    </ul>
                </li>
      </ul>
    </div>
  </div>
  <!-- END: Main Menu-->
</template>

<script>
export default {
  name: "Sidebar"
};
</script>
