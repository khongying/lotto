<template>
  <div class="loading-container">
    <b-spinner
      style="width: 10rem; height: 10rem;"
      variant="primary"
      label="Spinning"
    ></b-spinner>
  </div>
</template>
<style scoped>
.loading-container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: wrap;
}
</style>
