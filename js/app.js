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
                break;

            case 2:

                $background.css('background-image', 'url(images/orange.png)');
                break;

            case 3:

                $background.css('background-image', 'url(images/red_chair.png)');
                break;


        }
    }



    $slideRight.on('click', function () {
        $background.fadeOut(1000, function () {
            chair++;
            setChair();
            $background.fadeIn(1000);
        });

    });

    $slideLeft.on('click', function () {
        $background.fadeOut(1000, function () {
            chair--;
            setChair();
            $background.fadeIn(1000);
        });
    });

    $mobileLeft.on('click', function () {
        $background.fadeOut(1000, function () {
            chair++;
            setChair();
            $background.fadeIn(1000);
        });
    });
    
     $mobileRight.on('click', function () {
        $background.fadeOut(1000, function () {
            chair--;
            setChair();
            $background.fadeIn(1000);
        });
    });







});