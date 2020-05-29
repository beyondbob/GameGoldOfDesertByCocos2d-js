
var shopLayer = cc.Layer.extend({
    size:null,
    ctor:function(){
        this._super();
        this.size = cc.director.getWinSize();
		
		var group_name = Global.getInstance().group_name;
		var day_num = Global.getInstance().Day_num;
		var layer = new shopBox();	
		this.addChild(layer);
		cc.log( Global.getInstance().district_id);
		//背景图片
        var bgSprite = new cc.Sprite(res.desert_0_jpg);
        bgSprite.attr({
            x:this.size.width/2,
            y:this.size.height/2,
        });
        this.addChild(bgSprite);
		

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
            x:this.size.width/16*7.4,
            y:this.size.height/25*24,
        });
        this.addChild(foodSprite,1);		
	
		//帐篷数
		var tentSprite = new cc.Sprite(res.game_tent_png);	
        tentSprite.attr({
            x:this.size.width/16*9.5,
            y:this.size.height/25*24,
        });
        this.addChild(tentSprite,1);	
		
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
		    x:this.size.width/16*7.4,
            y:this.size.height/25*22.5,
        });
        this.addChild(waterSprite,1);		
		
		//指南针数
		var compassSprite = new cc.Sprite(res.game_compass_png);	
        compassSprite.attr({
            x:this.size.width/16*9.5,
            y:this.size.height/25*22.5,
        });
        this.addChild(compassSprite,1);
		
		
		
		//游戏数据
		Day_switch_data.getInstance().set_shop_data(group_name,day_num,this,0);			
		
		return true;
	}
});
     

var shopScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new shopLayer();
      this.addChild(layer);
    },
})

