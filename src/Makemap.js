
var Makemap  = (function(){
	var instance = null;
	function get_Makemap_Instance (){
		var MakemapInstance = {
			//绘制地图			
			make:function(that){
			//透明层
			var transparency_layer = new cc.Sprite(res.transparency_layer_png);
			transparency_layer.attr({
				x:that.size.width/2,
				y:that.size.height/2,
				tag :999,
				opacity:0
			});
			that.addChild(transparency_layer,2);
			//区域1
			var mpSprite1 = new cc.Sprite(res.map_area_1_png);	
			mpSprite1.attr({
				x:that.size.width/2-191,
				y:that.size.height/2-133,
				anchorX :0,
				anchorY :1,
				tag :1,
				opacity :0
			});
			that.addChild(mpSprite1,1);			
			//区域2
			var mpSprite2 = new cc.Sprite(res.map_area_2_png);	
			mpSprite2.attr({
				x:that.size.width/2-191,
				y:that.size.height/2-68,
				anchorX :0,
				anchorY :1,
				tag :2,
				opacity :0				
			});
			that.addChild(mpSprite2,1);			
			//区域3
			var mpSprite3 = new cc.Sprite(res.map_area_3_png);	
			mpSprite3.attr({
				x:that.size.width/2-190,
				y:that.size.height/2,
				anchorX :0,
				anchorY :1,
				tag :3,
				opacity :0			
			});
			that.addChild(mpSprite3,1);							
			//区域4
			var mpSprite4 = new cc.Sprite(res.map_area_4_png);	
			mpSprite4.attr({
				x:that.size.width/2-190,
				y:that.size.height/2+63,
				anchorX :0,
				anchorY :1,
				tag :4,
				opacity :0			
			});
			that.addChild(mpSprite4,1);					
			//区域5
			var mpSprite5 = new cc.Sprite(res.map_area_5_png);	
			mpSprite5.attr({
				x:that.size.width/2-188,
				y:that.size.height/2+129,
				anchorX :0,
				anchorY :1,
				tag :5,
				opacity :0			
			});
			that.addChild(mpSprite5,1);	
			//区域6
			var mpSprite6 = new cc.Sprite(res.map_area_6_png);	
			mpSprite6.attr({
				x:that.size.width/2-188,
				y:that.size.height/2+216,
				anchorX :0,
				anchorY :1,
				tag :6,
				opacity :0			
			});
			that.addChild(mpSprite6,1);		
			//区域7
			var mpSprite7 = new cc.Sprite(res.map_area_7_png);	
			mpSprite7.attr({
				x:that.size.width/2-118,
				y:that.size.height/2-61,
				anchorX :0,
				anchorY :1,
				tag :7,
				opacity :0			
			});
			that.addChild(mpSprite7,1);	
			//区域8
			var mpSprite8 = new cc.Sprite(res.map_area_8_png);	
			mpSprite8.attr({
				x:that.size.width/2-124,
				y:that.size.height/2+30,
				anchorX :0,
				anchorY :1,
				tag :8,
				opacity :0			
			});
			that.addChild(mpSprite8,1);		
			//区域9
			var mpSprite9 = new cc.Sprite(res.map_area_9_png);	
			mpSprite9.attr({
				x:that.size.width/2-124,
				y:that.size.height/2+97,
				anchorX :0,
				anchorY :1,
				tag :9,
				opacity :0			
			});
			that.addChild(mpSprite9,1);		
			//区域10
			var mpSprite10 = new cc.Sprite(res.map_area_10_png);	
			mpSprite10.attr({
				x:that.size.width/2-128,
				y:that.size.height/2+168,
				anchorX :0,
				anchorY :1,
				tag :10,
				opacity :0			
			});
			that.addChild(mpSprite10,1);		
			//区域11
			var mpSprite11 = new cc.Sprite(res.map_area_11_png);	
			mpSprite11.attr({
				x:that.size.width/2-128,
				y:that.size.height/2+215,
				anchorX :0,
				anchorY :1,
				tag :11,
				opacity :0			
			});
			that.addChild(mpSprite11,1);
			//区域12
			var mpSprite12 = new cc.Sprite(res.map_area_12_png);	
			mpSprite12.attr({
				x:that.size.width/2-50,
				y:that.size.height/2-153,
				anchorX :0,
				anchorY :1,
				tag :12,
				opacity :0		
			});
			that.addChild(mpSprite12,1);		
			//区域13
			var mpSprite13 = new cc.Sprite(res.map_area_13_png);	
			mpSprite13.attr({
				x:that.size.width/2-50,
				y:that.size.height/2-37,
				anchorX :0,
				anchorY :1,
				tag :13,
				opacity :0			
			});
			that.addChild(mpSprite13,1);		
			//区域14
			var mpSprite14 = new cc.Sprite(res.map_area_14_png);	
			mpSprite14.attr({
				x:that.size.width/2-31,
				y:that.size.height/2-4,
				anchorX :0,
				anchorY :1,
				tag :14,
				opacity :0			
			});
			that.addChild(mpSprite14,1);		
			//区域15
			var mpSprite15 = new cc.Sprite(res.map_area_15_png);	
			mpSprite15.attr({
				x:that.size.width/2-72,
				y:that.size.height/2+67,
				anchorX :0,
				anchorY :1,
				tag :15,
				opacity :0			
			});
			that.addChild(mpSprite15,1);		
			//区域16
			var mpSprite16 = new cc.Sprite(res.map_area_16_png);	
			mpSprite16.attr({
				x:that.size.width/2-70,
				y:that.size.height/2+132,
				anchorX :0,
				anchorY :1,
				tag :16,
				opacity :0			
			});
			that.addChild(mpSprite16,1);		
			//区域17
			var mpSprite17 = new cc.Sprite(res.map_area_17_png);	
			mpSprite17.attr({
				x:that.size.width/2-70,
				y:that.size.height/2+213,
				anchorX :0,
				anchorY :1,
				tag :17,
				opacity :0			
			});
			that.addChild(mpSprite17,1);		
			//区域18
			var mpSprite18 = new cc.Sprite(res.map_area_18_png);	
			mpSprite18.attr({
				x:that.size.width/2+3,
				y:that.size.height/2-153,
				anchorX :0,
				anchorY :1,
				tag :18,
				opacity :0			
			});
			that.addChild(mpSprite18,1);		
			//区域19
			var mpSprite19 = new cc.Sprite(res.map_area_19_png);	
			mpSprite19.attr({
				x:that.size.width/2-18,
				y:that.size.height/2-88,
				anchorX :0,
				anchorY :1,
				tag :19,
				opacity :0			
			});
			that.addChild(mpSprite19,1);		
			//区域20
			var mpSprite20 = new cc.Sprite(res.map_area_20_png);	
			mpSprite20.attr({
				x:that.size.width/2+17,
				y:that.size.height/2,
				anchorX :0,
				anchorY :1,
				tag :20,
				opacity :0			
			});
			that.addChild(mpSprite20,1);		
			//区域21
			var mpSprite21 = new cc.Sprite(res.map_area_21_png);	
			mpSprite21.attr({
				x:that.size.width/2+3,
				y:that.size.height/2+59,
				anchorX :0,
				anchorY :1,
				tag :21,
				opacity :0			
			});
			that.addChild(mpSprite21,1);		
			//区域22
			var mpSprite22 = new cc.Sprite(res.map_area_22_png);	
			mpSprite22.attr({
				x:that.size.width/2+1,
				y:that.size.height/2+132,
				anchorX :0,
				anchorY :1,
				tag :22,
				opacity :0			
			});
			that.addChild(mpSprite22,1);		
			//区域23
			var mpSprite23 = new cc.Sprite(res.map_area_23_png);	
			mpSprite23.attr({
				x:that.size.width/2,
				y:that.size.height/2+182,
				anchorX :0,
				anchorY :1,
				tag :23,
				opacity :0			
			});
			that.addChild(mpSprite23,1);		
			//区域24
			var mpSprite24 = new cc.Sprite(res.map_area_24_png);	
			mpSprite24.attr({
				x:that.size.width/2+50,
				y:that.size.height/2-105,
				anchorX :0,
				anchorY :1,
				tag :24,
				opacity :0			
			});
			that.addChild(mpSprite24,1);																
			//区域25
			var mpSprite25 = new cc.Sprite(res.map_area_25_png);	
			mpSprite25.attr({
				x:that.size.width/2+67,
				y:that.size.height/2+40,
				anchorX :0,
				anchorY :1,
				tag :25,
				opacity :0			
			});
			that.addChild(mpSprite25,1);
			//区域26
			var mpSprite26 = new cc.Sprite(res.map_area_26_png);	
			mpSprite26.attr({
				x:that.size.width/2+69,
				y:that.size.height/2+85,
				anchorX :0,
				anchorY :1,
				tag :26,
				opacity :0			
			});
			that.addChild(mpSprite26,1);
			//区域27
			var mpSprite27 = new cc.Sprite(res.map_area_27_png);	
			mpSprite27.attr({
				x:that.size.width/2+69,
				y:that.size.height/2+120,
				anchorX :0,
				anchorY :1,
				tag :27,
				opacity :0			
			});
			that.addChild(mpSprite27,1);
			//区域28
			var mpSprite28 = new cc.Sprite(res.map_area_28_png);	
			mpSprite28.attr({
				x:that.size.width/2+72,
				y:that.size.height/2+165,
				anchorX :0,
				anchorY :1,
				tag :28,
				opacity :0			
			});
			that.addChild(mpSprite28,1);
			//区域29
			var mpSprite29 = new cc.Sprite(res.map_area_29_png);	
			mpSprite29.attr({
				x:that.size.width/2+51,
				y:that.size.height/2+225,
				anchorX :0,
				anchorY :1,
				tag :29,
				opacity :0			
			});
			that.addChild(mpSprite29,1);
			//区域30
			var mpSprite30 = new cc.Sprite(res.map_area_30_png);	
			mpSprite30.attr({
				x:that.size.width/2+113,
				y:that.size.height/2-85,
				anchorX :0,
				anchorY :1,
				tag :30,
				opacity :0			
			});
			that.addChild(mpSprite30,1);
			//区域31
			var mpSprite31 = new cc.Sprite(res.map_area_31_png);	
			mpSprite31.attr({
				x:that.size.width/2+99,
				y:that.size.height/2-85,
				anchorX :0,
				anchorY :1,
				tag :31,
				opacity :0			
			});
			that.addChild(mpSprite31,1);
			//区域32
			var mpSprite32 = new cc.Sprite(res.map_area_32_png);	
			mpSprite32.attr({
				x:that.size.width/2+98,
				y:that.size.height/2+10,
				anchorX :0,
				anchorY :1,
				tag :32,
				opacity :0			
			});
			that.addChild(mpSprite32,1);
			//区域33
			var mpSprite33 = new cc.Sprite(res.map_area_33_png);	
			mpSprite33.attr({
				x:that.size.width/2+127,
				y:that.size.height/2-23,
				anchorX :0,
				anchorY :1,
				tag :33,
				opacity :0			
			});
			that.addChild(mpSprite33,1);
			//区域34
			var mpSprite34 = new cc.Sprite(res.map_area_34_png);	
			mpSprite34.attr({
				x:that.size.width/2+124,
				y:that.size.height/2+85,
				anchorX :0,
				anchorY :1,
				tag :34,
				opacity :0			
			});
			that.addChild(mpSprite34,1);
			//区域35
			var mpSprite35 = new cc.Sprite(res.map_area_35_png);	
			mpSprite35.attr({
				x:that.size.width/2+155,
				y:that.size.height/2+68,
				anchorX :0,
				anchorY :1,
				tag :35,
				opacity :0			
			});
			that.addChild(mpSprite35,1);
			//区域36
			var mpSprite36 = new cc.Sprite(res.map_area_36_png);	
			mpSprite36.attr({
				x:that.size.width/2+136,
				y:that.size.height/2+120,
				anchorX :0,
				anchorY :1,
				tag :36,
				opacity :0			
			});
			that.addChild(mpSprite36,1);
			//区域37
			var mpSprite37 = new cc.Sprite(res.map_area_37_png);	
			mpSprite37.attr({
				x:that.size.width/2+163,
				y:that.size.height/2+227,
				anchorX :0,
				anchorY :1,
				tag :37,
				opacity :0			
			});
			that.addChild(mpSprite37,1);
			//区域38
			var mpSprite38 = new cc.Sprite(res.map_area_38_png);	
			mpSprite38.attr({
				x:that.size.width/2+95,
				y:that.size.height/2+226,
				anchorX :0,
				anchorY :1,
				tag :38,
				opacity :0			
			});
			that.addChild(mpSprite38,1);
																																
			}
		}		
		return MakemapInstance;
	};
 
 
	return {
		getInstance:function(){
			if(instance === null){
				instance = get_Makemap_Instance();
			}
			return instance;
		}
	};
})();