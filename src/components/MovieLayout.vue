<template>
  <div class="container-fluid py-3">
    <template v-for="(data, index) in state.movies" :key="index">
      <MovieCard :data="data" />
    </template>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";
import MovieCard from "./MovieCard.vue";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
const MOVIESAPI = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;


let state = reactive({
  movies: [],
});

async function getMovies() {
  try {
    state.movies = await axios.get(MOVIESAPI).then((d) => d.data.results);
    console.log(state.movies)
  } catch (err) {
    console.error("Error in fetching data:" + err);
  }
}

onMounted(() => {
  getMovies();
});
</script>

<style scoped>
.container-fluid {
  display: grid;
  justify-content: space-around;
  justify-items: center;
  column-gap: 30px;
  row-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 350px;
  background-color: white;
}

.container-fluid > * {
  display: flex;
  justify-content: center;
  border: 1px solid black;
}

input:focus,
button:focus {
  border: 1px solid var(--main-bg) !important;
  box-shadow: none !important;
  background-color: var(--main-bg);
}

.form-check-input:checked {
  background-color: var(--main-bg) !important;
  border-color: var(--main-bg) !important;
}


</style>