$(document).ready(function () {
    $(".header__nav__menu__options__user__btn").click(function () {
        let $userOptions = $('.header__nav__menu__options__user__options');
        $userOptions.slideToggle(200);
    });

    $(window).resize(function () {
        let $aside = $('.aside');
        if ($(window).width() > 767) {
            $aside.css('display', 'flex');
        } else {
            $aside.css('display', 'none');
        }
    });


    $(".aside__collapse-btn").click(function () {
        let $collapseIcon = $('.aside__collapse-btn__img');
        let isRotated = $collapseIcon.data('rotated');

        $(".aside-label").animate({ width: "toggle" }, 200, function () {
            let $site = $('.site');
            if (isRotated) {
                $collapseIcon.css('transform', 'rotate(0deg)');
                $collapseIcon.data('rotated', false);
                $site.css('margin-left', '24px');
            } else {
                $collapseIcon.css('transform', 'rotate(180deg)');
                $collapseIcon.data('rotated', true);
                $site.css('margin-left', '0');
            }
        });
    });

    $('.header__nav__hamburger').click(function () {
        let $aside = $('.aside');
        let $asideLabel = $('.aside-label');
        $aside.animate({ width: "toggle" }, 200, function () {
            if ($aside.is(':visible') && $asideLabel.is(':hidden')) {
                $asideLabel.css('display', 'block')
            }
        });
    })

});
