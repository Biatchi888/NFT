$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

 // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

//contact buttons
    $("#submitBtn").click(function(){
    alert("Your message has been sent");
  });
    $("#resetBtn").click(function() {
        $("#contactform")[0].reset()
  });

    $("#nic-top-btn").click(function(){
        $('html,body').animate({scrollTop:0}, 800);
    });