$(document).ready(function(){
  //Nav color change on scroll
   $(window).scroll(function(){

    if ($(document).scrollTop() > 20) {
      $("nav").addClass('active');
    } else {
      $("nav").css({"background": "transparent"})
    };
  })
  // mobile dropdown nav
  $(".hamburger").click(function(){
    $(".mobile-nav").show(500);
  });
  $(".nav-close, li, a").click(function(){
      $(".mobile-nav").css({"display":"none"});
  });
  //smooth scroll
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  //project hover
  $(".project").click(function(){
    $("caption-slide").css({"overflow": "none"});
  });
  //Modal popup
  $(".contact-button").click(function(){
    $(".modal").slideDown(300);
  });
  //Modal click out
  $(".submit-button").click(function(){
    $(".modal").slideUp(300);
  });
});
