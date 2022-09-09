<template>
  <div class="nav-holder ">
    <nav id="navbar" class="d-flex flex-column">
      <img
        :src="user.user.u_img"
        alt="Default Image"
        class="link img"
      />
      <router-link to="/home" class="link">Home</router-link>
      <router-link to="/allproducts" class="link">View Products</router-link>
      <router-link to="/u_account" class="link">Account Settings</router-link>
      <router-link to="/contact" class="link">Contact us</router-link>
      <router-link to="/cart" class="link">Cart</router-link>
      <router-link to="/businesslogin" class="link" @click="logout">
        Log Out
      </router-link>
    </nav>
    <Footer />
  </div>

<!-- <div class="bs-nav">
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <nav id="navbar" class="d-flex flex-column">
      <img
        :src="user.user.u_img"
        alt="Default Image"
        class="link img"
      />
      <router-link to="/home" class="link">Home</router-link>
      <router-link to="/allproducts" class="link">View Products</router-link>
      <router-link to="/u_account" class="link">Account Settings</router-link>
      <router-link to="/contact" class="link">Contact us</router-link>
      <router-link to="/cart" class="link">Cart</router-link>
      <router-link to="/businesslogin" class="link" @click="logout">
        Log Out
      </router-link>
    </nav>
    <Footer />
  </div>
</div>
</div> -->
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: { Footer },

mounted(){
  return this.$store.state.user
},

computed:{
  user(){
    return this.$store.state.user
  }
},

  methods: {
    logout() {
      this.$store.commit("logout"); //Commit is used when calling a mutation, dispatch is used when calling an action
      this.$router.push("/"); //Sends the user to the login page
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
  margin-bottom: 10px;
  font-size: 20px;
}

.offcanvas{
  background-color: #006da4;
  padding: 0;
}

.offcanvas-body{
  padding:0;
}


/* MEDIA QUERIES */
@media only screen and (max-width:810px){
  .nav-holder{
    display:none;
    position:none;
  }

  .img{
  height: 50%;
    align-self: center;
    width: 65%;
  }

}


</style>
