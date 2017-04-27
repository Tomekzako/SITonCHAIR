$(function () {

    var $slideRight = $('.slideRight');
    var $slideLeft = $('.slideLeft');
    var $mobileLeft = $('.col1');
    var $mobileRight = $('.col2');
    var $sectionFirst = $('.first');
    var $background = $sectionFirst.find('.blackChair');
    const $dropdown = $('.dropdown');
    const $triangle = $dropdown.find('.triangle').first();
    let chair = 1;
    const $list = $('.list');
    const $hamb = $('#show-hide-menu');
    const $clair = $('.clair');
    const $margarita = $('.margarita');
    const $visible = $('.visible');


    $hamb.on('click', function () {
        $list.toggleClass('show');
        $triangle.toggle('display');
    });

    $dropdown.on('mouseenter', function () {
        $(this).children().slice(1).css('display', 'block');
    });

    $dropdown.on('mouseleave', function () {
        $(this).children().slice(1).css('display', 'none');
    });


    function setChair() {

        switch (chair) {
            case 1:
                $background.removeClass('orange').addClass('blackChair');
                break;

            case 2:
                $background.removeClass('blackChair').removeClass('red').addClass('orange');
                break;

            case 3:
                $background.removeClass('orange').addClass('red');
                break;


        }
    }

    $slideRight.on('click', function () {
        $background.fadeOut(1000, function () {
            chair++;
            setChair();
            $background.fadeIn(1000);
            console.log(chair);
            if (chair > 2) {
                $slideRight.css("pointer-events", "none");
            } else {
                $slideLeft.css("pointer-events", "auto");
            }
        });
    });

    $slideLeft.on('click', function () {
        $background.fadeOut(1000, function () {
            chair--;
            setChair();
            $background.fadeIn(1000);
            console.log(chair);
            if (chair < 2) {
                $slideLeft.css("pointer-events", "none");
            } else {
                $slideRight.css("pointer-events", "auto");
            }
        });
    });

    $mobileRight.on('click', function () {

        $background.fadeOut(1000, function () {
            chair++;
            setChair();
            $background.fadeIn(1000);
            if (chair > 2) {
                $mobileRight.css("pointer-events", "none");
            } else {
                $mobileLeft.css("pointer-events", "auto");
            }
        });
    });

    $mobileLeft.on('click', function () {
        $background.fadeOut(1000, function () {
            chair--;
            setChair();
            $background.fadeIn(1000);
            if (chair < 2) {
                $mobileLeft.css("pointer-events", "none");
            } else {
                $mobileRight.css("pointer-events", "auto");
            }
        });
    });

    $clair.on('mouseenter', function () {
        $(this).children(":first").css('display', 'none');
    });

    $clair.on('mouseout', function () {
        $(this).children(":first").css('display', 'block');
    });

    $margarita.on('mouseenter', function () {
        $(this).children(":first").css('display', 'none');
    });

    $margarita.on('mouseout', function () {
        $(this).children(":first").css('display', 'block');
    });

});