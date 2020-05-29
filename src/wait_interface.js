var wait_InterfaceLayer = cc.Layer.extend({
	size:null,
	ctor:function(){
		this._super();

		this.size = cc.winSize;
		var user_chracter = Global.getInstance().user_chracter;
		
		//背景图片
        var bgSprite = new cc.Sprite(res.desert_0_jpg);
        bgSprite.attr({
            x:this.size.width/2,
            y:this.size.height/2,
        });
        this.addChild(bgSprite,0);
		
		//更新天数
		var team_name=Global.getInstance().team_name ;
		var day_num = Global.getInstance().Day_num;
		var day_label = new cc.LabelTTF("当前第"+day_num+"天", "Arial", 25);
			day_label.attr({
				x:this.size.width/2,
				y:this.size.height/2,
			});
			day_label.setColor(cc.color(0,0,0));
			this.addChild(day_label, 1);
		
			//按钮
			var nextItem = new cc.MenuItemImage(
				res.next_button1_png,
				res.next_button2_png,
				function(){
					Day_switch_data.getInstance().send(team_name,day_num,user_chracter,0);
				},this
			);
			nextItem.attr({
				x:this.size.width/2,
				y:this.size.height/2-50,
				anchorX :0.5,
				anchorY :0.5
			});
			var nextmenu = new cc.Menu(nextItem);
			nextmenu.x=0;
			nextmenu.y=-200;
			this.addChild(nextmenu,1);
		

				
		return true;

	}
	
})


var wait_InterfaceScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new wait_InterfaceLayer();
      this.addChild(layer);
    },
})