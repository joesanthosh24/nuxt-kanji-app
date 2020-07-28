<template>
  <div class="signUp">
    <h1>Sign Up Form</h1>
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
      <b-form-group id="input-group-3" label="Username" label-for="username">
        <b-form-input v-model="username" type="text" id="username" placeholder="Enter Username" />
      </b-form-group>
      <b-form-group id="date-picker-input" label="Birthday" label-for="birthday">
        <b-form-datepicker id="birthday" v-model="birthday" class="mb-2"></b-form-datepicker>
      </b-form-group>
      <b-button type="submit" variant="primary">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return { email: "", password: "", username: "", birthday: "" };
  },
  methods: {
    submitForm() {
      console.log(email.value);
      this.$fireAuth.createUserWithEmailAndPassword(email.value, password.value)
        .then(auth => {
          console.log(auth);
        })
        .catch(err => console.log(err))
    }
  }
};
</script>

<style scoped>
.signUp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>