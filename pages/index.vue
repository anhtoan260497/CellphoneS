<template>
  <div style="position:relative">
    <NavBar
      :isShowLocation="isShowLocation"
      @setIsActive="handleChangeActive()"
      @setFocusInput="handleFocusInput"
    />
    <div
      :class="{ active: isActive, 'none-active': !isActive }"
      @click="handleClickActiveArea()"
    ></div>
    <div class="header-container">
      <MenuOptions />
      <HomeCarousel />
      <PromotionHome />
    </div>
    <HomeCarouselMobile />

    <LongPromotion />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import MenuOptions from '../layout/MenuOptions.vue'
import HomeCarousel from '../layout/HomeCarousel.vue'
import PromotionHome from '../layout/PromotionHome.vue'
import LongPromotion from '../components/LongPromotion.vue'
import HomeCarouselMobile from '../layout/HomeCarouselMobile.vue'

export default {
  name: 'IndexPage',
  components: {
    NavBar,
    MenuOptions,
    HomeCarousel,
    PromotionHome,
    LongPromotion,
    HomeCarouselMobile,
  },
  data() {
    return {
      isActive: false,
      isShowLocation: false,
      isFocusInput: false,
    }
  },
  methods: {
    handleChangeActive() {
      this.isActive = !this.isActive
      this.isShowLocation = !this.isShowLocation
    },
    handleFocusInput() {
      this.isFocusInput = true
      this.isActive = true
    },
    handleClickActiveArea() {
      this.isActive = false
      this.isShowLocation = false
      this.isFocusInput = false
    },
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

.header-container {
  width: 1200px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  padding: 80px 0 0;
  position: relative;
}

.active {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: black;
  opacity: 0.4;
  z-index: 11;
  transition: background-color 0.5s ease;
}

.none-active {
  width: 100vw;
  height: 100vh;
  position: absolute;
  opacity: 0.4;
}

@media screen and (max-width: 767px) {
  .active,
  .none-active,
  .header-container {
    display: none;
   }
    //hide carousel, menu options 
}
</style>
