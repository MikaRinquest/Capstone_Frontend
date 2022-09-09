<template>
  <div class="card">
    <div>
      <img :src="product.p_img" alt="Image of product" class="img" />
    </div>
    <h3 class="name">{{ product.name }}</h3>
    <!-- <h3 class="name">{{ product.p_id }}</h3> -->
    <!-- Button trigger modal -->
    <div>
      <button
        type="button"
        class="btn btn-primary text-dark bg-light edit"
        data-bs-toggle="modal"
        :data-bs-target="`#staticBackdrop1${product.p_id}`"
      >
        Edit product
      </button>
      <button
        class="btn del"
        @click="this.$store.dispatch('deleteProduct', product.p_id)"
      >
        <i class="bx bxs-trash"></i>
      </button>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      :id="`staticBackdrop1${product.p_id}`"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Edit Product</h5>
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
                v-model="product.name"
                class="mb-2"
                id="name"
              />
              <input
                type="text"
                v-model="product.p_img"
                class="mb-2"
                id="url"
              />

              <textarea
                v-model="product.description"
                class="mb-2"
                id="desc"
              ></textarea>

              <input
                type="number"
                v-model="product.price"
                class="mb-2"
                id="price"
              />
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
            <button
              type="button"
              class="btn btn-primary"
              @click="this.$store.dispatch('editProduct', product)"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  props: ["product"],

  // methods: {},
};
</script>
<style scoped>
.card {
  border: 2px solid black;
  margin: 0px 10px 10px 10px;
  width: 30%;
  height: 55%;
  display: flex;
  flex-direction: column;
}

.name {
  padding-bottom: 10px;
}

.img {
  width: 90%;
  aspect-ratio: 5/4;
  border: 4px inset grey;
  margin-top: 5px;
}

.btn {
  text-align: center;
  align-self: center;
  justify-self: center;
  width: 75px;
  margin-bottom: 5px;
  box-shadow: none !important;
  font-size: 14px;
}

.edit {
  border-color: black;
  width: 110px;
  height: 40px;
  margin-right: 5px;
  font-size: 15px;
}

.del {
  background-color: #e13901;
  margin-top: 2px;
  height: 40px;
}

.bx {
  font-size: 25px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
