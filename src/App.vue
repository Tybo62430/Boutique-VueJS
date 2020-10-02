<template>
  <div id="app">
    <the-header></the-header>
    <user></user>
    <admin></admin>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import User from "./components/features/User/User.vue";
import Admin from "./components/features/Admin/Admin.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    User,
    Admin,
  },
};
</script>

<style></style>
