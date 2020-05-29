
var Sign_up2Layer = cc.Layer.extend({
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
		
		var team_label = new cc.LabelTTF("组织名: ", "Arial", 25);
			team_label.attr({
				x:this.size.width/2-120,
				y:this.size.height/2-50,
			});
		team_label.setColor(cc.color(0,0,0));
		this.addChild(team_label, 1);	
		//组织名
		team = new cc.EditBox(cc.size(this.size.width/4+10,60),new cc.Scale9Sprite(res.input_bg_jpg));
		team.setName("team");
		team.setPosition(this.size.width/2+50,this.size.height/2-50);
		team.setDelegate(this);
		//userid.setMaxlength(20);
		team.fontSize = 20;
		team.fontColor = cc.color(255, 255, 255);
		team.maxLength = 12;
		team.setPlaceHolder("点击输入不超过12位的队名");
		team.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
		team.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
		this.addChild(team,2);
		
		
		
		//确定按钮
			var nextItem = new cc.MenuItemImage(
				res.sign_up_finish1_png,
				res.sign_up_finish2_png,
				function(){
				
					if(team.getText()==' '){
						alert("组织名不允许为空！");
					}else{
						Day_switch_data.getInstance().create_team(team.getText(),0);
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
     

var Sign_up2Scene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new Sign_up2Layer();
      this.addChild(layer);
    },
})

