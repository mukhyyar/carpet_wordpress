<?php /* Template Name: Media Gallery */ 

get_header(); 

if (ICL_LANGUAGE_CODE=='en') {
	$readmore = "Read More";
} elseif (ICL_LANGUAGE_CODE=='ar') {
		$readmore = "الــمــزيــــــــــد";

}


 ?>






     
    <div class="cb-view gallery gallery-main" data-controller="aboutController" id="view-main">
      <div class="cb-slider">
        <div class="cb-slider-nav"></div>
        <div class="cb-slider-items body-lang-<?php echo ICL_LANGUAGE_CODE; ?>">
<?php
$args = array( 'post_type' => 'gallery-oasis', 'posts_per_page' => '-1',  'order' => 'ASC' );
$loop = new WP_Query( $args );
while ( $loop->have_posts() ) : $loop->the_post();?>

      <header id="<?php echo $post->ID?>" class="cb-intro"  data-navbar-class="">
	  
        <div  class="cb-intro-fill bg_green"></div>
        <div class="cb-intro-bg" data-cursor="-hidden">
          <div class="cb-illustration -man">
		  <h1><?php the_title();?></h1>
		  
		  <div class="col-md-4 p-l-0">
		 
		<?php 
			  
		if ( !empty( get_the_content() ) ){

			  ?>
		<div class="gallery-short-detail">
			<p><?php the_content();?></p>
			
		  </div>
			  
		<?php } ?>	  
		   <div class="cb-featured-more -color-dsx hidden-xs hidden-sm">
									 <a  class="cb-btn cb-btn_view -magnet" href="<?php  echo get_permalink();?>" role="button"><span class="cb-btn_view-zone"></span><span class="cb-btn_view-box"><span class="cb-btn_view-text"><span><?php echo $readmore;?></span></span><span class="cb-btn_view-line"></span></span></a></div>
		  
		  </div>
		  
		  <div class="col-md-8">
		  <?php 
			  //$img = the_post_thumbnail( 'full' ); 
			   $img = get_the_post_thumbnail_url(get_the_ID(),'full'); 

			  
			  ?>
		  <img src="<?php echo $img; ?>" class="img-responsive"/>
			
			 <div class="cb-featured-more -color-dsx hidden-md hidden-lg">
									 <a  class="cb-btn cb-btn_view -magnet" href="<?php  echo get_permalink();?>" role="button"><span class="cb-btn_view-zone"></span><span class="cb-btn_view-box"><span class="cb-btn_view-text"><span><?php echo $readmore;?></span></span><span class="cb-btn_view-line"></span></span></a></div>  
			  
		  </div>
		  
		  </div>
        </div>
        <div class="cb-intro-body">
          <div class="cb-container -md">
           <?php 
		   $count =1;
		   if($count ==1){
		   $args = [  'post_type'=>'gallery-oasis',  'order' => 'ASC','suppress_filters' => false];
			$posts = get_posts($args);
			// print_r ($posts);
			foreach($posts as $key=>$post){
				  ;
			?>
			 			<a class="cb-intro-more <?php echo $post->ID?>" href="#<?php echo $post->ID?>" role="button"><b><?php  echo $post->post_title?></b><span></span></a>

			<?php }
			
			$count++;
		   }
		   ?>
		   
			
			
          </div>
        </div>
      </header>

<?php
endwhile;
?>         



	  
</div>
</div>
</div>
</div>

<script>
$( document ).ready(function() {
	
	$( window ).load(function() {

 var pageURL = $(location).attr("href");
            hash = pageURL.split('#')[1];
console.log(hash);

$('#'+hash).find('a').trigger('click');
});
});

//active li

$( ".cb-intro-more" ).click(function() {
	var $get_href = $(this).attr('href');
	//$(this).has($get_href).addClass('active');
	//$('body').find($get_href).addClass('active');
     $("a").removeClass("active");

	$('a[href*="'+$get_href+'"]').addClass('active');
});
	
	
	
</script>
   
<?php get_footer(); ?>
