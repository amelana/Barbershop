 $(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.navigation').toggleClass('active');
	});
});


 $('.header').on('click','.login-button',function(){
 	$('#login-modal').fadeIn();
 });

 $('.modal__window').on('click','.modal__close',function(){
 	$('#login-modal').fadeOut();
 });

   var mySwiper = new Swiper ('.swiper-container', {
  loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
        autoplay: {
    delay: 3000,
  },
  })