var LoginLayer = cc.Layer.extend({
	sprite: null,
	textField: null,
	ctor:function(){
		this._super();

		var size = cc.winSize;
		
		//背景图片
        var bgSprite = new cc.Sprite(res.desert_0_jpg);
        bgSprite.attr({
            x:size.width/2,
            y:size.height/2,
        });
        this.addChild(bgSprite,0);	
		
		//标题
		var loginlabel = new cc.Sprite(res.login_label_png);
		loginlabel.attr({
			x:size.width/2,
            y:size.height/2+200,
        });
        this.addChild(loginlabel,1);
		
		//界面背景
		var loginbg = new cc.Sprite(res.login_bg_jpg);
		loginbg.attr({
			x:size.width/2,
            y:size.height/2,
        });
        this.addChild(loginbg,1);	

			

		user = new cc.EditBox(cc.size(size.width/4+10,60),new cc.Scale9Sprite(res.input_bg_jpg));
		user.setName("user");
		user.setPosition(size.width/2,size.height/2+50);
		user.setDelegate(this);
		//userid.setMaxlength(20);
		user.fontSize = 20;
		user.fontColor = cc.color(255, 255, 255);
		user.maxLength = 12;
		user.setPlaceHolder("点击输入不超过12位的账号");
		user.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
		user.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
		this.addChild(user,2);

		//输入密码
		pwd = new cc.EditBox(cc.size(size.width/4+10,60),new cc.Scale9Sprite(res.input_bg_jpg));
		pwd.setName("pwd");
		pwd.setPosition(size.width/2,size.height/2-50);
		pwd.setDelegate(this);
		//userid.setMaxlength(20);
		pwd.fontSize = 20;
		pwd.fontColor = cc.color(255, 255, 255);
		pwd.maxLength = 12;
		pwd.setPlaceHolder("点击输入不超过12位的密码");
		pwd.setInputFlag(cc.EDITBOX_INPUT_FLAG_PASSWORD);
		pwd.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
		this.addChild(pwd,2);
		
		//确定按钮
		var loginItem = new cc.MenuItemImage(
			res.desert_login_1_png,
			res.desert_login_2_png,
			function(){
				Network.getInstance().send(user.getText()+","+pwd.getText());
			},this
		);
		loginItem.attr({
			x:size.width/2,
			y:size.height/2,
			anchorX :0.5,
			anchorY :0.5
		});
		var menu = new cc.Menu(loginItem);
		menu.x=0;
		menu.y=-200;
		this.addChild(menu,1);
		
		//注册按钮
		var signItem = new cc.MenuItemImage(
			res.desert_sign_1_png,
			res.desert_sign_2_png,
			function(){
				cc.director.runScene(new Sign_upScene());
			},this
		);
		signItem.attr({
			x:size.width/2,
			y:size.height/2,
			anchorX :0.5,
			anchorY :0.5
		});
		var menu2 = new cc.Menu(signItem);
		menu2.x=0;
		menu2.y=-260;
		this.addChild(menu2,1);
				
		return true;

	},
	
})


var LoginScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new LoginLayer();
      this.addChild(layer);
    },
})