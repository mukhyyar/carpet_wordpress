$( document ).ready(function() {
$('#timer').countdown("2019/01/20", function(event) {
			  $(this).html(event.strftime( '<span>%D<small>Days</small></span> : <span>%H<small>Hour</small></span> : <span>%M<small>Minutes</small></span> : <span>%S<small>Seconds</small></span>'));
			});	
$('.cb-navbar-logo').click(function() {
    window.location.href = $(this).attr('href');;
    return false;
});
//timer
$('#timer').countdown("2019/01/20", function(event) {
  $(this).html(event.strftime( '<span>%D<small>Days</small></span> : <span>%H<small>Hour</small></span> : <span>%M<small>Minutes</small></span> : <span>%S<small>Seconds</small></span>'));
});

var myFunction = function runNext() {
        if ($("#section_1-2").hasClass("-in")) {
		setTimeout(function() {
			$( ".cb-navbar-logo .red_logo" ).show();
			$( ".cb-navbar-logo .white_logo" ).hide();
			
        }, 1100); 
	}
	else if ($("#section_2").hasClass("-in")) {
		setTimeout(function() {
			$( ".cb-navbar-logo .red_logo" ).hide();
			$( ".cb-navbar-logo .white_logo" ).show();
        }, 1100); 
	}
	else if ($("#section_3").hasClass("-in")){
	   
		setTimeout(function() {
             $( ".cb-navbar-logo .red_logo" ).hide();
			$( ".cb-navbar-logo .white_logo" ).show();
            // $( ".cb-navbar-logo img" ).addClass( "logo_filter-white");
        }, 1100); 
		
	}
	else if ($("#section_4").hasClass("-in")) {
		setTimeout(function() {
			$( ".cb-navbar-logo .red_logo" ).show();
			$( ".cb-navbar-logo .white_logo" ).hide();
			
        }, 1100); 
	}
	else if ($("#inside_page").hasClass("-in")){
		
		 $( ".cb-navbar-logo .red_logo" ).hide();
			$( ".cb-navbar-logo .white_logo" ).show();
	

	}
	else{
		 $( ".cb-navbar-logo .red_logo" ).show();
			$( ".cb-navbar-logo .white_logo" ).hide();
		}
	
	
}
setInterval(myFunction, 10); // call every 1000 milliseconds

$('.cb-preview-fill').click(false);


//wpml

//$('.wpml-ls-link').click(function () {
  // location.reload(true);
   // history.go(0);
 //});
 
 
 

//inside page link
// var mySVG = $('svg').drawsvg({
      // duration:1500,
      // easing: 'swing',
	  // reverse: false,
 // callback: function() {
     // //$('body svg#red_svg path').addClass( "red_svg_fade" );
	    // // $('body svg#white_svg path').addClass( "white_svg_fade" );

 // //$('body svg path').animate({opacity: 1}, 1000);
      // // $('body svg path').css('stroke-width','0');
      // }
    // });
// mySVG.drawsvg('animate');


});
