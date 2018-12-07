<?php /* Template Name: Inside sidebar */ 

get_header(); ?>
<?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>


               <div id="section_2" class="inside_page cb-slider-item -in" data-slide-name="dsx" data-slide-navbar-inverse="true" style="z-index: 5; transform: matrix(1, 0, 0, 1, 0, 0);">
                  <header class="cb-featured">
                     <div class="cb-featured-preview">
                        <div class="cb-preview -right">
                           <div class="cb-preview-fill -color-ewa-bg" style="background: url('<?php echo $backgroundImg[0]; ?>');     background-position: right;">>
                              
                           </div>
                        </div>
                     </div>
                     <div class="cb-featured-letter -back" data-letter="d">
                     </div>
                     <div class="cb-featured-fill bg_red -color-dsx -done">
                        <div class="cb-featured-letter -front" data-letter-pattern="d">
                        </div>
                        <div class="cb-featured-letter -fallback" data-letter-fallback="d" style="opacity: 1;">
                        </div>
                     </div>
                     <div class="cb-featured-body">

                                 <div class="cb-container -lg">

                                      <div class="cb-featured-header">
                                            <h1><?php echo get_the_title();?></h1>
									 
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
