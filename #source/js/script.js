/*----------------------ВСПЛЫВАЮЩИЕ ОКНА------------------------*/
//
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
    //
    //-----попап Телефон
    $('#header__phone-img2').click(function(event) {
        $('.header-popup__phone-wrapper').addClass('visible');
        $('body').addClass('lock');
    });
    $('.header-popup__btn-close-phone').click(function(event) {
        $('.header-popup__phone-wrapper').removeClass('visible');
        $('body').removeClass('lock');
    });
    //
    //-----попап бронь
    $('#demonstration-block__btn').click(function(event) {
        console.log('111');
        
        $('.popup-reserv__wrapper').addClass('visible');
        $('body').addClass('lock');
    });
    $('#popup-reserv__btn-close').click(function(event) {console.log('222');
        $('.popup-reserv__wrapper').removeClass('visible');
        $('body').removeClass('lock');
    });
});
/*--------------------------------------------------------------*/

//