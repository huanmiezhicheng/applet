Page({
  data: {
    imgUrls: [
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg',
      '/image/b4.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 800,
    src: 'https://yunmi-official-test.mi-ae.net/washer.mp4',   
    danmuList: [
      {
        text: '告别传统家电 就选云米全屋互联网家电',
        color: '#ff0000',
        time: 1
      },
      {
        text: '只为一滴天然好水',
        color: '#ff00ff',
        time: 3
      },
      {
        text: '这个洗衣机太棒了',
        color: '#00a4b4',
        time: 10
      }
      ]
  },
   bindplay: function () {//开始播放按钮或者继续播放函数
    console.log("开始播放")
  },
  bindpause: function () {//暂停播放按钮函数
    console.log("停止播放")
  },
  bindend: function () {//播放结束按钮函数
    console.log("播放结束")
  },
  bindtimeupdate: function (res) {//播放中函数，查看当前播放时间等
    console.log(res)//查看正在播放相关变量
    console.log("播放到第" + res.detail.currentTime + "秒")//查看正在播放时间，以秒为单位 
  }
})