
var outshopLayer = cc.Layer.extend({
    size:null,
    ctor:function(){
        this._super();
        this.size = cc.director.getWinSize();
		
		var group_name = Global.getInstance().group_name;
		var day_num = Global.getInstance().Day_num;
		
		
		//背景图片
        var bgSprite = new cc.Sprite(res.desert_0_jpg);
        bgSprite.attr({
            x:this.size.width/2,
            y:this.size.height/2,
        });
        this.addChild(bgSprite);

		//显示天数
		var day_label = new cc.LabelTTF("当前第"+day_num+"天", "Arial", 30);
			day_label.attr({
				x:this.size.width/2,
				y:this.size.height/2,
			});
			day_label.setColor(cc.color(0,0,0));
			this.addChild(day_label, 1);
			
		//进入商店按钮
		var entershopItem = new cc.MenuItemImage(
			res.enter_shop1_png,
			res.enter_shop2_png,
			function(){
				Day_switch_data.getInstance().allow_enter(group_name,0);
			},this
		);
		entershopItem.attr({
			x:this.size.width/2,
			y:this.size.height/2,
			anchorX :0.5,
			anchorY :0.5
		});
		var menu = new cc.Menu(entershopItem);
		menu.x=0;
		menu.y=-200;
		this.addChild(menu,1);
		//退出按钮
		var endItem = new cc.MenuItemImage(
			res.exit_btn1_png,
			res.exit_btn2_png,
			function(){
				cc.director.end();
			},this
		);
		endItem.attr({
			x:this.size.width/2,
			y:this.size.height/2,
			anchorX :0.5,
			anchorY :0.5
		});
		var menu2 = new cc.Menu(endItem);
		menu2.x=0;
		menu2.y=-280;
		this.addChild(menu2,1);
	
		
		return true;
	}
});
     

var outshopScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new outshopLayer();
      this.addChild(layer);
    },
})

