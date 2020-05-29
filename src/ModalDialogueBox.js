var ModalDialogueBox = cc.LayerColor.extend({  

    _listener: null, 	
	data :null,
	Nowscene :null,
	district_id : null,
    ctor: function(that) { 
		this.data = that;
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

	
	//增加地形背景
	setDisctrut : function(arg)
	{
		
		if(arg ==0){
			var day_num=Global.getInstance().Day_num;
			this.getChildByTag(101)._children[0].setVisible(true);
			this.getChildByTag(101)._children[1].setVisible(false);
			this.getChildByTag(101)._children[2].setVisible(false);
			this.getChildByTag(101)._children[3].setVisible(false);
			this.getChildByTag(101)._children[4].setVisible(false);
			this.getChildByTag(101)._children[5].setVisible(false);
			if(day_num ==1){
				this.Nowscene = new jumpScene0();	
			}else{
				this.Nowscene = new jumpScene6();	
			}
		}else
		if(arg ==1){
			this.getChildByTag(101)._children[0].setVisible(false);			
			this.getChildByTag(101)._children[1].setVisible(true);
			this.getChildByTag(101)._children[2].setVisible(false);
			this.getChildByTag(101)._children[3].setVisible(false);
			this.getChildByTag(101)._children[4].setVisible(false);
			this.getChildByTag(101)._children[5].setVisible(false);
			this.Nowscene = new jumpScene1();
		}else
		if(arg ==2){
			this.getChildByTag(101)._children[0].setVisible(false);
			this.getChildByTag(101)._children[1].setVisible(false);			
			this.getChildByTag(101)._children[2].setVisible(true);
			this.getChildByTag(101)._children[3].setVisible(false);
			this.getChildByTag(101)._children[3].setVisible(false);
			this.getChildByTag(101)._children[4].setVisible(false);
			this.getChildByTag(101)._children[5].setVisible(false);	
			this.Nowscene = new jumpScene2();			
		}else
		if(arg ==3){
			this.getChildByTag(101)._children[0].setVisible(false);
			this.getChildByTag(101)._children[1].setVisible(false);	
			this.getChildByTag(101)._children[2].setVisible(false);			
			this.getChildByTag(101)._children[3].setVisible(true);
			this.getChildByTag(101)._children[4].setVisible(false);
			this.getChildByTag(101)._children[5].setVisible(false);	
			this.Nowscene = new jumpScene3();
		}else
		if(arg ==4){
			this.getChildByTag(101)._children[0].setVisible(false);
			this.getChildByTag(101)._children[1].setVisible(false);	
			this.getChildByTag(101)._children[2].setVisible(false);
			this.getChildByTag(101)._children[3].setVisible(false);			
			this.getChildByTag(101)._children[4].setVisible(true);
			this.getChildByTag(101)._children[5].setVisible(false);	
			this.Nowscene = new jumpScene4();
		}else{
			this.getChildByTag(101)._children[0].setVisible(false);
			this.getChildByTag(101)._children[1].setVisible(false);	
			this.getChildByTag(101)._children[2].setVisible(false);
			this.getChildByTag(101)._children[3].setVisible(false);
			this.getChildByTag(101)._children[4].setVisible(false);			
			this.getChildByTag(101)._children[5].setVisible(true);
			this.Nowscene = new jumpScene5();
		}

	},

    //初始化对话框  

    _initDialog: function()  

    {  

        var winSize = cc.winSize;  


        //背景  

        var bg = new cc.Sprite(res.Popup_bg_png);  

        bg.setPosition(cc.p(winSize.width , winSize.height ));  

        this.addChild(bg, 0, 101);  
		

		//地形
		var distruct1 = new cc.Sprite(res.start_word_png); 
		distruct1.setPosition(cc.p(winSize.width/4-111.5 , winSize.height/4-12.5 ));
		distruct1.setVisible(false);
		distruct1.tag = 1;
		bg.addChild(distruct1); 
		
		var distruct2 = new cc.Sprite(res.desert_word_png); 
		distruct2.setPosition(cc.p(winSize.width/4-111.5 , winSize.height/4-12.5 ));
		distruct2.setVisible(false);
		distruct2.tag = 2;
		bg.addChild(distruct2); 
		
		var distruct3 = new cc.Sprite(res.oasis_word_png); 
		distruct3.setPosition(cc.p(winSize.width/4-111.5 , winSize.height/4-12.5 ));
		distruct3.setVisible(false);
		distruct3.tag = 3;
		bg.addChild(distruct3); 
		
		var distruct4 = new cc.Sprite(res.village_word_png); 
		distruct4.setPosition(cc.p(winSize.width/4-111.5 , winSize.height/4-12.5 ));
		distruct4.setVisible(false);
		distruct4.tag = 4;
		bg.addChild(distruct4); 
		
		var distruct5 = new cc.Sprite(res.montain_word_png); 
		distruct5.setPosition(cc.p(winSize.width/4-111.5 , winSize.height/4-12.5 ));
		distruct5.setVisible(false);
		distruct5.tag = 5;
		bg.addChild(distruct5);
		
		var distruct6 = new cc.Sprite(res.wang_ling_word_png); 
		distruct6.setPosition(cc.p(winSize.width/4-111.5 , winSize.height/4-12.5 ));
		distruct6.setVisible(false);
		distruct6.tag = 6;
		bg.addChild(distruct6); 

        //OK按钮  

        var OKLabel = new cc.Sprite(res.popup_ok_png);  

        var OKMenuItem = new cc.MenuItemLabel(OKLabel, this.jumpScene, this);  

        OKMenuItem.setPosition(cc.p(128, 38));  

   

        //Cancel按钮  

        var cancelLabel = new cc.Sprite(res.Popup_quit_png);  

        var cancelMenuItem = new cc.MenuItemLabel(cancelLabel, this._onCallback, this);  

        cancelMenuItem.setPosition(cc.p(240, 235));  

   

        //菜单  

        var menu = new cc.Menu(OKMenuItem, cancelMenuItem);  

        menu.setPosition(cc.p(0, 0));  

        bg.addChild(menu);      //注意是添加到背景里面  

   

        this.setVisible(false);     //默认设置为不可见  

    },  


	
    _onCallback: function()  

    {  

        this.hidden();  

    },  
	
	jumpScene: function()
	{
		Global.getInstance().district_id = this.district_id;
		var group_name=Global.getInstance().group_name;
		var str ='UPDATE group_table SET district_id = '+this.district_id+' WHERE group_name = \''+group_name+'\'';			
		Popub_event.getInstance().update(str);
		cc.director.runScene(this.Nowscene);
	},
   

    //弹出  

    popup: function(get_district_id)  

    {  
		this.district_id = get_district_id;
        this.setVisible(true);  

        this._listener.setSwallowTouches(true);  

		this.data.getChildByTag(999).attr({
			zIndex :4,
			opacity :200
		});

        var bg = this.getChildByTag(101);  

        bg.setScale(0);  

        var scaleTo = new cc.ScaleTo(2.0, 1);  

        var rotateBy = new cc.RotateBy(2.0, 360, 0);  

        var spawn = new cc.Spawn(scaleTo, rotateBy);  

        bg.runAction(spawn);  

    },  

   

    //隐藏  

    hidden: function()  

    {  
		this.data.getChildByTag(999).attr({
			zIndex :2,
			opacity :0
		});
		
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

