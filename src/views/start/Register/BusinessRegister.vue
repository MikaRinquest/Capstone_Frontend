<template>
  <div>
    <div class="start">
    <RegisterNav />
      <form @submit.prevent="businessRegister" class="form">
        <input type="text" name="name" id="name" v-model="name" required placeholder="Enter the business name"/>
        <input type="email" name="email" id="email" v-model="email" required placeholder="Enter the business email"/>
        <input type="password" name="psw" id="psw" v-model="psw" required placeholder="Submit a password"/>
        <input type="tel" name="tel" id="tel" v-model="tel" required placeholder="Enter the business telephone number"/>
        <button type="submit" class="btn">Register</button>
      </form>
      <h2>
      Already registered? Click
      <router-link to="/businesslogin">here</router-link>
    </h2>
    </div>
    
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
    height: 50%;
    width: 65%;
    background: #88ec8a;
    box-shadow: 5px 5px 10px #74c975, -5px -5px 10px #9cff9f;
    justify-content: center;

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
