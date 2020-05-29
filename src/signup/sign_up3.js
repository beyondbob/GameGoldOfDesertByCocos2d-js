
var Sign_up3Layer = cc.Layer.extend({
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
				y:this.size.height/2+50,
			});
		team_label.setColor(cc.color(0,0,0));
		this.addChild(team_label, 1);	
		//组织名
		team = new cc.EditBox(cc.size(this.size.width/4+10,60),new cc.Scale9Sprite(res.input_bg_jpg));
		team.setName("team");
		team.setPosition(this.size.width/2+50,this.size.height/2+50);
		team.setDelegate(this);
		//userid.setMaxlength(20);
		team.fontSize = 20;
		team.fontColor = cc.color(255, 255, 255);
		team.maxLength = 12;
		team.setPlaceHolder("点击输入不超过12位的队名");
		team.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
		team.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
		this.addChild(team,2);
		
		var group_label = new cc.LabelTTF("队伍名：", "Arial", 25);
			group_label.attr({
				x:this.size.width/2-120,
				y:this.size.height/2-50,
			});
		group_label.setColor(cc.color(0,0,0));
		this.addChild(group_label, 1);	
		//队名
		group = new cc.EditBox(cc.size(this.size.width/4+10,60),new cc.Scale9Sprite(res.input_bg_jpg));
		group.setName("group");
		group.setPosition(this.size.width/2+50,this.size.height/2-50);
		group.setDelegate(this);
		//userid.setMaxlength(20);
		group.fontSize = 20;
		group.fontColor = cc.color(255, 255, 255);
		group.maxLength = 12;
		group.setPlaceHolder("点击输入不超过12位的队名");
		group.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
		group.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
		this.addChild(group,2);
		
		var chacter_label = new cc.LabelTTF("角色：", "Arial", 25);
			chacter_label.attr({
				x:this.size.width/2-120,
				y:this.size.height/2-150,
			});
		chacter_label.setColor(cc.color(0,0,0));
		this.addChild(chacter_label, 1);	
		//角色
		chacter = new cc.EditBox(cc.size(this.size.width/4+10,60),new cc.Scale9Sprite(res.input_bg_jpg));
		chacter.setName("chacter");
		chacter.setPosition(this.size.width/2+50,this.size.height/2-150);
		chacter.setDelegate(this);
		//userid.setMaxlength(20);
		chacter.fontSize = 20;
		chacter.fontColor = cc.color(255, 255, 255);
		chacter.maxLength = 3;
		chacter.setPlaceHolder("决策者、采购者或者情报者");
		chacter.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE);
		chacter.setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
		this.addChild(chacter,2);
				
		
		//确定按钮
			var nextItem = new cc.MenuItemImage(
				res.sign_up_finish1_png,
				res.sign_up_finish2_png,
				function(){
				
					if(team.getText()==' '||group.getText()==' '||chacter.getText()==' '){
						alert("组织名、队名和角色不允许为空！");
					}else
					if(chacter.getText()!='决策者'&&chacter.getText()!='采购者'&&chacter.getText()!='情报者'){
						alert("请输入决策者或者采购者或者情报者！");
					}else{
						if(chacter.getText() =="决策者"){
							Day_switch_data.getInstance().enter_team(team.getText()+","+group.getText()+",1",0);
						}
						if(chacter.getText() =="采购者"){
							Day_switch_data.getInstance().enter_team(team.getText()+","+group.getText()+",2",0);
						}
						if(chacter.getText() =="情报者"){
							Day_switch_data.getInstance().enter_team(team.getText()+","+group.getText()+",3",0);
						}
						
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
     

var Sign_up3Scene = cc.Scene.extend({
    onEnter:function(){
      this._super();
      var layer = new Sign_up3Layer();
      this.addChild(layer);
    },
})

