$(document).ready(function() {

  $(window).scroll(function() {
      var distanceFromTop = $(document).scrollTop();

      console.log('distance from top', distanceFromTop)
      console.log('header height', $('.header').height())

      if (distanceFromTop > $('.header').height() - 15)
      {
          $('#sticky').addClass('fixed');
      }
      else
      {
          $('#sticky').removeClass('fixed');
      }
  });


// console.log("smartScrollLength", $('.smart-scroll').length)
//       // NAVBAR DISSAPEAR ON SCROLL
//       if ($('.smart-scroll').length > 0) { // check if element exists
//         var last_scroll_top = 0;
//         $(window).on('scroll', function() {
//           scroll_top = $(this).scrollTop();
//           if (scroll_top <= last_scroll_top) {
//             $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
//           } else {
//             $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
//           }
//           last_scroll_top = scroll_top;
//         });
//       }

}); //close readyFunction

//modal
$('#subscribeButton').on('shown.bs.modal', function () {
    $('#subscribeModal').trigger('focus')
})
