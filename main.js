$(document).ready(function(){
	$(window).scroll(function(){
		var yOffset = window.pageYOffset;
		var breakpoint = 10;

		if(yOffset > breakpoint){
			$('.navbar').addClass('active');
		} else {
			$('.navbar').removeClass('active');
		}
	});
});

  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    } // End if
  });
