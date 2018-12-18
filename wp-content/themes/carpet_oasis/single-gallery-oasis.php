<?php 
global $post;
$current_post_id = $post->ID;
get_header(); ?>

<style>
html {
    height: auto;
    background: #092929;
}
</style>

<script>
let modalId = $('#image-gallery');
$('body').keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
	
	 if ((e.keyCode || e.which) == 37)
    {   
        $('#show-previous-image')
            .click();
    }
    // right arrow
    if ((e.keyCode || e.which) == 39)
    {
        $('#show-next-image')
            .click();
    }   
	
	
  });
  
  

</script>

<script>
$( document ).ready(function() {
$('.cb-intro-more').click(function() {
    window.location.href = $(this).attr('href');;
    return false;
	
	
	 var pageURL = $(location).attr("href");
				hash = pageURL.split('#')[1];
	console.log(hash);

	$('#'+hash).find('a').trigger('click');
});
});


</script>
     
    <div class="cb-view gallery gallery-main gallery-s-p" data-controller="aboutController" id="view-main">
      <div class="cb-slider">
        <div class="cb-slider-nav"></div>
        <div class="cb-slider-items body-lang-<?php echo ICL_LANGUAGE_CODE; ?>">


      <header id="" class="cb-intro"  data-navbar-class="">
	  
        <div  class="cb-intro-fill bg_green"></div>
        <div class="cb-intro-bg" data-cursor="-hidden">
          <div class="cb-illustration -man">
		  <h1><?php the_title();?></h1>
		  
		  <?php	$images = get_field('gallery'); ?>
			<?php foreach( $images as $image ): ?>
            <div class="col-lg-3 col-md-3 col-xs-6 thumb">
                <a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title=""
                   data-image="<?php echo $image['url']; ?>"
                   data-target="#image-gallery">
                    <img class="img-thumbnail"
                         src="<?php echo $image['url']; ?>"
                         alt="<?php echo $image['alt']; ?>">
                </a>
            </div>
           
		   <?php endforeach; ?>

         
       
		
		
		 <div class="modal fade" id="image-gallery" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                   
                    <div class="modal-body">
						<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span>
                        </button>
                        <img id="image-gallery-image" class="img-responsive col-md-12" src="">
                    </div>
                    <div style="display: none;;" class="modal-footer">
                        <button type="button" class="btn btn-secondary float-left" id="show-previous-image"><i class="fa fa-arrow-left"></i>
                        </button>

                        <button type="button" id="show-next-image" class="btn btn-secondary float-right"><i class="fa fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
	
		  
		  
		 
		  <div class="col-md-12">
		 
		  </div>
		  
		  </div>
        </div>
        <div class="cb-intro-body">
          <div class="cb-container -md">
           <?php 
		   $count =1;
		   if($count ==1){
		   $args = [  'post_type'=>'gallery-oasis',  'order' => 'ASC', 'suppress_filters' => false];
			$posts = get_posts($args);
			// print_r ($posts);
			foreach($posts as $key=>$post){
				  ;
				if($current_post_id == $post->ID ){ $active = "active";}else{$active = "";}
			?>
			 			<a class="cb-intro-more menu-gallery <?php echo $active; ?>" href="../#<?php echo $post->ID?>" role="button"><b><?php  echo $post->post_title?></b><span></span></a>

			<?php }
			
			$count++;
		   }
		   ?>
		   
			
			
          </div>
        </div>
      </header>

        



	  
</div>
</div>
</div>
</div>


   
<?php get_footer(); ?>
