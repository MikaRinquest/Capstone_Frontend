<template>
  <div>
    <div class="start">
    <RegisterNav />
      <form @submit.prevent="userRegister" class="form">
        <input type="text" name="name" id="name" v-model="name" required  placeholder="Enter your first name here"/>
        <input
          type="text"
          name="surname"
          id="surname"
          v-model="surname"
          required
          placeholder="Enter your last name here"
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
          placeholder="Enter your shipping address here"
        />
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
    height: 55%;
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
