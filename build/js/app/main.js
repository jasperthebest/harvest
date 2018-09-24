	/* Build-in */
	
	/* Ready function */
	$(function() {

		/* Body Animate */
		$('body').animate({'opacity':1}, 1500);

		/* BG intro */
		$('[data-bg]').each(function(){
			var curBg = $(this).data('bg');
			$(this).css({'background-image':'url('+curBg+')'});
		});

		/* Menu Show */
		$('#nav-icon').click(function(){
			$('body').toggleClass('menu');
		});
		
		/* Init Function */
		
	});

	/* Scroll */
	$(window).scroll(function() {
		
	});
	
	/* Resize */
	$(window).resize(function(){

		/* Init Function */
	});

	/* Orientation  */
	$(window).on("orientationchange",function(){

		/* Init Function */
	});
