<template>
<section class="container">
    <h2>Business Contact Details</h2>
  <div class="d-flex flex-wrap">
    <Contact
      v-for="business in businesses"
      :key="business.b_id"
      :business="business"
    />
  </div>
</section>
</template>
<script>
import Contact from "@/components/User/Contact.vue";
export default {
  components: { Contact },

  computed: {
    businesses() {
      return this.$store.state.businesses;
    },
  },

  mounted() {
    this.$store.dispatch("getBusinesses");
  },
};
</script>
<style scoped>

.container{
  margin:0;
  padding:0;
background-color: #042069;
color:darkgray;
}

</style>
