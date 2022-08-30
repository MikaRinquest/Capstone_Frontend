import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    products: null,
    product: null,
    cart: [],
  },
  mutations: {
    // Get user
    setUser: (state, user) => {
      state.user = user;
    },
    // Get products
    setProducts: (state, products) => {
      state.products = products;
    },
    // Get product
    setProduct: (state, product) => {
      state.product = product;
    },
    // Get cart
    setCart: (state, cart) => {
      state.cart = cart;
    },
  },
  actions: {
    //  Get all products
    getProducts: async (context) => {
      fetch("https://capstone-ecom.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => {
          context.commit("setProducts", products);
        });
    },
  },
});
