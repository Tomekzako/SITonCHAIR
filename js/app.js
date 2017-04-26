$(function () {

    var $slideRight = $('.slideRight');
    var $slideLeft = $('.slideLeft');
    var $mobileLeft = $('.col1');
    var $mobileRight = $('.col2');
    var $sectionFirst = $('.first');
    var $background = $sectionFirst.find('.blackChair');
    let chair = 1;

    function setChair() {

        switch (chair) {
            case 1:

                $background.css('background-image', 'url(images/black_chair.png)');
                $background.css('background-size', 'cover');
                $background.css('margin-top', '55px');
                break;

            case 2:

                $background.css('background-image', 'url(images/orange.png)');
                $background.css('background-size', '135% 75%');
                $background.css('margin-top', '55px');
                break;

            case 3:

                $background.css('background-image', 'url(images/red_chair.png)');
                $background.css('background-size', '100% 70%');
                $background.css('margin-top', '20px');
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


});