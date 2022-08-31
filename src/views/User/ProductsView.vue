<template>
  <div class="d-flex flex-wrap">
    <Products
      v-for="product in products"
      :key="product.p_id"
      :product="product"
    />
  </div>
</template>
<script>
import Products from "@/components/User/UserPages/Products.vue";
export default {
  components: {
    Products,
  },

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
<style scoped></style>
