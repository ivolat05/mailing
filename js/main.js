$(function () {
    $('.menu__burger').click((event) => {
        $('.menu').toggleClass('menu__active'),
            $('.menu__burger').toggleClass('menu__burger-active'),
            $('body').toggleClass('look'),
            $('.header__wrapp-box').toggleClass('header__wrapp-box-active')
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

    const tabsBtn = document.querySelectorAll('.mailing__wrapp-inner');
    const tabsItem = document.querySelectorAll('.mailing__wrapp-box');
    tabsBtn.forEach((item) => {
        item.addEventListener('click', function () {
            let currentBtn = item;
            let tabsId = currentBtn.getAttribute('data-active');
            let currentTab = document.querySelector(tabsId);


            if (!currentBtn.classList.contains('mailing__wrapp-inner--active')) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove('mailing__wrapp-inner--active');
                });
                tabsItem.forEach(function (item) {
                    item.classList.remove('mailing__wrapp-box--active');
                });

                currentBtn.classList.add('mailing__wrapp-inner--active');
                currentTab.classList.add('mailing__wrapp-box--active');
            }
        });
    });

    const tabBtns = document.querySelectorAll('.test__wrapp-inner');
    const tabItems = document.querySelectorAll('.test__wrapp-box');
    tabBtns.forEach((item) => {
        item.addEventListener('click', function () {
            let currentBtn = item;
            let tabsId = currentBtn.getAttribute('data-tabs');
            let currentTab = document.querySelector(tabsId);


            if (!currentBtn.classList.contains('test__wrapp-inner-active')) {
                tabBtns.forEach(function (item) {
                    item.classList.remove('test__wrapp-inner-active');
                });
                tabItems.forEach(function (item) {
                    item.classList.remove('test__wrapp-box-active');
                });

                currentBtn.classList.add('test__wrapp-inner-active');
                currentTab.classList.add('test__wrapp-box-active');
            }
        });
    });

    const acc = document.getElementsByClassName("accordion-title");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    $('.partfolio__wrapp-box').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.experience__wrapp').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });

    $('.exampl__wrapp').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.compaines__wrapp').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });

    $('.compaines__wrapp').slick('unslick');
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 780) {
            $('.compaines__wrapp').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false
            });
        } else {
            $('.compaines__wrapp').slick('unslick');
        }
    });

});