var shopBox = cc.LayerColor.extend({  
	size : null,
    _listener: null, 	
	data :null,
	weather: null,
	group_name:0,
	day_num:0,
	district_id:0,
    ctor: function(num) { 
		
		
		this.size = cc.winSize;
		
		this.district_id = num;
		
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

        var bg = new cc.Sprite(res.shop_bg_png);  

        bg.setPosition(cc.p(this.size.width , this.size.height ));  

        this.addChild(bg, 0, 104);  
		if(this.district_id =='16' ||this.district_id == '21'||Global.getInstance().allow_get_water =='1'){
			//水
			var water_label = new cc.LabelTTF("水：", "Arial", 30);
			water_label.attr({
				x:this.size.width/2-320,
				y:this.size.height/2+50,
				anchorX :1,
			});
			water_label.setColor(cc.color(0,0,0));
			bg.addChild(water_label, 1);
			
			water_input = new cc.EditBox(cc.size(this.size.width/8-10,40),new cc.Scale9Sprite(res.shop_input_png));
			water_input.setName("water");
			water_input.setPosition(this.size.width/2-250,this.size.height/2+50);
			water_input.setDelegate(this);
			water_input.fontSize = 20;
			water_input.fontColor = cc.color(0, 0, 0);
			water_input.maxLength = 3;
			water_input.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
			water_input.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
			water_input.tag = 301;
			bg.addChild(water_input);
			//购买 
 
			var buyMenuItem = new cc.MenuItemImage(res.shop_buy_btn1_png, res.shop_buy_btn2_png, this._onCallback1, this);  

			buyMenuItem.setPosition(cc.p(95, 80));  
	
			//Cancel按钮  
			
			var cancelMenuItem = new cc.MenuItemImage(res.shop_close_btn1_png, res.shop_close_btn2_png, this._onCallback2, this);  

			cancelMenuItem.setPosition(cc.p(250, 80));  
			
			 //菜单  

			var menu = new cc.Menu(buyMenuItem,cancelMenuItem);  

			menu.setPosition(cc.p(0, 0));  

			bg.addChild(menu);      //注意是添加到背景里面  
		}else
		if(this.district_id =='38'){
			//金子
			var gold_label = new cc.LabelTTF("金子：", "Arial", 30);
			gold_label.attr({
				x:this.size.width/2-320,
				y:this.size.height/2+50,
				anchorX :1,
			});
			gold_label.setColor(cc.color(0,0,0));
			bg.addChild(gold_label, 1);
			
			gold_input = new cc.EditBox(cc.size(this.size.width/8-10,40),new cc.Scale9Sprite(res.shop_input_png));
			gold_input.setName("gold");
			gold_input.setPosition(this.size.width/2-250,this.size.height/2+50);
			gold_input.setDelegate(this);
			gold_input.fontSize = 20;
			gold_input.fontColor = cc.color(0, 0, 0);
			gold_input.maxLength = 3;
			gold_input.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
			gold_input.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
			gold_input.tag = 305;
			bg.addChild(gold_input);
			if(Global.getInstance().allow_mountain_get_water ==1){
				//水
				var water_label = new cc.LabelTTF("水：", "Arial", 30);
				water_label.attr({
					x:this.size.width/2-320,
					y:this.size.height/2,
					anchorX :1,
				});
				water_label.setColor(cc.color(0,0,0));
				bg.addChild(water_label, 1);
				
				water_input = new cc.EditBox(cc.size(this.size.width/8-10,40),new cc.Scale9Sprite(res.shop_input_png));
				water_input.setName("water");
				water_input.setPosition(this.size.width/2-250,this.size.height/2);
				water_input.setDelegate(this);
				water_input.fontSize = 20;
				water_input.fontColor = cc.color(0, 0, 0);
				water_input.maxLength = 3;
				water_input.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
				water_input.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
				water_input.tag = 301;
				bg.addChild(water_input);	
				
			}
			//购买 
 
				var buyMenuItem = new cc.MenuItemImage(res.shop_buy_btn1_png, res.shop_buy_btn2_png, this._onCallback1, this);  

				buyMenuItem.setPosition(cc.p(95, 80));  
				
				//Cancel按钮  
				
				var cancelMenuItem = new cc.MenuItemImage(res.shop_close_btn1_png, res.shop_close_btn2_png, this._onCallback2, this);  

				cancelMenuItem.setPosition(cc.p(250, 80));  
				//菜单  

				var menu = new cc.Menu(buyMenuItem,cancelMenuItem);  

				menu.setPosition(cc.p(0, 0));  

				bg.addChild(menu);      //注意是添加到背景里面  
		}else
		if(this.district_id =='1'||this.district_id =='12'||this.district_id =='19'||this.district_id =='31'||this.district_id =='33'||this.district_id =='35'||this.district_id =='36'){
			//水
			var water_label = new cc.LabelTTF("水：", "Arial", 30);
			water_label.attr({
				x:this.size.width/2-320,
				y:this.size.height/2+50,
				anchorX :1,
			});
			water_label.setColor(cc.color(0,0,0));
			bg.addChild(water_label, 1);
			
			water_input = new cc.EditBox(cc.size(this.size.width/8-10,40),new cc.Scale9Sprite(res.shop_input_png));
			water_input.setName("water");
			water_input.setPosition(this.size.width/2-250,this.size.height/2+50);
			water_input.setDelegate(this);
			water_input.fontSize = 20;
			water_input.fontColor = cc.color(0, 0, 0);
			water_input.maxLength = 3;
			water_input.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
			water_input.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
			water_input.tag = 301;
			bg.addChild(water_input);
			//食物
			var food_label = new cc.LabelTTF("食物：", "Arial", 30);
			food_label.attr({
				x:this.size.width/2-320,
				y:this.size.height/2,
				anchorX :1,
			});
			food_label.setColor(cc.color(0,0,0));
			bg.addChild(food_label, 1);
			
			food_input = new cc.EditBox(cc.size(this.size.width/8-10,40),new cc.Scale9Sprite(res.shop_input_png));
			food_input.setName("food");
			food_input.setPosition(this.size.width/2-250,this.size.height/2);
			food_input.setDelegate(this);
			food_input.fontSize = 20;
			food_input.fontColor = cc.color(0, 0, 0);
			food_input.maxLength = 3;
			food_input.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
			food_input.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
			food_input.tag = 302;
			bg.addChild(food_input);

			if(this.district_id == '1'){
				//帐篷
				var tent_label = new cc.LabelTTF("帐篷：", "Arial", 30);
				tent_label.attr({
					x:this.size.width/2-320,
					y:this.size.height/2-50,
					anchorX :1,
				});
				tent_label.setColor(cc.color(0,0,0));
				bg.addChild(tent_label, 1);
				
				tent_input = new cc.EditBox(cc.size(this.size.width/8-10,40),new cc.Scale9Sprite(res.shop_input_png));
				tent_input.setName("tent");
				tent_input.setPosition(this.size.width/2-250,this.size.height/2-50);
				tent_input.setDelegate(this);
				//userid.setMaxlength(20);
				tent_input.fontSize = 20;
				tent_input.fontColor = cc.color(0, 0, 0);
				tent_input.maxLength = 3;
				tent_input.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
				tent_input.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
				tent_input.tag = 303;
				bg.addChild(tent_input);
				//指南针
				var compass_label = new cc.LabelTTF("指南针：", "Arial", 30);
				compass_label.attr({
					x:this.size.width/2-320,
					y:this.size.height/2-100,
					anchorX :1,
				});
				compass_label.setColor(cc.color(0,0,0));
				bg.addChild(compass_label, 1);
				
				compass_input = new cc.EditBox(cc.size(this.size.width/8-10,40),new cc.Scale9Sprite(res.shop_input_png));
				compass_input.setName("compass");
				compass_input.setPosition(this.size.width/2-250,this.size.height/2-100);
				compass_input.setDelegate(this);
				//userid.setMaxlength(20);
				compass_input.fontSize = 20;
				compass_input.fontColor = cc.color(0, 0, 0);
				compass_input.maxLength = 3;
				compass_input.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
				compass_input.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
				compass_input.tag = 304;
				bg.addChild(compass_input);
			}
			//购买 
 
			var buyMenuItem = new cc.MenuItemImage(res.shop_buy_btn1_png, res.shop_buy_btn2_png, this._onCallback1, this);  

			buyMenuItem.setPosition(cc.p(95, 80));  
			
			//Cancel按钮  
			
			var cancelMenuItem = new cc.MenuItemImage(res.shop_close_btn1_png, res.shop_close_btn2_png, this._onCallback2, this);  

			cancelMenuItem.setPosition(cc.p(250, 80));  
			//菜单  

			var menu = new cc.Menu(buyMenuItem,cancelMenuItem);  

			menu.setPosition(cc.p(0, 0));  

			bg.addChild(menu);      //注意是添加到背景里面  
		
		}else{
			var water_label = new cc.LabelTTF("当前没有东\n西可以购买", "Arial", 30);
			water_label.attr({
				x:this.size.width/2-225,
				y:this.size.height/2,
				anchorX :1,
			});
			water_label.setColor(cc.color(0,0,0));
			bg.addChild(water_label, 1);
			
			//Cancel按钮  
		
			var cancelMenuItem = new cc.MenuItemImage(res.shop_close_btn1_png, res.shop_close_btn2_png, this._onCallback2, this);  

			cancelMenuItem.setPosition(cc.p(180, 80));  
			
			//菜单  

			var menu = new cc.Menu(cancelMenuItem);  

			menu.setPosition(cc.p(0, 0));  

			bg.addChild(menu);      //注意是添加到背景里面  

		}	

		
        this.setVisible(false);     //默认设置为不可见  

    },  


	
    _onCallback1: function()  

    {
			if(this.district_id =='16' ||this.district_id == '21'||Global.getInstance().allow_get_water =='1'){
				if(parseInt('0'+this.getChildByTag(104).getChildByTag(301).getText())<0){
					alert("请输入正确数！");
				}else{
					Day_switch_data.getInstance().buy('0'+this.getChildByTag(104).getChildByTag(301).getText()+',0,0,0',Global.getInstance().group_name,Global.getInstance().Day_num,0);
				}
				
			}else
			if(this.district_id =='12'||this.district_id =='19'||this.district_id =='31'||this.district_id =='33'||this.district_id =='35'||this.district_id =='36'){
				if(parseInt('0'+this.getChildByTag(104).getChildByTag(301).getText())<0||parseInt('0'+this.getChildByTag(104).getChildByTag(302).getText())<0){
					alert("请输入正确数！");
				}else{
					Day_switch_data.getInstance().buy('0'+this.getChildByTag(104).getChildByTag(301).getText()+","+'0'+this.getChildByTag(104).getChildByTag(302).getText()+',0,0',Global.getInstance().group_name,Global.getInstance().Day_num,0);
				}
			}else
			if(this.district_id =='1'){
				if(parseInt('0'+this.getChildByTag(104).getChildByTag(301).getText())<0||parseInt('0'+this.getChildByTag(104).getChildByTag(302).getText())<0||parseInt('0'+this.getChildByTag(104).getChildByTag(303).getText())<0||parseInt('0'+this.getChildByTag(104).getChildByTag(304).getText())<0){
					alert("请输入正确数！");
				}else{
					Day_switch_data.getInstance().buy('0'+this.getChildByTag(104).getChildByTag(301).getText()+","+'0'+this.getChildByTag(104).getChildByTag(302).getText()+','+'0'+this.getChildByTag(104).getChildByTag(303).getText()+','+'0'+this.getChildByTag(104).getChildByTag(304).getText(),Global.getInstance().group_name,Global.getInstance().Day_num,0);
				}
			}else
				if(this.district_id =='38'){
					if(Global.getInstance().allow_mountain_get_water ==1){
						if(parseInt('0'+this.getChildByTag(104).getChildByTag(301).getText())<0||parseInt('0'+this.getChildByTag(104).getChildByTag(305).getText())<0)
						{
							alert("请输入正确数！");
						}else{
							Day_switch_data.getInstance().buy('gold,'+this.getChildByTag(104).getChildByTag(305).getText()+',water,'+this.getChildByTag(104).getChildByTag(301).getText(),Global.getInstance().group_name,Global.getInstance().Day_num,0);
						}
					}else{
						if(parseInt('0'+this.getChildByTag(104).getChildByTag(305).getText())<0)
						{
							alert("请输入正确数！");
						}else
						if(parseInt('0'+this.getChildByTag(104).getChildByTag(305).getText())>50){
							alert("每天最多采矿量为50斤！")
						}else{
							Day_switch_data.getInstance().buy('gold,'+this.getChildByTag(104).getChildByTag(305).getText()+',water,0',Global.getInstance().group_name,Global.getInstance().Day_num,0);
						}
					}
				}else{
				Day_switch_data.getInstance().buy('0,0,0,0',Global.getInstance().group_name,Global.getInstance().Day_num,0);
			}
			this.hidden();  

    },  
    _onCallback2: function()  

    {  
		
			this.hidden();  
		
		
    }, 
	

   	

    //弹出  

    popup: function()  

    {  
		this.setVisible(true);  

		this._listener.setSwallowTouches(true);  

		var bg = this.getChildByTag(104);  
		
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

