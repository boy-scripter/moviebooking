<template>
  <div class="main-bg">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="card shadow">
            <div class="card-title text-center border-bottom">
              <h2 class="p-3">Login</h2>
              <p style="color: red" v-if="state.form.error">
                {{ state.form.error }}
              </p>
            </div>
            <div class="card-body">
              <div>
                <div class="mb-4">
                  <label for="username" class="form-label">Email</label>
                  <input
                    type="email"
                    v-model="state.form.email"
                    class="form-control"
                    id="username"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label for="password" class="form-label">Password</label>
                  <input
                    v-model="state.form.pwd"
                    type="password"
                    class="form-control"
                    id="password"
                    required
                  />
                </div>
                <div class="d-grid">
                  <button
                    @click="login"
                    type="submit"
                    class="btn text-light main-bg"
                  >
                    Login
                  </button>
                  <br />
                  <router-link to="/signup"
                    >Don't have Account Create now</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

  if (index == -1) return (state.form.error = "Invalid Credentails");
  sessionStorage.setItem("user", [JSON.stringify(olddb[index])]);
  router.push("/");
}
</script>

<style scoped>

  


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


