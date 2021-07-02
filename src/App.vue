<template>
  <div>
    <HeaderComponent></HeaderComponent>
  </div>
  <VueWatcher></VueWatcher>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import VueWatcher from "./components/WatcherComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    VueWatcher,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
