
var GameLayer = cc.Layer.extend({
    size:null,
    ctor:function(day_num,group_name){
        this._super();
		var day_num =Global.getInstance().Day_num;
		var group_name=Global.getInstance().group_name;
		cc.log("1111111a"+day_num);
        this.size = cc.winSize;
		cc.log(day_num+','+group_name);
		
		//绘制地图图片
		Makemap.getInstance().make(this);	
		//背景图片
        var bgSprite = new cc.Sprite(res.game_mp_png);	
        bgSprite.attr({
            x:this.size.width/2,
            y:this.size.height/2,
        });
        this.addChild(bgSprite,0);
		//状态栏
        var topSprite = new cc.Sprite(res.top_png);	
        topSprite.attr({
            x:this.size.width/2,
            y:this.size.height-5,
			anchorY :1,
			opacity:120
        });
        this.addChild(topSprite,0);				

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
		
		//未知天气
		//天气
		var noneSprite = new cc.Sprite(res.game_none_png);	
        noneSprite.attr({
            x:this.size.width/16*10.7,
            y:this.size.height/25*22.6,
        });
        this.addChild(noneSprite);
		
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
		
		//游戏数据
		Game_data.getInstance().set(group_name,day_num,this);		
		
		return true;
	}
	
});
     

var GameScene = cc.Scene.extend({
    onEnter:function(day_num,group_name){
      this._super();
      var layer = new GameLayer(day_num,group_name);
      this.addChild(layer);
    },
})

