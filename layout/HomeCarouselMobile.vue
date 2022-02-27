<template>
  <div
    style="
      width: 90%;
      border-radius: 10px;
      box-shadow: 1px 1px 5px gray;
      overflow: hidden;
      margin: auto;
    "
  >
    <v-carousel
      v-model="model"
      :show-arrows="false"
      class="carousel-container-mobile"
      cycle
    >
      <v-carousel-item v-for="(data, idx) in datas" :key="idx">
        <a :href="data.url"
          ><img
            style="
              width: 100%;
              height: 250px;
              object-fit: cover;
              border-radius: 10px;
            "
            :src="data.path"
        /></a>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      datas: null,
    }
  },
  mounted() {
    const getData = async () => {
      const fetchData = await axios.get(`https://my-cellphones-api.herokuapp.com/datas`)
      this.datas = fetchData.data
    }
    getData()
  },
}
</script>

<style>
@media screen and (max-width: 767px) {
  .carousel-container-mobile {
    width: 90%;
    height: 302px !important;
    position: absolute;
    top: 160px;
    border-radius: 10px;
    display: block;
  }

  .carousel-options {
    width: 700px;
    height: 72px !important;
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
  }

  .carousel-options-item {
    width: 90px;
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .carousel-active::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #e0052b;
    top: 65px;
    border-radius: 10px;
  }

  .v-carousel__controls {
    background-color: transparent;
  }

  .v-btn .v-btn__content .v-icon {
    color: red;
  }
}
</style>
