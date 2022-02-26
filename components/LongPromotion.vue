<template>
<div>
  <a
    class="long-promotion"
    href="https://cellphones.com.vn/samsung-galaxy-tab-s8-ultra.html"
    ><img
      src="https://cdn.cellphones.com.vn/media/wysiwyg/1-specical-tab-s8-1200x75.png"
  /></a>
<a
    class="long-promotion-mobile"
    href="https://cellphones.com.vn/samsung-galaxy-tab-s8-ultra.html"
    ><img
      src="https://cdn.cellphones.com.vn/media/wysiwyg/tab-s8-series-800-150-max.png"
  /></a>
  
</div>
</template>

<script>
export default {
  name: 'LongPromotion',
  props: {
    img: {
      type: String,
      default() {
        return null
      },
    },
    url: {
      type: String,
      default() {
        return null
      },
    },
  },
}
</script>

<style>
.long-promotion {
  width: 100%;
  height: 80px;
  margin: 12px auto;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.long-promotion > img {
  width: 1300px;
  object-fit: cover;
  border-radius: 10px;
}

.long-promotion-mobile {
  display: none;
}

@media screen and (max-width : 767px) {
 .long-promotion {
   display: none;
 }

 .long-promotion-mobile {
   display: block;
   width: 100vw;
  margin-top : 80px;
 }

 .long-promotion-mobile > img {
   width: 100%;
 }
 
}
</style>
