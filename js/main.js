$(document).ready(function(){
	$('.it_nav').click(function(e){
		$('.it_nav').toggleClass('open');
		$('body').toggleClass('hidden');
		e.preventDefault();
	});
	$('.open_one').click(function(e){
		$('.toggle_one').addClass('active');
    $('body').addClass('hidden');
		e.preventDefault();
	});
  $('.open_two').click(function(e){
    $('.toggle_two').addClass('active');
    $('body').addClass('hidden');
    e.preventDefault();
  });
  $('.open_color').click(function(e){
    $('.toggle_color').addClass('active');
    $('body').addClass('hidden');
    e.preventDefault();
  });
  $('.close_bottom').click(function(e){
    $('.from_bottom').removeClass('active');
    $('body').removeClass('hidden');
    e.preventDefault();
  });


  $(".scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

$(function () {
	$('.popup_trigger').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});


(function($) {
  $(function() {
 
    $('ul.tabs__caption').each(function(i) {
      var storage = localStorage.getItem('tab' + i);
      if (storage) {
        $(this).find('li').removeClass('active').eq(storage).addClass('active')
        .closest('.tabs').find('.tabs__content').removeClass('active').eq(storage).addClass('active');
      }
    });
 
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.tabs__caption'));
      localStorage.removeItem('tab' + ulIndex);
      localStorage.setItem('tab' + ulIndex, $(this).index());
    });

  });
})(jQuery);

$(window).scroll(function(){$(window)
  .scrollTop()>300?$(".click_call")
  .addClass("show"):$(".click_call")
  .removeClass("show")
})

