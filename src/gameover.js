var overLayer = cc.Layer.extend({
	size:null,
	ctor:function(){
		this._super();

		this.size = cc.winSize;

		
		//背景图片
        var bgSprite = new cc.Sprite(res.desert_0_jpg);
        bgSprite.attr({
            x:this.size.width/2,
            y:this.size.height/2,
        });
        this.addChild(bgSprite,0);
		
		var over_label = new cc.LabelTTF("请等待游戏结束！", "Arial", 30);
			over_label.attr({
				x:this.size.width/2,
				y:this.size.height/2,
			});
			over_label.setColor(cc.color(0,0,0));
			this.addChild(over_label, 1);
		
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
			anchorY :0.5,
		});
		var menu2 = new cc.Menu(endItem);
		menu2.x=0;
		menu2.y=-280;
		menu2.tag =998;
		cc.log(menu2);
		this.addChild(menu2,1);
				
		return true;

	}
	
})


var overScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new overLayer();
      this.addChild(layer);
    },
})