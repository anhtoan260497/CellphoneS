<template>
  <div
    style="border-radius: 10px; box-shadow: 1px 1px 5px gray; overflow: hidden"
  >
    <v-carousel
      v-model="current"
      :show-arrows="false"
      class="carousel-container"
      cycle
      hide-delimiters
      @change="handleChange($event)"
    >
      <v-carousel-item v-for="(data, idx) in datas" :key="idx">
        <a :href="data.url"><img style="width: 700px" :src="data.path" /></a>
      </v-carousel-item>
    </v-carousel>

    <div class="carousel-options" style="display: flex">
      <div
        v-for="(data, idx) in datas"
        :key="idx"
        :class="{'carousel-active' : idx === current ? true : false }"
        class="carousel-options-item"
        @click="handleClickOption(idx)"

      >
        <p>{{ data.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      datas: null,
      current: 0,
    }
  },
  mounted() {
    const getData = async () => {
      const fetchData = await axios.get(`https://my-cellphones-api.herokuapp.com/datas`)
      this.datas = fetchData.data
    }
    getData()
  },
  methods: {
    handleChange($event) {
      this.current = parseInt(this.datas[$event].id)
    },
    handleClickOption(idx) {
    this.current = idx
    }
  },
}
</script>

<style>
.carousel-container {
  width: 700px;
  height: 300px !important;
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
  cursor: pointer;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

.carousel-active{
  font-weight: 600;
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

.carousel-container-mobile{
  display: none;
}

</style>
