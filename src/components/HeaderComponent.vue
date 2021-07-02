<template>
  <div class="header">
    <div class="row">
      <div class="col-1">
        <img alt="Vue logo" s src="../assets/logo.png" height="30" width="30" />
      </div>
      <div class="col-11 text-left">
        <h3>Vue 3 Watchers Example</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.header {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border: 1px solid lightblue;
  background-color: lightblue;
}

.row {
  margin-top: 5px;
  margin-left: 2px;
}
</style>