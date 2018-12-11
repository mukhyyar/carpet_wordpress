$( document ).ready(function() {
$('.cb-navbar-logo').click(function() {
    window.location.href = $(this).attr('href');;
    return false;
});
//timer
$('#timer').countdown("2019/01/20", function(event) {
let days = $('#days').html();
let hour = $('#hour').html();
let minutes = $('#minutes').html();
let seconds = $('#seconds').html();
  $(this).html(event.strftime( '<span>%D<small>'+days+'</small></span> : <span>%H<small>'+hour+'</small></span> : <span>%M<small>'+minutes+'</small></span> : <span>%S<small>'+seconds+'</small></span>'));
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
	else if ($("#view-main").hasClass("gallery")){
		
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


//gallary back
	
//GALLERY FUNCTIONS


    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }

	
});
