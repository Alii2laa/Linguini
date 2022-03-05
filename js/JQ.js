$(document).ready(function(){
    // Give background when scroll for all pages
    $('nav').addClass('background');
    $('.navbar a').css('color','#444444');
    $('.navbar .navbar-brand').css('color','#00adb5');
    $('.navbar .dropDown .dropHover').click(function(e){
        e.preventDefault();
    })
    // Arrows scroll to First Section
    $('header .arrow').click(function(){
        $('html , body').animate({
            scrollTop:$('#choosing').offset().top
        },2000)
    });
    //Date to post
    var date = new Date(),
    Datee = date.toDateString();
    $('.blogs .date').append(Datee);
    // padding top in post page
    $('body .common-header').css('paddingTop',$('.navbar').innerHeight());
    //Scroll to top
    $(window).scroll(function(){
        var win = $(window).scrollTop();
        $('.scrollToTop').click(function(){
            
        })
        if(win > 150){
            $('.scrollToTop').fadeIn(500);
        }
        else{
            $('.scrollToTop').fadeOut(500);
        }
    });
    $('.scrollToTop').click(function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: 0
        },2000)
    });
    // FAQ
    $('.content-faq .faq p:first').css('display','block');
    $('.content-faq .faq h3').click(function(){
        $(this).next().slideToggle(500);
        $('.content-faq .faq p').not($(this).next()).slideUp(500);
    });
});
