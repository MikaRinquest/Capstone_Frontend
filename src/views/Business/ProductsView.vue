<template>
  <div class="ProductCard">
    <ProductCard
      v-for="product in relatedProducts"
      :key="product.p_id"
      :product="product"
    />
  </div>
</template>
<script>
import ProductCard from "@/components/Business/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },

  mounted() {
    this.$store.dispatch("getRelatedProducts");
    // console.log(this.products.products.p_id);
  },

  computed: {
    relatedProducts() {
      return this.$store.state.relatedProducts;
    },
    business() {
      return this.$store.state.business;
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
