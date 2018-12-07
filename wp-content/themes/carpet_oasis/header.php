<!DOCTYPE html>
<html class="no-js" lang="en">
   <meta http-equiv="content-type" content="text/html;charset=utf-8" />
   <head>
	<title>Carpet Oasis </title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/custom.css">
       <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/responsive.css">
	   <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/img/header/favicon.png">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	  
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   </head>
   <body  data-cursor="-hidden">
   
	   <div class="logo-shield hidden-xs"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/shield.png" width="151" alt=""/></div>
      <div   class="cb-loader cb-loader_overlay -front -visible">
         <div  class="cb-loader_overlay-img fa-spin"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/animated_load.png" alt=""></div>
      </div>
	  
      <div class="cb-loader cb-loader_fill"></div>
	  
      <nav class="cb-navbar">
	  
         <div class="cb-navbar-strip">
		 
            <div class="cb-navbar-container">
               <div class="cb-navbar-grid">
                  <div class="cb-navbar-grid-col -left">

                     <a class="cb-navbar-logo" href="<?php echo home_url(); ?>">
                     <img src="<?php echo get_template_directory_uri(); ?>/assets/img/header/logo_red.png"/>
                     </a>
                  </div>
				  
                  <div class="cb-navbar-grid-col -right">
                     <button class="cb-navbar-toggle">
					 <span id="1st_line"></span>
					 <span></span>
					 <span></span>
				    </button>
                  </div>
               </div>
            </div>
         </div>

         <div class="cb-navbar-menu" >
            <div class="cb-navbar-menu-fill"></div>
			
            <div class="cb-navbar-menu-body">
			
               <div class="cb-navbar-menu-nav" >
			   
                  <div class="cb-navbar-container">
                     <!--working link on live -->

					 <?php
					echo menu_custom_new();
					 ?>
					 
					 
				  
               </div>
               <div class="cb-navbar-menu-social ft-xs-social" data-cursor="-hidden">
                  <div class="cb-navbar-container">
                     <div class="cb-social">
					 		 						

                        <a class="cb-social-item" href="https://www.instagram.com/explore/tags/carpet_oasis/" target="_blank">
                        <span class="cb-social-item-inner">
                       <i class="fa fa-instagram"></i>
                        </span>
                        </a>
                        <a class="cb-social-item" href="https://twitter.com/carpet_oasis" target="_blank">
                           <span class="cb-social-item-inner">
                               <i class="fa fa-twitter"></i>
                           </span>
                        </a>
                        <a class="cb-social-item" href="https://www.facebook.com/CarpetOasis/" target="_blank">
                           <span class="cb-social-item-inner">
                               <i class="fa fa-facebook"></i>
                           </span>
                        </a>
                        <a class="cb-social-item" href="#">
                           <span class="cb-social-item-inner">
                               <i class="fa fa-youtube-square"></i>
                           </span>
                        </a>
                        <div class="languages"> <?php do_action( 'wpml_footer_language_selector'); ?></div>
                  </div>
                     </div>
                  </div>
               </div>
            </div>
         
		 </div>
         <div class="cb-navbar-backdrop"></div>
      </nav>
      <div class="cb-view" data-controller="mainController" id="view-main" >
         <div class="cb-slider">
            <div style="display:none;" class="cb-slider-nav"></div>
            <div class="cb-slider-items  body-lang-<?php echo ICL_LANGUAGE_CODE; ?>">
			                     	

