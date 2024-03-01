<template>
  <div class="user-profile">
    <h1>Welcome to Your Profile</h1>
    <p>Username: {{ userData.username }}</p>
    <p>Email: {{ userData.email }}</p>
    <button @click="goBack">Go Back to Registration Form</button>
  </div>
</template>

<script>
export default {
  props: {
    userData: Object
  },
  methods: {
    goBack() {
     
      this.$router.back();
    }
  }
};
</script>
  
  <style scoped>
  .user-profile {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  button {
  margin-top: 10px;
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}
  </style>