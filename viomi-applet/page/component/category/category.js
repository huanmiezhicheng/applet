Page({
    data: {
        category: [
            {name:'智能冰箱',id:'fridge'},
            {name:'智能厨电',id:'kitchen'},
            {name:'净水设备',id:'water'},
            {name:'厨房小电',id:'kitchensmall'},
            {name:'超能滤芯',id:'lv'},
            {name:'其他',id:'else'}
        ],
        detail:[],
        curIndex: 0,
        isScroll: false,
        toView: 'fridge'
    },
    onReady(){
        var self = this;
        wx.request({
          url:'https://yunmi-official-test.mi-ae.net/ceshi12.txt',
            success(res){
                self.setData({
                    detail : res.data
                })
            }
        });
        
    },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})