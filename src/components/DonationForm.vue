<!-- src/components/DonationForm.vue -->
<template>
  <div class="donationformclass">
    <h2>Donation Form</h2>
    <form @submit.prevent="submitDonation">
      <label for="resourceType" class="dflabel">Resource Type:</label>
      <input type="text" id="resourceType" v-model="donation.resourceType" required class="dfinput">

      <label for="quantity" class="dflabel">Quantity:</label>
      <input type="number" id="quantity" v-model="donation.quantity" required class="dfinput">

      <label for="pickupLocation" class="dflabel">Pickup Location:</label>
      <input type="text" id="pickupLocation" v-model="donation.pickupLocation" required class="dfinput">

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
.donationformclass {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.donation-form {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px; /* Adjust the width as needed */
}

.dflabel {
  display: block;
  margin-bottom: 5px;
}

.dfinput {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.dfbutton {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dfbutton:hover {
  background-color: #45a049;
}
h2 {
  margin-top: 20px; /* Adjust the margin as needed */
}
/* Add component styles here */
</style>