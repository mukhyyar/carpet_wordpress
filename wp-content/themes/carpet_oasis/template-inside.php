<?php /* Template Name: Inside Page */ 

get_header(); ?>


  <div id="inside_page" class="inside_page cb-slider-item" data-slide-name="colorfly" data-slide-navbar-inverse="true">
    <header class="cb-featured body-lang-<?php echo ICL_LANGUAGE_CODE; ?>">
      <div class="cb-featured-preview">
        <div class="cb-preview -right">
          <div class="cb-preview-fill section-inside-bg"> </div>
        </div>
      </div>
      <div class="cb-featured-body">
        <div class="cb-container -lg">
          <div class="cb-featured-header">
			
            <h1><?php echo get_the_title();?></h1>
           
		   <?php the_content(); ?>
          </div>
          <div class="cb-featured-text">
            <div class="cb-featured-tags">
              <p>a</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>


<?php get_footer(); ?>
