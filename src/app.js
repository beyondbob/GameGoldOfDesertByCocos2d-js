var appLayer = cc.Layer.extend({
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
		
		//标题
		var loginlabel = new cc.Sprite(res.desert_menu_label_png);
		loginlabel.attr({
			x:this.size.width/2,
            y:this.size.height/2+200,
        });
        this.addChild(loginlabel,1);

		//按钮
		var startItem = new cc.MenuItemImage(
			res.desert_menu_1_png,
			res.desert_menu_2_png,
			function(){
				cc.director.runScene(new cc.TransitionFade(1,new LoginScene()));
			},this
		);
		startItem.attr({
			x:this.size.width/2,
			y:this.size.height/2-50,
			anchorX :0.5,
			anchorY :0.5
		});
		var startmenu = new cc.Menu(startItem);
		startmenu.x=0;
		startmenu.y=-150;
		this.addChild(startmenu,1);
		
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
	
})


var appScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new appLayer();
      this.addChild(layer);
    },
})