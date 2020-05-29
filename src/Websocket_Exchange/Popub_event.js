var WebSocket4 = WebSocket || window.WebSocket || window.MozWebSocket;
 
 
var Popub_event  = (function(){
	var instance = null;
	function getNetworkInstance (){
		var networkInstance = {
			socket4:null,
			isInit4:false,
			initNetwork:function(){
				cc.log('Network4 initsocket4...');
				this.host4 = "ws://localhost:3003";
				this.testhost4 = "ws://echo.websocket.org";
				this.socket4 = new WebSocket4(this.host4);
				var self = this;
				this.socket4.onopen = function(evt){
					cc.log('Network4 onopen...');
					//utils.outObj(evt);
					self.isInit4 = true;
				};
				
				this.socket4.onmessage = function(evt){
					var data = evt.data;
					cc.log('Network4 onmessage...');
					//utils.outObj(evt);
				};
				
				this.socket4.onerror = function(evt){
					cc.log('Network4 onerror...');
					//utils.outObj(evt);
				};
				
				this.socket4.onclose = function(evt){
					cc.log('Network4 onclose...');
					//utils.outObj(evt);
					this.isInit4 = false;
				};
			},
			save_advice_num:function(group_name,Text){
				if (!this.isInit4){
					cc.log('Network4 is not inited...');
				}else if(this.socket4.readyState == WebSocket4.OPEN){
					cc.log('Network4 send:'+group_name);
					var send_msg = 'UPDATE group_table SET advice_num = \''+Text+ '\' WHERE group_name = \''+group_name+'\'';
					this.socket4.send(send_msg);
					
				}else{
					cc.log('Network4 Websocket readState:'+this.socket4.readyState);
				}
			},
			save_old_man_or_advice_flag:function(group_name,day_num,num){
				if (!this.isInit4){
					cc.log('Network4 is not inited...');
				}else if(this.socket4.readyState == WebSocket4.OPEN){
					cc.log('Network4 send:'+group_name);
					if(num =='1'){
						var send_msg = 'UPDATE time_table SET old_man = 1 WHERE group_name = \''+group_name+'\' and day_num ='+day_num;
					}
					if(num =='2'){
						var send_msg = 'UPDATE time_table SET wang_lin = 1 WHERE group_name = \''+group_name+'\' and day_num ='+day_num;
					}
					this.socket4.send(send_msg);
					
				}else{
					cc.log('Network4 Websocket readState:'+this.socket4.readyState);
				}
			},
			update_sth:function(group_name,num,day_num,sth){
				cc.log(sth);
				var send_msg1 = 'UPDATE group_table SET group_'+sth+' = group_'+sth+'+'+num+' WHERE group_name = \''+group_name+'\'';
				this.update(send_msg1);	
				var send_msg2 = 'UPDATE time_table SET '+sth+'_changenum = '+sth+'_changenum+'+num+' WHERE group_name = \''+group_name+'\' and day_num = '+day_num;			
				this.update(send_msg2);
			},
			update:function(Text){
				if (!this.isInit4){
					cc.log('Network4 is not inited...');
				}else if(this.socket4.readyState == WebSocket4.OPEN){
					cc.log('Network4 send:'+Text);
					var send_msg = Text;
					this.socket4.send(send_msg);
					
				}else{
					cc.log('Network4 Websocket readState:'+this.socket4.readyState);
				}				
			},
			change_group_day:function(day_num,group_name){
				if (!this.isInit4){
					cc.log('Network4 is not inited...');
				}else if(this.socket4.readyState == WebSocket4.OPEN){
					cc.log('Network4 send:'+day_num);
					var send_msg = 'UPDATE group_table SET group_now_day = '+day_num+' WHERE group_name = \''+group_name+'\'';
					this.socket4.send(send_msg);
						
					
				}else{
					cc.log('Network4 Websocket readState:'+this.socket4.readyState);
				}				
			},
			change_day:function(day_num,team_name){
				if (!this.isInit4){
					cc.log('Network4 is not inited...');
				}else if(this.socket4.readyState == WebSocket4.OPEN){
					cc.log('Network4 send:'+day_num);
					var send_msg = 'UPDATE team_day_table SET now_day = '+day_num+' WHERE team_name = \''+team_name+'\'';
					this.socket4.send(send_msg);
					Global.getInstance().Day_num = day_num;
					cc.director.runScene(new cc.TransitionFade(1,new InterfaceScene()));
						
					
				}else{
					cc.log('Network4 Websocket readState:'+this.socket4.readyState);
				}				
			},
			set_weather:function(terrain_id,weather_id){
				if (!this.isInit4){
					cc.log('Network4 is not inited...');
				}else if(this.socket4.readyState == WebSocket4.OPEN){
					cc.log('Network4 send:'+terrain_id+','+weather_id);
					var send_msg = 'UPDATE district_weather_table SET district_weather = '+weather_id+' WHERE terrain = '+terrain_id;
					this.socket4.send(send_msg);
				}else{
					cc.log('Network4 Websocket readState:'+this.socket4.readyState);
				}
			},
			add_group_time_table:function(group_name,day_id,team_name){
				if (!this.isInit4){
					cc.log('Network4 is not inited...');
				}else if(this.socket4.readyState == WebSocket4.OPEN){
					cc.log('Network4 send:'+day_id);
					var send_msg = 'INSERT INTO `time_table` (`group_name`, `day_num`, `team_name`) VALUES(\''+group_name+'\', '+day_id+',\''+team_name+'\')';
					this.socket4.send(send_msg);
				}else{
					cc.log('Network4 Websocket readState:'+this.socket4.readyState);
				}
				
			},
			save_user:function(Text){
				if (!this.isInit4){
					cc.log('Network4 is not inited...');
				}else if(this.socket4.readyState == WebSocket4.OPEN){
					var data = new Array();
					data.length = 0;
					data = Text.split(",");
					if(data[2]=='yes'){
						var send_msg = 'INSERT INTO `user_table` (`user_name`, `user_pwd` ,`group_name`,`user_chracter`) VALUES('+'\''+data[0]+'\''+', '+'\''+data[1]+'\', 0,0)';
					}else{
						var send_msg = 'INSERT INTO `user_table` (`user_name`, `user_pwd`) VALUES('+'\''+data[0]+'\''+', '+'\''+data[1]+'\')';
					}			
					this.socket4.send(send_msg);
				}else{
					cc.log('Network4 Websocket readState:'+this.socket4.readyState);
				}
			},

			close:function(){
				if (this.socket4){
					cc.log("Network4 close...");
					this.socket4.close();
					this.socket4 = null;
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