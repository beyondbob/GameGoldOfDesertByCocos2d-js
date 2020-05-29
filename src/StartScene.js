
var StartLayer = cc.Layer.extend({
    size:null,
    ctor:function(){
        this._super();
        this.size = cc.director.getWinSize();
		
		var user_chracter = Global.getInstance().user_chracter;
		var day_num = Global.getInstance().Day_num;
		cc.log(user_chracter+','+day_num);
		//背景图片
        var bgSprite = new cc.Sprite(res.desert_0_jpg);
        bgSprite.attr({
            x:this.size.width/2,
            y:this.size.height/2,
        });
        this.addChild(bgSprite);
		
		//显示天数
		var day_label = new cc.LabelTTF("当前第"+day_num+"天", "Arial", 25);
			day_label.attr({
				x:this.size.width/2,
				y:this.size.height/2-100,
			});
			day_label.setColor(cc.color(0,0,0));
			this.addChild(day_label, 1);
		
		//标题1
		var StartLabel = new cc.Sprite(res.desert_menu_label_png);			
        StartLabel.attr({
			x:this.size.width/2,
			y:this.size.height/2 + 200,
		});		
		this.addChild(StartLabel);

		
		//开始按钮
		var startItem = new cc.MenuItemImage(
			res.desert_menu_1_png,
			res.desert_menu_2_png,
			function(){
				var team_name = Global.getInstance().team_name;
				Day_switch_data.getInstance().send(team_name,day_num,user_chracter,0);		
			},this
		);
		startItem.attr({
			x:this.size.width/2,
			y:this.size.height/2,
			anchorX :0.5,
			anchorY :0.5
		});
		var menu = new cc.Menu(startItem);
		menu.x=0;
		menu.y=-200;
		this.addChild(menu,1);
		
		return true;
	}
});
     

var StartScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new StartLayer();
      this.addChild(layer);
    },
})

