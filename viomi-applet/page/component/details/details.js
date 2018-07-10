// page/component/details/details.js
var app =getApp();

Page({
  data:{
    titles: "",
    thumb:'',
    prodetail:'',
    stock:'',
    price:'',
    params:'',
    aftersale:'',
     curIndex:0,
    stock:'',
     price:'',
     num:1,
     totalNum:0,
     id:''
   
  },
 onLoad:function(options){
   console.log(options)
   this.setData({
     prodetail:options.prodetail,
     titles:options.titles,
     thumb:options.thumb,
     stock:options.stock,
     params:options.params,
     price:options.price,
     aftersale:options.aftersale,
     id:options.id
  
   })
 },
 go_index: function (e) {
   //获取身份id 保存到全局里
   var titles = e.currentTarget.titles;
   app.globalData.titles = titles       //把本页面需要传递的参数保存在全局上
   wx.switchTab({
     url: '/page/component/cart/cart',
   })
 },
  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

    // wx.request({
    //   url: 'https://yunmi-official-test.mi-ae.net/ceshi111.txt', //仅为示例，并非真实的接口地址 
    //   method: 'post',
    //   data: {
    //     x: 'gaoyuan',
    //     y: 'handsome'
    //   },
    //   header: {
    //     "Content-Type": "application/ x - www - form - urlencoded" //post请求设置
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})