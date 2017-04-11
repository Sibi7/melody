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
        $('.marketing__content_wrap button').removeClass('active1'); // удаляет класс у всех дочерних элем.
        $(this).addClass('active1');
    });


    $('.tabs a').click(function (e) {
        $('.tabs a').removeClass('active'); // удаляет класс у всех дочерних элем.
        $(this).addClass('active');
    });

    $( ".wrapper-hover .modal-button" ).click(function() {
        $( "form" ).slideToggle (function() {
        });
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

jQuery(document).ready(function ($) {
    //скрыть весь контент
    $('.tab_content1').hide();
    //Показать контент первой вкладки
    $('.tab_content1:first').show();
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


jQuery(document).ready(function ($) {
    //скрыть весь контент
    $('.tab_content1').hide();
    //Показать контент первой вкладки
    $('.tab_content1:first').show();
    //Активировать первую вкладку
    $('.tabs1 li:first').addClass('active');

    //Событие по клику
    $('.tabs1 li').click(function (event) {
        //Удалить "active" класс
        $('.tabs1 li').removeClass('active');
        //Добавить "active" для выбранной вкладки
        $(this).addClass('active');
        //Скрыть контент вкладки
        $('.tab_content1').hide();

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


$(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

    open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
        event.preventDefault(); // вырубaем стaндaртнoе пoведение
        var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
        overlay.fadeIn(400, //пoкaзывaем oверлэй
            function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                    .css('display', 'block')
                    .animate({opacity: 1}, 200); // плaвнo пoкaзывaем
            });
    });

    close.click( function(){ // лoвим клик пo крестику или oверлэю
        modal // все мoдaльные oкнa
            .animate({opacity: 0}, 200, // плaвнo прячем
                function(){ // пoсле этoгo
                    $(this).css('display', 'none');
                    overlay.fadeOut(400); // прячем пoдлoжку
                }
            );
    });
});