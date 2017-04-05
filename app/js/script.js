$(document).ready(function () {
    $(".slider").HSlider({
// jquery easing options
        easing:"ease",

// animation speed
        animationTime:800,

// display side navigation
        pagination:false,

// display description
        description:true
    });

    $('.tabs a').click(function (e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.tabs a').removeClass('active'); // удаляет класс у всех дочерних элем.
            $(this).addClass('active');
        }
    });


});

jQuery(document).ready(function($) {
    //скрыть весь контент
    $('.tab_content').hide();
    //Показать контент первой вкладки
    $('.tab_content:first').show();
    //Активировать первую вкладку
    $('.tabs li:first').addClass('active');

    //Событие по клику
    $('.tabs li').click(function(event) {
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
