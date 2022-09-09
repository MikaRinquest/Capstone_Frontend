<template>
  <div v-if="user" class="hold d-flex flex-column justify-content-center">
    <h1 class="heading">Welcome, {{user.user.f_name}} {{user.user.l_name}}</h1>
  <div>
    <p class="paragraph">Welcome to HostIt, where businesses unable to make a website of their own can use this website instead.</p>
    <h2 class="subheading">As a user, what can you do?</h2>
    <p class="paragraph">As a user, you can edit your account,delete your account add to cart, and view all of the products available.</p>
  </div>
  </div>
  <div v-else class="hold d-flex flex-column justify-content-center">
    <h1 class="heading">Welcome!</h1>
  <div>
    <p class="paragraph">Welcome to HostIt, where businesses unable to make a website of their own can use this website instead.</p>
    <h2 class="subheading">As a business, what can you do?</h2>
    <p class="paragraph">As a business, you can edit your account,delete your account, add products, edit products, delete products, and  view all of the products you have created.</p>
  </div>
  </div>
</template>
<script>
export default {

mounted(){
  // this.$store.state.business,
  this.$store.state.user
  // console.log(this.business.business.b_name)
},

computed:{
  business(){
    return this.$store.state.business  
    },
    user(){
    return this.$store.state.user
    }
}


};
</script>
<style scoped>
.hold{
  height:100%;
}

.heading{
  text-decoration: underline;
}
</style>>
