
$(document).ready(function() {
  $('.magnific_img').magnificPopup({type:'image'});


  $('.group_content').magnificPopup({
    type:'image',
    delegate: 'a'
  });



  $('.popup_video').magnificPopup({
    type:'video',
  });

});