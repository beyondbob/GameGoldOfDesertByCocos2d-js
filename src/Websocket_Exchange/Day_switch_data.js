var Websocket3 = WebSocket || window.WebSocket || window.MozWebSocket;
 
 
var Day_switch_data  = (function(){
	var instance = null;
	function getNetworkInstance (){
		var networkInstance = {
			socket:new Array(),
			isInit:new Array(),
			initNetwork:function(arg){
				this.socket[arg] = null;
				this.isInit[arg] = null;
				var self =new Array();
				cc.log('Network3'+arg+' initsocket[arg]...');
				this.host3 = "ws://localhost:3002";
				this.testhost3 = "ws://echo.websocket.org";
				this.socket[arg] = new Websocket3(this.host3);
				self[arg] = this;
				this.socket[arg].onopen = function(evt){
					cc.log('Network3'+arg+' onopen...');
					//utils.outObj(evt);
					self[arg].isInit[arg] = true;
				};
				
				this.socket[arg].onmessage = function(evt){
					var data = evt.data;
					cc.log('Network3'+arg+' onmessage...');
					//utils.outObj(evt);
				};
				
				this.socket[arg].onerror = function(evt){
					cc.log('Network3'+arg+' onerror...');
					//utils.outObj(evt);
				};
				
				this.socket[arg].onclose = function(evt){
					cc.log('Network3'+arg+' onclose...');
					//utils.outObj(evt);
					this.isInit[arg] = false;
				};
			},
			send:function(team_name,day_num,user_chracter,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					cc.log('Network3'+arg+' send:'+team_name+','+day_num+','+user_chracter);
					var send_msg = 'SELECT now_day AS solution FROM team_day_table WHERE team_name = \''+team_name+'\'';
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg){
						cc.log(msg.data);
						if(parseInt(msg.data)>day_num){
							cc.log(parseInt(msg.data)>day_num);
							
							Day_switch_data.getInstance().is_shop(user_chracter,day_num,2);
						}else
						if(day_num =='25'){
							if(parseInt(Global.getInstance().end_flag) ==0){
								Day_switch_data.getInstance().set_end_num(2);
							}
							alert("游戏结束，请等待结果！");
						}							
						else {alert("请等待当天结束！");}
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			
			sign_up:function(Text,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					var data = new Array();
					data.length = 0;
					data = Text.split(",");
					var send_msg = 'SELECT user_id AS solution From user_table WHERE user_name = \''+data[0]+'\'';
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg){
						if(msg.data =='null'){
							Popub_event.getInstance().save_user(Text);
							Global.getInstance().user_name = data[0];
							if(data[2]=='yes'){
								cc.director.runScene(new Sign_up2Scene());
							}else{
								cc.director.runScene(new Sign_up3Scene());
							}
						}else{
							alert("用户名已存在！");
						}
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			create_group:function(Text,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					var data = new Array();
					data.length = 0;
					data = Text.split(",");
					var send_msg = 'SELECT group_name AS solution From group_table WHERE group_name = \''+data[1]+'\'';
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg){
						if(msg.data =='null'){
							Text2 = 'INSERT INTO `group_table` (`group_name`,`team_name`) VALUES('+'\''+data[1]+'\',\''+data[0]+'\')';
							Popub_event.getInstance().update(Text2);
							Text3 = 'UPDATE user_table SET group_name =\''+data[1]+'\',user_chracter='+data[2]+',team_name=\''+data[0]+'\' WHERE user_name = \''+Global.getInstance().user_name+'\'';
							Popub_event.getInstance().update(Text3);
							cc.director.runScene(new LoginScene());
						}else{
							Text3 = 'UPDATE user_table SET group_name =\''+data[1]+'\',user_chracter='+data[2]+',team_name=\''+data[0]+'\' WHERE user_name = \''+Global.getInstance().user_name+'\'';
							Popub_event.getInstance().update(Text3);
							cc.director.runScene(new LoginScene());
						}
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			create_team:function(team_name,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){

					var send_msg = 'SELECT id AS solution From team_day_table WHERE team_name = \''+team_name+'\'';
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg){
						if(msg.data =='null'){
							Text = 'INSERT INTO `team_day_table` (`team_name`) VALUES('+'\''+team_name+'\')';
							Popub_event.getInstance().update(Text);
							Text2 = 'UPDATE user_table SET team_name = \''+team_name+'\' WHERE user_name = '+Global.getInstance().user_name;
							Popub_event.getInstance().update(Text2);
							cc.director.runScene(new LoginScene());
						}else{
							alert("组织名已存在！");
						}
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			enter_team:function(Text,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					var data = new Array();
					data.length = 0;
					data = Text.split(",");
					var send_msg = 'SELECT id AS solution From team_day_table WHERE team_name = \''+data[0]+'\'';
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg){
						if(msg.data =='null'){
							alert("组织名不存在！");
						}else{
							Day_switch_data.getInstance().create_group(Text,1);
							
						}
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			is_alive:function(arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					var send_msg = 'SELECT alive_flag AS solution FROM group_table WHERE group_name = \''+Global.getInstance().group_name+'\'';
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg){
						cc.log(msg.data);
						if(msg.data=='1'){
							alert("上一天存活成功！请继续沙漠之旅~");
						}
						else{
							alert("上一天存活失败！葬身沙漠，游戏结束~");
							cc.director.runScene(new cc.TransitionFade(1,new overScene()));
						}
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			is_shop:function(user_chracter,day_num,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					var send_msg = 'SELECT allow_next AS solution FROM group_table WHERE group_name = \''+Global.getInstance().group_name+'\'';
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg){
						cc.log(msg.data);
						if(user_chracter =='3'){
							Global.getInstance().Day_num = Global.getInstance().Day_num+1;
							cc.director.runScene(new cc.TransitionFade(1,new tableScene()));
						}else
						if(msg.data=='1'||day_num=='0'){
							if(user_chracter ==1){
								Day_switch_data.getInstance().limit_sth_update_sth(Global.getInstance().group_name,Global.getInstance().changewater,day_num,'water',0,0);
								Day_switch_data.getInstance().limit_sth_update_sth(Global.getInstance().group_name,Global.getInstance().changefood,day_num,'food',0,1);	
								if(Global.getInstance().lost_flag >1){
									Global.getInstance().Day_num = Global.getInstance().Day_num+1;
									Popub_event.getInstance().change_group_day(Global.getInstance().Day_num,Global.getInstance().group_name);
									var str = 'UPDATE group_table SET lost_flag = lost_flag-1 WHERE group_name = \''+Global.getInstance().group_name+'\'';
									Popub_event.getInstance().update(str);
									var nowscene = Global.getInstance().nowscene;
									cc.director.runScene(nowscene);
								}else{
									Global.getInstance().Day_num = Global.getInstance().Day_num+1;
									Popub_event.getInstance().change_group_day(Global.getInstance().Day_num,Global.getInstance().group_name);
									var str = 'UPDATE group_table SET lost_flag = lost_flag-1 WHERE group_name = \''+Global.getInstance().group_name+'\'';
									Popub_event.getInstance().update(str);
									
									if(Global.getInstance().stay_flag >0){
										var str = 'UPDATE group_table SET stay_flag = stay_flag-1 WHERE group_name = '+Global.getInstance().group_name;
										Popub_event.getInstance().update(str);
										var nowscene = Global.getInstance().nowscene;
										cc.director.runScene(nowscene);
									}else{
										cc.director.runScene(new GameScene());
									}		
								}
								
							}
							if(user_chracter ==2){
								Global.getInstance().Day_num = Global.getInstance().Day_num+1;
								cc.director.runScene(new cc.TransitionFade(1,new outshopScene()));
							}
								
						}
						else{
							alert("请等待采购完成！");
						}
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			set_event:function(group_data,num,day_num,that,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					cc.log('Network3'+arg+' send:'+group_data+','+num);
					if(num == '1'){
						var send_msg0 ='SELECT old_man AS solution FROM time_table WHERE group_name = \''+group_data+'\' and day_num ='+day_num;
					}
					if(num == '2'){
						var send_msg0 ='SELECT wang_lin AS solution FROM time_table WHERE group_name = \''+group_data+'\' and day_num ='+day_num;
					}
					
					this.socket[arg].send(send_msg0);
					this.socket[arg].onmessage = function(msg0){
						cc.log(msg0.data+'1111');
						if(msg0.data == '0'){	
							Popub_event.getInstance().save_old_man_or_advice_flag(group_data,day_num,num);
							Day_switch_data.getInstance().popub_event(group_data,num,day_num,that,arg);
						}
						if(msg0.data == '1'){
							alert("当天次数以用完！");
						}
					}
					

				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			limit_sth_update_sth:function(group_name,num,day_num,sth,random_or_auto_flag,arg){
				
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					var send_msg0 ='SELECT concat_ws(\',\',group_max_camel,group_camel,group_'+sth+') AS solution FROM group_table WHERE group_name = \''+group_name+'\'';
					this.socket[arg].send(send_msg0);
					this.socket[arg].onmessage = function(msg0){
						cc.log(msg0.data);
						var data =new Array();
						data.length = 0;
						data = msg0.data.split(",");
						if(sth == 'food' || sth == 'compass'){
							if((parseInt(data[0])>=parseInt(data[1])+num*10)&&(parseInt(data[2])+num>=0))
							{
								if(sth == 'food'){
									Global.getInstance().group_food =  parseInt(Global.getInstance().group_food)+num;
									Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) + num*10;
								}else{
									Global.getInstance().group_compass =  parseInt(Global.getInstance().group_compass) + num;
									Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) + num*10;
								}
								
								Popub_event.getInstance().update_sth(group_name,num,day_num,sth);
								Popub_event.getInstance().update_sth(group_name,num*10,day_num,'camel');
							}
							else 
							if(parseInt(data[0])<parseInt(data[1])+num*10){
								var a = parseInt(data[0])-parseInt(data[1]);
								var part = Math.floor(a/(num*10));
								if(sth == 'food'){
									Global.getInstance().group_food = parseInt(Global.getInstance().group_food)+part*num;
									Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) + part*num*10;
								}else{
									Global.getInstance().group_compass =  parseInt(Global.getInstance().group_compass) + part*num;
									Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) + part*num*10;
								}
								Popub_event.getInstance().update_sth(group_name,part*num,day_num,sth);
								Popub_event.getInstance().update_sth(group_name,part*num*10,day_num,'camel');
							}else
							if(parseInt(data[2])+num<0){
								if(random_or_auto_flag==0 && sth == 'food' ){
										var str = 'UPDATE group_table SET alive_flag = \'0\' ,shop_flag = \'1\' WHERE group_name = \''+group_name+'\'';
										Popub_event.getInstance().update(str);
										alert("食物不足!");
								}
								var a = parseInt(data[2])-0;
								if(sth == 'food'){
									Global.getInstance().group_food =  parseInt(Global.getInstance().group_food)-parseInt(a);
									Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) - parseInt(a)*10;
								}else{
									Global.getInstance().group_compass =  parseInt(Global.getInstance().group_compass) - parseInt(a);
									Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) - parseInt(a)*10;
								}
								Popub_event.getInstance().update_sth(group_name,-parseInt(a),day_num,sth);
								Popub_event.getInstance().update_sth(group_name,-parseInt(a)*10,day_num,'camel');
							}
						}
						if(sth =='tent'){
							if((parseInt(data[0])>=parseInt(data[1])+num*20)&&(parseInt(data[2])+num>=0))
							{
								Global.getInstance().group_tent =  parseInt(Global.getInstance().group_tent)+num;
								Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) + num*20;
								Popub_event.getInstance().update_sth(group_name,num,day_num,sth);
								Popub_event.getInstance().update_sth(group_name,num*20,day_num,'camel');
							}
							else 
							if(parseInt(data[0])<parseInt(data[1])+num*20){
								var a = parseInt(data[0])-parseInt(data[1]);
								var part = Math.floor(a/(num*20));
								Global.getInstance().group_tent =  parseInt(Global.getInstance().group_tent)+part*num;
								Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) + part*num*20;
								Popub_event.getInstance().update_sth(group_name,part*num,day_num,sth);
								Popub_event.getInstance().update_sth(group_name,part*num*20,day_num,'camel');
							}else
							if(parseInt(data[2])+num<0){
								var a = parseInt(data[2])-0;
								Global.getInstance().group_tent =  parseInt(Global.getInstance().group_tent)-parseInt(a);
								Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) - parseInt(a)*20;
								Popub_event.getInstance().update_sth(group_name,-parseInt(a),day_num,sth);
								Popub_event.getInstance().update_sth(group_name,-parseInt(a)*20,day_num,'camel');
							}							
						}
						if(sth == 'water'){
							if((parseInt(data[0])>=parseInt(data[1])+num*50)&&(parseInt(data[2])+num>=0))
							{
								Global.getInstance().group_water =  parseInt(Global.getInstance().group_water)+num;
								Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) + num*50;
								Popub_event.getInstance().update_sth(group_name,num,day_num,sth);
								Popub_event.getInstance().update_sth(group_name,num*50,day_num,'camel');
							}
							else 
							if(parseInt(data[0])<parseInt(data[1])+num*50){
								var a = parseInt(data[0])-parseInt(data[1]);
								var part = Math.floor(a/(num*50));
								Global.getInstance().group_water =  parseInt(Global.getInstance().group_water)+part*num;
								Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) + part*num*50;
								Popub_event.getInstance().update_sth(group_name,part*num,day_num,sth);
								Popub_event.getInstance().update_sth(group_name,part*num*50,day_num,'camel');
							}else
							if(parseInt(data[2])+num<0){
								if(random_or_auto_flag==0){
									var str = 'UPDATE group_table SET alive_flag = \'0\' ,shop_flag = \'1\' WHERE group_name = \''+group_name+'\'';
									Popub_event.getInstance().update(str);
									alert("水不足!");
								}
								var a = parseInt(data[2])-0;
								Global.getInstance().group_water =  parseInt(Global.getInstance().group_water)-parseInt(a);
								Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) -parseInt(a)*50;
								Popub_event.getInstance().update_sth(group_name,-parseInt(a),day_num,sth);
								Popub_event.getInstance().update_sth(group_name,-parseInt(a)*50,day_num,'camel');
							}				
						}
						if(sth =='gold' ){
							if((parseInt(data[0])>=parseInt(data[1])+num)&&(parseInt(data[2])+num>=0)){
								Global.getInstance().group_gold =  parseInt(Global.getInstance().group_gold)+num;
								Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) + num;
								Popub_event.getInstance().update_sth(group_name,num,day_num,sth);
								Popub_event.getInstance().update_sth(group_name,num,day_num,'camel');
							}
							else 
							if(parseInt(data[0])<parseInt(data[1])+num){
								var a = parseInt(data[0])-parseInt(data[1]);
								var part = Math.floor(a/(num));
								Global.getInstance().group_gold =  parseInt(Global.getInstance().group_gold)+part*num;
								Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) + part*num;
								Popub_event.getInstance().update_sth(group_name,part*num,day_num,sth);
								Popub_event.getInstance().update_sth(group_name,part*num,day_num,'camel');
							}else
							if(parseInt(data[2])+num<0){
								var a = parseInt(data[2])-0;
								Global.getInstance().group_gold = parseInt(Global.getInstance().group_gold)-parseInt(a);
								Global.getInstance().group_camel =  parseInt(Global.getInstance().group_camel) - parseInt(a);
								Popub_event.getInstance().update_sth(group_name,-parseInt(a),day_num,sth);
								Popub_event.getInstance().update_sth(group_name,-parseInt(a),day_num,'camel');
							}				
						}
						
						if(sth == 'money' ||sth =='max_camel'){
								if(sth == 'money'){
									Global.getInstance().group_money =  parseInt(Global.getInstance().group_money)+num;
								}else{
									Global.getInstance().group_max_camel =  parseInt(Global.getInstance().group_max_camel) + num;
								}
								Popub_event.getInstance().update_sth(group_name,num,day_num,sth);
						}

					}
					

				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			
			set_district_weather:function(day_num,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					cc.log("111,,,"+day_num);
					var send_msg0 ='SELECT concat_ws(\',\',terrain,district_weather) AS solution FROM current_day WHERE day_num = '+day_num;
					this.socket[arg].send(send_msg0);
					this.socket[arg].onmessage = function(msg0){
						cc.log(msg0.data);
						var data0 =new Array();
						var data1 =new Array();
						data0.length = 0;
						data0 = msg0.data.split(";");
						for(var i =0;i<data0.length;i++){
							data1.length = 0;
							data1 = data0[i].split(",");
							Popub_event.getInstance().set_weather(data1[0],data1[1]);
						}	
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			get_weather:function(group_name,day_num,district_id,that,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					Text2 = 'UPDATE group_table SET allow_next =0 WHERE group_name = \''+group_name+'\'';
					Popub_event.getInstance().update(Text2);
					var send_msg0 ='SELECT district_weather AS solution FROM district_weather_table WHERE district_id = '+district_id;
					this.socket[arg].send(send_msg0);
					this.socket[arg].onmessage = function(msg0){
						cc.log(msg0.data);
						if(parseInt(msg0.data)==0){
							var noneSprite = new cc.Sprite(res.game_none_png);	
							noneSprite.attr({
								x:that.size.width/16*10.7,
								y:that.size.height/25*22.6,
							});
							that.addChild(noneSprite);
							Global.getInstance().weather = 'none';
						}
						if(parseInt(msg0.data)==1){
							var hotSprite = new cc.Sprite(res.game_hot_png);	
							hotSprite.attr({
								x:that.size.width/16*10.7,
								y:that.size.height/25*22.6,
							});
							that.addChild(hotSprite);
							Global.getInstance().weather = 'hot';
							Day_switch_data.getInstance().isLost(group_name,day_num,'hot',that,0);
							
						}
						if(parseInt(msg0.data)==2){
							var sand_stormSprite = new cc.Sprite(res.game_sand_storm_png);	
							sand_stormSprite.attr({
								x:that.size.width/16*10.7,
								y:that.size.height/25*22.6,
							});
							that.addChild(sand_stormSprite);
							Global.getInstance().weather = 'sand_storm';
							Day_switch_data.getInstance().isLost(group_name,day_num,'sand_storm',that,0);
						}
						if(parseInt(msg0.data)==3){
							var hot_sand_stormSprite = new cc.Sprite(res.game_hot_sand_storm_png );	
							hot_sand_stormSprite.attr({
								x:that.size.width/16*10.7,
								y:that.size.height/25*22.6,
							});
							that.addChild(hot_sand_stormSprite);
							Global.getInstance().weather = 'hot_sand_storm';
							Day_switch_data.getInstance().isLost(group_name,day_num,'hot_sand_storm',that,0);
						}
						if(parseInt(msg0.data)==4){
							var sunSprite = new cc.Sprite(res.game_sun_png );	
							sunSprite.attr({
								x:that.size.width/16*10.7,
								y:that.size.height/25*22.6,
							});
							that.addChild(sunSprite);
							Global.getInstance().weather = 'sun';
							Day_switch_data.getInstance().isLost(group_name,day_num,'sun',that,0);
						}
							
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}				
			},
			isLost:function(group_name,day_num,weather,that,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					cc.log('Network3'+arg+' send:'+group_name+','+day_num);
					var send_msg0 ='SELECT lost_flag AS solution FROM group_table WHERE group_name = \''+group_name+'\'';
					this.socket[arg].send(send_msg0);
					this.socket[arg].onmessage = function(msg0){
						cc.log(msg0.data);
						var getdata = msg0.data;
						if(parseInt(msg0.data)<0){
							getdata = '0';
							var str = 'UPDATE group_table SET lost_flag = 0 WHERE group_name = \''+group_name+'\'';
							Popub_event.getInstance().update(str);
						}
						if(weather =='sun'){
							if(getdata == '0'){	
								Global.getInstance().changewater = -1;
								Global.getInstance().changefood = -1;
							}else{
								Global.getInstance().changewater = -2;
								Global.getInstance().changefood = -2;
							}
						}
						if(weather =='hot'){
							if(getdata == '0'){	
								Global.getInstance().changewater = -3;
								Global.getInstance().changefood = -1;
							}else{
								Global.getInstance().changewater = -6;
								Global.getInstance().changefood = -2;
							}
						}
						if(weather =='sand_storm'){
							if(getdata == '0'){	
								var layer2 = new chooseBox(weather,group_name,day_num,that);	
								that.addChild(layer2);
								layer2.onEnter();
								layer2.popup();
							}else{
								Global.getInstance().changewater = -4;
								Global.getInstance().changefood = -10;
							}
						}
						if(weather =='hot_sand_storm'){
							if(getdata == '0'){	
								var layer2 = new chooseBox(weather,group_name,day_num,that);	
								that.addChild(layer2);
								layer2.onEnter();
								layer2.popup();
							}else{
								Global.getInstance().changewater = -8;
								Global.getInstance().changefood = -10;
							}
						}
						
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			lost_status:function(group_name,that,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					cc.log('Network3'+arg+' send:'+group_name+'115');
					var send_msg0 ='SELECT concat_ws(\',\',lost_flag,stay_flag) AS solution FROM group_table WHERE group_name = \''+group_name+'\'';
					this.socket[arg].send(send_msg0);
					this.socket[arg].onmessage = function(msg0){
						cc.log(msg0.data);
						var getdata = new Array();
						getdata = msg0.data.split(",");
						Global.getInstance().lost_flag =getdata[0];
						Global.getInstance().stay_flag =getdata[1];
						if(parseInt(getdata[0])<=0){
							var data_label = new cc.LabelTTF("正常", "Arial", 25);
							data_label.attr({
								x:that.size.width/2+10,
								y:that.size.height/2+150,
								anchorX :0,
								tag:400,
							});
							data_label.setColor(cc.color(0,255,0));
							that.addChild(data_label, 1);	
						}else{
							var data_label = new cc.LabelTTF("迷失第"+(4-parseInt(getdata[0]))+"天", "Arial", 25);
							data_label.attr({
								x:that.size.width/2+10,
								y:that.size.height/2+150,
								anchorX :0,
								tag:400,
							});
							data_label.setColor(cc.color(255,0,0));
							that.addChild(data_label, 1);	
						}
						
						
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			update_day:function(id,flag,arg){
				if(flag ==0){
					var send_msg ='SELECT now_day AS solution FROM team_day_table WHERE team_name = \''+id+'\'';	
				}else
				if(flag ==1||flag ==2||flag ==3){				
					var send_msg ='SELECT concat_ws(\',\',group_now_day,end_flag) AS solution FROM group_table WHERE group_name = \''+id+'\'';
				}
					
				this.socket[arg].send(send_msg);
				this.socket[arg].onmessage = function(msg){
					cc.log(msg.data);
					if(flag ==0){
						cc.director.runScene(new cc.TransitionFade(1,new InterfaceScene()));
						Global.getInstance().Day_num = parseInt(msg.data);
					}else{				
						var num = new Array();
						num = msg.data.split(",");
						Global.getInstance().Day_num = parseInt(num[0]);
						Global.getInstance().end_flag = parseInt(num[1]);
						if(flag ==1){cc.director.runScene(new cc.TransitionFade(1,new StartScene()));}
						if(flag ==2){cc.director.runScene(new cc.TransitionFade(1,new outshopScene()));}
						if(flag ==3){cc.director.runScene(new cc.TransitionFade(1,new tableScene()));}
						cc.log("bob"+Global.getInstance().Day_num);
					}
					
				}
			},
			popub_event:function(group_data,num,day_num,that,arg){
				var send_msg ='SELECT advice_num AS solution FROM group_table WHERE group_name = \''+group_data+'\'';
				this.socket[arg].send(send_msg);
				this.socket[arg].onmessage = function(msg){
					cc.log(msg.data);
					if(num == '1'){
						Random_event.getInstance().Random("old_man",msg.data,group_data,day_num,that);
					}
					if(num == '2'){
						Random_event.getInstance().Random("Wang_Lin",msg.data,group_data,day_num,that);
					}
				}
			},
			add_time_table:function(team_name,day_num,arg){
				var send_msg ='SELECT group_name AS solution FROM group_table WHERE team_name = '+team_name;
				this.socket[arg].send(send_msg);
				this.socket[arg].onmessage = function(msg){
					cc.log(msg.data);
					var data = new Array();
					data.length = 0;
					data = msg.data.split(";");
					for(var i=0;i<data.length;i++){
						Popub_event.getInstance().add_group_time_table(data[i],day_num,team_name);
					}
				}
			},
			allow_enter:function(group_name,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					cc.log('Network3'+arg+' send:'+group_name+'115');
					var send_msg0 ='SELECT shop_flag As \'solution\' from group_table where group_name =\''+group_name+'\'';
					this.socket[arg].send(send_msg0);
					this.socket[arg].onmessage = function(msg0){
						if(msg0.data=='0'){
							alert("请等待决策结束！");
						}else{
							cc.director.runScene(new cc.TransitionFade(1,new shopScene()));
						}
						
						
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			set_shop_data:function(group_name,day_num,that,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					cc.log('Network3'+arg+' send:'+group_name+'115');
											
					//判断是否存活
					Day_switch_data.getInstance().is_alive(3);
						
					var send_msg0 ='SELECT concat_ws(\',\',group_money,group_camel,group_food,group_compass,group_tent,group_water,group_max_camel,district_id,allow_get_water,allow_mountain_get_water,group_now_day) As \'solution\' from group_table where group_name =\''+group_name+'\'';
				
					this.socket[arg].send(send_msg0);
					this.socket[arg].onmessage = function(msg0){
						var num = new Array();
						num = msg0.data.split(",");
						//写入全局变量
						Global.getInstance().group_money = num[0];
						Global.getInstance().group_camel = num[1];
						Global.getInstance().group_food = num[2];
						Global.getInstance().group_compass = num[3];
						Global.getInstance().group_tent = num[4];
						Global.getInstance().group_water = num[5];
						Global.getInstance().group_max_camel = num[6];
						Global.getInstance().district_id= num[7];
						Global.getInstance().allow_get_water = num[8];
						Global.getInstance().allow_mountain_get_water = num[9];
						Global.getInstance().Day_num = num[10];
						
						//金钱数量
						var money_num = new cc.LabelTTF(": "+num[0], "Arial", 16);
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
						var food_num = new cc.LabelTTF(": "+num[2], "Arial", 16);
						food_num.attr({
							x:that.size.width/16*7.6,
							y:that.size.height/25*24,
							anchorX :0,
							anchorY :0.7,
							tag :201
						});
						food_num.setColor(cc.color(0,0,0));
						that.addChild(food_num, 1);

						//帐篷数量
						var tent_num = new cc.LabelTTF(": "+num[4], "Arial", 16);
						tent_num.attr({
							x:that.size.width/16*9.75,
							y:that.size.height/25*24,
							anchorX :0,
							anchorY :0.7,
							tag :202
						});
						tent_num.setColor(cc.color(0,0,0));
						that.addChild(tent_num, 1);	
						
						//骆驼承重
						var camel_weight = new cc.LabelTTF(": "+num[1]/1000+'K'+"/"+num[6]/1000+"K", "Arial", 16);
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
						var water_num = new cc.LabelTTF(": "+num[5], "Arial", 16);
						water_num.attr({
							x:that.size.width/16*7.6,
							y:that.size.height/25*22.5,
							anchorX :0,
							anchorY :0.7,
							tag :205
						});
						water_num.setColor(cc.color(0,0,0));
						that.addChild(water_num, 1);						
						
						//指南针数量
						var compass_num = new cc.LabelTTF(": "+num[3], "Arial", 16);
						compass_num.attr({
							x:that.size.width/16*9.75,
							y:that.size.height/25*22.5,
							anchorX :0,
							anchorY :0.7,
							tag :206
						});
						compass_num.setColor(cc.color(0,0,0));
						that.addChild(compass_num, 1);	
						
						var layer = new shopBox(num[7]);	
						that.addChild(layer);
						//商店按钮
						var shopItem = new cc.MenuItemImage(
							res.shop_btn1_png,
							res.shop_btn2_png,
							function(){
								layer.onEnter();
								layer.popup();
							},that
						);
						shopItem.attr({
							x:that.size.width/2,
							y:that.size.height/2,
							anchorX :0.5,
							anchorY :0.5
						});
						var menu = new cc.Menu(shopItem);
						menu.x=0;
						menu.y=-150;
						that.addChild(menu,1);
						//显示天数
						var day_label = new cc.LabelTTF("当前第"+num[10]+"天", "Arial", 30);
						day_label.attr({
							x:that.size.width/2,
							y:that.size.height/2,
						});
						day_label.setColor(cc.color(0,0,0));
						that.addChild(day_label, 1);
		
						//下一天
						var nextItem = new cc.MenuItemImage(
							res.out_shop_btn1_png,
							res.out_shop_btn2_png,
							function(){
								Day_switch_data.getInstance().buy('0,0,0,0',group_name,day_num,0);
							},that
						);
						nextItem.attr({
							x:that.size.width/2,
							y:that.size.height/2,
							anchorX :0.5,
							anchorY :0.5
						});
						var menu2 = new cc.Menu(nextItem);
						menu2.x=0;
						menu2.y=-250;
						that.addChild(menu2,1);
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
				
			},
			buy:function(Text,group_name,day_num,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					cc.log('Network3'+arg+' send:'+Text);
					var data0 =new Array();
					data0.length = 0;
					data0 = Text.split(",");
					var send_msg ='SELECT concat_ws(\',\',group_money,group_camel,group_max_camel) As \'solution\' from group_table where group_name =\''+group_name+'\'';
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg){
						var data1 =new Array();
						data1.length = 0;
						data1 = msg.data.split(",");
						if(data0[0] =='gold'){
							if(parseInt(data1[2])-parseInt(data1[1])<parseInt(data0[1])+parseInt(data0[3])*50){
								alert("负重不够！");
							}else{
								cc.log(data0[1]+','+data0[3]);
								Day_switch_data.getInstance().limit_sth_update_sth(group_name,parseInt(data0[3]),day_num,'water',0,0);
								Day_switch_data.getInstance().limit_sth_update_sth(group_name,parseInt(data0[1]),day_num,'gold',0,1);
								if(Global.getInstance().district_id =='38'&&Global.getInstance().allow_mountain_get_water ==1){
									Text2 = 'UPDATE group_table SET allow_get_water=0 , shop_flag = 0, allow_next =1 ,allow_mountain_get_water=0 WHERE group_name = \''+group_name+'\'';
								}else{
									Text2 = 'UPDATE group_table SET allow_get_water=0 , shop_flag = 0, allow_next =1 WHERE group_name = \''+group_name+'\'';		
								}
								Popub_event.getInstance().update(Text2);
								cc.director.runScene(new outshopScene());		
							}
						}else{
								if((parseInt(data1[0])<parseInt(data0[0])*25+parseInt(data0[1])*10+parseInt(data0[2])*120+parseInt(data0[3])*100)&&(Global.getInstance().district_id =='1')){
									alert("金钱不够！");
								}else
								if((parseInt(data1[0])<parseInt(data0[0])*50+parseInt(data0[1])*20)&&(Global.getInstance().district_id =='12'||Global.getInstance().district_id =='19'||Global.getInstance().district_id =='31'||Global.getInstance().district_id =='33'||Global.getInstance().district_id =='35'||Global.getInstance().district_id =='36')){
									alert("金钱不够！");
								}else
								if(parseInt(data1[2])-parseInt(data1[1])<parseInt(data0[0])*50+parseInt(data0[1])*10+parseInt(data0[2])*20+parseInt(data0[3])*10){
									alert("负重不够！");
								}else{
										Day_switch_data.getInstance().limit_sth_update_sth(group_name,parseInt(data0[0]),day_num,'water',0,0);
										Day_switch_data.getInstance().limit_sth_update_sth(group_name,parseInt(data0[1]),day_num,'food',0,1);
										Day_switch_data.getInstance().limit_sth_update_sth(group_name,parseInt(data0[2]),day_num,'tent',0,2);
										Day_switch_data.getInstance().limit_sth_update_sth(group_name,parseInt(data0[3]),day_num,'compass',0,3);
										if(Global.getInstance().district_id =='16' ||Global.getInstance().district_id == '21'||Global.getInstance().allow_get_water =='1'){
											Day_switch_data.getInstance().limit_sth_update_sth(group_name,0,day_num,'money',0,4);
										}else
										if(Global.getInstance().district_id =='1'){
											Day_switch_data.getInstance().limit_sth_update_sth(group_name,-(parseInt(data0[0])*25+parseInt(data0[1])*10+parseInt(data0[2])*120+parseInt(data0[3])*100),day_num,'money',0,4);
										}else{
											Day_switch_data.getInstance().limit_sth_update_sth(group_name,-(parseInt(data0[0])*50+parseInt(data0[1])*20),day_num,'money',0,4);
										}
										Text2 = 'UPDATE group_table SET allow_get_water=0 , shop_flag = 0, allow_next =1 WHERE group_name = \''+group_name+'\'';		
										Popub_event.getInstance().update(Text2);
										cc.director.runScene(new outshopScene());				
									}
								}									
								
						
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			get_table:function(that,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					var send_msg ='SELECT concat_ws(\',\',group_name,group_money,group_gold,district_id) As \'solution\' from group_table where alive_flag =1';
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg0){
						cc.log(msg0.data);
						var data0 =new Array();
						var data1 =new Array();
						var group_name_label = new Array();
						var group_money_label = new Array();
						var group_gold_label = new Array();
						var group_district_label = new Array();
						data0.length = 0;
						data0 = msg0.data.split(";");
						for(var i =0;i<data0.length;i++){
							data1.length = 0;
							data1 = data0[i].split(",");
							group_name_label[i] = new cc.LabelTTF(data1[0], "Arial", 25);
							group_name_label[i].attr({
								
								x:that.size.width/2-150,
								y:that.size.height/2+200-20*i,

							});
							group_name_label[i].setColor(cc.color(255,255,255));
							that.addChild(group_name_label[i], 1);	
							
							group_money_label[i] = new cc.LabelTTF(data1[1], "Arial", 25);
							group_money_label[i].attr({
													
								x:that.size.width/2-50,
								y:that.size.height/2+200-20*i,

							});
							group_money_label[i].setColor(cc.color(255,255,255));
							that.addChild(group_money_label[i], 1);
							
							group_gold_label[i] = new cc.LabelTTF(data1[2], "Arial", 25);
							group_gold_label[i].attr({
													
								x:that.size.width/2+50,
								y:that.size.height/2+200-20*i,

							});
							group_gold_label[i].setColor(cc.color(255,255,255));
							that.addChild(group_gold_label[i], 1);
							
							group_district_label[i] = new cc.LabelTTF(data1[3], "Arial", 25);
							group_district_label[i].attr({
													
								x:that.size.width/2+150,
								y:that.size.height/2+200-20*i,

							});
							group_district_label[i].setColor(cc.color(255,255,255));
							that.addChild(group_district_label[i], 1);
						}	
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			get_result:function(that,arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					var send_msg ='SELECT concat_ws(\',\',group_name,group_money,group_gold,alive_flag,end_flag) As \'solution\' from group_table ';
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg0){
						cc.log(msg0.data);
						var data0 =new Array();
						var data1 =new Array();
						var group_name_label = new Array();
						var group_money_label = new Array();
						var group_gold_label = new Array();
						var money = 0;
						var _status = null;
						data0.length = 0;
						data0 = msg0.data.split(";");
						for(var i =0;i<data0.length;i++){
							data1.length = 0;
							data1 = data0[i].split(",");
							group_name_label[i] = new cc.LabelTTF(data1[0], "Arial", 24);
							group_name_label[i].attr({
								
								x:that.size.width/2-125,
								y:that.size.height/2+200-25*i,

							});
							group_name_label[i].setColor(cc.color(255,255,255));
							that.addChild(group_name_label[i], 1);	
							if(parseInt(data1[4])>0){
								_status = "回到大本营";
								if(parseInt(data1[4]) ==1){
									money = (parseInt(data1[1])+parseInt(data1[2])*100);
								}
								if(parseInt(data1[4]) ==2){
									money = (parseInt(data1[1])+parseInt(data1[2])*90);
								}
								if(parseInt(data1[4]) ==3){
									money = (parseInt(data1[1])+parseInt(data1[2])*85);
								}
								if(parseInt(data1[4]) ==4){
									money = (parseInt(data1[1])+parseInt(data1[2])*80);
								}
								if(parseInt(data1[4]) >4){
									money = (parseInt(data1[1])+parseInt(data1[2])*75);
								}
							}else{
								money = data1[1];
								if(data1[3]==1){
									_status = "未回到大本营";
								}else{
									_status = "葬身沙漠";
								}
								
							}
							group_money_label[i] = new cc.LabelTTF(money, "Arial", 24);
								group_money_label[i].attr({
														
									x:that.size.width/2,
									y:that.size.height/2+200-25*i,

							});
							group_money_label[i].setColor(cc.color(255,255,255));
							that.addChild(group_money_label[i], 1);
							
							group_gold_label[i] = new cc.LabelTTF(_status, "Arial", 24);
							group_gold_label[i].attr({
													
								x:that.size.width/2+125,
								y:that.size.height/2+200-25*i,

							});
							group_gold_label[i].setColor(cc.color(255,255,255));
							that.addChild(group_gold_label[i], 1);
							
							
						}	
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			set_end_num:function(arg){
				if (!this.isInit[arg]){
					cc.log('Network3'+arg+' is not inited...');
				}else if(this.socket[arg].readyState == Websocket3.OPEN){
					var send_msg ='SELECT finshed_group_num As \'solution\' from team_day_table where team_name=\''+Global.getInstance().team_name+'\'' ;
					this.socket[arg].send(send_msg);
					this.socket[arg].onmessage = function(msg){
						str1 = 'UPDATE group_table SET end_flag = '+(parseInt(msg.data)+1)+' WHERE group_name = \''+Global.getInstance().group_name+'\'';		
						Popub_event.getInstance().update(str1);
						str2 = 'UPDATE team_day_table SET finshed_group_num = finshed_group_num+1 WHERE team_name = \''+Global.getInstance().team_name+'\'';		
						Popub_event.getInstance().update(str2);
					}
				}else{
					cc.log('Network3'+arg+' Websocket readState:'+this.socket[arg].readyState);
				}
			},
			close:function(){
				if (this.socket[arg]){
					cc.log("Network3'+arg+' close...");
					this.socket[arg].close();
					this.socket[arg] = null;
				}
			}
		};
		return networkInstance;
	};
 

	return {
		getInstance:function(){
			if(instance === null){
				instance = getNetworkInstance();
			}
			return instance;
		}
	};
})();