<template>
  <div>
    <RegisterNav />
    <div class="start">
      <form @submit.prevent="businessRegister" class="form">
        <input type="text" name="name" id="name" v-model="name" required />
        <input type="email" name="email" id="email" v-model="email" required />
        <input type="password" name="psw" id="psw" v-model="psw" required />
        <input type="tel" name="tel" id="tel" v-model="tel" required />
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
      email: "",
      psw: "",
      tel: "",
    };
  },

  computed: {
    business() {
      return this.$store.state.newBusiness;
    },
  },
  methods: {
    businessRegister() {
      return this.$store.dispatch("businessRegister", {
        b_name: this.name,
        email: this.email,
        password: this.psw,
        phone: this.tel,
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
#tel {
  width: 50vw;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
</style>
