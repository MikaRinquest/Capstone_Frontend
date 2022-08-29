<template>
  <div class="start">
    <form @submit.prevent="onSubmit" class="form">
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        placeholder="Insert your email here."
        required
      />
      <input
        type="password"
        name="psw"
        id="psw"
        v-model="psw"
        placeholder="Insert your password here."
        required
      />
      <button type="submit" class="btn">Log In</button>
    </form>
    <h2>
      Not registered? Click <router-link to="/userRegister">here</router-link>
    </h2>
  </div>
  <BusinessNavbar />
</template>
<script>
export default {
  data() {
    return {
      email: "",
      psw: "",
    };
  },

  methods: {},
};
</script>
<style scoped>
.start {
  height: 100vh;
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  width: 10vw;
}

#email {
  width: 50vw;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
#psw {
  width: 50vw;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
</style>
