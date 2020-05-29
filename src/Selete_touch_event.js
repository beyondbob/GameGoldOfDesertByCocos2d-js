
var seletecustomEvent  = (function(){
	var instance = null;
	function get_Touch_Instance (){
		var TouchInstance = {	
			addTouchEvent:function(num,that){
				var touch_time = 0;
			//添加弹出框事件
				var layer = new ModalDialogueBox(that);	
				that.addChild(layer);
				layer.onEnter();
			//区域1添加触摸事件
			// 在touchSprite上添加一个包含触摸事件，在整个touchSprite范围内触摸有效
				customEvent.addIncludeTouch(that.getChildByTag(1),function(){
					touch_time=touch_time+1;
					cc.log("touch in mpSprite1 call!!!"+touch_time);
					

					if(touch_time==1){
						that.getChildByTag(2).attr({
							opacity : 200,
							zIndex :3
						});
						that.getChildByTag(7).attr({
							opacity : 200,
							zIndex :3
						});
										
					}
					if(touch_time>=2){
						layer.zIndex = 5;
						layer.setDisctrut(0);
						layer.popup(1);
						
					}
				},that);
			//判断是否实现触摸事件使范围外无效	
				if(num == 1){			    
					customEvent.addExcludeTouch(that.getChildByTag(1),function(){
						cc.log("touch not in mpSprite1 call!!!");
						touch_time=0;
						that.getChildByTag(2).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(7).attr({
								opacity : 0,
								zIndex :1
							});
					},that);	
				}
				

				customEvent.addIncludeTouch(that.getChildByTag(2),function(){
					touch_time=touch_time+1;
					cc.log("touch in mpSprite2 call!!!"+touch_time);
					if(touch_time==1){
						that.getChildByTag(1).attr({
								opacity : 200,
								zIndex :3
							});
						that.getChildByTag(3).attr({
							opacity : 200,
							zIndex :3
						});
						that.getChildByTag(7).attr({
							opacity : 200,
							zIndex :3
						});
						that.getChildByTag(8).attr({
							opacity : 200,
							zIndex :3
						});
					}
					if(touch_time>=2){
						layer.zIndex = 5;
						layer.setDisctrut(1);
						layer.popup(2);
					}
				},that);
				if(num == 2){
					customEvent.addExcludeTouch(that.getChildByTag(2),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(1).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(3).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(7).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(8).attr({
								opacity : 0,
								zIndex :1
							});
					},that);				
				}

				
				customEvent.addIncludeTouch(that.getChildByTag(3),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(2).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(4).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(8).attr({
								opacity : 200,
								zIndex :3
							});
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(3);
							}
					},that);
					if(num == 3){
					customEvent.addExcludeTouch(that.getChildByTag(3),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(2).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(4).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(8).attr({
								opacity : 0,
								zIndex :1
							});
					},that);				
				}


				customEvent.addIncludeTouch(that.getChildByTag(4),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(3).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(5).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(8).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(9).attr({
								opacity : 200,
								zIndex :3
							});
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(4);
							}
					},that);
					if(num == 4){
					customEvent.addExcludeTouch(that.getChildByTag(4),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(3).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(5).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(8).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(9).attr({
								opacity : 0,
								zIndex :1
							});
					},that);				
				}				


				customEvent.addIncludeTouch(that.getChildByTag(5),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(4).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(6).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(9).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(10).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(16).attr({
								opacity : 200,
								zIndex :3
							});							
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(5);
							}
					},that);
					if(num == 5){
					customEvent.addExcludeTouch(that.getChildByTag(5),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(4).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(6).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(9).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(10).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(16).attr({
								opacity : 0,
								zIndex :1
							});							
					},that);				
				}
				
	
				customEvent.addIncludeTouch(that.getChildByTag(6),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(5).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(10).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(11).attr({
								opacity : 200,
								zIndex :3
							});						
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(6);
							}
					},that);
					if(num == 6){
					customEvent.addExcludeTouch(that.getChildByTag(6),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(5).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(10).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(11).attr({
								opacity : 0,
								zIndex :1
							});				
					},that);				
				}

				
			customEvent.addIncludeTouch(that.getChildByTag(7),function(){
					touch_time=touch_time+1;
					cc.log("touch in mpSprite7 call!!!"+touch_time);
					if(touch_time==1){
						that.getChildByTag(1).attr({
							opacity : 200,
							zIndex :3
						});
						that.getChildByTag(2).attr({
							opacity : 200,
							zIndex :3
						});
						that.getChildByTag(8).attr({
							opacity : 200,
							zIndex :3
						});
						that.getChildByTag(12).attr({
							opacity : 200,
							zIndex :3
						});
						that.getChildByTag(13).attr({
							opacity : 200,
							zIndex :3
						});
					}
					if(touch_time>=2){
						layer.zIndex = 5;
						layer.setDisctrut(1);
						layer.popup(7);
					}
				},that);					
				if(num == 7){
					customEvent.addExcludeTouch(that.getChildByTag(7),function(){
						cc.log("touch not in mpSprite7 call!!!");
						touch_time=0;
						that.getChildByTag(1).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(2).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(8).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(12).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(13).attr({
								opacity : 0,
								zIndex :1
							});
					},that);
				}
				
	
				customEvent.addIncludeTouch(that.getChildByTag(8),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(2).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(3).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(4).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(7).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(9).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(13).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(14).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(15).attr({
								opacity : 200,
								zIndex :3
							});								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(8);
						}
					},that);
					if(num == 8){
					customEvent.addExcludeTouch(that.getChildByTag(8),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(2).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(3).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(4).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(7).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(9).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(13).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(14).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(15).attr({
								opacity : 0,
								zIndex :1
							});							
					},that);				
				 }

				 
				customEvent.addIncludeTouch(that.getChildByTag(9),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(4).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(5).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(8).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(15).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(16).attr({
								opacity : 200,
								zIndex :3
							});
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(9);
						}
					},that);
					if(num == 9){
					customEvent.addExcludeTouch(that.getChildByTag(9),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(4).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(5).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(8).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(15).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(16).attr({
								opacity : 0,
								zIndex :1
							});
					},that);				
				}
		
				customEvent.addIncludeTouch(that.getChildByTag(10),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite10 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(5).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(6).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(11).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(16).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(17).attr({
								opacity : 200,
								zIndex :3
							});
									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(10);
						}
					},that);
					if(num == 10){
					customEvent.addExcludeTouch(that.getChildByTag(10),function(){
						cc.log("touch not in mpSprite10 call!!!");
						touch_time=0;
						that.getChildByTag(5).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(6).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(11).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(16).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(17).attr({
								opacity : 0,
								zIndex :1
							});
						
					},that);				
				}
	

					customEvent.addIncludeTouch(that.getChildByTag(11),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite11 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(6).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(10).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(17).attr({
								opacity : 200,
								zIndex :3
							});
									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(11);
						}
					},that);
					if(num == 11){
					customEvent.addExcludeTouch(that.getChildByTag(11),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(6).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(10).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(17).attr({
								opacity : 0,
								zIndex :1
							});					
					},that);				
				}

					customEvent.addIncludeTouch(that.getChildByTag(12),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(7).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(13).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(18).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(19).attr({
								opacity : 200,
								zIndex :3
							});
									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(3);
							layer.popup(12);
						}
					},that);
					if(num == 12){
					customEvent.addExcludeTouch(that.getChildByTag(12),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(7).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(13).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(18).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(19).attr({
								opacity : 0,
								zIndex :1
							});			
					},that);				
				}				
		
		
					customEvent.addIncludeTouch(that.getChildByTag(13),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(7).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(8).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(12).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(14).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(19).attr({
								opacity : 200,
								zIndex :3
							});
									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(13);
						}
					},that);
					if(num == 13){
					customEvent.addExcludeTouch(that.getChildByTag(13),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(7).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(8).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(12).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(14).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(19).attr({
								opacity : 0,
								zIndex :1
							});
						
					},that);				
				}				

					customEvent.addIncludeTouch(that.getChildByTag(14),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(8).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(13).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(15).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(19).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(20).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(21).attr({
								opacity : 200,
								zIndex :3
							});
									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(14);
						}
					},that);
					if(num == 14){
					customEvent.addExcludeTouch(that.getChildByTag(14),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(8).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(13).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(15).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(19).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(20).attr({
								opacity : 0,
								zIndex :1
							});
							that.getChildByTag(21).attr({
								opacity : 0,
								zIndex :1
							});						
					},that);				
				}				

					customEvent.addIncludeTouch(that.getChildByTag(15),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(8).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(9).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(14).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(16).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(21).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(22).attr({
								opacity : 200,
								zIndex :3
							});
									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(15);
						}
					},that);
					if(num == 15){
					customEvent.addExcludeTouch(that.getChildByTag(15),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(8).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(9).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(14).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(16).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(21).attr({
								opacity : 0,
								zIndex :1
							});
							that.getChildByTag(22).attr({
								opacity : 0,
								zIndex :1
							});						
					},that);				
				}				

					customEvent.addIncludeTouch(that.getChildByTag(16),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(5).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(9).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(10).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(15).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(17).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(22).attr({
								opacity : 200,
								zIndex :3
							});
									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(2);
							layer.popup(16);
						}
					},that);
					if(num == 16){
					customEvent.addExcludeTouch(that.getChildByTag(16),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(5).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(9).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(10).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(15).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(17).attr({
								opacity : 0,
								zIndex :1
							});
							that.getChildByTag(22).attr({
								opacity : 0,
								zIndex :1
							});						
					},that);				
				}	


					customEvent.addIncludeTouch(that.getChildByTag(17),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(10).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(11).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(16).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(22).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(23).attr({
								opacity : 200,
								zIndex :3
							});
									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(17);
						}
					},that);
					if(num == 17){
					customEvent.addExcludeTouch(that.getChildByTag(17),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(10).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(11).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(16).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(22).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(23).attr({
								opacity : 0,
								zIndex :1
							});				
					},that);				
				}	

					customEvent.addIncludeTouch(that.getChildByTag(18),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(12).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(19).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(24).attr({
								opacity : 200,
								zIndex :3
							});	
									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(18);
						}
					},that);
					if(num == 18){
					customEvent.addExcludeTouch(that.getChildByTag(18),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(12).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(19).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(24).attr({
								opacity : 0,
								zIndex :1
							});	
					
					},that);				
				}	
					customEvent.addIncludeTouch(that.getChildByTag(19),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(12).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(13).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(14).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(18).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(20).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(24).attr({
								opacity : 200,
								zIndex :3
							});
									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(3);
							layer.popup(19);
						}
					},that);
					if(num == 19){
					customEvent.addExcludeTouch(that.getChildByTag(19),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(12).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(13).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(14).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(18).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(20).attr({
								opacity : 0,
								zIndex :1
							});
							that.getChildByTag(24).attr({
								opacity : 0,
								zIndex :1
							});						
					},that);				
				}
				
					customEvent.addIncludeTouch(that.getChildByTag(20),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(14).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(19).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(21).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(24).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(25).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(31).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(32).attr({
								opacity : 200,
								zIndex :3
							});									
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(20);
						}
					},that);
					if(num == 20){
					customEvent.addExcludeTouch(that.getChildByTag(20),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(14).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(19).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(21).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(24).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(25).attr({
								opacity : 0,
								zIndex :1
							});
							that.getChildByTag(31).attr({
								opacity : 0,
								zIndex :1
							});		
							that.getChildByTag(32).attr({
								opacity : 0,
								zIndex :1
							});
							
					},that);				
				}

					customEvent.addIncludeTouch(that.getChildByTag(21),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(14).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(15).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(20).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(22).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(25).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(26).attr({
								opacity : 200,
								zIndex :3
							});						
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(2);
							layer.popup(21);
						}
					},that);
					if(num == 21){
					customEvent.addExcludeTouch(that.getChildByTag(21),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(14).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(15).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(20).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(22).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(25).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(26).attr({
							opacity : 0,
							zIndex :1
						});		
					},that);
				}
				
				
					customEvent.addIncludeTouch(that.getChildByTag(22),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(15).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(16).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(17).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(21).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(23).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(26).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(27).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(28).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(29).attr({
								opacity : 200,
								zIndex :3
							});	
								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(5);
							layer.popup(22);
						}
					},that);
					if(num == 22){
					customEvent.addExcludeTouch(that.getChildByTag(22),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(15).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(16).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(17).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(21).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(23).attr({
								opacity : 0,
								zIndex :1
							});
							that.getChildByTag(26).attr({
								opacity : 0,
								zIndex :1
							});		
							that.getChildByTag(27).attr({
								opacity : 0,
								zIndex :1
							});
							that.getChildByTag(28).attr({
								opacity : 0,
								zIndex :1
							});
							that.getChildByTag(29).attr({
								opacity : 0,
								zIndex :1
							});							
					},that);				
				}								

					customEvent.addIncludeTouch(that.getChildByTag(23),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(17).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(22).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(29).attr({
								opacity : 200,
								zIndex :3
							});	
								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(23);
						}
					},that);
					if(num == 23){
					customEvent.addExcludeTouch(that.getChildByTag(23),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(17).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(22).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(29).attr({
								opacity : 0,
								zIndex :1
							});	
					},that);				
				}					


					customEvent.addIncludeTouch(that.getChildByTag(24),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(18).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(19).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(20).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(30).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(31).attr({
								opacity : 200,
								zIndex :3
							});
	
								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(24);
						}
					},that);
					if(num == 24){
					customEvent.addExcludeTouch(that.getChildByTag(24),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(18).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(19).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(20).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(30).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(31).attr({
								opacity : 0,
								zIndex :1
							});
					},that);				
				}					
					customEvent.addIncludeTouch(that.getChildByTag(25),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(20).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(21).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(26).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(32).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(34).attr({
								opacity : 200,
								zIndex :3
							});
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(25);
						}
					},that);
					if(num == 25){
					customEvent.addExcludeTouch(that.getChildByTag(25),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(20).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(21).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(26).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(32).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(34).attr({
								opacity : 0,
								zIndex :1
							});
					
					},that);				
				}		
	
					customEvent.addIncludeTouch(that.getChildByTag(26),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(21).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(22).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(25).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(27).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(34).attr({
								opacity : 200,
								zIndex :3
							});					
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(26);
						}
					},that);
					if(num == 26){
					customEvent.addExcludeTouch(that.getChildByTag(26),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(21).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(22).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(25).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(27).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(34).attr({
								opacity : 0,
								zIndex :1
							});	
					},that);				
				}

					customEvent.addIncludeTouch(that.getChildByTag(27),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(22).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(26).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(28).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(34).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(36).attr({
								opacity : 200,
								zIndex :3
							});							
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(27);
						}
					},that);
					if(num == 27){
					customEvent.addExcludeTouch(that.getChildByTag(27),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(22).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(26).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(28).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(34).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(36).attr({
								opacity : 0,
								zIndex :1
							});
					},that);				
				}	

					customEvent.addIncludeTouch(that.getChildByTag(28),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(22).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(29).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(27).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(36).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(37).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(38).attr({
								opacity : 200,
								zIndex :3
							});
								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(28);
						}
					},that);
					if(num == 28){
					customEvent.addExcludeTouch(that.getChildByTag(28),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(22).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(27).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(29).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(36).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(37).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(38).attr({
							opacity : 0,
							zIndex :1
						});		

					},that);				
				}

					customEvent.addIncludeTouch(that.getChildByTag(29),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(22).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(23).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(28).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(38).attr({
								opacity : 200,
								zIndex :3
							});							
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(29);
						}
					},that);
					if(num == 29){
					customEvent.addExcludeTouch(that.getChildByTag(29),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(22).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(23).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(28).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(38).attr({
								opacity : 0,
								zIndex :1
							});
					},that);				
				}	

					customEvent.addIncludeTouch(that.getChildByTag(30),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(24).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(31).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(33).attr({
								opacity : 200,
								zIndex :3
							});	
								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(30);
						}
					},that);
					if(num == 30){
					customEvent.addExcludeTouch(that.getChildByTag(30),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(24).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(31).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(33).attr({
								opacity : 0,
								zIndex :1
							});	
					},that);				
				}					

					customEvent.addIncludeTouch(that.getChildByTag(31),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(20).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(24).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(30).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(32).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(33).attr({
								opacity : 200,
								zIndex :3
							});
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(3);
							layer.popup(31);
						}
					},that);
					if(num == 31){
					customEvent.addExcludeTouch(that.getChildByTag(31),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(20).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(24).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(30).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(32).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(33).attr({
								opacity : 0,
								zIndex :1
							});
					},that);				
				}	
	
					customEvent.addIncludeTouch(that.getChildByTag(32),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(20).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(25).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(31).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(33).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(34).attr({
								opacity : 200,
								zIndex :3
							});

								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(32);
						}
					},that);
					if(num == 32){
					customEvent.addExcludeTouch(that.getChildByTag(32),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(20).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(25).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(31).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(33).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(34).attr({
								opacity : 0,
								zIndex :1
							});

					},that);				
				}	


					customEvent.addIncludeTouch(that.getChildByTag(33),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(30).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(31).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(32).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(34).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(35).attr({
								opacity : 200,
								zIndex :3
							});
								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(3);
							layer.popup(33);
						}
					},that);
					if(num == 33){
					customEvent.addExcludeTouch(that.getChildByTag(33),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(30).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(31).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(32).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(34).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(35).attr({
								opacity : 0,
								zIndex :1
							});
					},that);				
				}					

					customEvent.addIncludeTouch(that.getChildByTag(34),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(25).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(26).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(27).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(32).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(33).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(35).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(36).attr({
								opacity : 200,
								zIndex :3
							});								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(34);
						}
					},that);
					if(num == 34){
					customEvent.addExcludeTouch(that.getChildByTag(34),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(25).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(26).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(27).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(32).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(33).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(35).attr({
							opacity : 0,
							zIndex :1
						});		
						that.getChildByTag(36).attr({
							opacity : 0,
							zIndex :1
						});
					},that);				
				}	
			
					customEvent.addIncludeTouch(that.getChildByTag(35),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(33).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(34).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(36).attr({
								opacity : 200,
								zIndex :3
							});	
								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(3);
							layer.popup(35);
						}
					},that);
					if(num == 35){
					customEvent.addExcludeTouch(that.getChildByTag(35),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(33).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(34).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(36).attr({
								opacity : 0,
								zIndex :1
							});	
					},that);				
				}	

					customEvent.addIncludeTouch(that.getChildByTag(36),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(27).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(28).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(34).attr({
								opacity : 200,
								zIndex :3
							});	
							that.getChildByTag(35).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(37).attr({
								opacity : 200,
								zIndex :3
							});								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(3);
							layer.popup(36);
						}
					},that);
					if(num == 36){
					customEvent.addExcludeTouch(that.getChildByTag(36),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(27).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(28).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(34).attr({
								opacity : 0,
								zIndex :1
							});	
						that.getChildByTag(35).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(37).attr({
								opacity : 0,
								zIndex :1
							});
					},that);				
				}	
					customEvent.addIncludeTouch(that.getChildByTag(37),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(28).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(36).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(38).attr({
								opacity : 200,
								zIndex :3
							});	
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(1);
							layer.popup(37);
						}
					},that);
					if(num == 37){
					customEvent.addExcludeTouch(that.getChildByTag(37),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(28).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(36).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(38).attr({
								opacity : 0,
								zIndex :1
							});	
					},that);				
				}	

					customEvent.addIncludeTouch(that.getChildByTag(38),function(){
						touch_time=touch_time+1;
						cc.log("touch in mpSprite2 call!!!"+touch_time);
						if(touch_time==1){
							that.getChildByTag(28).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(29).attr({
								opacity : 200,
								zIndex :3
							});
							that.getChildByTag(37).attr({
								opacity : 200,
								zIndex :3
							});	
								
						}
						if(touch_time>=2){
							layer.zIndex = 5;
							layer.setDisctrut(4);
							layer.popup(38);
						}
					},that);
					if(num == 38){
					customEvent.addExcludeTouch(that.getChildByTag(38),function(){
						cc.log("touch not in mpSprite2 call!!!");
						touch_time=0;
						that.getChildByTag(28).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(29).attr({
								opacity : 0,
								zIndex :1
							});
						that.getChildByTag(37).attr({
								opacity : 0,
								zIndex :1
							});	
					},that);				
				}	
				that.getChildByTag(998).zIndex =10;
				
				
			}																																			
		}		
		return TouchInstance;
	};
 
 
	return {
		getInstance:function(){
			if(instance === null){
				instance = get_Touch_Instance();
			}
			return instance;
		}
	};
})();