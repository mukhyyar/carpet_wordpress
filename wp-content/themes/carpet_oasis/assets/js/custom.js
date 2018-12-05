//URL CHECK

 function isUrlExists(url, cb){
    jQuery.ajax({
        url:      url,
        dataType: 'text',
        type:     'GET',
        complete:  function(xhr){
            if(typeof cb === 'function')
               cb.apply(this, [xhr.status]);
        }
    });
}

//timer
$('#timer').countdown("2019/01/20", function(event) {
  //var totalHours = event.offset.totalDays * 24 + event.offset.hours;
  $(this).html(event.strftime( '<span>%D<small>Days</small></span> : <span>%H<small>Hour</small></span> : <span>%M<small>Minutes</small></span> : <span>%S<small>Seconds</small></span>'));
});





var myFunction = function runNext() {
    if ($("#section_2").hasClass("-in")) {
		setTimeout(function() {
			
			$( ".cb-navbar-logo img" ).attr('src','wp-content/themes/carpet_oasis/assets/img/header/logo_white.png');
			$('#timer').countdown("2019/01/20", function(event) {
			  $(this).html(event.strftime( '<span>%D<small>Days</small></span> : <span>%H<small>Hour</small></span> : <span>%M<small>Minutes</small></span> : <span>%S<small>Seconds</small></span>'));
			});	
        }, 1100); 
	}
	else if ($("#section_3").hasClass("-in")){
		setTimeout(function() {
             $( ".cb-navbar-logo img" ).attr('src','wp-content/themes/carpet_oasis/assets/img/header/logo_white.png');
            // $( ".cb-navbar-logo img" ).addClass( "logo_filter-white");
        }, 1100); 
		
	}
	else if ($("#inside_page").hasClass("-in")){
		
		
			isUrlExists('wp-content/themes/carpet_oasis/assets/img/header/logo_white.png', function(status){
			if(status === 200){
				$( ".cb-navbar-logo img" ).attr('src','../wp-content/themes/carpet_oasis/assets/img/header/logo_white.png');
			}
			else if(status === 404){
				$( ".cb-navbar-logo img" ).attr('src','../../carpet/wp-content/themes/carpet_oasis/assets/img/header/logo_white.png');
			}
		});

	}
	else{
		 $( ".cb-navbar-logo img" ).attr('src','wp-content/themes/carpet_oasis/assets/img/header/logo_red.png');
		}
	
	
}
setInterval(myFunction, 10); // call every 1000 milliseconds

$('.cb-preview-fill').click(false);


//wpml

$('.wpml-ls-link').click(function () {
   location.reload(true);
   // history.go(0);
 });
 
 
 

//inside page link
$('.cb-navbar-logo').click(function() {
    window.location.href = $(this).attr('href');;
    return false;
});