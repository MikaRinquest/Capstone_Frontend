<template>
<section class="container d-flex flex-column justify-content-center">
  <div class="">
    <p class="checkout">Thank you for you purchase!</p>
    <p class="checkout">Your order will be delivered to {{user.user.address}}</p>
  </div>
  </section>
</template>
<script>
export default {
 mounted(){
   return this.$store.state.user
 },

 computed:{
  user(){
  return this.$store.state.user
  }
 }
}
</script>
<style scoped>
.container{
    background-color:#042069;
    margin:0;
  padding:0;
  color: lightgrey;
}

.checkout{
  font-size: 50px;
}
</style>
