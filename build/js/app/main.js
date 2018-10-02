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

		/* Datepicker */
		$( ".datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true
		});

		$('.showdatepick').click(function(){
			$('.datepicker').datepicker('show');
			console.log($('.datepicker').val());
			return false;
		});

		/* Menu Show */
		$('#nav-icon').click(function(){
			$('body').toggleClass('menu');
		});
		
		/* Clear Input */
		$('.clear').click(function(){
			$('.inputget input').val('').focus();
		});

		/* Close Pop */
		$('.closepop').click(function(){
			$('.popbg').removeClass('active');
			return false;
		});

		/* Open Pop */
		$('.openpop').click(function(){
			$('.popbg').addClass('active');
			return false;
		});

		/* Select Box */
		$('.selectbox span').click(function(){
			$(this).parent().toggleClass('active');
			return false;
		});

		$('.selectbox div ul li').click(function(){
			$(this).parents('.selectbox').find('span').text($(this).text());
			$(this).parents('.selectbox').find('input').val($(this).text());
			$(this).parents('.selectbox').removeClass('active');
			return false;
		});

		/* Pop Part Change */
		$('.nextbtn').click(function(){
			if($(this).parent().next().length == 1) {
				$(this).parent().removeClass('active').next().addClass('active');
			} else {
				$('.popbg').removeClass('active');
				$('.totalpart').removeClass('active').first().addClass('active');
			}
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
