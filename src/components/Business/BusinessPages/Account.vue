<template>
  <div class="holder">
    <img
      src="https://i.postimg.cc/0QvnRfbQ/icon.webp"
      alt="Default Image"
      class="link"
    />
    <h2 class="text">Business name here</h2>
    <h2 class="text">Business number here</h2>
    <button class="btn edit">Edit account</button>
    <button class="btn delete">Delete account</button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 85vw;
}

.link {
  width: 300px;
  margin-bottom: 10px;
}

.text {
  margin-bottom: 5px;
}

.btn {
  width: 30vw;
  height: 5vh;
  margin-bottom: 10px;
}

.delete {
  background-color: #e13901;
}
</style>
