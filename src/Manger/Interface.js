var InterfaceLayer = cc.Layer.extend({
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
		if(day_num==0){
			//按钮
			var startItem = new cc.MenuItemImage(
				res.manger_start1_png,
				res.manger_start2_png,
				function(){
					Day_switch_data.getInstance().set_district_weather(day_num+1,0);
					Popub_event.getInstance().change_day(day_num+1,team_name);
					Day_switch_data.getInstance().add_time_table(team_name,day_num+1,1);
					
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
			startmenu.y=-200;
			this.addChild(startmenu,1);
		}else
		if(day_num==25){
			//按钮
			var endItem = new cc.MenuItemImage(
				res.manger_end1_png,
				res.manger_end2_png,
				function(){
					cc.director.runScene(new cc.TransitionFade(1,new resultScene()));
				},this
			);
			endItem.attr({
				x:this.size.width/2,
				y:this.size.height/2-50,
				anchorX :0.5,
				anchorY :0.5
			});
			var endmenu = new cc.Menu(endItem);
			endmenu.x=0;
			endmenu.y=-200;
			this.addChild(endmenu,1);
		}else{
			//按钮
			var nextItem = new cc.MenuItemImage(
				res.manger_next1_png,
				res.manger_next2_png,
				function(){
					Day_switch_data.getInstance().set_district_weather(day_num+1,0);
					Popub_event.getInstance().change_day(day_num+1,team_name);
					Day_switch_data.getInstance().add_time_table(team_name,day_num+1,1);
				},this
			);
			nextItem.attr({
				x:this.size.width/2,
				y:this.size.height/2,
				anchorX :0.5,
				anchorY :0.5
			});
			var nextmenu = new cc.Menu(nextItem);
			nextmenu.x=0;
			nextmenu.y=-200;
			this.addChild(nextmenu,1);
		}


				
		return true;

	}
	
})


var InterfaceScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new InterfaceLayer();
      this.addChild(layer);
    },
})