<template>
  <div class="container">
    <div class="text_content">
      <h2>Order Summary</h2>
      <p>{{ userdata.order.movie }}</p>
    </div>

    <div class="plan">
      <div>
        <h6>{{ userdata.order.hall }}</h6>
        <p class="mt-3">
          ( {{ userdata.order.seat.length }} ticket ) &emsp;Price:
          {{ userdata.order.seat.length * 200 }}
        </p>
        <p>Service fee : {{ (userdata.order.seat.length * 200 * 11) / 100 }}</p>
      </div>
    </div>

    <div class="payment-options">
      <RouterLink to="/history" class="PTP">Pay</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeRouteLeave, useRouter } from "vue-router";

const router = useRouter();

const userdata = ref(JSON.parse(sessionStorage.getItem("user")));
if (!userdata.value) router.push("/login");

onBeforeRouteLeave(() => {
  pay();
});

function pay() {
  const myoldseat = JSON.parse(
    localStorage.getItem(
      "seatdb" +
        userdata.value.order.movie.slice(0, 5) +
        userdata.value.order.time.slice(0, 2) +
        userdata.value.order.hall.slice(0, 5)
    ) || "[]"
  );

  localStorage.setItem(
    "seatdb" +
      userdata.value.order.movie.slice(0, 5) +
      userdata.value.order.time.slice(0, 2) +
      userdata.value.order.hall.slice(0, 5),
    JSON.stringify([...userdata.value.order.seat, ...myoldseat])
  );

  const db = JSON.parse(localStorage.getItem(userdata.value.email)) || [];

  userdata.value.order.id = Date.now();
  if (db.length) {
    db[0].orders.push(userdata.value.order);
  } else {
    const data = {
      email: userdata.value.email,
      orders: [userdata.value.order],
    };
    db.push(data);
  }

  localStorage.setItem(userdata.value.email, JSON.stringify(db));
}
</script>

<style scoped>
.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 450px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.text_content h2 {
  color: hsl(223, 47%, 23%);
  padding: 10px 0 15px 0;
  font-size: 18px;
  font-weight: 900;
}
.text_content p {
  font-size: 23px;
  color: blueviolet;
  font-weight: bold;
}
.plan {
  display: flex;
  align-items: center;
  background-color: hsl(225, 100%, 98%);
  border-radius: 15px;
  margin: 13px 30px 13px 30px;
  padding: 23px;
  justify-content: space-between;
}
.plan h6 {
  font-size: larger;
  font-weight: 900;
  color: hsl(223, 47%, 23%);
}
.plan p {
  color: rgba(153, 153, 153, 0.979);
  font-size: 18px;
}
.PTP {
  display: block;
  background-color: hsl(245, 75%, 52%);
  font-size: 14px;
  padding: 14px;
  margin: 30px;
  border-radius: 15px;
  text-decoration: none;
  color: white;
  font-size: medium;
  font-weight: 500;
  box-shadow: 8px 15px 20px hsla(245, 75%, 52%, 0.329);
}
.CO {
  text-decoration: none;
  color: rgba(153, 153, 153, 0.979);
  font-size: 13px;
  font-weight: 800;
}
.payment-options {
  margin-bottom: 50px;
}

@media only screen and (max-width: 425px) {
  * {
    max-width: 100vw;
    max-height: 100vh;
  }
  body {
    background-image: aqua;
    font-size: 14px;
  }
  .container {
    max-width: 87%;
  }
  .text_content h2 {
    font-size: 18px;
  }
  .text_content p {
    font-size: 23px;
    color: blueviolet;
  }
}
</style>