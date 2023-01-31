/*--*/
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
});