$(window).scroll(function(){
                 $('nav').toggleClass('scrolled', $(this).scrollTop() > 600);
                 $('.home .nav-link').toggleClass('scrolled', $(this).scrollTop() > 600);
                $('.home .navbar-brand').toggleClass('scrolled', $(this).scrollTop() > 600);
    
                 });
