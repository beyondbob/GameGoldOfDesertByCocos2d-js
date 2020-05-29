var WebSocket1 = WebSocket || window.WebSocket || window.MozWebSocket;
 
 
var Network  = (function(){
	var instance = null;
	function getNetworkInstance (){
		var networkInstance = {
			socket1:null,
			isInit1:false,
			initNetwork:function(){
				cc.log('Network1 initSocket...');
				this.host1 = "ws://localhost:3000";
				this.testhost1 = "ws://echo.websocket.org";
				this.socket1 = new WebSocket1(this.host1);
				var self1 = this;
				this.socket1.onopen = function(evt){
					cc.log('Network1 onopen...');
					//utils.outObj(evt);
					self1.isInit1 = true;
				};
				
				this.socket1.onmessage = function(evt){
					var data = evt.data;
					cc.log('Network1 onmessage...');
					//utils.outObj(evt);
				};
				
				this.socket1.onerror = function(evt){
					cc.log('Network1 onerror...');
					//utils.outObj(evt);
				};
				
				this.socket1.onclose = function(evt){
					cc.log('Network1 onclose...');
					//utils.outObj(evt);
					this.isInit1 = false;
				};
			},
			send:function(data){
				if (!this.isInit1){
					cc.log('Network1 is not inited...');
				}else if(this.socket1.readyState == WebSocket1.OPEN){
					cc.log('Network1 send:'+data);
					this.socket1.send(data);
					this.socket1.onmessage = function(msg){
						cc.log(msg.data+"1");
						var str = new Array();
						str.length = 0;
						if(msg.data=="false"){
							alert("用户名或密码错误！");
						}else {
							str = msg.data.split(",");
							var data = new Array();
							data.length = 0;
							data = msg.data.split(",");
							//获得的分别为user_chracter,group_name,team_name
							Global.getInstance().team_name = data[2];
							if(data[1]=='0'){
								Day_switch_data.getInstance().update_day(data[2],0,0);
								
							}else
							if(data[0]=='0'){
								alert("角色没有职位！");
							}else
							if(data[0]=='1'){
								Global.getInstance().group_name = data[1];
								Global.getInstance().user_chracter = data[0];
								Day_switch_data.getInstance().update_day(data[1],1,0);
							}else
							if(data[0]=='2'){
								Global.getInstance().group_name = data[1];
								Global.getInstance().user_chracter = data[0];
								Day_switch_data.getInstance().update_day(data[1],2,0);
							}else
							if(data[0]=='3'){
								Global.getInstance().group_name = data[1];
								Global.getInstance().user_chracter = data[0];
								Day_switch_data.getInstance().update_day(data[1],3,0);
							}
						}
					}
				}else{
					cc.log('Network1 WebSocket readState:'+this.socket1.readyState);
				}
			},
			close:function(){
				if (this.socket1){
					cc.log("Network1 close...");
					this.socket1.close();
					this.socket1 = null;
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