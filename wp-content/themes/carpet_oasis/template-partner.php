<?php /* Template Name: Strategic Partner */ 

get_header(); ?>

<?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>
               <div id="section_1" class="inside_page partners cb-slider-item -in" data-slide-name="dsx" data-slide-navbar-inverse="true" style="z-index: 5; transform: matrix(1, 0, 0, 1, 0, 0);">
                  <header class="cb-featured">
                     <div class="cb-featured-preview">
                        <div class="cb-preview -right">
                           <div class="cb-preview-fill -color-ewa-bg"style="background: url('<?php echo $backgroundImg[0]; ?>');     background-position: right;">>
                              
                           </div>
                        </div>
                     </div>
                     <div class="cb-featured-letter -back" data-letter="d">
                     </div>
                     
                     <div class="cb-featured-fill bg_brown  -color-dsx -done">
                        <div class="cb-featured-letter -front" data-letter-pattern="d">
                        </div>
                        <div class="cb-featured-letter -fallback" data-letter-fallback="d" style="opacity: 1;">
                        </div>
                     </div>
                     <div class="cb-featured-body">

                                 <div class="cb-container -lg">

                                      <div class="cb-featured-header">
                                            
									 
									  <?php the_content(); ?>
										<!--<h2 class="sec-1-hd"> 
										
										Every Carpet is
                                 <span>an oasis of</span>
                                 <strong>hidden secrets</strong>
								 
								 
								 </h2> -->
								 
								 
									 </div>
									

					 </div>
                     </div>
                  </header>
               </div>  
               
            
<?php get_footer(); ?>
