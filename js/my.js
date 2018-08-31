
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
$(document).ready(function() {
     $('.video').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {


            $('.video .process_item').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInDown animated');
                }, k * 200, 'easeInOutExpo');

            });

        }
    }, {
        offset: '600px'

    });
     $('.product').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {


            $('.fade_left').each(function(k) {
                var el = $(this);

                setTimeout(function() {
                    el.addClass('fadeInLeft animated');
                }, 1 * 100, 'easeInOutExpo');

            });
        $('.fade_right').each(function(k) {
                        var el = $(this);

                        setTimeout(function() {
                            el.addClass('fadeInRight animated1');
                        }, 1 * 100, 'easeInOutExpo');

                    });

        }
    }, {
        offset: '200px'

    });

     $('.case').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {
    
           $('.caseLeft').addClass('fadeInLeft animated');  
           $('.caseRight').addClass('fadeInRight animated');
          
        }
    }, {
        offset: '100px'

    });


     $('#item1').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {
    
           $('.item1_left').addClass('fadeInLeft animated');  
           $('.item1_right').addClass('fadeInRight animated'); 
        }
    }, {
        offset: '300px'

    });
     $('#item2').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {
    
           $('.item2_left').addClass('fadeInLeft animated');  
           $('.item2_right').addClass('fadeInRight animated'); 
        }
    }, {
        offset: '500px'

    });
     $('#item3').waypoint(function(direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {
           $('.item3_left').addClass('fadeInLeft animated');  
           $('.item3_right').addClass('fadeInRight animated');
          
        }
    }, {
        offset: '700px'

    });
     $(window).scroll(function(){
        $(window).css("height","auto")
     })
});



	