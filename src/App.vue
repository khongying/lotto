<template>
  <div id="app" class="full-box">
    <router-view />
    <Loading v-if="loading.loading" />
  </div>
</template>
<script lang="ts" src="./app.controller.ts"></script>
