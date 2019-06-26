$('#number1').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$('#number2').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).ready(function() {
    $(".accordion_head").click(function() {
      if ($('.accordion_body').is(':visible')) {
        $(".accordion_body").slideUp(300);
        $(".plusminus").text('>');
      }
      if ($(this).next(".accordion_body").is(':visible')) {
        $(this).next(".accordion_body").slideUp(300);
        $(this).children(".plusminus").text('>');
      } else {
        $(this).next(".accordion_body").slideDown(300);
        $(this).children(".plusminus").text('v');
      }
    });
  });
// NAVBAR
$(document).ready(function() {
        // Transition effect for navbar
        
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 100) { 
              $('.navbar').addClass('solid');

              $('.navbar').addClass('navbar-fixed-top');
            
              
          } else {
              $('.navbar').removeClass('solid');
              $('.navbar').removeClass('navbar-fixed-top');
               

          }
        });
});
// NAVBAR