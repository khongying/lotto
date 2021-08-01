<template>
  <div class="bg-light border-right" id="sidebar-wrapper">
    <!-- <div class="sidebar-heading" style="text-align: center;">
      <router-link to="/" class="title-product">
        <img src="../../assets/innova-logo.png" style="width: 200px;" />
      </router-link>
    </div> -->
    <div class="list-group list-group-flush">
      <router-link
        to="/"
        class="list-group-item list-group-item-action bg-light"
        :active="true"
      >
        <font-awesome-icon icon="home" />
        Home</router-link
      >
    </div>
  </div>
</template>

<script src="./sidebar.layout.controller.ts" />

<style>
.sub-list-left {
  padding-left: 30px !important;
  background-color: #bbbbbb6b !important;
}

.sub-list-left:hover {
  background-color: rgba(0, 0, 0, 0.05) !important;
}
.title-product {
  color: black;
  font-size: 11px;
  text-decoration: none !important;
}
</style>
