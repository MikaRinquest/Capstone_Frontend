<template>
  <div class="holder">
    <img :src="user.user.u_img" alt="Default Image" class="link" />
    <div>
      <h2 class="text-white">{{ user.user.f_name }}</h2>
      <h2 class="text-white">{{ user.user.l_name }}</h2>
      <h2 class="text-white">{{ user.user.email }}</h2>
      <h2 class="text-white">{{ user.user.address }}</h2>
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
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     name: "",
  //     surname: "",
  //     address: "",
  //     img: "",
  //   };
  // },

  mounted() {
    console.log(this.user.user.user_id);
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
