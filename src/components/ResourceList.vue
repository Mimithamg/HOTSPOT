<!-- src/components/ResourceList.vue -->
<template>
  <div>
    <h2>Available Resources</h2>

    <!-- Filtering Options -->
    <div>
      <label>Filter by Type:</label>
      <select v-model="selectedType">
        <option value="">All</option>
        <option value="emergency_supplies">Emergency Supplies</option>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
      </select>
    </div>

    <!-- Resource List -->
    <ul>
      <li v-for="resource in filteredResources" :key="resource.id">
        {{ resource.name }} - Type: {{ resource.type }} - Quantity: {{ resource.quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: '',
      resources: [
        { id: 1, name: 'Resource 1', type: 'emergency_supplies', quantity: 10 },
        { id: 2, name: 'Resource 2', type: 'food', quantity: 50 },
        { id: 3, name: 'Resource 3', type: 'clothing', quantity: 20 },
        // Add more resources as needed
      ],
    };
  },
  computed: {
    filteredResources() {
      return this.selectedType
        ? this.resources.filter(resource => resource.type === this.selectedType)
        : this.resources;
    },
  },
};
</script>

<style scoped>
/* Add component styles here */
</style>