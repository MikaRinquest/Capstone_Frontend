<template>
  <div class="holder">
    <img
      src="https://i.postimg.cc/0QvnRfbQ/icon.webp"
      alt="Default Image"
      class="link"
    />
    <h2 class="text">Business name here</h2>
    <h2 class="text">Business number here</h2>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop3"
    >
      Edit Account
    </button>
    <button class="btn delete">Delete account</button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop3"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Change whatever you'd like
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
              <input type="text" v-model="url" class="mb-2" id="url" />
              <input type="text" v-model="name" class="mb-2" id="name" />
              <input type="tel" v-model="tel" class="mb-2" id="tel" />
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary">
              Make the changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 85vw;
}

.link {
  width: 300px;
  margin-bottom: 10px;
}

.text {
  margin-bottom: 5px;
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
