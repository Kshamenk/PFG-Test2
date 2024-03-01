<!-- <template>
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
  </style> -->


  <!-- <template>
    <div class="user-profile">
      <h1>Welcome to Your Profile</h1>
      <img :src="getProfileImage()" alt="Profile Image" style="max-width: 150px; border-radius: 50%;">
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
      },
      getProfileImage() {
        // Use Robohash to generate a unique profile image based on user email
        const hash = this.hashCode(this.userData.email);
        return `https://robohash.org/${hash}?set=set4`; // You can change the "set" parameter for different styles
      },
      hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash.toString(16);
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
    background-color: rgb(234, 238, 216);
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
  </style> -->






<template>
  <div class="user-profile">
    <h1>Welcome to Your Profile</h1>
    <div class="profile-image-container">
      <img :src="getProfileImage()" alt="Profile Image" class="profile-image">
    </div>
    <div class="user-info">
      <p>Username: {{ userData.username }}</p>
      <p>Email: {{ userData.email }}</p>
    </div>
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
    },
    getProfileImage() {
      //generate a unique profile image 
      const hash = this.hashCode(this.userData.email);
      return `https://robohash.org/${hash}?set=set4`; // "set" parameter for different styles
    },
    hashCode(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash.toString(16);
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
  background-color: rgb(234, 238, 216);
  text-align: center;
}

.profile-image-container {
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 20px;
  width: 150px;
  height: 150px;
  border: 5px solid #3498db;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.user-info {
  margin-bottom: 20px;
}

button {
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