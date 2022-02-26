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
export default {
  name: 'MenuOptions',
  components: {
    MenuOptionTag,
  },
  data() {
    return {
      options: [
        {
          title: 'Điện Thoại',
          img: 'phone.svg',
          children: [
            {
              title: 'Apple',
              children: [
                'iPhone 13 Series',
                'iPhone 12 Series',
                'iPhone 11 Series',
                'iPhone X | XR',
              ],
            },
            {
              title: 'Samsung',
            },
            {
              title: 'Xiaomi',
            },
            {
              title: 'OPPO',
            },
            {
              title: 'Nokia',
            },
            {
              title: 'Realme',
            },
            {
              title: 'Vsmart',
            },
            {
              title: 'Vivo',
            },
            {
              title: 'OnePlus',
            },
            {
              title: 'Nubia',
            },
            {
              title: 'Điện thoại phổ thông',
            },
          ],
        },
        {
          title: 'Laptop',
          img: 'laptop.svg',
          children: [
            {
              title: 'Mac',
              children: ['MacBook Pro', 'MacBook Air', 'Mac Mini', 'iMac'],
            },
            {
              title: 'HP',
            },
            {
              title: 'Dell',
            },
            {
              title: 'Lenovo',
            },
            {
              title: 'Microsoft Surface',
            },
            {
              title: 'ASUS',
            },
            {
              title: 'Acer',
            },
            {
              title: 'LG',
            },
            {
              title: 'Huawei',
            },
            {
              title: 'MSI',
            },
            {
              title: 'Avita',
            },
            {
              title: 'Gigabyte',
            },
            {
              title: 'Fujitsu',
            },
            {
              title: 'Máy tính để bàn',
            },
            {
              title: 'Màn hình',
            },
            {
              title: 'Máy in',
            },
            {
              title: 'Linh kiện máy tính',
            },
          ],
        },
        {
          title: 'Tablet',
          img: 'tablet.svg',
          children: [
            {
              title: 'iPad Pro',
            },
            {
              title: 'iPad 10.2',
            },
            {
              title: 'iPad Air',
            },
            {
              title: 'iPad Mini',
            },
            {
              title: 'Samsung',
            },
            {
              title: 'Lenovo',
            },
            {
              title: 'Xiaomi',
            },
            {
              title: 'Kindle',
            },
            {
              title: 'Máy đọc sách',
            },
            {
              title: 'Arcatel',
            },
          ],
        },
        {
          title: 'Âm thanh',
          img: 'earphone.svg',
          children: [
            {
              title: 'Loa',
              children: ['Loa bluetooth', 'Loa Karaoke', 'Loa TV | Soundbar'],
            },
            {
              title: 'Tai nghe',
              children: [
                'Tai nghe bluetooth',
                'Tai nghe nhét tai',
                'Tai nghe chụp tai',
              ],
            },
            {
              title: 'Phụ kiện',
            },
            {
              title: 'Phòng thu âm',
            },
          ],
        },
        {
          title: 'Đồng hồ',
          img: 'watch.svg',
          children: [
            { title: 'Apple Watch', children: ['Series 6', 'SE', 'Series 7'] },
            { title: 'Samsung' },
            { title: 'Xiaomi' },
            { title: 'Garmin' },
            { title: 'Amazfit' },
            { title: 'Huawei' },
            { title: 'OPPO' },
            { title: 'Vòng tay thông minh' },
            { title: 'Đồng hồ định vị trẻ em' },
            { title: 'Cronos' },
          ],
        },
        {
          title: 'Nhà thông minh',
          img: 'smarthome.svg',
          children: [
            { title: 'Máy hút bụi' },
            { title: 'Khoá thông minh' },
            { title: 'Máy lọc không khí' },
            { title: 'Đèn thông minh' },
            { title: 'TV Box' },
            { title: 'Cân sức khoẻ' },
            { title: 'Thiết bị y tế' },
            { title: 'Máy chạy bộ' },
            { title: 'Cảm biến thông minh' },
            { title: 'Wifi Mesh' },
            { title: 'Modem Router' },
            { title: 'Camera an ninh' },
          ],
        },
        {
          title: 'Phụ kiện',
          img: 'cable.svg',
          children: [
            {
              title: 'Phụ kiện Apple',
            },
            {
              title: 'Dán điện thoại | Laptop',
            },
            {
              title: 'Ốp lưng | Bao da | Ốp AirPods',
            },
            {
              title: 'Dây đeo đồng hồ',
            },
            {
              title: 'Balo | Túi xách',
            },
            {
              title: 'Cáp sạc',
            },
            {
              title: 'Pin dự phòng',
            },
            {
              title: 'Thiết bị mạng',
            },
            {
              title: 'Camera',
              children: ['Camera hành trình', 'Camera an ninh', 'Gimbal'],
            },
            {
              title: 'Chuột | Bàn phím',
            },
            {
              title: 'Phụ kiện tiện ích',
            },
            {
              title: 'Thẻ nhớ,USB',
            },
            {
              title: 'Phụ kiện máy tính | Laptop',
            },
            {
              title: 'Phụ kiện cho bé',
            },
          ],
        },
        {
          title: 'Thu cũ',
          img: 'tradeup.svg',
          children: [
            { title: 'CellphoneS' },
            { title: 'SKTel' },
            { title: 'CellphoneS' },
          ],
        },
        {
          title: 'Hàng cũ',
          img: 'exchange.svg',
          children: [
            { title: 'Điện thoại' },
            { title: 'Máy tính bảng' },
            { title: 'Mac' },
            { title: 'Laptop' },
            { title: 'Loa - Tai nghe' },
            { title: 'Phụ kiện' },
            { title: 'Đồng hồ thông minh' },
            { title: 'Nhà thông minh' },
          ],
        },
        {
          title: 'Dịch vụ SIM',
          img: 'sim.svg',
        },
        {
          title: 'Tin công nghệ',
          img: 'news.svg',
        },
        {
          title: 'Khuyến mãi',
          img: 'promotion.svg',
        },
      ],
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
