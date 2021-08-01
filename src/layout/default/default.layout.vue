<template>
  <div class="d-flex" v-bind:class="{ toggled: isActive }" id="wrapper">
    <!-- Sidebar -->
<!--    <SidebarLayout />-->
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand>
          <div>Lotto</div>
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!--            Using 'button-content' slot-->
            <template v-slot:button-content>
              <em>admin</em>
            </template>
            <b-dropdown-item v-on:click="LogOut">ออกจากระบบ</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>

      <div class="container-fluid" style="padding-top: 20px;">
        <slot />
      </div>
      <div class="version">
        v.1.0.0
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
</template>
<script lang="ts" src="./default.layout.controller.ts"></script>

<style>
/*!
   * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/templates/simple-sidebar)
   * Copyright 2013-2020 Start Bootstrap
   * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
   */

#wrapper {
  overflow-x: hidden;
}

.version {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  color: #808080;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
