$(function () {
    $('.menu__burger').click((event) => {
        $('.menu').toggleClass('menu__active'),
            $('.menu__burger').toggleClass('menu__burger-active'),
            $('body').toggleClass('look')
    });

});