$(document).ready(function() {
    // Set Variables
    var speed = 500; // Fade Speed
    var autoSwitch = true; // Auto Slider Option
    var autoSwitchSpeed = 4000; // Auto Slider Speed
    
    // Add Initial Active Class
    $('.slide').first().addClass('active');
    
    // Hide All Slides
    $('.slide').hide();
    
    // Show First Slide
    $('.active').show();
    
    // 'Next' Event Handler
    $('#next').click(nextSlide);
    
    // 'Prev' Event Handler
      $('#prev').click(prevSlide);
    
    // Auto Slide Handler
    if(autoSwitch == true) {
        setInterval(nextSlide, autoSwitchSpeed);
    }
    
    // Switch to Next Slide
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    
    // Switch to Previous Slide
    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});