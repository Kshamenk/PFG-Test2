
  <!-- <template>
    <div class="registration-form">
      <h1>Registration Form</h1>
      <form @submit.prevent="registerUser">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required>
  
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
  
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      registerUser() {
        this.$emit('user-registered', {
          username: this.username,
          email: this.email
        });
        this.$router.push('/profile');
      }
    }
  };
  </script>
   -->
  


   <!-- <template>
    <div class="registration-form">
      <h1>Registration Form</h1>
      <form @submit.prevent="registerUser">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required>
        <span v-if="!isUsernameValid">Username should be at least 3 characters</span>
  
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
        <span v-if="!isEmailValid">Please enter a valid email address</span>
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
        <span v-if="!isPasswordValid">Password should be at least 6 characters</span>
  
        <button type="submit" :disabled="!isFormValid">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        isUsernameValid: true,
        isEmailValid: true,
        isPasswordValid: true
      };
    },
    computed: {
      isFormValid() {
        return this.isUsernameValid && this.isEmailValid && this.isPasswordValid;
        
      }
    },
    methods: {
      async registerUser() {
        this.$emit('user-registered', {
          username: this.username,
          email: this.email
        });
        this.$router.push('/profile');
      
      }
    }
  };
  </script> -->


  <template>
    <div class="registration-form">
      <h1>Registration Form</h1>
      <form @submit.prevent="registerUser">
        <label for="username">Username:</label>
        <input type="text" v-model="username" @input="validateUsername" required>
        <span v-if="!isUsernameValid">Username should be at least 3 characters</span>
  
        <label for="email">Email:</label>
        <input type="email" v-model="email" @input="validateEmail" required>
        <span v-if="!isEmailValid">Please enter a valid email address</span>
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" @input="validatePassword" required>
        <span v-if="!isPasswordValid">Password should be at least 6 characters</span>
  
        <button type="submit" :disabled="!isFormValid">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        isUsernameValid: true,
        isEmailValid: true,
        isPasswordValid: true
      };
    },
    computed: {
      isFormValid() {
        return this.isUsernameValid && this.isEmailValid && this.isPasswordValid;
      }
    },
    methods: {
      async registerUser() {
        this.$emit('user-registered', {
          username: this.username,
          email: this.email
        });
        this.$router.push('/profile');
      },
      validateUsername() {
        
        this.isUsernameValid = this.username.length >= 3;
      },
      validateEmail() {
       
        this.isEmailValid = /\S+@\S+\.\S+/.test(this.email);
      },
      validatePassword() {
       
        this.isPasswordValid = this.password.length >= 6;
      }
    }
  };
  </script>
  
  <style scoped>
  .registration-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
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
  
  span {
    color: rgb(236, 72, 72);
  }
  </style>