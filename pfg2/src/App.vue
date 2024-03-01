<template>
    <div id="app">
      <router-view :userData="userData" @user-registered="updateUserData" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userData: null
      };
    },
    methods: {
      updateUserData(data) {
        // Actualizar datos del usuario
        this.userData = data;
      }
    }
  };
  </script>
  <style>
  #app {
    font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>