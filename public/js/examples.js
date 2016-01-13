$(window).load(function() {
	$(".loader").fadeOut("slow");
});

$(document).ready(function(){

	$('.navTrigger').click(function(){
	  $(this).toggleClass('active');
	  $(".menu").fadeToggle();
	});

	$('.toggle').click(function(){
		console.log("clicked")
		$(".video-demo").fadeToggle();
		$(".video-make").fadeToggle();

		$(".video-demo").toggleClass("isVisibleVideo");
		$(".video-make").toggleClass("isVisibleVideo");

		if ($(".video-demo").hasClass( "isVisibleVideo" ) ) {
			console.log("yesssss")
			$(".video-demo")[0].play();
			$(".video-make")[0].pause();
		}

		if ($(".video-make").hasClass( "isVisibleVideo" ) ) {
			console.log("nooooo")
			$(".video-make")[0].play();
			$(".video-demo")[0].pause();
		}

	});

	/*$("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });*/

});