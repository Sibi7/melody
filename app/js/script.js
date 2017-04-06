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
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
            });
    });

    close.click( function(){ // лoвим клик пo крестику или oверлэю
        modal // все мoдaльные oкнa
            .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                function(){ // пoсле этoгo
                    $(this).css('display', 'none');
                    overlay.fadeOut(400); // прячем пoдлoжку
                }
            );
    });
});


