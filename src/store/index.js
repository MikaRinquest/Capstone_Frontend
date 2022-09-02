import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    products: null,
    product: null,
    cart: [],
    businesses: null,
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

    // Get Businesses
    setBusinesses: (state, businesses) => {
      state.businesses = businesses;
    },
  },
  actions: {
    // User functions
    //  Get all products
    getProducts: async (context) => {
      fetch("https://capstone-ecom.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => {
          context.commit("setProducts", products);
        });
    },

    // Single View Product
    getProduct: async (context, id) => {
      fetch("https://capstone-ecom.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setProduct", product));
    },

    // Get businesses
    getBusinesses: async (context) => {
      fetch("https://capstone-ecom.herokuapp.com/business")
        .then((res) => res.json())
        .then((business) => {
          context.commit("setBusinesses", business);
        });
    },
  },
});
