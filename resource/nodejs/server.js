var ws = require("nodejs-websocket");
var mysql  = require('mysql');  //调用MySQL模块
var num =0;
//登录信息
var server1 = ws.createServer(function(conn){
	var data = new Array();
	num=num+1;
	var id= num;
	console.log("建立连接a,当前连接数："+num);
    conn.on('error', function(){

    });
	conn.on('text', function(str){
		console.log("连接"+id+":"+str);
		data.length = 0;
		data = str.split(",");

		//创建一个connection
		var connection = mysql.createConnection({    
			host     : '127.0.0.1',       //主机
			user     : 'bob',            //MySQL认证用户名
			password: '1234',
			port:   '3306',
			database: 'gold_desert'
		});
		//创建一个connection
		connection.connect(function(err){
			if(err){       
				console.log('[query] - :'+err);
				return;
			}
			console.log('[connection connect]  succeed!');
		}); 
		//执行SQL语句
		connection.query('SELECT concat_ws(\',\',user_chracter,group_name,team_name) As \'solution\' from user_table where user_name = \''+data[0]+'\' and user_pwd = \''+data[1]+'\'', function(err1, rows1, fields1) {
			if (err1) {
				console.log('[query] - :'+err1);
				return;
			}
			var rtn_meg1 = rows1.length>0?"true":"false";
			console.log('The solution is: '+rtn_meg1);
				if(rtn_meg1=="true"){
					conn.sendText(rows1[0].solution.toString());
				}else{
					conn.sendText(rtn_meg1);
				}
			    
		}); 
		//关闭connection
		connection.end(function(err){
			if(err){       
				return;
			}
			console.log('[connection end] succeed!');
		});
		
      })
	
	conn.on('close', function(){
		num=num-1;
		console.log("关闭了一个连接a，当前连接数："+num);
    });

}).listen(3000);

var num1 =0;
//游戏界面数据
var server2 = ws.createServer(function(conn){
	num1=num1+1;
	var id= num1;
	console.log("建立连接b,当前连接数："+num1);
    conn.on('error', function(){

    });
	conn.on('text', function(str){
		console.log("连接"+id+":"+str);

		//创建一个connection
		var connection = mysql.createConnection({    
			host     : '127.0.0.1',       //主机
			user     : 'bob',            //MySQL认证用户名
			password: '1234',
			port:   '3306',
			database: 'gold_desert'
		});
		//创建一个connection
		connection.connect(function(err){
			if(err){       
				console.log('[query] - :'+err);
				return;
			}
			console.log('[connection connect]  succeed!');
		}); 
		//执行SQL语句
		connection.query('SELECT concat_ws(\',\',group_name,group_money,group_camel,group_food,group_compass,group_tent,group_water,group_gold,group_max_camel,district_id) As \'solution\' from group_table where group_name =\''+str+'\'', function(err2, rows2, fields2) {
			if (err2) {
				console.log('[query] - :'+err2);
				return;
			}
			var rtn_meg2 = rows2[0].solution;
			console.log('The solution is: '+rtn_meg2);
			conn.sendText(rtn_meg2.toString());
		}); 
		//关闭connection
		connection.end(function(err){
			if(err){       
				return;
			}
			console.log('[connection end] succeed!');
		});
		
      })
	
	conn.on('close', function(){
		num1=num1-1;
		console.log("关闭了一个连接b，当前连接数："+num1);
    });

}).listen(3001);

var num2 =0;
//弹出界面获取数据
var server3 = ws.createServer(function(conn){
	num2=num2+1;
	var id= num2;
	console.log("建立连接c,当前连接数："+num2);
    conn.on('error', function(){

    });
	conn.on('text', function(str){
		console.log("连接"+id+":"+str);
		//创建一个connection
		var connection = mysql.createConnection({    
			host     : '127.0.0.1',       //主机
			user     : 'bob',            //MySQL认证用户名
			password: '1234',
			port:   '3306',
			database: 'gold_desert'
		});
		//创建一个connection
		connection.connect(function(err){
			if(err){       
				console.log('[query] - :'+err);
				return;
			}
			console.log('[connection connect]  succeed!');
		}); 
		console.log(str);
		//执行SQL语句
		connection.query(str , function(err3, rows3, fields3) {
			if (err3) {
				console.log('[query] - :'+err3);
				return;
			}
			if(rows3.length==0){
				conn.sendText('null');
			}else{
				var rtn_meg3 =rows3[0].solution;
				for(var i=1;i<rows3.length;i++){
				rtn_meg3 = rtn_meg3+';'+rows3[i].solution;
				}
				conn.sendText(rtn_meg3.toString());
			
			}	
			
		}); 
		//关闭connection
		connection.end(function(err){
			if(err){       
				return;
			}
			console.log('[connection end] succeed!');
		});
		
      })
	
	conn.on('close', function(){
		num2=num2-1;
		console.log("关闭了一个连接c，当前连接数："+num2);
    });

}).listen(3002);

var num3 =0;
//弹出界面处理存放数据
var server4 = ws.createServer(function(conn){
	num3=num3+1;
	var id= num3;
	console.log("建立连接c,当前连接数："+num3);
    conn.on('error', function(){

    });
	conn.on('text', function(str){
		console.log("连接"+id+":"+str);
		//创建一个connection
		var connection = mysql.createConnection({    
			host     : '127.0.0.1',       //主机
			user     : 'bob',            //MySQL认证用户名
			password: '1234',
			port:   '3306',
			database: 'gold_desert'
		});
		//创建一个connection
		connection.connect(function(err){
			if(err){       
				console.log('[query] - :'+err);
				return;
			}
			console.log('[connection connect]  succeed!');
		}); 
		console.log(str);
		//执行SQL语句
		connection.query(str , function(err3, rows3, fields3) {
			if (err3) {
				console.log('[query] - :'+err3);
				
				return;
			}
			
		}); 
		//关闭connection
		connection.end(function(err){
			if(err){       
				return;
			}
			console.log('[connection end] succeed!');
		});
		
      })
	
	conn.on('close', function(){
		num3=num3-1;
		console.log("关闭了一个连接c，当前连接数："+num3);
    });

}).listen(3003);


