<template>
  <div class="c-info d-flex flex-column col-4">
    <div>
      <img
        :src="business.b_img"
        alt="Profile Picture of the Business"
        class="img"
      />
    </div>
    <div>
      <p>Email: {{ business.email }}</p>
      <p>Telephone: {{ business.phone }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["business"],
};
</script>
<style scoped>

/* .c-info{

} */

.img {
  width: 200px;
  aspect-ratio: 1;
  border-radius: 50%;
  transition: 0.5s;
  margin-bottom: 10px;
}

.img:hover {
  border-radius: 5%;
  transition: 0.5s;
}
</style>
