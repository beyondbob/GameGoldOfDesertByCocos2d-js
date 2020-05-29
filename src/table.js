
var tableLayer = cc.Layer.extend({
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
		
		//状态
		var status_label = new cc.LabelTTF("昨天存活队伍状态", "Arial", 40);
		status_label.attr({
			
			x:this.size.width/2,
			y:this.size.height/2+280,

		});
		status_label.setColor(cc.color(255,255,0));
		this.addChild(status_label, 1);	
		//队伍名
		group_name_label = new cc.LabelTTF("队伍", "Arial", 30);
		group_name_label.attr({
								
			x:this.size.width/2-150,
			y:this.size.height/2+230,

		});
		group_name_label.setColor(cc.color(255,255,0));
		this.addChild(group_name_label, 1);
		//金币
		group_money_label = new cc.LabelTTF("金币", "Arial", 30);
		group_money_label.attr({
								
			x:this.size.width/2-50,
			y:this.size.height/2+230,

		});
		group_money_label.setColor(cc.color(255,255,0));
		this.addChild(group_money_label, 1);
		//金子
		group_gold_label = new cc.LabelTTF("金子", "Arial", 30);
		group_gold_label.attr({
								
			x:this.size.width/2+50,
			y:this.size.height/2+230,

		});
		group_gold_label.setColor(cc.color(255,255,0));
		this.addChild(group_gold_label, 1);
		//区域
		group_district_label = new cc.LabelTTF("区域", "Arial", 30);
		group_district_label.attr({
								
			x:this.size.width/2+150,
			y:this.size.height/2+230,

		});
		group_district_label.setColor(cc.color(255,255,0));
		this.addChild(group_district_label, 1);
		//数据
		Day_switch_data.getInstance().get_table(this,0);

		//按钮
		var nextItem = new cc.MenuItemImage(
			res.next_button1_png,
			res.next_button2_png,
			function(){
				Day_switch_data.getInstance().send(team_name,day_num,user_chracter,1);
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
	
});
     

var tableScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new tableLayer();
      this.addChild(layer);
    },
})

