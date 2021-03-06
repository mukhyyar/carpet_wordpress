<?php /* Template Name: The Venue */ 

get_header(); ?>
<?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>

<div class="cb-view" data-controller="mainController" id="view-main">
         <div class="cb-slider">
            <div style="display:none;" class="cb-slider-nav"></div>
            <div class="cb-slider-items  body-lang-<?php echo ICL_LANGUAGE_CODE; ?>">
			
<div id="section_5"class="cb-slider-item -in" data-slide-name="dsx" data-slide-navbar-inverse="true" style="z-index: 5; transform: matrix(1, 0, 0, 1, 0, 0);">
                  <header class="cb-featured">
                     <div class="cb-featured-preview">
                        <div class="cb-preview -right">
                           <div class="cb-preview-fill -color-ewa-bg"style="background: url('<?php echo $backgroundImg[0]; ?>');     background-position: right;">
                              
                           </div>
                        </div>
                     </div>
                     <div class="cb-featured-letter -back" data-letter="d">
                     </div>
                     <div class="cb-featured-fill bg_green -color-dsx -done">
                        <div class="cb-featured-letter -front" data-letter-pattern="d">
                        </div>
                        <div class="cb-featured-letter -fallback" data-letter-fallback="d" style="opacity: 1;">
                        </div>
                     </div>
                     <div class="cb-featured-body">
					 
                        <div class="cb-container -lg">
							<div class="cb-featured-head">
               			 <div class="cb-featured-label"><h1 class="fttimes"><?php echo get_the_title();?></h1></div>
              			</div>
                           <div class="cb-featured-text">
                              <div class="cb-text -xl">
								     <?php the_content(); ?>
                           </div>
                           <div class="cb-featured-tags">
                              <p>a</p>
                           </div>
                           <div hidden class="cb-featured-more -color-dsx"><a class="cb-btn cb-btn_view -magnet" href="http://pwsolution.com/carpet/" role="button"><span class="cb-btn_view-zone"></span><span class="cb-btn_view-box"><span class="cb-btn_view-text"><span>Read More</span></span><span class="cb-btn_view-line"></span></span></a></div>
                        </div>
                     </div>
					  </div>
                  </header>
               
            </div>
            </div>
            </div>
            </div>
            </div>


<?php get_footer(); ?>
