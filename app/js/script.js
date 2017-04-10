$(document).ready(function () {
    $(".slider").HSlider({
// jquery easing options
        easing: "ease",

// animation speed
        animationTime: 800,

// display side navigation
        pagination: false,

// display description
        description: true
    });

    $('#menu a').click(function (e) {
        $('#menu a').removeClass('active'); // удаляет класс у всех дочерних элем.
        $(this).addClass('active');
    });


    $('.marketing__content_wrap button').click(function (e) {
        $('.marketing__content_wrap button').removeClass('active'); // удаляет класс у всех дочерних элем.
        $(this).addClass('active');
    });


    $('.tabs a').click(function (e) {
        $('.tabs a').removeClass('active'); // удаляет класс у всех дочерних элем.
        $(this).addClass('active');
    });

});

jQuery(document).ready(function ($) {
    //скрыть весь контент
    $('.tab_content').hide();
    //Показать контент первой вкладки
    $('.tab_content:first').show();
    //Активировать первую вкладку
    $('.tabs li:first').addClass('active');

    //Событие по клику
    $('.tabs li').click(function (event) {
        //Удалить "active" класс
        $('.tabs li').removeClass('active');
        //Добавить "active" для выбранной вкладки
        $(this).addClass('active');
        //Скрыть контент вкладки
        $('.tab_content').hide();

        //Найти значение атрибута ссылки, чтобы
        //определить активный таб контент
        var selectTab = $(this).find('a').attr("href");
        //Исчезновение активного контента
        $(selectTab).fadeIn();
        return false;
    });
});


// var layer, w, h;
//
// function init() {
//     w = (window.innerWidth  || document.documentElement.clientWidth)  * 0.5;
//     h = (window.innerHeight || document.documentElement.clientHeight) * 0.5;
//     layer = document.getElementById('melody-note');
//     parallaxMove();
// }
//
// function parallaxMove() {
//     var centerX = w - layer.offsetWidth  * 0.5;
//     var centerY = h - layer.offsetHeight * 0.5;
//
//     var x0 = layer.offsetLeft;
//     var y0 = layer.offsetTop;
//
//     function getX(e) {
//         return x0 + (e.pageX - centerX) * 0.2;
//     }
//
//     function getY(e) {
//         return y0 + (e.pageY - centerY) * 0.2;
//     }
//
//     document.onmousemove = function(e) {
//
//         var x = getX(e);
//         var y = getY(e);
//
//         layer.style.left = x + "px";
//          layer.style.top  = y + "px";
//
//     }
//
// }
// window.onload = function() {
//     init();
// }