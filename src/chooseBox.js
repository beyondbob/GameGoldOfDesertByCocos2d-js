var chooseBox = cc.LayerColor.extend({  
	size : null,
    _listener: null, 	
	data :null,
	weather: null,
	group_name:0,
	day_num:0,
    ctor: function(weather,group_name,day_num,that) { 
		this.data = that;
		
		this.group_name =group_name;
		
		this.day_num =day_num;
		
		this.size = cc.winSize;
		
		this.weather = weather;
		
        this._super(cc.color.BLACK);  

        this.ignoreAnchorPointForPosition(false);   //忽略锚点设置为false，默认为true，锚点(0, 0)  

        this.setOpacity(0);       //透明度  

   

        //初始化对话框  

        this._initDialog();  

   

        return true;  

    },  

   

    onEnter: function()  

    {  

        this._super();  

        //监听器  

        this._listener = new cc.EventListener.create({  

            event: cc.EventListener.TOUCH_ONE_BY_ONE,  

            swallowTouches: false,  

            onTouchBegan: function(touch, event)  

            {  

                return true;  

            }  

        });  

   

        //添加触摸监听  

        cc.eventManager.addListener(this._listener, this);  

    },  

    //初始化对话框  

    _initDialog: function()  

    {  

        //背景  

        var bg = new cc.Sprite(res.event_bg_png);  

        bg.setPosition(cc.p(this.size.width , this.size.height ));  

        this.addChild(bg, 0, 103);  
		
		//提示
		if(this.weather =='sand_storm'){
			var advice =new cc.LabelTTF("当前区域天气为沙尘暴,\n是否使用指南针或者帐篷。\n(如不使用则停止前进并迷\n路3天!)", "Arial", 23);
		}
		if(this.weather =='hot_sand_storm'){
			var advice =new cc.LabelTTF("当前区域天气为高温和沙\n尘暴,是否使用指南针或\n者帐篷。(如不使用则停\n止前进并迷路3天!)", "Arial", 23);
		}			
		advice.setPosition(cc.p(170, 235));  
		advice.setColor(cc.color(100,149,237));
		bg.addChild(advice);
		
        //帐篷 
 
        var tentMenuItem = new cc.MenuItemImage(res.tent_btn1_png, res.tent_btn2_png, this._onCallback1, this);  

		tentMenuItem.setPosition(cc.p(95, 70));  

		//指南针
	
        var compassMenuItem = new cc.MenuItemImage(res.compass_btn1_png, res.compass_btn2_png, this._onCallback2, this);  

        compassMenuItem.setPosition(cc.p(225, 70));  
		

        //Cancel按钮  

        var cancelLabel = new cc.Sprite(res.event_quit_png);  

        var cancelMenuItem = new cc.MenuItemLabel(cancelLabel, this._onCallback3, this);  

        cancelMenuItem.setPosition(cc.p(325, 375));  

   

        //菜单  

        var menu = new cc.Menu(tentMenuItem,compassMenuItem ,cancelMenuItem);  

        menu.setPosition(cc.p(0, 0));  

        bg.addChild(menu);      //注意是添加到背景里面  

   

        this.setVisible(false);     //默认设置为不可见  

    },  


	
    _onCallback1: function()  

    {  
		if(Global.getInstance().group_tent<1){
			alert("帐篷数量不足!");
		}
		else{
			if(this.weather =='sand_storm'){
			Global.getInstance().changewater = -1;
			Global.getInstance().changefood = -1;
			Day_switch_data.getInstance().limit_sth_update_sth(this.group_name,-1,this.day_num,'tent',0,2);
			this.data.getChildByTag(202).string=": "+(parseInt(Global.getInstance().group_tent)-1);
			this.data.getChildByTag(204).string=": "+((parseInt(Global.getInstance().group_camel)-60)/1000)+'K'+"/"+Global.getInstance().group_max_camel/1000+"K";
			}
			if(this.weather =='hot_sand_storm'){
				Global.getInstance().changewater = -3;
				Global.getInstance().changefood = -1;
			    Day_switch_data.getInstance().limit_sth_update_sth(this.group_name,-1,this.day_num,'tent',0,2);
				this.data.getChildByTag(202).string=": "+(parseInt(Global.getInstance().group_tent)-1);
				this.data.getChildByTag(204).string=": "+((parseInt(Global.getInstance().group_camel)-60)/1000)+'K'+"/"+Global.getInstance().group_max_camel/1000+"K";
			}
			this.hidden();  
		}
		

    },  
    _onCallback2: function()  

    {  
		if(Global.getInstance().group_compass<1){
			alert("指南针数量不足!");
		}else{
			if(this.weather =='sand_storm'){
				Global.getInstance().changewater = -2;
				Global.getInstance().changefood = -5;
				Day_switch_data.getInstance().limit_sth_update_sth(this.group_name,-1,this.day_num,'compass',0,2);
				this.data.getChildByTag(206).string=": "+(parseInt(Global.getInstance().group_compass)-1);
				this.data.getChildByTag(204).string=": "+((parseInt(Global.getInstance().group_camel)-10)/1000)+'K'+"/"+Global.getInstance().group_max_camel/1000+"K";
				
			}
			if(this.weather =='hot_sand_storm'){
				Global.getInstance().changewater = -4;
				Global.getInstance().changefood = -5;
				Day_switch_data.getInstance().limit_sth_update_sth(this.group_name,-1,this.day_num,'compass',0,2);
				this.data.getChildByTag(206).string=": "+(parseInt(Global.getInstance().group_compass)-1);
				this.data.getChildByTag(204).string=": "+((parseInt(Global.getInstance().group_camel)-10)/1000)+'K'+"/"+Global.getInstance().group_max_camel/1000+"K";
			}
			this.hidden();  
		}
		
    }, 
	_onCallback3: function()  

    { 
		if(Global.getInstance().group_tent>=1||Global.getInstance().group_compass>=1){
			alert("当前区域天气极端，请\n使用指南针或者帐篷！");
		}else{
			this.data.getChildByTag(400).string = "迷失第1天";
			this.data.getChildByTag(400).setColor(cc.color(255,0,0));
			var str = 'UPDATE group_table SET lost_flag = 3 WHERE group_name = \''+this.group_name+'\'';
			Popub_event.getInstance().update(str);
			Global.getInstance().lost_flag =3;
			if(this.weather =='sand_storm'){
				Global.getInstance().changewater = -4;
				Global.getInstance().changefood = -10;
			}else{
				Global.getInstance().changewater = -8;
				Global.getInstance().changefood = -10;
			}
			this.hidden();  
		}
        

    },  	

    //弹出  

    popup: function()  

    {  

        this.setVisible(true);  

        this._listener.setSwallowTouches(true);  

        var bg = this.getChildByTag(103);  
		
		this.zIndex = 4;

        bg.setScale(0);  

        var scaleTo = new cc.ScaleTo(2.0, 1);  

        var rotateBy = new cc.RotateBy(2.0, 360, 0);  

        var spawn = new cc.Spawn(scaleTo, rotateBy);  

        bg.runAction(spawn);  

    },  
	

    //隐藏  

    hidden: function()  

    {
	
		
        this.setVisible(false);  
        this._listener.setSwallowTouches(false);  
		this.zIndex = -1;

    },  

   

    onExit: function()  

    {  

        this._super();  

        //移除触摸监听  

        cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE, true);  

    }  

});

