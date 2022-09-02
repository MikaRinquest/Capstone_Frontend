<template>
  <div class="d-flex">
    <div>
      <img
        :src="business.b_img"
        alt="Profile Picture of the Business"
        class="img"
      />
    </div>
    <div>
      <p>{{ business.email }}</p>
      <p>{{ business.phone }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["business"],
};
</script>
<style scoped>
.img {
  width: 200px;
  aspect-ratio: 1;
  border-radius: 50%;
}

.img:hover {
  border-radius: 0;
  transition: all 0.5s ease-in-out;
}
</style>
