<template>
  <div class="container-fluid">
    <div class="form">
      <h1 class="mb-5 text-center">Login Account</h1>
      <p v-if="state.form.error">{{ state.form.error }}</p>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          v-model="state.form.email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="state.form.pwd"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" class="btn btn-primary px-4 mx-auto" @click="login">
        Login
      </button>
      <br />
      <router-link to="/signup">Don't have Account Create now</router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const state = reactive({
  form: {
    email: "",
    pwd: "",
    error: "",
  },
});

function login() {
  const olddb = JSON.parse(localStorage.getItem("registerdb")) || [];

  const index = olddb.findIndex(
    (d) => d.email == state.form.email && d.password == state.form.pwd
  );

  if (index == -1) return state.form.error = 'Invalid Credentails';
  sessionStorage.setItem("user", [JSON.stringify(olddb[index])]);
  router.push("/");
}
</script>

<style scoped>
.container-fluid {
  display: flex;
  min-height: 100vh;
  align-items: center;
  background-color: rgb(143, 0, 209);
}

.form {
  width: 30%;
  display: block;
  margin: auto;
  color: white;
  font-weight: 900;
  font-size: 20px;
}
</style>


