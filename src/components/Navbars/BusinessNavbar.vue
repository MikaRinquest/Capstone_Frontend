<template>
  <nav id="navbar">
    <img
      src="https://i.postimg.cc/0QvnRfbQ/icon.webp"
      alt="Default Image"
      class="link"
    />
    <router-link to="" class="link">View Products</router-link>
    <router-link to="/account" class="link">Account Settings</router-link>
    <button class="link btn">Add new products</button>
    <button class="link btn">Delete product</button>
    <button class="link btn">Log Out</button>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
#navbar {
  display: flex;
  flex-direction: column;
  max-width: 15vw;
}

.link {
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  color: #2c3e50;
}

.btn {
  border: none;
  background-color: transparent;
}
</style>
