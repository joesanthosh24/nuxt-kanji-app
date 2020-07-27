<template>
  <div class="login">
    <h1>Login Here</h1>
    <b-form @submit.prevent="submitForm">
      <b-form-group id="input-group-1" label="Email Adress" label-for="email">
        <b-form-input type="email" id="email" required placeholder="Enter Email" v-model="email" />
      </b-form-group>
      <b-form-group id="input-group-2" label="Password" label-for="password">
        <b-form-input
          type="password"
          id="password"
          required
          placeholder="Enter Password"
          v-model="password"
        />
      </b-form-group>
      <b-button type="submit" variant="primary">Log In</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      console.log('In submitForm')
    },
  }
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>