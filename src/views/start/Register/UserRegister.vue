<template>
  <div>
    <RegisterNav />
    <div class="start">
      <form @submit.prevent="userRegister" class="form">
        <input type="text" name="name" id="name" v-model="name" required />
        <input
          type="text"
          name="surname"
          id="surname"
          v-model="surname"
          required
        />
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
        <input
          type="text"
          name="address"
          id="address"
          v-model="address"
          required
        />
        <button type="submit" class="btn">Register</button>
      </form>
    </div>
    <p>
      Already registered? Click
      <router-link to="/businesslogin">here</router-link>
    </p>
  </div>
</template>
<script>
import RegisterNav from "@/components/Navbars/RegisterNav.vue";
export default {
  components: {
    RegisterNav,
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      psw: "",
      address: "",
    };
  },

  computed: {
    user() {
      return this.$store.state.newUser;
    },
  },

  methods: {
    userRegister() {
      this.$store.dispatch("userRegister", {
        f_name: this.name,
        l_name: this.surname,
        email: this.email,
        password: this.psw,
        address: this.address,
      });
    },
  },
};
</script>
<style>
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
#name {
  width: 50vw;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
#surname {
  width: 50vw;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
#address {
  width: 50vw;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
</style>
