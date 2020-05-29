
var Sign_upLayer = cc.Layer.extend({
    size:null,
    ctor:function(){
        this._super();
        this.size = cc.director.getWinSize();
		
		
		//背景图片
        var bgSprite = new cc.Sprite(res.desert_0_jpg);
        bgSprite.attr({
            x:this.size.width/2,
            y:this.size.height/2,
        });
        this.addChild(bgSprite);
	    //标题
		var loginlabel = new cc.Sprite(res.sign_up_label_png);
		loginlabel.attr({
			x:this.size.width/2,
            y:this.size.height/2+200,
        });
        this.addChild(loginlabel,1);
		
		var user_label = new cc.LabelTTF("用户名：", "Arial", 25);
			user_label.attr({
				x:this.size.width/2-120,
				y:this.size.height/2+50,
			});
		user_label.setColor(cc.color(0,0,0));
		this.addChild(user_label, 1);	
		//用户名
		user = new cc.EditBox(cc.size(this.size.width/4+10,60),new cc.Scale9Sprite(res.input_bg_jpg));
		user.setName("user");
		user.setPosition(this.size.width/2+50,this.size.height/2+50);
		user.setDelegate(this);
		//userid.setMaxlength(20);
		user.fontSize = 20;
		user.fontColor = cc.color(255, 255, 255);
		user.maxLength = 12;
		user.setPlaceHolder("点击输入不超过12位的账号");
		user.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
		user.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
		this.addChild(user,2);
		
		var pwd_label = new cc.LabelTTF("密码：", "Arial", 25);
			pwd_label.attr({
				x:this.size.width/2-110,
				y:this.size.height/2-50,
			});
		pwd_label.setColor(cc.color(0,0,0));
		this.addChild(pwd_label, 1);	
		//输入密码
		pwd = new cc.EditBox(cc.size(this.size.width/4+10,60),new cc.Scale9Sprite(res.input_bg_jpg));
		pwd.setName("pwd");
		pwd.setPosition(this.size.width/2+50,this.size.height/2-50);
		pwd.setDelegate(this);
		//userid.setMaxlength(20);
		pwd.fontSize = 20;
		pwd.fontColor = cc.color(255, 255, 255);
		pwd.maxLength = 12;
		pwd.setPlaceHolder("点击输入不超过12位的密码");
		pwd.setInputFlag(cc.EDITBOX_INPUT_FLAG_PASSWORD);
		pwd.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
		this.addChild(pwd,2);	
		
		var leader_label = new cc.LabelTTF("组织者：", "Arial", 25);
			leader_label.attr({
				x:this.size.width/2-120,
				y:this.size.height/2-150,
			});
		leader_label.setColor(cc.color(0,0,0));
		this.addChild(leader_label, 1);	
		//是否组织者
		leader = new cc.EditBox(cc.size(this.size.width/4+10,60),new cc.Scale9Sprite(res.input_bg_jpg));
		leader.setName("leader");
		leader.setPosition(this.size.width/2+50,this.size.height/2-150);
		leader.setDelegate(this);
		//userid.setMaxlength(20);
		leader.fontSize = 20;
		leader.fontColor = cc.color(255, 255, 255);
		leader.maxLength = 3;
		leader.setPlaceHolder("yes 或者 no");
		leader.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
		leader.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
		this.addChild(leader,2);	
		
		//确定按钮
			var nextItem = new cc.MenuItemImage(
				res.sign_up_next1_png,
				res.sign_up_next2_png,
				function(){
					if(leader.getText()!='yes' && leader.getText()!='no'){
						alert("请填yes或者no！");
					}else
					if(user.getText()==' '||pwd.getText()==' '){
						alert("用户名和密码不允许为空！");
					}else{
						Day_switch_data.getInstance().sign_up(user.getText()+","+pwd.getText()+","+leader.getText(),0);
					}
					
				},this
			);
			nextItem.attr({
				x:this.size.width/2,
				y:this.size.height/2,
				anchorX :0.5,
				anchorY :0.5
			});
			var menu = new cc.Menu(nextItem);
			menu.x=0;
			menu.y=-250;
			this.addChild(menu,1);
		return true;
	}
});
     

var Sign_upScene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new Sign_upLayer();
      this.addChild(layer);
    },
})

