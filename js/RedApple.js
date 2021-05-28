	window.onload = function(){
		//实现轮播效果
		//新建一个变量，保存大年焦点元素的索引
		var index = 0;
		//设置每3秒变换一次的定时器
		var timer = window.setInterval(autoChange,100);
		//获取所有的图片
		var pic_div = document.getElementById("imgList").getElementsByTagName("div");
		
		//遍历元素（绑定元素?）
		for(var i = 0;i<pic_div.length;i++){
			//添加鼠标滑过元素
			
				//遍历元素
				//将当前索引对应的元素设为显示
				if(pic_div[j]==this){
					index=j;//从当前位置的索引开始
					
					pic_div[j].className="current";					
				}else{
					pic_div[j].className="pic";
					
				}
				
				


	
				//启动定时器，恢复自动切换
				timer=setInterval(autoChange,100);
			}
		
		//定时器函数设置
		function autoChange(){
			//自增索引
			++index;
			//当索引达到上限时，索引归0
			if(index == pic_div.length){
				index = 0; 
			}
			for(var i = 0;i<pic_div.length;i++){				
					if(i == index){
					
					pic_div[i].className="current";					
				}else{
					pic_div[i].className="pic";
					
				}
			}
		}	
	};
	
	