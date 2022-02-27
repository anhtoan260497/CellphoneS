<template>
  <div>
    <nav class="navbar-container-fluid">
      <div class="navbar-container">
        <img class="menu-icon" src="../static/NavBarIcon/menuicon.svg" />
        <img class="menu-logo" src="../static/NavBarIcon/logo.png" />
        <div class="location-options">
          <div class="location-current" @click="handleShowLocationOption()">
            <img
              class="location-icon"
              src="../static/NavBarIcon/locationicon.svg"
            />
            <div class="location-info">
              <p>Xem giá tại</p>
              <h3>{{ locations[currentLocation].name }}</h3>
              <!-- lấy giá trị của current location để hiển thị -->
            </div>
          </div>
          <div v-show="isShowLocation" class="location-option">
            <div
              v-for="(location, idx) in locations"
              :key="idx"
              class="location-option-item"
              :class="{ 'active-location': idx === currentLocation }"
              @click="handleChangeLocation(idx)"
            >
              <!-- bind class active màu nếu idx === giá trị currentLocation thêm event handle chọn location-->
              <span>
                <img
                  style="width: 10px; margin-right: 8px"
                  src="../static/NavBarIcon/locationpin.svg" /></span
              >{{ location.name }}
            </div>
          </div>
        </div>
        <div class="search-container">
          <img class="search-icon" src="../static/NavBarIcon/searchicon.svg" />
          <input
            class="search-input"
            placeholder="Bạn cần tìm gì?"
            @focus="handleIsActive()"
          />
        </div>
        <a class="hotline-contact" href="tel:18002044">
          <img style="width: 28px" src="../static/NavBarIcon/hotlineicon.svg" />
          <div class="hotline-info">
            <p>Gọi mua hàng</p>
            <h2>1800.2097</h2>
          </div>
        </a>
        <a class="location-contact" href="https://cellphones.com.vn/dia-chi-cua-hang">
          <img
            style="width: 24px"
            src="../static/NavBarIcon/locationicon.svg"
          />
          <p>Cửa hàng gần bạn</p>
        </a>
        <a class="tracking-contact" href="https://cellphones.com.vn/tra-cuu-don-hang-online">
          <img
            style="transform: scale(1.1)"
            src="../static/NavBarIcon/trackingicon.svg"
          />
          <p>Tra cứu đơn hàng</p>
        </a>
        <a  class="cart-contact" href="https://cellphones.com.vn/cart/">
          <h3 class="cart-quantity">1</h3>
          <img
            style="transform: scale(1.3)"
            src="../static/NavBarIcon/carticon.svg"
          />
          <p>Giỏ hàng</p>
        </a>
        <a class="smem-contact" href="https://cellphones.com.vn/smember/">
          <img style="width: 26px" src="../static/NavBarIcon/smemicon.svg" />
          <p>Smember</p>
        </a>
      </div>
    </nav>
    <nav class="navbar-container-fluid-mobile">
      <div class="navbar-background-mobile"></div>
      <div class="navbar-container-mobile">
        <img class="menu-logo" src="../static/NavBarIcon/logo.png" />
        <div class="navbar-option-mobile">
          <div class="location-options">
            <div class="location-current" @click="handleShowLocationOption()">
              <img
                class="location-icon"
                src="../static/NavBarIcon/locationicon.svg"
              />
              <div class="location-info">
                <p>Xem giá tại</p>
                <h3>{{ locations[currentLocation].name }}</h3>
              </div>
            </div>
            <div v-show="isShowLocation" class="location-option">
              <div
                v-for="(location, idx) in locations"
                :key="idx"
                class="location-option-item"
                :class="{ 'active-location': idx === currentLocation }"
                @click="handleChangeLocation(idx)"
              >
                <span>
                  <img
                    style="width: 10px; margin-right: 8px"
                    src="../static/NavBarIcon/locationpin.svg" /></span
                >{{ location.name }}
              </div>
            </div>
          </div>
          <div class="cart-contact">
            <h3 class="cart-quantity">1</h3>
            <img
              style="transform: scale(1.3)"
              src="../static/NavBarIcon/carticon.svg"
            />
            <p>Giỏ hàng</p>
          </div>
        </div>
        <div class="search-container">
          <img class="search-icon" src="../static/NavBarIcon/searchicon.svg" />
          <input class="search-input" placeholder="Bạn cần tìm gì?" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    isShowLocation: {
      type: Boolean,
      default: () => {
        return false
      },
    },
  },
  data() {
    return {
      locations: [
        {
          name: 'Miền Nam',
          id: 0,
        },
        {
          name: 'Miền Bắc',
          id: 1,
        },
      ],
      currentLocation: 0,
    }
  },
  methods: {
    handleShowLocationOption() {
      this.$emit('setIsActive')
    },
    handleChangeLocation(idx) {
      this.currentLocation = idx
      this.$emit('setIsActive')
    },
    handleIsActive() {
      this.$emit('setFocusInput')
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

.navbar-container-fluid {
  width: 100%;
  height: 64px;
  background-color: #e0052b;
  position: fixed;
  z-index: 12;
}

.navbar-container {
  width: 1200px;
  height: 64px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-icon {
  width: 36px;
}

.menu-logo {
  width: 160px;
  height: 64px;
  object-fit: cover;
}

.location-options {
  width: 120px;
  font-family: 'Varela Round', sans-serif;
}

.location-current {
  width: 120px;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-size: 12px;
  cursor: pointer;
  background-color: #e2484c;
  border-radius: 10px;
  padding: 0 5px;
}

.location-icon {
  width: 16px;
}

.location-option {
  width: 160px;
  height: 52px;
  top: 60px;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 5px gray;
  overflow: hidden;
  background-color: white;
}

.location-option-item {
  width: 100%;
  height: 26px;
  padding: 3px 20px;
  cursor: pointer;
}

.location-option-item:hover {
  background-color: #ebe8e4;
}

.active-location {
  background-color: #fee2e2 !important;
}

.search-container {
  width: 300px;
  display: flex;
  align-items: center;
}

.search-icon {
  width: 16px;
  position: relative;
  left: 24px;
  color: red;
}

.search-input {
  width: 274px;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 5px 5px 5px 30px;
  font-size: 15px;
  background-color: white;
  color: black;
}

.hotline-contact {
  width: 114px;
  height: 42px;
  display: flex;
  gap: 8px;
  border-radius: 8px;
  cursor: pointer;
  padding: 4px;
}

.hotline-contact:hover {
  background-color: #e2484c;
}

.hotline-info {
  width: 80px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hotline-info > p {
  font-size: 13px;
}

.hotline-info > h2 {
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 900;
}

.location-contact,
.tracking-contact,
.cart-contact {
  width: 110px;
  height: 42px;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0 4px;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  font-size: 13px;
}

.cart-contact {
  width: 65px;
}

.location-contact > p,
.tracking-contact > p,
.cart-contact > p {
  width: 60px;
}

.cart-quantity {
  position: absolute;
  margin: 12px 0 0 -1px;
  width: 24px;
  height: 24px;
  text-align: center;
}

.location-contact:hover,
.tracking-contact:hover,
.cart-contact:hover {
  background-color: #e2484c;
}

.smem-contact {
  width: 60px;
  height: 42px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e2484c;
  border-radius: 8px;
  padding: 4px;
  color: white;
}

.navbar-container-fluid-mobile {
  display: none;
}

@media only screen and (max-width: 767px) {
  .navbar-container-fluid {
    display: none;
  }

  .navbar-container-fluid-mobile {
    display: block;
    width: 100%;
    height: 500px;
    position: relative;
  }

  .navbar-background-mobile {
    width: 100%;
    height: 70%;
    background: linear-gradient(180deg, #e0052b, #cc5d6f);
    border-radius: 0 0 50px 50px;
    position: absolute;
    z-index: -1;
  }

  .navbar-container-mobile {
    width: 96%;
    margin: auto;
    padding-top: 10px;
    height: 130px;
    display: flex;
    justify-content: space-between;
    border:1px solid blue;
  }

  .menu-logo {
    width: 50%;
    object-fit: cover;
    height: 60px;
  }

  .location-options {
    position: relative;
    z-index: 2;
  }

  .location-current {
    width: 80%;
    height: 60px;
    font-size: 10px;
  }

  .location-option {
    top: 60px;
    background-color: white;
  }

  .navbar-option-mobile {
    height: 60px;
    display: flex;
    justify-content: space-between;
  }

  .cart-contact {
    padding: 5px 0;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e2484c;
  }

  .cart-contact > img {
    margin-top: 10px;
  }

  .cart-quantity {
    position: absolute;
    margin: 0;
    width: 24px;
    height: 24px;
    text-align: center;
  }

  .cart-contact > p {
    margin: 0 0 0 20%;
  }

  .search-container {
    position: absolute;
    top: 90px;
    width: 96%;
    z-index: 1;
  }

  .search-input {
    width: 100%;
    height: 40px;
    margin-left: -18px;
  }

  .search-icon {
    left: 8px;
  }
}
</style>
