$(window).on('load', function () {
    //preoad
    setTimeout(function(){ 
        preloaderFadeOutInit();
    }, 1000);

    function preloaderFadeOutInit(){
        $('.page-loader').fadeOut('3000');
    }

});

$(document).ready(function(){
    // calculate monthly money
    $('#calc-btn').click(function(){
        let average = Number($('[name="average"]').val());
        let orders = Number($('[name="orders"]').val());
        let earningMonthly = (average * orders * 30) * 0.91;
        $('.c_result').text(earningMonthly.toFixed(2));
    })
});


