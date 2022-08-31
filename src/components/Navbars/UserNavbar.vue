<template>
  <div class="nav-holder">
    <nav id="navbar" class="d-flex flex-column">
      <img
        src="https://i.postimg.cc/0QvnRfbQ/icon.webp"
        alt="Default Image"
        class="link"
      />
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/allproducts" class="link">View Products</router-link>
      <router-link to="/account" class="link">Account Settings</router-link>
      <button>Contact us</button>
      <button class="link btn">Cart</button>
      <router-link to="/login">
        <button class="link btn">Log Out</button>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.nav-holder {
  max-width: 15vw;
}
</style>
