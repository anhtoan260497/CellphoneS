<template>
  <div
    @mouseenter="handleOnFirstChild(idx)"
    @mouseleave="handleLeaveFirstChild()"
  >
    <li class="menu-option">
      <div class="option-description">
        <img :src="type.img" />
        <p>{{ type.title }}</p>
      </div>
      <img
        v-show="type.children"
        style="width: 8px"
        src="../static/MenuOptionsIcon/angle.svg"
      />
    </li>
    <ul
      v-show="isHoverFirstChild && type.children"
      class="menu-first-child-options"
      @mouseenter="isHoverSecondChild = true"
      @mouseleave="isHoverSecondChild = false"
    >
      <li
        v-for="(children, index) in type.children"
        :key="index"
        class="menu-option"
      >
        <!-- lặp qua từng phần tử của type.children -->
        <div class="option-description flex">
          <p>{{ children.title }}</p>
          <img
            v-show="children.children"
            style="width: 8px"
            src="../static/MenuOptionsIcon/angle.svg"
          />
          <!-- nếu có thêm mảng children thì tiếp tục hiển thị icon -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuOptionTag',
  props: {
    type: {
      type: Object,
      default() {
        return {}
      },
    },
    idx: {
      type: Number,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      isHoverFirstChild: false,
      isHoverSecondChild: false,
      isHoverIdx: null,
    }
  },
  watch: {},
  methods: {
    handleOnFirstChild(key) {
      this.isHoverFirstChild = false
      this.isHoverFirstChild = true
    },

    handleLeaveFirstChild() {
      if (!this.isHoverSecondChild) this.isHoverFirstChild = false
    },
  },
}
</script>

<style>
.menu-option {
  width: 100%;
  height: 31px;
  display: flex;
  cursor: pointer;
  padding: 0 8px;
  position: relative;
  z-index: 1;
}

.menu-option:hover {
  background-color: #e2dbdb;
}

.option-description {
  width: 90%;
  height: 31px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  font-family: sans-serif;
}

.menu-first-child-options,
.menu-second-child-options {
  width: 205px;
  position: absolute;
  left: 205px;
  z-index: 10;
  box-shadow: 1px 1px 10px gray;
  border-radius: 10px;
  gap: 0 2px;
  overflow: hidden;
  background: white;
  top: 80px;
}

.menu-second-child-options {
  left: 410px;
}

.flex {
  display: flex;
  justify-content: space-between;
}
</style>
