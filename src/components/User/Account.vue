<template>
<section class="holder">
  <div class="profile">
    <div class="profile-img ">
    <img :src="user.user.u_img" alt="Default Image" class="link" />
    </div>
    <div class="profile-info ">
      <h2 class="text-white">Name:{{ user.user.f_name }}</h2>
      <h2 class="text-white">Surname:{{ user.user.l_name }}</h2>
      <h2 class="text-white">Email:{{ user.user.email }}</h2>
      <h2 class="text-white">Shipping Address:{{ user.user.address }}</h2>
    </div>
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Edit Account
    </button>

    <!-- Delete button -->
    <button class="text-warning bg-danger" @click="deleteUser">
      Delete Account
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <input type="text" name="name" v-model="user.user.f_name" />
              <input type="text" name="surname" v-model="user.user.l_name" />
              <input type="text" name="address" v-model="user.user.address" />
              <input type="text" name="img" v-model="user.user.u_img" />
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="editUser">
              Push Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  // data() {
  //   return {
  //     psw:""
  //   };
  // },

  mounted() {
    swal({
      icon:"warning",
      title:"Alert!",
      text:"Any changes made to the account will require you to log back in."
    })
},

  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    editUser() {
      return this.$store.dispatch("editUser", {
        user_id: this.user.user.user_id,
        f_name: this.user.user.f_name,
        l_name: this.user.user.l_name,
        address: this.user.user.address,
        u_img: this.user.user.u_img,
      });
    },

    // logout() {
    //   this.$store.commit("logout"); //Commit is used when calling a mutation, dispatch is used when calling an action
    //   this.$router.push("/"); //Sends the user to the login page
    // },

    deleteUser() {
      return this.$store.dispatch("deleteUser", {
        user_id: this.user.user.user_id,
      });
      // this.$store.commit("logout"); //Commit is used when calling a mutation, dispatch is used when calling an action
      // this.$router.push("/"); //Sends the user to the login page
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

.profile{
  display: inline-flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    border: 2px solid rgba(80, 191, 255, 0.658);
    background-color: rgba(80, 191, 255, 0.658);
    border-radius:30px;
      padding: 15px;
      margin-bottom:10px;
}


.profile-info{
  margin-left:10px;
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
