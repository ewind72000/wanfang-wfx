//首页Banner轮换展示JS

$(function(){
    var t = n = count = 0;
	count = $("#imgContent ul").size();
	$("#imgContent ul:not(:first-child)").hide();
	$("#imgNum li").css({"background":"#3884b5",'color':'#FFF'});
	$("#imgNum li:first-child").css({"background":"#b2a63a",'color':'#FFF'});
	$("#imgNum li").hover(function() {
		var i = $(this).text() - 1;
		n = i;
		if (i >= count) return;
		$("#imgContent ul").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(500);
		$(this).css({"background":"#b2a63a",'color':'#FFF'}).siblings().css({"background":"#3884b5",'color':'#FFF'});
	    });
	t = setInterval("showAuto()", 3000);
	$("#banner").mouseover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 1000);});
}) 
function showAuto(){
	n = n >= (count - 1) ? 0 : n + 1;
	$("#imgNum li").eq(n).trigger('mouseover');
}//首页Banner轮换展示JS结束





//首页Banner轮换展示JS

//function imgChange(obj,id)
//	{
//	 var imgli = obj.parentNode.getElementsByTagName("li"); //获取li数组
//	 var imgul = document.getElementById(id).getElementsByTagName("ul"); //获取ul数组
//	 for(i=0;i<imgul.length;i++)
//	 {
//	  if(obj==imgli[i])
//	  {
//	   imgli[i].className = "licli";
//	   imgul[i].className = "";
//	  }
//	  else
//	  {
//	   imgli[i].className = "";
//	   imgul[i].className = "hidden";
//	  }
//	 }
//	}//首页Banner轮换展示JS结束



//新闻页签展示JS
function tabChange(obj,id)
	{
	 var arrayli = obj.parentNode.getElementsByTagName("li"); //获取li数组
	 var arrayul = document.getElementById(id).getElementsByTagName("ul"); //获取ul数组
	 for(i=0;i<arrayul.length;i++)
	 {
	  if(obj==arrayli[i])
	  {
	   arrayli[i].className = "cli";
	   arrayul[i].className = "";
	  }
	  else
	  {
	   arrayli[i].className = "";
	   arrayul[i].className = "hidden";
	  }
	 }
	}//新闻页签JS结束