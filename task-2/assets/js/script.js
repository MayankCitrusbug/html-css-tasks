$(document).ready(function () {
    $(".header__nav__menu__options__user__btn").click(function () {
        let $userOptions = $('.header__nav__menu__options__user__options');

        $userOptions.slideToggle(200);
    });

    $(".aside__collapse-btn").click(function () {
        let $collapseIcon = $('.aside__collapse-btn__img');
        let isRotated = $collapseIcon.data('rotated');

        $(".aside-label").animate({ width: "toggle" }, 200, function () {
           if (isRotated) {
            $collapseIcon.css('transform', 'rotate(0deg)');
            $collapseIcon.data('rotated', false); 
        } else {
            $collapseIcon.css('transform', 'rotate(180deg)');
            $collapseIcon.data('rotated', true);
        }
        });
    });
    
});
