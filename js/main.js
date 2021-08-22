$(function () {
    $('.menu__burger').click((event) => {
        $('.menu').toggleClass('menu__active'),
            $('.menu__burger').toggleClass('menu__burger-active'),
            $('body').toggleClass('look')
    });

    const navBtn = document.querySelectorAll('.tarif__list-inner');
    const tabItem = document.querySelectorAll('.tarif__box');
    navBtn.forEach((item) => {
        item.addEventListener('click', function () {
            let activeBtn = item;
            let activeId = activeBtn.getAttribute('data-tab');
            let activeTab = document.querySelector(activeId);


            if (!activeBtn.classList.contains('tarif__inner-active')) {
                navBtn.forEach(function (item) {
                    item.classList.remove('tarif__inner-active');
                });
                tabItem.forEach(function (item) {
                    item.classList.remove('tarif__box-active');
                });

                activeBtn.classList.add('tarif__inner-active');
                activeTab.classList.add('tarif__box-active');
            }
        });
    });

});