<template>
  <div>
    <Cart v-for="product in products" :key="product.p_id" :product="product" />
    <h1>TOTAL :</h1>
    <router-link to="/checkout"
      ><i class="bx bxs-cart">Checkout</i></router-link
    >
  </div>
</template>
<script>
import Cart from "@/components/User/Cart.vue";
export default {
  components: { Cart },

  mounted() {
    this.$store.dispatch("getProducts");
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
<style scoped>
.bx{
  font-size:25px;
}
</style>
