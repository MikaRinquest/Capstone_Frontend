<template>
  <div
    v-for="product in product"
    :key="product.p_id"
    :product="product"
    class="d-flex"
  >
    <div><img :src="product.p_img" alt="Image of Product" /></div>
    <div>
      <h2>{{ product.name }}</h2>
      <p>R{{ product.price }}</p>
      <p>{{ product.type }}</p>
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],

  computed: {
    product() {
      return this.$store.state.product;
    },
  },

  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>
<style scoped></style>
