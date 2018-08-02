(function($) {

  // Add smooth scrolling to all links in navbar
  $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a,.aa, .topping").on('click', function(event) {

    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    
    if ($(".navbar-default").offset().top > 735) {
      $(".navbar-fixed-top").removeClass("nav-hide");
      if ($(".navbar-default").offset().top > 750){
        $(".navbar-fixed-top").addClass("top-nav-collapse");

      }

    } else{
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-fixed-top").addClass("nav-hide");

    }


  });

  //jqurey to load content onscroll

  $(window).scroll(function() {
    
    if ($(".d-image-1").offset().top > 2000) {
      $(".d-image-1").removeClass("d-image-hide");
      $(".d-image-1").addClass("animated fadeInDown");
      $(".d-image-2").removeClass("d-image-hide");
      $(".d-image-2").addClass("animated bounceInDown");
    }
    if ($(".d-image-1").offset().top > 2100) {
      $(".d-image-3").removeClass("d-image-hide");
      $(".d-image-3").addClass("animated fadeInDown");
      $(".d-image-4").removeClass("d-image-hide");
      $(".d-image-4").addClass("animated fadeInLeft");
      $(".d-image-5").removeClass("d-image-hide");
      $(".d-image-5").addClass("animated fadeInRight");
      
    }


  });

//osdld
  $(window).scroll(function() {
    
    if ($(".os-download").offset().top > 3400) {
      $(".os-download").addClass("animated lightSpeedIn");
      $(".os-download").removeClass("nav-hide");
      
    } 

  });
  
  // for the top button
  $(window).scroll(function(){
    if ($(".topping").offset().top > 1500){
      $(".topping").removeClass("nav-hide");
      $(".topping").addClass("animated zoomIn");
    }
    else{
      $(".topping").addClass("nav-hide");
      $(".topping").removeClass("animated zoomIn");
    }
  });

  

})(jQuery);

function changeimg(){
    var image = document.getElementById('eye');
    var pass = document.getElementById('type-pass');
    if (image.src.match("hidden")) {
        image.src = "img/reveal-eye.png";
        $(".c-pass").addClass("nav-hide");
        pass.setAttribute("type", "text");
        document.getElementById('c-pass').removeAttribute('required');

    } else {
        image.src = "img/hidden-eye.png";
        $(".c-pass").removeClass("nav-hide");
        pass.setAttribute("type", "password");
        document.getElementById('c-pass').addAttribute('required');
    }
  }



 
    



      


 


