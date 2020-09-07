"use strict"
$(document).ready(function() {
    function itemDisplay(type){
        return "<a class ='" + type + "'><div class='item'></div></a>"
    }
    $('#coal').click(function () {
        $('.coal_container').append(itemDisplay('coal'));
    });
    $('#iron_btn').click(function () {
        $('.iron_furnace').append(itemDisplay('iron'));
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
                $('.smelter_product').append(itemDisplay('iron_plate'))
            }
        }, interval);

    })

})