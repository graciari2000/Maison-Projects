<template>
  <form @submit.prevent="onSubmit">
    <!-- Email -->
    <div class="form-group" :class="{ error: v$.form.email.$errors.length }">
      <label for="">Email</label>
      <input class="form-control" placeholder="Enter your username" type="email" v-model="v$.form.email.$model">
      <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <!-- password -->
    <div class="form-group" :class="{ error: v$.form.password.$errors.length }">
      <label for="">Password</label>
      <input class="form-control" placeholder="Enter your password" type="password" v-model="v$.form.password.$model">
      <div class="pre-icon os-icon os-icon-fingerprint"></div>
          <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="buttons-w">
      <button :disabled="v$.form.$invalid" class="btn btn-primary">Login</button>
    </div>

  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, alphaNum } from '@vuelidate/validators'
import "../assets/loginForm.css"

export default {
  name: 'LoginForm',
  setup () {
      return { v$: useVuelidate() }
    },

    data() {
      return {
        form: {
          email: '',
          password: '',
        },
      }
    },
    
    validations() {
      return {
        form: {
          email: {
            required, email 
          },
          password: {
              required, alphaNum,
              min: minLength(8)
          },
        },
      }
    },
  }
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover:enabled {
  background-color: #005;
}
</style>