<template>
  <div>
    <nav id="navbar">
      <img
        src="https://i.postimg.cc/0QvnRfbQ/icon.webp"
        alt="Default Image"
        class="link"
      />
      <router-link to="/products" class="link">View Products</router-link>
      <router-link to="/account" class="link">Account Settings</router-link>
      <button
        type="button"
        class="link btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop2"
      >
        Add new product
      </button>
      <button class="link btn">Delete product</button>
      <router-link to="/businesslogin"
        ><button class="link btn">Log Out</button></router-link
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
                  placeholder="Image UFL"
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
              <button type="button" class="btn btn-primary text-dark">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#nav-holder {
  position: fixed;
  top: 0;
  right: 0;
  float: left;
}

#navbar {
  display: flex;
  flex-direction: column;
  max-width: 15%;
}

.link {
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  color: #2c3e50;
}

.btn {
  border: none;
  background-color: transparent;
  box-shadow: none !important;
  font-size: 14px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
