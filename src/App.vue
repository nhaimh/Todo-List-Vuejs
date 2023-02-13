<template>
  <div>
    <router-link to="/"> </router-link>
    <router-view />
  </div>
</template>

<script>
import("./assets/style.css");
import("./assets/w3schools.css");
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
