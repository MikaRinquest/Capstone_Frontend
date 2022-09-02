<template>
  <div class="card col-3 me-2 ms-3 mt-2 flex-column">
    <div class="img-hold">
      <img :src="product.p_img" alt="Image of product" class="img" />
    </div>
    <div class="xtra">
      <p class="price">R{{ product.price }}</p>
    </div>
    <div class="router1">
      <router-link
        :to="{ name: 'SingleCardView', params: { id: product.p_id } }"
        class="router2"
      >
        <p class="single d-none">
          <i class="fa-solid fa-eye"></i>
          See more
        </p>
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

.card {
  border-radius: 2%;
  transition: 1s;
  height: 45%;
  background-color: #c0b9ff;
}

.me-2 {
  margin-right: 1.5rem !important;
}

.price {
  padding-top: 15px;
  font-size: 20px;
}

.card:hover > .router1 > .router2 > .single {
  display: block !important;
  transition-delay: 0.5s;
}

.router1 {
  text-decoration: none;
}

.router2 {
  text-decoration: none;
}

.single {
  color: black;
}
</style>
