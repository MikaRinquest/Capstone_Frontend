<template>
  <div class="nav-holder">
    <nav id="navbar" class="d-flex flex-column">
      <img
        src="https://i.postimg.cc/0QvnRfbQ/icon.webp"
        alt="Default Image"
        class="link img"
      />
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/allproducts" class="link">View Products</router-link>
      <router-link to="/account" class="link">Account Settings</router-link>
      <router-link to="/contact" class="link">Contact us</router-link>
      <router-link to="/cart" class="link">Cart</router-link>
      <router-link to="/businesslogin" class="link"> Log Out </router-link>
    </nav>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: { Footer },

  methods: {
    refresh() {
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.nav-holder {
  max-width: 15%;
  height: 100vh;
  position: fixed;
  right: 0;
}

#navbar {
  background-color: #006da4;
  height: 75vh;
}

.img {
  border-radius: 50%;
}

.link {
  color: #dbdbdb;
  text-decoration: none;
  padding-bottom: 10px;
  font-size: 20px;
}
</style>
