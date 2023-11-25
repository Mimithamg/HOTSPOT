<template>
  <div>
    <nav>
      <router-link to="/">Disaster Page</router-link>
      <router-link to="/home">Home</router-link>
      <!-- Add more navigation links as needed -->
    </nav>

    <h1>Disaster Page</h1>
    <!-- Add content for the disaster page here -->

    <!-- Location Permission Pop-up -->
    <LocationPermissionModal
      :showModal="showLocationPermissionModal"
      @permissionGranted="handlePermissionGranted"
      @closeModal="closeLocationPermissionModal"
    />

    <!-- Donation Form -->
    <DonationForm />

    <!-- Resource List -->
    <ResourceList />

    <UserRegistration />

    <!-- Add more content for the disaster page here -->
  </div>
</template>

<script>
import LocationPermissionModal from '@/components/LocationPermissionModal.vue';
import DonationForm from '@/components/DonationForm.vue';
import ResourceList from '@/components/ResourceList.vue';
import UserRegistration from '@/components/UserRegistration.vue';
export default {
  data() {
    return {
      showLocationPermissionModal: true, // Set to true to display the modal initially
    };
  },
  methods: {
    handlePermissionGranted(location) {
      console.log('Location granted:', location);
      // Handle the granted location as needed
    },
    closeLocationPermissionModal() {
      // Set showLocationPermissionModal to false when you want to close the modal
      this.showLocationPermissionModal = false;
    },
    requestLocationPermission() {
      // Request location permission
      this.showLocationPermissionModal = true;
    },
  },
  mounted() {
    // Trigger location permission request when the component is mounted
    this.requestLocationPermission();
  },
  components: {
    LocationPermissionModal,
    DonationForm,
    UserRegistration,
    ResourceList,
  },
};
</script>

<style scoped>
/* Add component styles here */
nav {
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
}
</style>
