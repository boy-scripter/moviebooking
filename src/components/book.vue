<template>
  <div class="cont">
    <h1 class="title text-center py-3 bg-warning">
      {{ userdata.order.movie }}
    </h1>
    <div class="mt-4 p-3 seats">
      <template v-for="(element, index) in Array(260).fill('f')" :key="index">
        <i class="fa-solid fa-chair seat" @click="setSeats(index)" :id="index">
        </i>
      </template>
    </div>

    <p class="text-center text-3xl" v-if="state.book.error">
      {{ state.book.error }}
    </p>
    <div class="text-center">
      <RouterLink to="/payment" class="btn btn-success price m-4">
        <span>Pay</span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { onBeforeRouteLeave, useRouter } from "vue-router";

const router = useRouter();

const userdata = ref(JSON.parse(sessionStorage.getItem("user")));
if (!userdata.value) router.push("/login");

const state = reactive({
  book: {
    cinema: "",
    cseat: [],
    seats:
      JSON.parse(
        localStorage.getItem(
          "seatdb" +
            userdata.value.order.movie.slice(0, 5) +
            userdata.value.order.time.slice(0, 2) +
            userdata.value.order.hall.slice(0, 5)
        )
      ) || [],
    error: "",
  },
});

function setSeats(id) {
  if (
    JSON.parse(
      localStorage.getItem(
        "seatdb" +
          userdata.value.order.movie.slice(0, 5) +
          userdata.value.order.time.slice(0, 2) +
          userdata.value.order.hall.slice(0, 5)
      )
    )
  ) {
    if (
      JSON.parse(
        localStorage.getItem(
          "seatdb" +
            userdata.value.order.movie.slice(0, 5) +
            userdata.value.order.time.slice(0, 2) +
            userdata.value.order.hall.slice(0, 5)
        )
      ).includes(id)
    )
      return;
  }
  event.target.classList.toggle("choose");
  if (state.book.cseat.includes(id))
    return state.book.cseat.splice(state.book.cseat.indexOf(id), 1);

  state.book.cseat.push(id);
}

onBeforeRouteLeave(() => {
  if (!state.book.cseat.length) {
    state.book.error = "Please Choose Seats for Booking";
    return false;
  }
  userdata.value.order.seat = state.book.cseat;
  sessionStorage.setItem("user", JSON.stringify(userdata.value));
});

onMounted(() => {
  const temp = document.getElementsByClassName("seat");
  Array.from(state.book.seats).forEach((element) => {
    temp[element].style.opacity = "0.3";
  });
});
</script>

<style scoped>
.movie {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 10px;
  gap: 15px;
}

button {
  all: unset;
  padding: 7px 20px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 900px;
  cursor: pointer;
  font-weight: 900;
}

.green {
  background: rgb(32, 219, 32);
  color: white;
}

.seats {
  border: 1px solid rgb(0, 0, 0);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px;
  border-radius: 15px;
}

.fa-solid {
  font-size: 30px;
  cursor: pointer;
}
.choose {
  color: rgb(111, 182, 4);
}

.price {
  display: inline-flex;
  gap: 8px;
  align-items: center;
}
.price {
  font-size: 25px;
  width: 90%;
  margin: auto;
  justify-content: center;
}
.text-3xl {
  font-size: 25px;
}
</style>