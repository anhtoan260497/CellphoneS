const options = [
  {
    title: 'Điện Thoại',
    img: 'phone.svg',
    url: 'https://cellphones.com.vn/mobile.html',
    children: [
      {
        title: 'Apple',
        url: 'https://cellphones.com.vn/mobile/apple.html',
        children: [
          'iPhone 13 Series',
          'iPhone 12 Series',
          'iPhone 11 Series',
          'iPhone X | XR',
        ],
      },
      {
        title: 'Samsung',
        url: 'https://cellphones.com.vn/mobile/samsung.html',
      },
      {
        title: 'Xiaomi',
        url: 'https://cellphones.com.vn/mobile/xiaomi.html',
      },
      {
        title: 'OPPO',
        url: 'https://cellphones.com.vn/mobile/oppo.html',
      },
      {
        title: 'Nokia',
        url: 'https://cellphones.com.vn/mobile/nokia.html',
      },
      {
        title: 'Realme',
        url: 'https://cellphones.com.vn/mobile/realme.html',
      },
      {
        title: 'Vsmart',
        url: 'https://cellphones.com.vn/mobile/vsmart.html',
      },
      {
        title: 'Vivo',
        url: 'https://cellphones.com.vn/mobile/vivo.html',
      },
      {
        title: 'OnePlus',
        url: 'https://cellphones.com.vn/mobile/oneplus.html',
      },
      {
        title: 'Nubia',
        url: 'https://cellphones.com.vn/mobile/nubia.html',
      },
      {
        title: 'Điện thoại phổ thông',
        url: 'https://cellphones.com.vn/mobile/dien-thoai-pho-thong.html',
      },
    ],
  },
  {
    title: 'Laptop',
    img: 'laptop.svg',
    url: 'https://cellphones.com.vn/laptop.html',
    children: [
      {
        title: 'Mac',
        url: 'https://cellphones.com.vn/laptop/mac.html',
        children: ['MacBook Pro', 'MacBook Air', 'Mac Mini', 'iMac'],
      },
      {
        title: 'HP',
        url: 'https://cellphones.com.vn/laptop/hp.html',
      },
      {
        title: 'Dell',
        url: 'https://cellphones.com.vn/laptop/dell.html',
      },
      {
        title: 'Lenovo',
        url: 'https://cellphones.com.vn/laptop/lenovo.html',
      },
      {
        title: 'Microsoft Surface',
        url: 'https://cellphones.com.vn/laptop/surface.html',
      },
      {
        title: 'ASUS',
        url: 'https://cellphones.com.vn/laptop/asus.html',
      },
      {
        title: 'Acer',
        url: 'https://cellphones.com.vn/laptop/acer.html',
      },
      {
        title: 'LG',
        url: 'https://cellphones.com.vn/laptop/lg.html',
      },
      {
        title: 'Huawei',
        url: 'https://cellphones.com.vn/laptop/huawei.html',
      },
      {
        title: 'MSI',
        url: 'https://cellphones.com.vn/laptop/msi.html',
      },
      {
        title: 'Avita',
        url: 'https://cellphones.com.vn/laptop/avita.html',
      },
      {
        title: 'Gigabyte',
        url: 'https://cellphones.com.vn/laptop/gigabyte.html',
      },
      {
        title: 'Fujitsu',
        url: 'https://cellphones.com.vn/laptop/fujitsu.html',
      },
      {
        title: 'Máy tính để bàn',
        url: 'https://cellphones.com.vn/may-tinh-de-ban.html',
      },
      {
        title: 'Màn hình',
        url: 'https://cellphones.com.vn/man-hinh.html',
      },
      {
        title: 'Máy in',
        url: 'https://cellphones.com.vn/may-in.html',
      },
      {
        title: 'Linh kiện máy tính',
        url: 'https://cellphones.com.vn/linh-kien.html',
      },
    ],
  },
  {
    title: 'Tablet',
    img: 'tablet.svg',
    url: 'https://cellphones.com.vn/tablet.html',
    children: [
      {
        title: 'iPad Pro',
        url: 'https://cellphones.com.vn/tablet/ipad-pro.html',
      },
      {
        title: 'iPad 10.2',
        url: 'https://cellphones.com.vn/tablet/ipad-10-2.html',
      },
      {
        title: 'iPad Air',
        url: 'https://cellphones.com.vn/tablet/ipad-air.html',
      },
      {
        title: 'iPad Mini',
        url: 'https://cellphones.com.vn/tablet/ipad-mini.html',
      },
      {
        title: 'Samsung',
        url: 'https://cellphones.com.vn/tablet/samsung.html',
      },
      {
        title: 'Lenovo',
        url: 'https://cellphones.com.vn/tablet/lenovo.html',
      },
      {
        title: 'Xiaomi',
        url: 'https://cellphones.com.vn/tablet/xiaomi.html',
      },
      {
        title: 'Kindle',
        url: 'https://cellphones.com.vn/tablet/kindle.html',
      },
      {
        title: 'Máy đọc sách',
        url: 'https://cellphones.com.vn/tablet/may-doc-sach.html',
      },
      {
        title: 'Arcatel',
        url: 'https://cellphones.com.vn/tablet/kindle.html',
      },
    ],
  },
  {
    title: 'Âm thanh',
    img: 'earphone.svg',
    url: 'https://cellphones.com.vn/thiet-bi-am-thanh.html',
    children: [
      {
        title: 'Loa',
        url: 'https://cellphones.com.vn/thiet-bi-am-thanh/loa.html',
        children: ['Loa bluetooth', 'Loa Karaoke', 'Loa TV | Soundbar'],
      },
      {
        title: 'Tai nghe',
        url: 'https://cellphones.com.vn/thiet-bi-am-thanh/tai-nghe.html',
        children: [
          'Tai nghe bluetooth',
          'Tai nghe nhét tai',
          'Tai nghe chụp tai',
        ],
      },
      {
        title: 'Phụ kiện',
        url: 'https://cellphones.com.vn/thiet-bi-am-thanh/phu-kien.html',
      },
      {
        title: 'Phòng thu âm',
        url: 'https://cellphones.com.vn/thiet-bi-am-thanh/phong-thu-am.html',
      },
    ],
  },
  {
    title: 'Đồng hồ',
    img: 'watch.svg',
    url: 'https://cellphones.com.vn/do-choi-cong-nghe.html',
    children: [
      {
        title: 'Apple Watch',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/apple-watch.html',
        children: ['Series 6', 'SE', 'Series 7'],
      },
      {
        title: 'Samsung',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/samsung.html',
      },
      {
        title: 'Xiaomi',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/xiaomi.html',
      },
      {
        title: 'Garmin',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/garmin.html',
      },
      {
        title: 'Amazfit',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/amazfit.html',
      },
      {
        title: 'Huawei',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/huawei.html',
      },
      {
        title: 'OPPO',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/oppo.html',
      },
      {
        title: 'Vòng tay thông minh',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/vong-tay-thong-minh.html',
      },
      {
        title: 'Đồng hồ định vị trẻ em',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/dong-ho-dinh-vi-tre-em.html',
      },
      {
        title: 'Cronos',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/coros.html',
      },
    ],
  },
  {
    title: 'Nhà thông minh',
    img: 'smarthome.svg',
    url: 'https://cellphones.com.vn/nha-thong-minh.html',
    children: [
      {
        title: 'Máy hút bụi',
        url: 'https://cellphones.com.vn/nha-thong-minh/may-hut-bui.html',
      },
      {
        title: 'Khoá thông minh',
        url: 'https://cellphones.com.vn/nha-thong-minh/khoa-thong-minh.html',
      },
      {
        title: 'Máy lọc không khí',
        url: 'https://cellphones.com.vn/nha-thong-minh/may-loc-khong-khi.html',
      },
      {
        title: 'Đèn thông minh',
        url: 'https://cellphones.com.vn/nha-thong-minh/den-thong-minh.html',
      },
      {
        title: 'TV Box',
        url: 'https://cellphones.com.vn/nha-thong-minh/tv-box.html',
      },
      {
        title: 'Cân sức khoẻ',
        url: 'https://cellphones.com.vn/nha-thong-minh/can-dien-tu.html',
      },
      {
        title: 'Thiết bị y tế',
        url: 'https://cellphones.com.vn/nha-thong-minh/thiet-bi-y-te.html',
      },
      {
        title: 'Máy chạy bộ',
        url: 'https://cellphones.com.vn/nha-thong-minh/may-chay-bo.html',
      },
      {
        title: 'Cảm biến thông minh',
        url: 'https://cellphones.com.vn/nha-thong-minh/cam-bien.html',
      },
      {
        title: 'Wifi Mesh',
        url: 'https://cellphones.com.vn/phu-kien/thiet-bi-mang/thiet-bi-phat-song-wifi/wifi-mesh.html',
      },
      {
        title: 'Modem Router',
        url: 'https://cellphones.com.vn/phu-kien/thiet-bi-mang/thiet-bi-phat-song-wifi/router-wifi.html',
      },
      {
        title: 'Camera an ninh',
        url: 'https://cellphones.com.vn/phu-kien/camera/an-ninh.html',
      },
    ],
  },
  {
    title: 'Phụ kiện',
    img: 'cable.svg',
    url: 'https://cellphones.com.vn/phu-kien.html',
    children: [
      {
        title: 'Phụ kiện Apple',
        url: 'https://cellphones.com.vn/phu-kien/apple.html',
      },
      {
        title: 'Dán điện thoại | Laptop',
        url: 'https://cellphones.com.vn/phu-kien/dan-man-hinh.html',
      },
      {
        title: 'Ốp lưng | Bao da | Ốp AirPods',
        url: 'https://cellphones.com.vn/phu-kien/bao-da-op-lung.html',
      },
      {
        title: 'Dây đeo đồng hồ',
        url: 'https://cellphones.com.vn/do-choi-cong-nghe/day-deo-dong-ho.html',
      },
      {
        title: 'Balo | Túi xách',
        url: 'https://cellphones.com.vn/phu-kien/balo-tui-chong-soc-laptop.html',
      },
      {
        title: 'Cáp sạc',
        url: 'https://cellphones.com.vn/phu-kien/sac-dien-thoai.html',
      },
      {
        title: 'Pin dự phòng',
        url: 'https://cellphones.com.vn/phu-kien/pin-du-phong.html',
      },
      {
        title: 'Thiết bị mạng',
        url: 'https://cellphones.com.vn/phu-kien/thiet-bi-mang.html',
      },
      {
        title: 'Camera',
        url: 'https://cellphones.com.vn/phu-kien/camera.html',
        children: ['Camera hành trình', 'Camera an ninh', 'Gimbal'],
      },
      {
        title: 'Chuột | Bàn phím',
        url: 'https://cellphones.com.vn/phu-kien/chuot-ban-phim-may-tinh.html',
      },
      {
        title: 'Phụ kiện tiện ích',
        url: 'https://cellphones.com.vn/phu-kien/phu-kien-tien-ich.html',
      },
      {
        title: 'Thẻ nhớ,USB',
        url: 'https://cellphones.com.vn/phu-kien/the-nho-usb-otg.html',
      },
      {
        title: 'Phụ kiện máy tính | Laptop',
        url: 'https://cellphones.com.vn/phu-kien/may-tinh-laptop.html',
      },
      {
        title: 'Phụ kiện cho bé',
        url: 'https://cellphones.com.vn/phu-kien/cho-be.html',
      },
    ],
  },
  {
    title: 'Thu cũ',
    img: 'tradeup.svg',
    url: 'https://cellphones.com.vn/thu-cu-doi-moi',
    children: [
      { title: 'CellphoneS', url: 'https://cellphones.com.vn/thu-cu-doi-moi' },
      { title: 'SKTel', url: 'https://cellphones.com.vn/thu-cu-doi-moi-sktel' },
      {
        title: 'Compasia',
        url: 'https://cellphones.com.vn/thu-cu-doi-moi-compasia',
      },
    ],
  },
  {
    title: 'Hàng cũ',
    img: 'exchange.svg',
    url: 'https://cellphones.com.vn/hang-cu.html',
    children: [
      {
        title: 'Điện thoại',
        url: 'https://cellphones.com.vn/hang-cu/dien-thoai.html',
      },
      {
        title: 'Máy tính bảng',
        url: 'https://cellphones.com.vn/hang-cu/may-tinh-bang.html',
      },
      { title: 'Mac', url: 'https://cellphones.com.vn/hang-cu/mac.html' },
      { title: 'Laptop', url: 'https://cellphones.com.vn/hang-cu/laptop.html' },
      {
        title: 'Loa - Tai nghe',
        url: 'https://cellphones.com.vn/hang-cu/loa-tai-nghe.html',
      },
      {
        title: 'Phụ kiện',
        url: 'https://cellphones.com.vn/hang-cu/phu-kien.html',
      },
      {
        title: 'Đồng hồ thông minh',
        url: 'https://cellphones.com.vn/hang-cu/dong-ho-thong-minh.html',
      },
      {
        title: 'Nhà thông minh',
        url: 'https://cellphones.com.vn/hang-cu/nha-thong-minh.html',
      },
    ],
  },
  {
    title: 'Dịch vụ SIM',
    img: 'sim.svg',
    url: 'https://cellphones.com.vn/sim-3g-4g-nghe-goi.html',
  },
  {
    title: 'Tin công nghệ',
    img: 'news.svg',
    url: 'https://cellphones.com.vn/sforum/',
  },
  {
    title: 'Khuyến mãi',
    img: 'promotion.svg',
    url: 'https://cellphones.com.vn/danh-sach-khuyen-mai',
  },
]
 export default options