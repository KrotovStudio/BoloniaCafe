$( document ).ready(function() {

//    slick slider
    $('#portfolio-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

//    Close / open mobile menu
    $('.open-nav').click(function(){
        $('.main-nav').addClass('active');
    });
    $('.close-nav, a').click(function(){
        $('.main-nav').removeClass('active');
    });



//  pagescroll2id
//    $("nav a").mPageScroll2id({
//        offset:77,
//        scrollSpeed: 600
//    });

//  popup
    $(document).ready(function() {
        $('.popup').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function() {
                    if($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    });

//  E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $.magnificPopup.open({
                items: {
                    src: '.modal-thanks'
                }
            });
            setTimeout(function () {
                $.magnificPopup.close();
            }, 3000);
        }).error(function(){
            $.magnificPopup.open({
                items: {
                    src: '.modal-error'
                }
            });
            setTimeout(function () {
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });

//  open / close table form
    $('.table-form-open').click(function(){
        $('.table-form-open').css('opacity','0.5');
        $('.table-form-wrap').addClass('active');
    });

    $('.table-form-close').click(function(){
        $('.table-form-wrap').removeClass('active');
        $('.table-form-open').css('opacity','1');
    });

    //scroll table transparent
    $(function() {
        var header = $("#table-form");
        $(window).scroll(function(scrlevt) {
            scrlevt.preventDefault();
            var scroll = $(window).scrollTop();

            if (scroll > 90) {
                $('.table-form-wrap').removeClass('active');
                $('.table-form-open').css('opacity','1');
            }
            return false;
        });
    });
});

/* Маска для телефона */
$(document).ready(function(){
    $('input[type="tel"]').inputmask({
        showMaskOnHover: true
    });
});