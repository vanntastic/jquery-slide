/*******

	Origin of code from :   http://www.position-absolute.com/articles/better-html-anchor-a-jquery-script-to-slide-the-scrollbar/
	
	USAGE : 
	
  	$('a#slide').slide();
	
*****/

(function($) {

    $.fn.slide = function() {
      
    	$(this).click(function () {	
  			elementClick = $(this).attr("href")
  			destination = $(elementClick).offset().top;
  			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1100 );
  		  	return false;
  		})           
            
    }
    
})(jQuery);
