
 
var Global  = (function(){
	var instance = null;
	function Global_Instance (){
		var Global_Instance = {
			user_name:null,
			group_name:0,
			Day_num:0,
			district_id:0,
			team_name:null,
			user_chracter:0,
			group_money:0,
			group_camel:0,
			group_max_camel:0,
			group_compass:0,
			group_tent:0,
			group_water:0,
			group_gold:0,
			group_food:0,
			weather:null,
			lost_flag:0,
			nowscene:null,
			changewater:0,
			changefood:0,
			allow_get_water:0,
			allow_mountain_get_water:0,
			end_flag:0,
			stay_flag:0,
		init:function(){
			this.group_name='rocket';
			this.Day_num=1;
			this.district_id=0;
			this.team_name = '0';
			this.user_chracter = 3;
			this.weather='none';
		},
		get_group_name:function(){
			return group_name;
		}	


		};
		return Global_Instance;
	};
 
	return {
		getInstance:function(){
			if(instance === null){
				instance = Global_Instance();
			}
			return instance;
		}
	};
})();