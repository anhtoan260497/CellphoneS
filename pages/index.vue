<template>
  <div>
    <NavBar :isShowLocation="isShowLocation"  @setIsActive="handleChangeActive()" @setFocusInput="handleFocusInput" />
    <div
      :class="{ active: isActive, 'none-active': !isActive }"
      @click="handleClickActiveArea()"
    ></div>
    <div class="header-container">
      <MenuOptions />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import MenuOptions from '../layout/MenuOptions.vue'
export default {
  name: 'IndexPage',
  components: {
    NavBar,
    MenuOptions,
  },
  data() {
    return {
      isActive: false,
      isShowLocation: false,
      isFocusInput : false
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
      this.isActive= false
      this.isShowLocation= false
      this.isFocusInput = false
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.header-container {
  width: 1300px;
  margin: auto;
  border: 1px solid red;
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
  .none-active {
    display: none;
  }
}
</style>
