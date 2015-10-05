var getCSS = function (prop, fromClass) {

    var $inspector = $("<div>").css('display', 'none').addClass(fromClass);

    $("body").append($inspector); // add to DOM, in order to read the CSS property

    try {
        return $inspector.css(prop);
    } finally {
        $inspector.remove(); // and remove from DOM-
    }
};

var $baselineHeight = getCSS('height', 'baseline');

var round2dec = function (number) {
    return Math.round(number * 100) / 100;
};

var round3dec = function (number) {
    return Math.round(number * 1000) / 1000;
};


var getProperty = function (element, prop) {
    $input = $('.typography ' + element + ' span');
    //            $name = $input.prop('nodeName');
    $property = round2dec(parseFloat($input.css(prop)));
    $rems = round3dec(parseFloat($property / parseFloat($baselineHeight)));
    $input.text(': ' + $property + 'px / ' + $rems + 'rem');
};


var labelElements = function () {
    getProperty('h1', 'font-size');
    getProperty('h2', 'font-size');
    getProperty('h3', 'font-size');
    getProperty('h4', 'font-size');
    getProperty('h5', 'font-size');
    getProperty('h6', 'font-size');
    getProperty('p', 'font-size');
    getProperty('li', 'font-size');

    $('.bline').text($baselineHeight);

};

$(document).ready(labelElements);
$(window).resize(labelElements);

$(function(){
    $('.toggle button').click(function(){
        $('body').toggleClass('guides');
        $(this).text(function(i, text){
          return text === "Show Guides" ? "Hide Guides" : "Show Guides";
      })
    });

});

