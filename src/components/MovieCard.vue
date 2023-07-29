<template>
  <div class="card">
    <img
      class="card-img-top"
      :src="'https://image.tmdb.org/t/p/w500' + props.data.backdrop_path"
      alt="image"
    />
    <div class="card-body">
      <h6 class="card-title">{{ props.data.original_title }}</h6>
      <p class="card-text">
        {{
          props.data.overview.length < 80
            ? props.data.overview
            : props.data.overview.slice(0, 80) + "..."
        }}
      </p>
      <RouterLink
        @click="selectMovie(props.data.original_title)"
        to="/hall"
        class="btn btn-primary"
        ><i class="fa-solid fa-bag-shopping"></i> &nbsp;Book Now</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  data: Object,
});

function selectMovie(name) {
  let userdata = ref(JSON.parse(sessionStorage.getItem("user")));
  userdata.value.order = {
    movie: name
  } ;
  sessionStorage.setItem("user", JSON.stringify(userdata.value));
}

</script>

<style scoped>
.card-img-top {
  width: 100%;
  object-position: top;
  object-fit: cover;
  height: 100%;
}
</style>