import { createStore } from "vuex";
import router from "@/router"; //Needed for the router.push functions
import createPersistedState from "vuex-persistedstate"; //Importing the plugin

export default createStore({
  state: {
    user: null,
    newUser: null,
    products: null,
    product: null,
    cart: [],
    businesses: null,
    business: null,
    newBusiness: null,
    token: null,
  },
  mutations: {
    // Get user
    setUser: (state, user) => {
      state.user = user;
    },

    // Set new User
    setNewUser: (state, newUser) => {
      state.newUser = newUser;
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

    // Get business
    setBusiness: (state, business) => {
      state.business = business;
    },

    // Set new business
    setNewBusiness: (state, newBusiness) => {
      state.newBusiness = newBusiness;
    },

    // Stores the token
    setToken: (state, token) => {
      state.token = token;
    },
    logout(state) {
      (state.user = ""), (state.business = ""), (state.token = ""); //Just sets the states to null, "logging out" the user or business
    },
  },
  actions: {
    // User Login
    userLogin: async (context, payload) => {
      let res = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });
      let data = await res.json();
      console.log(data);
      context.commit("setToken", data.token);

      // Verify token
      fetch("http://localhost:3000/users/user/verify", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": data.token,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          context.commit("setUser", user);
          router.push("/home");
          // console.log(user);
        });
    },

    // Business login
    businessLogin: async (context, payload) => {
      let res = await fetch("http://localhost:3000/business/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });
      let data = await res.json();
      console.log(data);
      context.commit("setToken", data.token);

      // Verify
      fetch("http://localhost:3000/business/business/verify", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": data.token,
        },
      })
        .then((res) => res.json())
        .then((business) => {
          context.commit("setBusiness", business);
          console.log(business.business.b_id);
        });
      router.push("/home");
    },

    // User register
    userRegister: async (context, user) => {
      fetch("http://localhost:3000/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => context.commit("setNewUser", data));
      // console.log(`User ${user.f_name} was created.`);
    },

    // Business Register
    businessRegister: async (context, business) => {
      fetch("http://localhost:3000/business/register", {
        method: "POST",
        body: JSON.stringify(business),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => context.commit("setNewBusiness", data));
      // console.log(`User ${business.b_name} was created.`);
    },

    //  Get all products
    getProducts: async (context) => {
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((products) => {
          context.commit("setProducts", products);
        });
    },

    // Single View Product
    getProduct: async (context, id) => {
      fetch("http://localhost:3000/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setProduct", product));
    },

    // Get businesses
    getBusinesses: async (context) => {
      fetch("http://localhost:3000/business")
        .then((res) => res.json())
        .then((business) => {
          context.commit("setBusinesses", business);
        });
    },

    // Add a product
    addProduct: async (context) => {
      fetch("http://localhost:3000/products/", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((product) => context.commit("setProducts", product));
    },
  },
  plugins: [createPersistedState()], //Allows user to stay logged in upon refreshing the page
  //npm install --save vuex-persistedstate
  //Above is how to install persisted state
});
