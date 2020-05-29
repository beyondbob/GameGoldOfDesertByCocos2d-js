
var resultLayer = cc.Layer.extend({
    size:null,
    ctor:function(){
        this._super();
        this.size = cc.winSize;
		var day_num =Global.getInstance().Day_num;
		var group_name=Global.getInstance().group_name;
		var team_name = Global.getInstance().team_name;
		var user_chracter = Global.getInstance().user_chracter;
		

		//背景图片
        var bgSprite = new cc.Sprite(res.desert_0_jpg);
        bgSprite.attr({
            x:this.size.width/2,
            y:this.size.height/2,
        });
        this.addChild(bgSprite);
		
		//标题
		var status_label = new cc.LabelTTF("队伍状况一览", "Arial", 40);
		status_label.attr({
			
			x:this.size.width/2,
			y:this.size.height/2+280,

		});
		status_label.setColor(cc.color(255,255,0));
		this.addChild(status_label, 1);	
		//队伍名
		group_name_label = new cc.LabelTTF("队伍", "Arial", 30);
		group_name_label.attr({
								
			x:this.size.width/2-125,
			y:this.size.height/2+230,

		});
		group_name_label.setColor(cc.color(255,255,0));
		this.addChild(group_name_label, 1);
		//总价值
		group_money_label = new cc.LabelTTF("总价值", "Arial", 30);
		group_money_label.attr({
								
			x:this.size.width/2,
			y:this.size.height/2+230,

		});
		group_money_label.setColor(cc.color(255,255,0));
		this.addChild(group_money_label, 1);
		//状态
		group_gold_label = new cc.LabelTTF("状态", "Arial", 30);
		group_gold_label.attr({
								
			x:this.size.width/2+125,
			y:this.size.height/2+230,

		});
		group_gold_label.setColor(cc.color(255,255,0));
		this.addChild(group_gold_label, 1);
		//数据
		Day_switch_data.getInstance().get_result(this,0);

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
	
});
     

var resultScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new resultLayer();
      this.addChild(layer);
    },
})

