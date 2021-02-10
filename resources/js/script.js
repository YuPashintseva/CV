$(document).ready(function() {
    
   /*WAYPOINT FOR ANIMATION*/

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated animate__fadeIn');
    },{
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated animate__fadeIn');
    },{
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated animate__fadeIn');
    },{
        offset: '50%'
    });
    
    
    
    /*TOP NAVIGATION*/
    
    $('.work').click(function() {
        $('html, body').animate({scrollTop: $('.work-section').offset().top}, 100);
    });
    
    
    $('.education').click(function() {
        $('html, body').animate({scrollTop: $('.education-section').offset().top}, 1000);
    }); 
    
    $('.personal-info').click(function() {
        $('html, body').animate({scrollTop: $('.personal-skills').offset().top}, 1000);
    });
    
    $('.contacts').click(function() {
        $('html, body').animate({scrollTop: $('.social').offset().top}, 1000);
    });
    
    
    /*RIGHT NAVIGATION*/
    
    $('.js--nav-icon').click(function() {
        alert('test');
    })

});