<template>
  <div class="card col-3 me-2 mb-2 ms-3 flex-column">
    <div class="img-hold">
      <img :src="product.p_img" alt="Image of product" class="img" />
    </div>
    <div class="xtra">
      <p>{{ product.price }}</p>
    </div>
    <div class="router1">
      <router-link to="/single" class="router1">
        <p class="single d-none">Click on me for more information</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style scoped>
.img {
  width: 90%;
  aspect-ratio: 5/4;
  border: 4px inset grey;
  margin-top: 5px;
}

.card:hover > .router > .single {
  display: block !important;
}

.router1 {
  text-decoration: none;
}

.single {
  color: black;
}
</style>
