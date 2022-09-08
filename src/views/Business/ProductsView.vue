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
import ProductCard from "@/components/Business/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },

  mounted() {
    this.$store.dispatch("getRelatedProducts", {
      b_id: this.business.business.b_id,
    });
    // console.log(products.products.b_id);
  },

  computed: {
    products() {
      return this.$store.state.products;
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
