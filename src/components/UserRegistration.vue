<template>
  <div>
    <h2>User Registration</h2>
    <form @submit.prevent="registerUser">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="user.username" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="user.email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="user.password" required>

      <button type="submit">Register</button>
    </form>

    <h2>Registered Donors</h2>
    <button @click="getRegisteredUsers">Get Registered Users</button>
    <ul>
      <li v-for="donor in registeredUsers" :key="donor.username">
        {{ donor.username }} - {{ donor.location }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        latitude: null,
        longitude: null,
      },
      registeredUsers: [],
    };
  },
  methods: {
    async registerUser() {
      try {
        const position = await this.getCurrentPosition();

        this.user.latitude = position.coords.latitude;
        this.user.longitude = position.coords.longitude;

        const locationResponse = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?key=cb6c00247eea4a51b7ce8330bb2423a4&q=${this.user.latitude}+${this.user.longitude}`
        );

        if (locationResponse.ok) {
          const locationData = await locationResponse.json();

          if (locationData.results && locationData.results.length > 0) {
            this.user.location = locationData.results[0].formatted;
          }

          // Display the registered user's information
          console.log('User registered successfully:', this.user);

          // Add the user to the list of registered users
          this.registeredUsers.push({
            username: this.user.username,
            location: this.user.location,
          });
        } else {
          console.error('Error fetching location data');
        }
      } catch (error) {
        console.error('Error during user registration:', error);
      }
    },
    getRegisteredUsers() {
      // No retrieval of registered users as it's not stored persistently
      console.warn('Cannot retrieve registered users without a backend');
    },
    getCurrentPosition() {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
