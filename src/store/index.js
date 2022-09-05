import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    products: null,
    product: null,
    cart: [],
    businesses: null,
    business: null,
    token: null,
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

    setToken: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    // User functions
    //  Get all products
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
      if (data.token) {
        context.commit("setToken", data.token);

        // Verify token
        //
        fetch("https://capstone-ecom.herokuapp.com/users/user/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((user) => {
            context.commit("setUser", user);
          });
      } else {
        alert("User not found");
      }
    },

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
      if (data.token) {
        context.commit("setToken", data.token);

        // Verify token
        //
        fetch("https://capstone-ecom.herokuapp.com//verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((user) => {
            context.commit("setUser", user);
          });
      } else {
        alert("User not found");
      }
    },

    userRegister: async (context, payload) => {
      const { f_name, l_name, email, password, address } = payload;
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((user) => context.commit(""));
    },

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
