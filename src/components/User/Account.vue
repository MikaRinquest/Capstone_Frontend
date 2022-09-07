<template>
  <div class="holder" v-if="user">
    <img
      src="https://i.postimg.cc/0QvnRfbQ/icon.webp"
      alt="Default Image"
      class="link"
    />
    <h2>{{ user.user.f_name }} {{ user.user.l_name }}</h2>
  </div>
</template>
<script>
export default {
  methods: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
.holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 85vw;
  background-color: #042069;
}

.link {
  width: 300px;
  margin-bottom: 10px;
  border-radius: 50%;
}

.text {
  margin-bottom: 5px;
  color: #dbdbdb;
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
