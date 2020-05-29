var endBox = cc.LayerColor.extend({  
	size : null,
    _listener: null, 	

    ctor: function() { 
		
		this.size = cc.winSize;
		
		
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

        this.addChild(bg, 0, 102);  
		
		//提示
		var advice =new cc.LabelTTF("结束沙漠之旅吗？", "Arial", 23);
		advice.setPosition(cc.p(170, 235));  
		advice.setColor(cc.color(100,149,237));
		this.getChildByTag(102).addChild(advice);
		
        //OK按钮  

 
        var OKMenuItem = new cc.MenuItemImage(res.event_btn1_png, res.event_btn2_png, this._onCallback1, this);  

        OKMenuItem.setPosition(cc.p(160, 51));  

   

        //Cancel按钮  

        var cancelLabel = new cc.Sprite(res.event_quit_png);  

        var cancelMenuItem = new cc.MenuItemLabel(cancelLabel, this._onCallback2, this);  

        cancelMenuItem.setPosition(cc.p(325, 375));  

   

        //菜单  

        var menu = new cc.Menu(OKMenuItem, cancelMenuItem);  

        menu.setPosition(cc.p(0, 0));  

        bg.addChild(menu);      //注意是添加到背景里面  

   

        this.setVisible(false);     //默认设置为不可见  

    },  


	
    _onCallback1: function()  

    {  
		Day_switch_data.getInstance().set_end_num(1);
        cc.director.runScene(new cc.TransitionFade(1,new overScene()));  

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

        var bg = this.getChildByTag(102);  
		
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

