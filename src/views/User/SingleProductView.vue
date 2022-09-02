<template>
  <div class="singlehold">
    <div
      v-for="product in product"
      :key="product.p_id"
      :product="product"
      class="d-flex vh-100 pt-3"
    >
      <div class="col-6">
        <img :src="product.p_img" alt="Image of Product" class="img" />
      </div>
      <div class="col-4">
        <h2 class="name">{{ product.name }}</h2>
        <p class="price">Cost : R{{ product.price }}</p>
        <p class="type">{{ product.type }}</p>
        <p class="desc">Description: {{ product.description }}</p>
        <button class="cart px-3">
          <i class="bx bx-cart-add"></i>Add to cart
        </button>
      </div>
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
<style scoped>
.singlehold {
  background-color: #042069;
  color: #dbdbdb;
}

.img {
  height: 50%;
  /* margin-left: 10px; */
}

.cart {
  background-color: #992d33;
  border: 1px solid #992d33;
  transition: 0.5s;
  font-size: 20px;
}

.cart:hover,
.cart:focus {
  box-shadow: inset 0 0 0 20px #d05971;
}

.name {
  font-size: 50px;
}

.price {
  font-size: 30px;
}

.desc {
  height: 100px;
  padding-top: 10px;
}
</style>
