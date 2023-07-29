<template>
  <div class="container-fluid">
    <div class="row m-3 p-3">
      <h1 class="title text-center py-3 bg-warning">
        {{ userdata.order.movie }}
      </h1>
      <div class="col-12 box">
        <div class="first mx-2">Amba Cinema: Delhi</div>
        <div class="second">
          <RouterLink
            to="/book"
            @click="selectDate('09:40 AM')"
            class="btn btn-outline-primary"
          >
            09:40 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('10:25 AM')"
            class="btn btn-outline-primary"
          >
            10:25 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('12:15 PM')"
            class="btn btn-outline-primary"
          >
            12:15 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('01:40 PM')"
            class="btn btn-outline-primary"
          >
            01:40 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('03:45 PM')"
            class="btn btn-outline-primary"
          >
            03:45 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('04:40 PM')"
            class="btn btn-outline-primary"
          >
            04:40 PM
          </RouterLink>
        </div>
      </div>
      <div class="col-12 box">
        <div class="first mx-2">Cinepolis: Cross River Mall, Shahdara</div>
        <div class="second">
          <RouterLink
            to="/book"
            @click="selectDate('09:40 AM')"
            class="btn btn-outline-primary"
          >
            09:40 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('10:25 AM')"
            class="btn btn-outline-primary"
          >
            10:25 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('12:15 PM')"
            class="btn btn-outline-primary"
          >
            12:15 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('01:40 PM')"
            class="btn btn-outline-primary"
          >
            01:40 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('03:45 PM')"
            class="btn btn-outline-primary"
          >
            03:45 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('04:40 PM')"
            class="btn btn-outline-primary"
          >
            04:40 PM
          </RouterLink>
        </div>
      </div>
      <div class="col-12 box">
        <div class="first mx-2">Delhi: PVR Director`s Cut, Ambience Mall</div>
        <div class="second">
          <RouterLink
            to="/book"
            @click="selectDate('09:40 AM')"
            class="btn btn-outline-primary"
          >
            09:40 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('10:25 AM')"
            class="btn btn-outline-primary"
          >
            10:25 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('12:15 PM')"
            class="btn btn-outline-primary"
          >
            12:15 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('01:40 PM')"
            class="btn btn-outline-primary"
          >
            01:40 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('03:45 PM')"
            class="btn btn-outline-primary"
          >
            03:45 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('04:40 PM')"
            class="btn btn-outline-primary"
          >
            04:40 PM
          </RouterLink>
        </div>
      </div>
      <div class="col-12 box">
        <div class="first mx-2">INOX: Nehru Place</div>
        <div class="second">
          <RouterLink
            to="/book"
            @click="selectDate('09:40 AM')"
            class="btn btn-outline-primary"
          >
            09:40 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('10:25 AM')"
            class="btn btn-outline-primary"
          >
            10:25 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('12:15 PM')"
            class="btn btn-outline-primary"
          >
            12:15 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('01:40 PM')"
            class="btn btn-outline-primary"
          >
            01:40 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('03:45 PM')"
            class="btn btn-outline-primary"
          >
            03:45 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('04:40 PM')"
            class="btn btn-outline-primary"
          >
            04:40 PM
          </RouterLink>
        </div>
      </div>
      <div class="col-12 box">
        <div class="first mx-2">Delite Cinema: Asaf Ali Road</div>
        <div class="second">
          <RouterLink
            to="/book"
            @click="selectDate('09:40 AM')"
            class="btn btn-outline-primary"
          >
            09:40 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('10:25 AM')"
            class="btn btn-outline-primary"
          >
            10:25 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('12:15 PM')"
            class="btn btn-outline-primary"
          >
            12:15 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('01:40 PM')"
            class="btn btn-outline-primary"
          >
            01:40 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('03:45 PM')"
            class="btn btn-outline-primary"
          >
            03:45 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('04:40 PM')"
            class="btn btn-outline-primary"
          >
            04:40 PM
          </RouterLink>
        </div>
      </div>
      <div class="col-12 box">
        <div class="first mx-2">Gagan Theatre: Nand Nagri, Delhi</div>
        <div class="second">
          <RouterLink
            to="/book"
            @click="selectDate('09:40 AM')"
            class="btn btn-outline-primary"
          >
            09:40 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('10:25 AM')"
            class="btn btn-outline-primary"
          >
            10:25 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('12:15 PM')"
            class="btn btn-outline-primary"
          >
            12:15 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('01:40 PM')"
            class="btn btn-outline-primary"
          >
            01:40 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('03:45 PM')"
            class="btn btn-outline-primary"
          >
            03:45 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('04:40 PM')"
            class="btn btn-outline-primary"
          >
            04:40 PM
          </RouterLink>
        </div>
      </div>
      <div class="col-12 box">
        <div class="first mx-2">Amba Cinema: Delhi</div>
        <div class="second">
          <RouterLink
            to="/book"
            @click="selectDate('09:40 AM')"
            class="btn btn-outline-primary"
          >
            09:40 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('10:25 AM')"
            class="btn btn-outline-primary"
          >
            10:25 AM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('12:15 PM')"
            class="btn btn-outline-primary"
          >
            12:15 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('01:40 PM')"
            class="btn btn-outline-primary"
          >
            01:40 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('03:45 PM')"
            class="btn btn-outline-primary"
          >
            03:45 PM
          </RouterLink>
          <RouterLink
            to="/book"
            @click="selectDate('04:40 PM')"
            class="btn btn-outline-primary"
          >
            04:40 PM
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter();

let userdata = ref(JSON.parse(sessionStorage.getItem("user")));

function selectDate(time) {
  userdata.value.order.time = time;
  userdata.value.order.hall =
    event.target.parentNode.previousElementSibling.innerText;
  sessionStorage.setItem("user", JSON.stringify(userdata.value));
}
</script>
<style scoped>
.row {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 10px;
  gap: 20px;
}
.box {
  display: flex;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  gap: 40px;
  border-radius: 5px;
  align-items: center;
}

.box .first {
  width: 300px;
}

.box .second {
  width: 100%;
  display: flex;
  gap: 35px;
}
</style>