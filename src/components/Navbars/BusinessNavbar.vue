<template>
  <div class="nav-holder">
    <nav id="navbar">
      <img
        :src="business.business.b_img"
        alt="Default Image"
        class="link img"
      />
      <router-link to="/home" class="link">Home</router-link>
      <router-link to="/products" class="link">View Products</router-link>
      <router-link to="/b_account" class="link">Account Settings</router-link>
      <router-link to="/contactme" class="link">Contact</router-link>
      <button
        type="button"
        class="link btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop2"
      >
        Add new product
      </button>
      <router-link to="/businesslogin"
        ><button class="link btn" @click="logout">Log Out</button></router-link
      >

      <!-- Button trigger modal -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel2">
                Insert the details of your new product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="d-flex flex-column">
                <input
                  type="text"
                  v-model="name"
                  id="name"
                  class="mb-2"
                  placeholder="Product Name"
                />
                <input
                  type="text"
                  v-model="url"
                  id="url"
                  class="mb-2"
                  placeholder="Image URL"
                />
                <textarea
                  v-model="desc"
                  id="desc"
                  class="mb-2"
                  placeholder="Product Description"
                ></textarea>
                <input
                  type="number"
                  v-model="price"
                  id="price"
                  class="mb-2"
                  placeholder="Product Price"
                />
                <select v-model="type" id="type">
                  <option value="Food" selected>Food</option>
                  <option value="Tech">Tech</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Dining">Dining</option>
                </select>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary text-dark"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary text-dark"
                @click="addProduct"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
<Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: { Footer },
  data() {
    return {
      name: "",
      url: "",
      desc: "",
      price: "",
      type: "",
    };
  },

  computed: {
    business() {
      console.log(this.$store.state.business);
      return this.$store.state.business;
    },
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/products");
      // localStorage.clear();
      // this.$router.go();
    },

    addProduct() {
      // console.log(this.business.business.b_id);
      setTimeout(() => {
        window.location.reload;
      }, 2000);
      return this.$store.dispatch("addProduct", {
        name: this.name,
        p_img: this.url,
        description: this.desc,
        price: this.price,
        p_type: this.type,
        b_id: this.business.business.b_id,
      });
    },

    test() {
      setTimeout(() => {
        console.log("Test Successful!");
      }, 2000);
    },
  },
};
</script>
<style scoped>

.nav-holder {
  max-width: 15%;
  height: 100vh;
  position: fixed;
  right: 0;
}

#navbar {
  background-color: #006da4;
  height: 75vh;
  display:flex;
  flex-direction:column;
}

.img {
  border-radius: 50%;
  width:100%;
}

.link {
  color: #dbdbdb;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 20px;
}

.btn {
  border: none;
  background-color: transparent;
  box-shadow: none !important;
  font-size: 20px;
  font-weight:bold;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
