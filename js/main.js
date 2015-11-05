$(document).ready(function(){
	var altura = $('.Barra').offset().top;
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura){
			$('.Barra').addClass('Barra-fixed');
		} else {
			$('.Barra').removeClass('Barra-fixed');
		}
	});
});

