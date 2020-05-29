var WebSocket2 = WebSocket || window.WebSocket || window.MozWebSocket;
 
 
var Game_data  = (function(){
	var instance = null;
	function getGame_dataInstance (){
		var Game_dataInstance = {
			socket2:null,
			isInit2:false,
			initNetwork:function(){
				cc.log('Network2 initSocket...');
				this.host2 = "ws://localhost:3001";
				this.testhost2 = "ws://echo.websocket.org";
				this.socket2 = new WebSocket2(this.host2);
				var self2 = this;
				this.socket2.onopen = function(evt){
					cc.log('Network2 onopen...');
					//utils.outObj(evt);
					self2.isInit2 = true;
				};
				
				this.socket2.onmessage = function(evt){
					var data = evt.data;
					cc.log('Network2 onmessage...');
					//utils.outObj(evt);
				};
				
				this.socket2.onerror = function(evt){
					cc.log('Network2 onerror...');
					//utils.outObj(evt);
				};
				
				this.socket2.onclose = function(evt){
					cc.log('Network2 onclose...');
					//utils.outObj(evt);
					this.isInit2 = false;
				};

			},
			set:function(group_name,day_num,that){
				if (!this.isInit2){
					cc.log('Network2 is not inited...');
				}else if(this.socket2.readyState == WebSocket2.OPEN){
					cc.log('Network2 send:'+group_name);
					this.socket2.send(group_name);
					this.socket2.onmessage = function(msg){
										
						//判断是否存活
						Day_switch_data.getInstance().is_alive(3);
						
						cc.log(msg.data);
						var num = new Array();
						num = msg.data.split(",");
						//定位地区位置
						if(that.getChildByTag(parseInt(num[9]))!=null){
							that.getChildByTag(parseInt(num[9])).opacity =255;
							that.getChildByTag(parseInt(num[9])).zIndex =3;
							seletecustomEvent.getInstance().addTouchEvent(num[9],that);
						}
						//写入全局变量
						Global.getInstance().group_money = num[1];
						Global.getInstance().group_camel = num[2];
						Global.getInstance().group_food = num[3];
						Global.getInstance().group_compass = num[4];
						Global.getInstance().group_tent = num[5];
						Global.getInstance().group_water = num[6];
						Global.getInstance().group_gold = num[7];
						Global.getInstance().group_max_camel = num[8];

						//金钱数量
						var money_num = new cc.LabelTTF(": "+num[1], "Arial", 16);
						money_num.attr({
							
							x:that.size.width/16*5.1,
							y:that.size.height/25*24,
							anchorX :0,
							anchorY :0.7,
							tag :200
						});
						money_num.setColor(cc.color(0,0,0));
						that.addChild(money_num, 1);
						
						//食物数量
						var food_num = new cc.LabelTTF(": "+num[3], "Arial", 16);
						food_num.attr({
							x:that.size.width/16*7.1,
							y:that.size.height/25*24,
							anchorX :0,
							anchorY :0.7,
							tag :201
						});
						food_num.setColor(cc.color(0,0,0));
						that.addChild(food_num, 1);

						//帐篷数量
						var tent_num = new cc.LabelTTF(": "+num[5], "Arial", 16);
						tent_num.attr({
							x:that.size.width/16*8.75,
							y:that.size.height/25*24,
							anchorX :0,
							anchorY :0.7,
							tag :202
						});
						tent_num.setColor(cc.color(0,0,0));
						that.addChild(tent_num, 1);	
						
						//金子数量
						var gold_num = new cc.LabelTTF(": "+num[7], "Arial", 16);
						gold_num.attr({
							x:that.size.width/16*10.35,
							y:that.size.height/25*24,
							anchorX :0,
							anchorY :0.7,
							tag :203
						});
						gold_num.setColor(cc.color(0,0,0));
						that.addChild(gold_num, 1);	
						
						//骆驼承重
						var camel_weight = new cc.LabelTTF(": "+num[2]/1000+'K'+"/"+num[8]/1000+"K", "Arial", 16);
						camel_weight.attr({
							x:that.size.width/16*5.1,
							y:that.size.height/25*22.5,
							anchorX :0,
							anchorY :0.7,
							tag :204
						});
						camel_weight.setColor(cc.color(0,0,0));
						that.addChild(camel_weight, 1);	

						//水数量
						var water_num = new cc.LabelTTF(": "+num[6], "Arial", 16);
						water_num.attr({
							x:that.size.width/16*7.1,
							y:that.size.height/25*22.5,
							anchorX :0,
							anchorY :0.7,
							tag :205
						});
						water_num.setColor(cc.color(0,0,0));
						that.addChild(water_num, 1);						
						
						//指南针数量
						var compass_num = new cc.LabelTTF(": "+num[4], "Arial", 16);
						compass_num.attr({
							x:that.size.width/16*8.75,
							y:that.size.height/25*22.5,
							anchorX :0,
							anchorY :0.7,
							tag :206
						});
						compass_num.setColor(cc.color(0,0,0));
						that.addChild(compass_num, 1);	
						
						
					}
				}else{
					cc.log('Network2 WebSocket readState:'+this.socket2.readyState);
				}
			},

			close:function(){
				if (this.socket2){
					cc.log("Network2 close...");
					this.socket2.close();
					this.socket2 = null;
				}
			}
		};
		return Game_dataInstance;
	};
 
 
	return {
		getInstance:function(){
			if(instance === null){
				instance = getGame_dataInstance();
			}
			return instance;
		}
	};
})();