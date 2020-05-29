
var Random_event  = (function(){
	var instance = null;
	function get_Random_event_Instance (){
		var Random_event_Instance = {
			//随机事件		
			Random:function(select_data,num_text,group_name,day_num,that){
				var num = new Array();
				num = num_text.split(",");
				var layer1 = new eventBox(that);	
				that.addChild(layer1);
				if(select_data =="old_man"){
					if(num[0] =='0'){
						var Text ="沙尘暴只在王陵和沙漠\n出现，两次沙尘暴之间\n的间隔为6天，每次沙\n尘暴持续时间为2-3天，\n村庄和大山从不受沙尘\n暴影响。";
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						num[2] = '1';
						Text2 = num[0]+','+num[1]+','+num[2]+','+num[3];
						Popub_event.getInstance().save_advice_num(group_name,Text2);
						return true;
					}

					if(num[2] =='0'){
						var Text ="王陵隔天会遭遇一次\n沙尘暴，高温出现在王\n陵时，也会袭击沙漠。\n指南针数量+1！";
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						num[1] = '1';
						Text2 = num[0]+','+num[1]+','+num[2]+','+num[3];
						Popub_event.getInstance().save_advice_num(group_name,Text2);
						Day_switch_data.getInstance().limit_sth_update_sth(group_name,1,day_num,'compass',1,0);
						return true;
					}
					if(num[3] =='0'){
						var Text ="沙漠和王陵每四天出现\n一次高温，每次高温持\n续1天，当沙漠遭遇高\n温时，王陵同样也会遭\n遇，但村庄和大山从不\n受影响。";
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						num[3] = '1';
						Text2 = num[0]+','+num[1]+','+num[2]+','+num[3];
						Popub_event.getInstance().save_advice_num(group_name,Text2);
						return true;
					}
					if(num[4] =='0'){
						var Text = "大山中有绿洲一处，到\n大山会触发事件，可以\n免费获取尽可能多的水！\n（仅一次）";
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						num[0] = '1';
						var str = 'UPDATE group_table SET allow_mountain_get_water=1 WHERE group_name = '+Global.getInstance().group_name;
						Popub_event.getInstance().update(str);
						Text2 = num[0]+','+num[1]+','+num[2]+','+num[3];
						Popub_event.getInstance().save_advice_num(group_name,Text2);
						return true;
					}
						layer1.onEnter();
						layer1.set_text("null");
						layer1.popup();
						return true;
				}
				if(select_data =="Wang_Lin"){
					var radom_num = Math.floor(Math.random()*9+1);
					cc.log(radom_num);
					if(radom_num == 1){
						var Text ="由于你们的虔诚，王陵\n的主人将你们的10篮食\n物变成10斤金子（食物\n-10，金子+10。）";
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						//调用事件
						Day_switch_data.getInstance().limit_sth_update_sth(group_name,10,day_num,'gold',1,0);
						Day_switch_data.getInstance().limit_sth_update_sth(group_name,-10,day_num,'food',1,1);
						
						
					}
					if(radom_num == 2){
						var Text ="恭喜你们在王陵内部发\n现了隐藏的绿洲。（你\n们可以免费取水了）";
						var str = 'UPDATE group_table SET allow_get_water=1 WHERE group_name = \''+Global.getInstance().group_name+'\'';
						Popub_event.getInstance().update(str);
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						//取水事件
					}
					if(radom_num == 3){
						var Text ="恭喜你们在王陵找到了\n一只迷路的骆驼，你们\n骆驼的运输能力增强！\n（运输能力+200斤）";
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						//增加骆驼事件
						Day_switch_data.getInstance().limit_sth_update_sth(group_name,200,day_num,'max_camel',1,0);
					}
					if(radom_num == 4){
						var Text ="你们进入王陵时大门自\n动关上，在内部找到5斤\n金子，但是推开大门需\n要一天时间。（金子+5，\n在王陵多待一天且不能触\n发随机事件。）";
						Global.getInstance().nowscene = new jumpScene7();
						Global.getInstance().stay_flag = 1;
						var str = 'UPDATE group_table SET stay_flag=1 WHERE group_name = \''+Global.getInstance().group_name+'\'';
						Popub_event.getInstance().update(str);
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						//事件
						Day_switch_data.getInstance().limit_sth_update_sth(group_name,5,day_num,'gold',1,0);
					}
					if(radom_num == 5){
						var Text ="你们在王陵什么也没发\n现，空手而回！（什么\n也没有发生）";
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
					}
					if(radom_num == 6){
						var Text = "你们进入王陵后收到了\n诅咒，所有东西无法移\n动，队伍中有人会破解，\n但是破解需要花费一天。\n（在王陵多待一天且不能\n触发随机事件。）";
						Global.getInstance().nowscene = new jumpScene7();
						Global.getInstance().stay_flag = 1;
						var str = 'UPDATE group_table SET stay_flag=1 WHERE group_name = \''+Global.getInstance().group_name+'\'';
						Popub_event.getInstance().update(str);
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						//事件
					}
					if(radom_num == 7){
						var Text = "你们进入王陵后发现都\n是刺猬，一不小心，部\n分水袋破了。（你们队\n伍的水-5）";
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						//事件
						Day_switch_data.getInstance().limit_sth_update_sth(group_name,-5,day_num,'water',1,0);
					}
					if(radom_num == 8){
						var Text = "很不幸你们的队伍在王\n陵遇见了沙匪，为了能\n够逃跑，你们扔掉了一\n些食物和水。（你们队\n伍的食物-10，水-3。）";
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						//事件
						Day_switch_data.getInstance().limit_sth_update_sth(group_name,-10,day_num,'food',1,0);
						Day_switch_data.getInstance().limit_sth_update_sth(group_name,-3,day_num,'water',1,1);
					}
					if(radom_num == 9){
						var Text = "你们到了王陵，发现了\n一片秘密的果园。（你\n们队伍的食物+15。）";
						layer1.onEnter();
						layer1.set_text(Text);
						layer1.popup();
						//事件
						Day_switch_data.getInstance().limit_sth_update_sth(group_name,15,day_num,'food',1,0);
					}
				}
																																
			}
			
		}		
		return Random_event_Instance;
	};
 
 
	return {
		getInstance:function(){
			if(instance === null){
				instance = get_Random_event_Instance();
			}
			return instance;
		}
	};
})();