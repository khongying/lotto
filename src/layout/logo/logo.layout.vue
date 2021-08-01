<template>
  <div class="full-box align-center">
    <div class="container-fluid">
      <div>
        <!-- <img src="../../assets/innova-logo.png" class="logo-innova" /> -->
      </div>
      <div class="row">
        <div class="offset-md-3 col-md-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./logo.layout.controller.ts"></script>

<style>
.align-center {
  display: flex;
  align-items: center;
}
.logo-innova {
  width: 25%;
  display: block;
  margin: 100px auto 40px;
}
.input-login {
  margin-bottom: 20px;
}
</style>
