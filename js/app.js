$(function () {

    var $slideRight = $('.slideRight');
    var $slideLeft = $('.slideLeft');
    var $sectionFirst = $('.first');
    var $ul = $sectionFirst.find('ul');
    var $li = $ul.find('li');
    console.log($ul, $li);
    $slideRight.on('click', function () {
        index++;
        if (index >= $li.length) {
            index = $li.length - 1;
        }
        $ul.stop().animate({
            left: -(index * width) + 'px'
        }, 1000);
    });

    $slideLeft.on('click', function () {
        index--;
        if (index < 0) {
            index = 0;
        }
        $ul.stop().animate({
            left: -(index * width) + 'px'
        }, 1000);
    });

    var index = 0;
    var width = $li.eq(0).width();
    console.log(width);

    $ul.css('width', $li.length * width + 'px');






});