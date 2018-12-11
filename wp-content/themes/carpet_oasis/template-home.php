<?php 

/* Template Name: Home Carpet Oasis */ 

get_header(); ?>

<div class="cb-view" data-controller="mainController" id="view-main">
         <div class="cb-slider">
            <div style="display:none;" class="cb-slider-nav"></div>
            <div class="cb-slider-items  body-lang-<?php echo ICL_LANGUAGE_CODE; ?>">
			
               <div id="section_1" class="cb-slider-item -in" data-slide-name="dsx" data-slide-navbar-inverse="true" style="z-index: 5; transform: matrix(1, 0, 0, 1, 0, 0);">
                  <header class="cb-featured">
                     <div class="cb-featured-preview">
                        <div class="cb-preview -right">
                           <div class="cb-preview-fill -color-ewa-bg">
                              
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

                                      <div class="cb-featured-header">
									 
									  <?php the_field( "content" ); ?>
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
               
            
			    <div id="section_1-2" class="cb-slider-item" data-slide-name="about" data-slide-navbar-inverse="true">
                  <header class="cb-featured">
                     <div class="cb-featured-preview">
                        <div class="cb-preview -right">
                           <div class="cb-preview-fill section_1-2-bg">
                              
                           </div>
                        </div>
                     </div>
                     <div class="cb-featured-letter -back" data-letter="g"></div>
                     <div class="cb-featured-fill bg_blue -color-ewa">
                        <div class="cb-featured-letter -front" data-letter-pattern="g"></div>
                        <div class="cb-featured-letter -fallback" data-letter-fallback="g"></div>
                     </div>
					   
                     <div class="cb-featured-body">
                                 <div class="cb-container -lg">
                                      <div class="cb-featured-head">
               			 <div class="cb-featured-label"><h1 class="fttimes"><?php //echo the_field('heading_about');?></h1></div>
              			</div>
									<div class="cb-featured-text">
										<div class="cb-text -xl">
								<?php echo the_field('content_key_2');?>
									</div>
									</div>
									 <div class="cb-featured-more -color-dsx">
									 <a hidden class="cb-btn cb-btn_view -magnet" href="http://pwsolution.com/carpet/" role="button"><span class="cb-btn_view-zone"></span><span class="cb-btn_view-box"><span class="cb-btn_view-text"><span>Read More</span></span><span class="cb-btn_view-line"></span></span></a></div>
                              </div>
					 </div>
                  </header>
               
            </div>
				
				<div id="section_2" class="cb-slider-item" data-slide-name="colorfly" data-slide-navbar-inverse="true">
                  <header class="cb-featured">
                     <div class="cb-featured-preview">
                        <div class="cb-preview -right">
                           <div class="cb-preview-fill section-2-bg">
                             
                           </div>
                        </div>
                     </div>
                     <div class="cb-featured-letter -back" data-letter="c"></div>
                     <div class="cb-featured-fill bg_red -color-ewa">
                        <div class="cb-featured-letter -front" data-letter-pattern="c"></div>
                        <div class="cb-featured-letter -fallback" data-letter-fallback="c"></div>
                     </div>
                     <div class="cb-featured-body">
						 
						         <div class="cb-container -lg">
                                      <div class="cb-featured-head">
               			 <div class="cb-featured-label"><h1 class="fttimes"><?php //echo the_field('heading_about');?></h1></div>
              			</div>
									<div class="cb-featured-text">
										<div class="cb-text">
								<?php the_field('date_content') ?>

									</div>
									</div>
									 <div class="cb-featured-more -color-dsx">
									 <a hidden class="cb-btn cb-btn_view -magnet" href="http://pwsolution.com/carpet/" role="button"><span class="cb-btn_view-zone"></span><span class="cb-btn_view-box"><span class="cb-btn_view-text"><span>Read More</span></span><span class="cb-btn_view-line"></span></span></a></div>
                              </div>
					 
                     </div>
                  </header>
               
            </div>
			
			    <div id="section_3" class="cb-slider-item" data-slide-name="about" data-slide-navbar-inverse="true">
                  <header class="cb-featured">
                     <div class="cb-featured-preview">
                        <div class="cb-preview -right">
                           <div class="cb-preview-fill section-3-bg">
                              
                           </div>
                        </div>
                     </div>
                     <div class="cb-featured-letter -back" data-letter="f"></div>
                     <div class="cb-featured-fill bg_gray -color-ewa">
                        <div class="cb-featured-letter -front" data-letter-pattern="f"></div>
                        <div class="cb-featured-letter -fallback" data-letter-fallback="f"></div>
                     </div>
					   
                     <div class="cb-featured-body">
                                 <div class="cb-container -lg">
                                      <div class="cb-featured-head">
               			 <div class="cb-featured-label"><h1 class="fttimes"><?php echo the_field('heading_about');?></h1></div>
              			</div>
									<div class="cb-featured-text">
										<div class="cb-text -xl">
								<?php echo the_field('about');?>
									</div>
									</div>
									 <div class="cb-featured-more -color-dsx">
									 <a hidden class="cb-btn cb-btn_view -magnet" href="http://pwsolution.com/carpet/" role="button"><span class="cb-btn_view-zone"></span><span class="cb-btn_view-box"><span class="cb-btn_view-text"><span>Read More</span></span><span class="cb-btn_view-line"></span></span></a></div>
                              </div>
					 </div>
                  </header>
               
            </div>
				
				<div id="section_4" class="cb-slider-item" data-slide-name="#" data-slide-navbar-inverse="true">
                  <header class="cb-featured">
                     <div class="cb-featured-preview">
                        <div class="cb-preview -right section-4-bg">
                           <div class="cb-preview-fill section-inside-bg">
                              
                           </div>
                        </div>
                     </div>
                     <div class="cb-featured-letter -back" data-letter="y"></div>
                     <div class="cb-featured-fill bg_brown -color-ewa">
                        <div class="cb-featured-letter -front" data-letter-pattern="y"></div>
                        <div class="cb-featured-letter -fallback" data-letter-fallback="y"></div>
                     </div>
					  
					  
                     <div class="cb-featured-body">
					   <div class="cb-container -lg">
						    <div class="cb-featured-head">
               			 <div class="cb-featured-label"><h1 class="fttimes"><?php echo the_field('heading_partner');?></h1></div>
              			</div>
								<div class="cb-featured-text">
									<div class="cb-text -xl">
									
										<?php 
										
										$images = get_field('image');
										
										if( $images ):
										$i = 1;
										 ?>
											<?php foreach( $images as $image ): 
											
											 if($i%2 == 1) {
											  echo '<div class="row">';
											 }
											?>
											
											
												
												<div class="col-md-6 col-xs-6">
													<a href="<?php echo $image['description']?>">
														 <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
													</a>
												</div>
												
											
											 
											 
											<?php 
											
											if($i %2 == 0) {
												echo '</div>	';
											}
											$i++;
											endforeach; ?>
										
									<?php endif; ?>
										
																 
								</div>
						  <div hidden class="cb-featured-more -color-dsx"><a class="cb-btn cb-btn_view -magnet" href="http://pwsolution.com/carpet/" role="button"><span class="cb-btn_view-zone"></span><span class="cb-btn_view-box"><span class="cb-btn_view-text"><span>Read More</span></span><span class="cb-btn_view-line"></span></span></a></div>
                         </div>
                       </div>
                        <div class="cb-container -lg">
                          
                           
                           <div class="cb-featured-text">
                              
                           <div class="cb-featured-tags">
                              <p>a</p>
                           </div>
                           
                        </div>
                     </div>
					
                  </header>
               
            </div>
        		  
         		 <div id="section_5" class="cb-slider-item" data-slide-name="#" data-slide-navbar-inverse="true">
                  <header class="cb-featured">
                     <div class="cb-featured-preview">
                        <div class="cb-preview -right">
                           <div class="cb-preview-fill section-5-bg">
                              
                           </div>
                        </div>
                     </div>
                     <div class="cb-featured-letter -back" data-letter="a"></div>
                     <div class="cb-featured-fill bg_green -color-ewa">
                        <div class="cb-featured-letter -front" data-letter-pattern="a"></div>
                        <div class="cb-featured-letter -fallback" data-letter-fallback="a"></div>
                     </div>
                     <div class="cb-featured-body">
					 
                        <div class="cb-container -lg">
							<div class="cb-featured-head">
               			 <div class="cb-featured-label"><h1 class="fttimes"><?php echo the_field('heading_venue');?></h1></div>
              			</div>
                           <div class="cb-featured-text">
                              <div class="cb-text -xl">
								    <?php echo the_field('venue_content');?>
                               
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