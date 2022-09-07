import { createStore } from "vuex";
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
  },
  actions: {
    // User Login
    userLogin: async (context, payload) => {
      let res = await fetch("https://capstone-ecom.herokuapp.com/users/login", {
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
      fetch("https://capstone-ecom.herokuapp.com/users/user/verify", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": data.token,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          context.commit("setUser", user);
          // console.log(user);
        });
    },

    // Business login
    businessLogin: async (context, payload) => {
      let res = await fetch(
        "https://capstone-ecom.herokuapp.com/business/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
          }),
        }
      );
      let data = await res.json();
      console.log(data);
      context.commit("setToken", data.token);

      // Verify
      fetch("https://capstone-ecom.herokuapp.com/business/business/verify", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": data.token,
        },
      })
        .then((res) => res.json())
        .then((business) => {
          context.commit("setBusiness", business);
        });
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
  plugins: [createPersistedState()], //Allows user to stay logged in upon refreshing the page
  //npm install --save vuex-persistedstate
  //Above is how to install persisted state
});
