<template>
  <div class="container-fluid">
    <div class="form">
      <h1 class="mb-5 text-center">Create Account</h1>
      <p v-if="state.form.error">{{ state.form.error }}</p>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          minlength="5"
          required
          v-model="state.form.name"
          type="name"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="state.form.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input
          minlength="8"
          required
          v-model="state.form.pwd"
          type="password"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Confirm Password</label>
        <input
          minlength="8"
          v-model="state.form.cpwd"
          type="password"
          class="form-control"
        />
      </div>
      <button
        type="submit"
        @click="register"
        class="btn btn-primary px-4 mx-auto"
      >
        Signup
      </button>
      <br />
      <router-link to="/login">Already Have account ? </router-link>
    </div>
  </div>
</template>

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
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const state = reactive({
  form: {
    email: "",
    pwd: "",
    cpwd: "",
    error: "",
    name: "",
  },
});

function isAccountExist(olddb) {
  return olddb.findIndex((d) => d.email == state.form.email) != -1;
}

function register() {
  if (state.form.pwd != state.form.cpwd)
    return (state.form.error = "Password must be equal");

  state.form.error = "";

  if (localStorage.getItem("registerdb")) {
    const olddb = JSON.parse(localStorage.getItem("registerdb"));

    if (isAccountExist(olddb))
      return (state.form.error = "Account Already exist");

    localStorage.setItem(
      "registerdb",
      JSON.stringify([
        ...olddb,
        {
          email: state.form.email,
          password: state.form.cpwd,
          name: state.form.name,
        },
      ])
    );
  } else {
    localStorage.setItem(
      "registerdb",
      JSON.stringify([
        {
          email: state.form.email,
          password: state.form.cpwd,
          name: state.form.name,
        },
      ])
    );
  }
  state.form.error = "Registration Successful";
  router.push("/login");
}
</script>