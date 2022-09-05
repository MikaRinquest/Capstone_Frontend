<template>
  <div class="holder">
    <router-view class="content" />
    <div v-if="user">
      <UserNavbar />
    </div>
    <div v-if="business">
      <BusinessNavbar />
    </div>
  </div>
</template>
<script>
import BusinessNavbar from "../src/components/Navbars/BusinessNavbar.vue";
import UserNavbar from "../src/components/Navbars/UserNavbar.vue";
export default {
  components: {
    BusinessNavbar,
    UserNavbar,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    BusinessNavbar() {
      return this.$store.state.business;
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.holder {
  display: flex;
  height: 100vh;
}

.content {
  min-width: 85%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
