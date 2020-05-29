
var Scene_event  = (function(){
	var instance = null;
	function get_Scene_event_Instance (){
		var Scene_eventInstance = {
				set_event :function(that,num,day_num,group_name){
					//老者
					if(num == '1')
					{
						//标题1
						var Label1 = new cc.Sprite(res.scene_label1);	
						Label1.attr({
							x:that.size.width/2+60,
							y:that.size.height/2+40,
						});
						that.addChild(Label1,1);		
						
						//事件1
						var eventSprite1 = new cc.Sprite(res.old_man_png);	
						eventSprite1.attr({
							x:that.size.width/2-100,
							y:that.size.height/2,
						});
						that.addChild(eventSprite1,1);	

						//询问按钮
						var callItem1 = new cc.MenuItemImage(
								res.scene_click1 ,
								res.scene_click2 ,
								function(){
									//添加弹出框事件
									Day_switch_data.getInstance().set_event(group_name,num,day_num,that,0);
									
								},that
							);
							callItem1.attr({
								x:that.size.width/2,
								y:that.size.height/2,
								anchorX :0.5,
								anchorY :0.5
							});
						var call_menu1 = new cc.Menu(callItem1);
						call_menu1.x=60;
						call_menu1.y=-50;
						that.addChild(call_menu1,1);
					}
					//王陵
					if(num == '2')
					{
						//标题2
						var Label2 = new cc.Sprite(res.scene_label2);	
						Label2.attr({
							x:that.size.width/2+80,
							y:that.size.height/2+40,
						});
						that.addChild(Label2,1);		
						
						//事件2
						var eventSprite2 = new cc.Sprite(res.Wang_Lin_png);	
						eventSprite2.attr({
							x:that.size.width/2-85,
							y:that.size.height/2,
						});
						that.addChild(eventSprite2,1);	

						//询问按钮2
						var callItem2 = new cc.MenuItemImage(
								res.scene_click1 ,
								res.scene_click2 ,
								function(){
								//添加弹出框事件
									Day_switch_data.getInstance().set_event(group_name,num,day_num,that,0);	
								},that
							);
							callItem2.attr({
								x:that.size.width/2,
								y:that.size.height/2,
								anchorX :0.5,
								anchorY :0.5
							});
						var call_menu2 = new cc.Menu(callItem2);
						call_menu2.x=80;
						call_menu2.y=-50;
						that.addChild(call_menu2,1);						
					}
					//村庄
					if(num == '3'){
						//标题3
						var Label3 = new cc.Sprite(res.scene_label3);	
						Label3.attr({
							x:that.size.width/2+80,
							y:that.size.height/2,
						});
						that.addChild(Label3,1);		
						
						//事件3
						var eventSprite3 = new cc.Sprite(res.village_jpg);	
						eventSprite3.attr({
							x:that.size.width/2-85,
							y:that.size.height/2,
						});
						that.addChild(eventSprite3,1);	
					}
					//沙漠
					if(num == '4'){
						//标题4
						var Label4 = new cc.Sprite(res.scene_label3);	
						Label4.attr({
							x:that.size.width/2+80,
							y:that.size.height/2,
						});
						that.addChild(Label4,1);		
						
						//事件4
						var eventSprite4 = new cc.Sprite(res.desert_jpg);	
						eventSprite4.attr({
							x:that.size.width/2-85,
							y:that.size.height/2,
						});
						that.addChild(eventSprite4,1);	
					}
					//绿洲
					if(num == '5'){
						//标题5
						var Label5 = new cc.Sprite(res.scene_label3);	
						Label5.attr({
							x:that.size.width/2+80,
							y:that.size.height/2,
						});
						that.addChild(Label5,1);		
						
						//事件5
						var eventSprite5 = new cc.Sprite(res.oasis_jpg);	
						eventSprite5.attr({
							x:that.size.width/2-85,
							y:that.size.height/2,
						});
						that.addChild(eventSprite5,1);	
					}
					//出发地
					if(num == '6'){
						//标题6
						var Label6 = new cc.Sprite(res.scene_label3);	
						Label6.attr({
							x:that.size.width/2+80,
							y:that.size.height/2,
						});
						that.addChild(Label6,1);		
						
						//事件6
						var eventSprite6 = new cc.Sprite(res.begin_jpg);	
						eventSprite6.attr({
							x:that.size.width/2-85,
							y:that.size.height/2,
						});
						that.addChild(eventSprite6,1);	
						//询问按钮
						var layer1 = new endBox(that);	
						that.addChild(layer1);
						var callItem1 = new cc.MenuItemImage(
								res.scene_click1 ,
								res.scene_click2 ,
								function(){
									//添加弹出框事件
									layer1.onEnter();
									layer1.popup();
									
								},that
							);
							callItem1.attr({
								x:that.size.width/2,
								y:that.size.height/2,
								anchorX :0.5,
								anchorY :0.5
							});
						var call_menu1 = new cc.Menu(callItem1);
						call_menu1.x=60;
						call_menu1.y=-50;
						that.addChild(call_menu1,1);
					}
					//大山
					if(num == '7'){
						//标题7
						var Label7 = new cc.Sprite(res.scene_label3);	
						Label7.attr({
							x:that.size.width/2+80,
							y:that.size.height/2,
						});
						that.addChild(Label7,1);		
						
						//事件7
						var eventSprite7 = new cc.Sprite(res.montain_png);	
						eventSprite7.attr({
							x:that.size.width/2-85,
							y:that.size.height/2,
						});
						that.addChild(eventSprite7,1);	
					}	
					//不能触发事件的王陵
					if(num == '8'){
						//标题8
						var Label8 = new cc.Sprite(res.scene_label3);	
						Label8.attr({
							x:that.size.width/2+80,
							y:that.size.height/2,
						});
						that.addChild(Label8,1);		
						
						//事件7
						var eventSprite8 = new cc.Sprite(res.Wang_Lin_png);	
						eventSprite8.attr({
							x:that.size.width/2-85,
							y:that.size.height/2,
						});
						that.addChild(eventSprite8,1);	
					}						
				}
																																
		}		
		return Scene_eventInstance;
	};
 
 
	return {
		getInstance:function(){
			if(instance === null){
				instance = get_Scene_event_Instance();
			}
			return instance;
		}
	};
})();