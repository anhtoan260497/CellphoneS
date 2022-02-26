<template>
  <div class="promotion-home-container">
    <a v-for="(item, idx) in datas" :key="idx" :href="item.url"
      ><img class="promotion-home-item" :src="item.img"
    /></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          img: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/flip_right.png',
          url: 'https://cellphones.com.vn/samsung-galaxy-z-flip-3.html',
        },
        {
          img: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/13-desk.png',
          url: 'https://cellphones.com.vn/iphone-13.html',
        },
        {
          img: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/ltRB.png',
          url: 'https://cellphones.com.vn/laptop.html?price=10000001-15000001&stock_available=46',
        },
      ],
    }
  },
}
</script>

<style>
.promotion-home-container {
  width: 265px;
  height: 376px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.promotion-home-item {
  width: 265px;
  height: 115px;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 2px 2px 10px gray;
}

</style>
