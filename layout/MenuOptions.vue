<template>
  <div>
    <ul class="menu-options-container">
      <MenuOptionTag
        v-for="(option, idx) in options"
        :key="idx"
        :idx="idx"
        :type="option"
      />
    </ul>
    <ul></ul>
  </div>
</template>

<script>
import MenuOptionTag from '../components/MenuOptionTag.vue'
import options from '../assets/options'
export default {
  name: 'MenuOptions',
  components: {
    MenuOptionTag,
  },
  data() {
    return {
      options
    }
  },
}
</script>

<style>
.menu-options-container {
  width: 205px;
  height: 372px;
  box-shadow: 1px 1px 10px gray;
  border-radius: 10px;
  gap: 0 2px;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .menu-options-container {
    display: none;
  }
}
</style>
