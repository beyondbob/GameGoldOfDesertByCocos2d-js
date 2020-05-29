
var jumpLayer4 = cc.Layer.extend({
    size:null,
    ctor:function(){
        this._super();
        this.size = cc.winSize;
		var day_num =Global.getInstance().Day_num;
		var group_name=Global.getInstance().group_name;
		var team_name = Global.getInstance().team_name;
		var user_chracter = Global.getInstance().user_chracter;
		Global.getInstance().nowscene = new jumpScene4();
		
		//背景图片
        var bgSprite = new cc.Sprite(res.Scene4_jpg);	
        bgSprite.attr({
            x:this.size.width/2,
            y:this.size.height/2,
			opacity:120		
        });
        this.addChild(bgSprite,0);
		
		//等待图片
        var waitSprite = new cc.Sprite(res.wait_jpg);	
        waitSprite.attr({
            x:this.size.width/2,
            y:this.size.height/2,
        });
        this.addChild(waitSprite,1);
		//事件
		Scene_event.getInstance().set_event(this,7,day_num,group_name);
		//状态栏
        var topSprite = new cc.Sprite(res.top_png);	
        topSprite.attr({
            x:this.size.width/2,
            y:this.size.height-5,
			anchorY :1,
			opacity:120
        });
		this.addChild(topSprite,0);	
		//当前状态
		var status_label = new cc.LabelTTF("当前状态：", "Arial", 25);
			status_label.attr({
				x:this.size.width/2-50,
				y:this.size.height/2+150,
			});
		status_label.setColor(cc.color(0,0,0));
		this.addChild(status_label, 1);	
		//数据
		Day_switch_data.getInstance().lost_status(group_name,this,4);		
		//结束决策
		var nextItem = new cc.MenuItemImage(
				res.over_button1_png,
				res.over_button2_png,
				function(){
					Text = 'UPDATE group_table SET shop_flag =1 WHERE group_name = \''+group_name+'\'';
					Popub_event.getInstance().update(Text);
					cc.director.runScene(new wait_InterfaceScene());
				},this
			);
			nextItem.attr({
				x:this.size.width/2,
				y:this.size.height/2,
				anchorX :0.5,
				anchorY :0.5
			});
		var next_menu = new cc.Menu(nextItem);
		next_menu.x=0;
		next_menu.y=-200;
		this.addChild(next_menu,1);	
		
		//金钱数
		var moneySprite = new cc.Sprite(res.game_money_png);	
        moneySprite.attr({
            x:this.size.width/16*4.9,
            y:this.size.height/25*24,
        });
        this.addChild(moneySprite,1);		
		//食物篮数
		var foodSprite = new cc.Sprite(res.game_food_png);	
        foodSprite.attr({
            x:this.size.width/16*6.9,
            y:this.size.height/25*24,
        });
        this.addChild(foodSprite,1);		
	
		//帐篷数
		var tentSprite = new cc.Sprite(res.game_tent_png);	
        tentSprite.attr({
            x:this.size.width/16*8.5,
            y:this.size.height/25*24,
        });
        this.addChild(tentSprite,1);	
		
		//金子数
		var goldSprite = new cc.Sprite(res.game_gold_png);	
        goldSprite.attr({
            x:this.size.width/16*10,
            y:this.size.height/25*24,
        });
        this.addChild(goldSprite,1);
		
		//骆驼称重
		var camelSprite = new cc.Sprite(res.game_camel_png);	
        camelSprite.attr({
            x:this.size.width/16*4.9,
            y:this.size.height/25*22.5,
        });
        this.addChild(camelSprite,1);	
		
		//水罐数
		var waterSprite = new cc.Sprite(res.game_water_png);	
        waterSprite.attr({      
		    x:this.size.width/16*6.9,
            y:this.size.height/25*22.5,
        });
        this.addChild(waterSprite,1);		
		
		//指南针数
		var compassSprite = new cc.Sprite(res.game_compass_png);	
        compassSprite.attr({
            x:this.size.width/16*8.5,
            y:this.size.height/25*22.5,
        });
        this.addChild(compassSprite,1);
		
		//天气
		var weatherSprite = new cc.Sprite(res.game_weather_word_png);	
        weatherSprite.attr({
            x:this.size.width/16*10,
            y:this.size.height/25*22.5,
        });
        this.addChild(weatherSprite,1);
		
		//天气
		var district_id =Global.getInstance().district_id;
		Day_switch_data.getInstance().get_weather(group_name,day_num,district_id,this,0);
		
		//游戏数据
		Game_data.getInstance().set(group_name,day_num,this);		
		

		return true;
	}
	
});
     

var jumpScene4 = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new jumpLayer4();
      this.addChild(layer);
    },
})

