<template>
  <div class="holder">
    <router-view class="content" />
    <BusinessNavbar />
  </div>
</template>
<script>
import BusinessNavbar from "../src/components/Navbars/BusinessNavbar.vue";
export default {
  components: {
    BusinessNavbar,
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
}

.content {
  max-width: 85vw;
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
