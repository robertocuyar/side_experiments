"use strict"
$(document).ready(function() {
    $('#coal').click(function () {
        $('.coal_container').append("<a class ='coal'><div></div></a>");
    });
    $('#iron_btn').click(function () {
        $('.iron_furnace').append("<a class = 'iron'><div></div></a>");
    });
    function burnOff(mineral){
        $(mineral).each(function (index) {
            if (index === 0) {
                $(this).remove();
            }
        })
    }
    $('#furnace').click(function () {
        let interval = 1000;
        let burnCoal = setInterval(function() {
            if($('.coal_container').has('a').length === 0 || $('.iron_furnace').has('a').length === 0){
                clearInterval(burnCoal);
            } else {
                burnOff('.coal')
                burnOff('.iron')
            }
        }, interval);

    })
})