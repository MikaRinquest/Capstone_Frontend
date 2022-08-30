<template>
  <div class="ProductCard">
    <ProductCard
      v-for="product in products"
      :key="product.p_id"
      :product="product"
    />
  </div>
</template>
<script>
import ProductCard from "@/components/Business/BusinessPages/ProductCard.vue";
export default {
  components: {
    ProductCard,
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
<style scoped>
.ProductCard {
  display: flex;
  flex-wrap: wrap;
}
</style>
