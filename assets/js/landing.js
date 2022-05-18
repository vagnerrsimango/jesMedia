var $link = $('a');

$link.on('click', function(event) {
  // stop normal link function (#)
  $link.removeClass('active');
  $(this).addClass('active');
});

$('.default').trigger('click');


$('.slide').mousehover(function(){
  alert('ok')
})
