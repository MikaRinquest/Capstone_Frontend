<template>
  <div>
    <div class="start">
      <LoginNav />
      <form @submit.prevent="userLogin" class="form">
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
    <div v-if="user">Welcome back, {{ user.user.f_name }}</div>
  </div>
</template>
<script>
import LoginNav from "@/components/Navbars/LoginNav.vue";
export default {
  components: { LoginNav },
  data() {
    return {
      email: "",
      psw: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    userLogin() {
      return this.$store.dispatch("userLogin", {
        email: this.email,
        password: this.psw,
      });
    },
  },
};
</script>
<style scoped>
.start {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items:center;
  background: #bffdc0;
    color: white !important;

}

.form {
display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    height: 25%;
    width: 55%;
    background: #88ec8a;
    box-shadow: 5px 5px 10px #74c975, -5px -5px 10px #9cff9f;
    justify-content: center;

}

.btn {
  width: 10vw;
}

#email {
  width: 30vw;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
#psw {
  width: 30vw;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
</style>
