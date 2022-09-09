<template>
<section class="holder">
  <div class="profile">
    <div class="profile-img ">
    <img :src="business.business.b_img" alt="Default Image" class="link" />
    </div>
    <div class="profile-info ">
      <h2 class="text-white">Name:{{ business.business.b_name }}</h2>
      <h2 class="text-white">Email:{{ business.business.email }}</h2>
      <h2 class="text-white">Telephone:{{ business.business.phone }}</h2>
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
    <button class="text-warning bg-danger" @click="deletebusiness">
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
              <input type="text" name="name" v-model="business.business.b_name" />
              <input type="text" name="address" v-model="business.business.phone" />
              <input type="text" name="img" v-model="business.business.b_img" />
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
            <button type="button" class="btn btn-primary" @click="editBusiness">
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
    this.$store.state.business
},

  computed: {
    business() {
      return this.$store.state.business;
    },
  },

  methods: {
    editBusiness() {
      return this.$store.dispatch("editBusiness", {
        b_id: this.business.business.b_id,
        b_name: this.business.business.b_name,
        phone: this.business.business.phone,
        b_img: this.business.business.b_img,
      });
    },

    // logout() {
    //   this.$store.commit("logout"); //Commit is used when calling a mutation, dispatch is used when calling an action
    //   this.$router.push("/"); //Sends the business to the login page
    // },

    deletebusiness() {
      return this.$store.dispatch("deletebusiness", {
        business_id: this.business.business.business_id,
      });
      // this.$store.commit("logout"); //Commit is used when calling a mutation, dispatch is used when calling an action
      // this.$router.push("/"); //Sends the business to the login page
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
