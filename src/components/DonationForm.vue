<!-- src/components/DonationForm.vue -->
<template>
  <div>
    <h2>Donation Form</h2>
    <form @submit.prevent="submitDonation">
      <label for="resourceType">Resource Type:</label>
      <input type="text" id="resourceType" v-model="donation.resourceType" required>

      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" v-model="donation.quantity" required>

      <label for="pickupLocation">Pickup Location:</label>
      <input type="text" id="pickupLocation" v-model="donation.pickupLocation" required>

      <button type="submit">Submit Donation</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donation: {
        resourceType: '',
        quantity: 0,
        pickupLocation: '',
      },
    };
  },
  methods: {
    submitDonation() {
      // Add logic to handle the submission of the donation
      console.log('Donation Submitted:', this.donation);

      // You can send this data to your backend for further processing
      // For now, let's just reset the form
      this.resetForm();
    },
    resetForm() {
      this.donation = {
        resourceType: '',
        quantity: 0,
        pickupLocation: '',
      };
    },
  },
};
</script>

<style scoped>
/* Add component styles here */
</style>