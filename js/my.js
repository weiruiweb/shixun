
$(function(){
	var w=$(window).width();
	$('.nav li').hover(function(){
		$(this).removeClass('on');
		if(w<768){
			$(this).find('dl').stop(true,true).slideUp(500).css('display','block');
		}else{
			$(this).find('dl').stop(true,true).slideDown(500);
			$(this).find('i').stop().css('height',2).animate({left:0,width:"100%"},200);
		}	
	},function(){
		$(this).find('dl').stop(true,true).slideUp(500);
		$(this).find('i').stop().animate({left:'50%',width:0},200);	
	})

});




	