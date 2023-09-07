
<template>
  <div class="main-bg">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="card shadow">
            <div class="card-title text-center border-bottom">
              <h2 class="p-3">Signup</h2>
              <p style="color: red" v-if="state.form.error">
                {{ state.form.error }}
              </p>
            </div>
            <div class="card-body">
              <div>
                <div class="mb-4">
                  <label for="username" class="form-label">name</label>
                  <input
                    type="email"
                    v-model="state.form.name"
                    class="form-control"
                    required
                    minlength="5"
                  />
                </div>
                <div class="mb-4">
                  <label for="username" class="form-label">Email</label>
                  <input
                    type="email"
                    v-model="state.form.email"
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label for="password" class="form-label">Password</label>
                  <input
                    v-model="state.form.pwd"
                    type="password"
                    class="form-control"
                    minlength="8"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label for="password" class="form-label"
                    >Confirm Password</label
                  >
                  <input
                    v-model="state.form.cpwd"
                    type="password"
                    class="form-control"
                    required
                    minlength="8"
                  />
                </div>
                <div class="d-grid">
                  <button
                    @click="register"
                    type="submit"
                    class="btn text-light main-bg"
                  >
                    Register
                  </button>
                  <br />
                  <router-link to="/login">Already Have account ? </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

<style  scoped>
.main-bg {
  background: var(--main-bg) !important;
  border: 1px solid transparent;
}

input:focus,
button:focus {
  border: 1px solid var(--main-bg) !important;
  box-shadow: none !important;
}


.form-check-input:checked {
  background-color: var(--main-bg) !important;
  border-color: var(--main-bg) !important;
}

.card,
.btn,
input {
  border-radius: 0 !important;
}
</style>