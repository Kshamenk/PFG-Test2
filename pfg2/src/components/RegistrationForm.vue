
<!-- <template>
  <div class="registration-form">
    <h1>Register for an Account</h1>
    <form @submit.prevent="registerUser">
      <label for="username"><i class="fas fa-user"></i> Username:</label>
      <input type="text" v-model="username" @input="validateUsername" required>
      <span v-if="!isUsernameValid"><i class="fas fa-exclamation-circle"></i> Username should be at least 3
        characters</span>

      <label for="email"><i class="fas fa-envelope"></i> Email:</label>
      <input type="email" v-model="email" @input="validateEmail" required
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$">
      <span v-if="!isEmailValid"><i class="fas fa-exclamation-circle"></i> Please enter a valid email address</span>

      <label for="password"><i class="fas fa-lock"></i> Password:</label>
      <input type="password" v-model="password" @input="validatePassword" required>
      <span v-if="!isPasswordValid"><i class="fas fa-exclamation-circle"></i> Password should be at least 6
        characters</span>

      <button type="submit" :disabled="!isFormValid">
        Register <i class="fas fa-check"></i>
      </button>
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
      alert(this.username + ' registered successfully!')
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
  background-color: rgb(234, 238, 216);
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
  margin-top: 30px;
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #61d434;
}

span {
  color: rgb(236, 72, 72);
}</style> -->


<template>
  <div class="registration-form">
    <h1>Register for an Account</h1>
    <form @submit.prevent="registerUser">
      <label for="username"><i class="fas fa-user"></i> Username:</label>
      <input
        type="text"
        v-model="username"
        @input="validateUsername"
        @blur="focusField('username')"
        required
        id="username" 
        name="username" 
      />
      <span v-if="shouldShowValidation('username') && !isUsernameValid">
        <i class="fas fa-exclamation-circle"></i> Username should be at least 3 characters
      </span>

      <label for="email"><i class="fas fa-envelope"></i> Email:</label>
      <input
        type="email"
        v-model="email"
        @input="validateEmail"
        @blur="focusField('email')"
        required
        id="email"
        name="email"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
      />
      <span v-if="shouldShowValidation('email') && !isEmailValid">
        <i class="fas fa-exclamation-circle"></i> Please enter a valid email address
      </span>

      <label for="password"><i class="fas fa-lock"></i> Password:</label>
      <input
        type="password"
        v-model="password"
        @input="validatePassword"
        @blur="focusField('password')"
        required
        id="password"
        name="password"
      />
      <span v-if="shouldShowValidation('password') && !isPasswordValid">
        <i class="fas fa-exclamation-circle"></i> Password should be at least 6 characters
      </span>

      <button type="submit" :disabled="!isFormValid">
        Register <i class="fas fa-check"></i>
      </button>
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
      isPasswordValid: true,
      focusedField: null
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
      alert(this.username + ' registered successfully!');
    },
    validateUsername() {
      this.isUsernameValid = this.username.length >= 3;
    },
    validateEmail() {
      this.isEmailValid = /\S+@\S+\.\S+/.test(this.email);
    },
    validatePassword() {
      this.isPasswordValid = this.password.length >= 6;
    },
    focusField(field) {
      this.focusedField = field;
    },
    shouldShowValidation(field) {
      return this.focusedField === field;
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
  background-color: rgb(234, 238, 216);
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
  margin-top: 30px;
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #61d434;
}

span {
  color: rgb(236, 72, 72);
}
</style>
