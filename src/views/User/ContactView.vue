<template>
  <div>
    <Contact
      v-for="business in businesses"
      :key="business.b_id"
      :business="business"
    />
  </div>
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
<style></style>
