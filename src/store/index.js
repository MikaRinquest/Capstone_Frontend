import { createStore } from "vuex";
import router from "@/router"; //Needed for the router.push functions
import createPersistedState from "vuex-persistedstate"; //Importing the plugin
import swal from "sweetalert";

export default createStore({
  state: {
    user: null,
    newUser: null,
    products: null,
    relatedProducts: null,
    product: null,
    cart: [],
    businesses: null,
    business: null,
    newBusiness: null,
    token: null,
    b_id: null,
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

    // Set related products
    setRelatedProducts: (state, relatedProducts) => {
      state.relatedProducts = relatedProducts;
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
      (state.user = ""), (state.business = ""), (state.token = ""), state; //Just sets the states to null, "logging out" the user or business
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
      if (data.msg === "Email does not exist, please register.") {
        swal({
          title: "Oops!",
          text: "Email is incorrect",
          icon: "error",
        });
      } else if (data.msg === "Password is incorrect") {
        swal({
          title: "Oops!",
          text: "Password is incorrect",
          icon: "error",
        });
      } else {
        // Verify token
        fetch("https://capstone-ecom.herokuapp.com/users/user/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((user) => {
            console.log(user);
            context.commit("setUser", user);
            router.push("/home");
          });
      }
    },

    // Business login
    businessLogin: async (context, payload) => {
      let res = await fetch("https://capstone-ecom.herokuapp.com/business/login", {
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
      if (data.msg === "Email does not exist, please register.") {
        swal({
          title: "Oops!",
          text: "Email is incorrect",
          icon: "error",
        });
      } else if (data.msg === "Password is incorrect") {
        swal({
          title: "Oops!",
          text: "Password is incorrect",
          icon: "error",
        });
      } else {
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
            console.log(business);
            context.dispatch("getRelatedProducts", business.business.b_id);
          });
        router.push("/home");
      }
    },

    // User register
    userRegister: async (context, user) => {
      fetch("https://capstone-ecom.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => context.commit("setNewUser", data));
        swal({
          icon:"success",
          title:"Awesome!",
          text:"You have successfully created an account, try logging in."
        })
      // console.log(`User ${user.f_name} was created.`);
    },

    // Business Register
    businessRegister: async (context, business) => {
      fetch("https://capstone-ecom.herokuapp.com/business/register", {
        method: "POST",
        body: JSON.stringify(business),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => context.commit("setNewBusiness", data));
        swal({
          icon:"success",
          title:"Awesome!",
          text:"You have successfully created an account, try logging in."
        })
      // console.log(`User ${business.b_name} was created.`);
    },

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

    // Edit user
    editUser: async (context, user) => {
      fetch("https://capstone-ecom.herokuapp.com/users/", {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    // Delete account
    deleteUser: async (context, user) => {
      fetch("https://capstone-ecom.herokuapp.com/users/", {
        method: "DELETE",
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    // Business Functions
    // Get related products
    getRelatedProducts: async (context, id) => {
      fetch("https://capstone-ecom.herokuapp.com/products/product/" + id, {
        method: "GET",
        // body: JSON.stringify(products),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("setRelatedProducts", data);
        });
    },

    // Add a product
    addProduct: async (context, product) => {
      fetch("https://capstone-ecom.herokuapp.com/products/", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => context.commit("setRelatedProducts", data));
    },

    // Edit a product
    editProduct: async (context, product) => {
      await fetch("https://capstone-ecom.herokuapp.com/products/" + product.p_id, {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => context.commit("setRelatedProducts", product.p_id));
    },

    // Delete product
    deleteProduct: async (context, id) => {
      await fetch("https://capstone-ecom.herokuapp.com/products/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => context.commit("setRelatedProducts"));
    },

// Edit business
editBusiness: async (context, business) => {
  fetch("https://capstone-ecom.herokuapp.com/business/", {
    method: "PATCH",
    body: JSON.stringify(business),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => context.commit("setBusiness", json));
},

  },
  plugins: [createPersistedState()], //Allows user to stay logged in upon refreshing the page
  //npm install --save vuex-persistedstate
  //Above is how to install persisted state
});
