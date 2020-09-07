"use strict"
$(document).ready(function() {
    $('#coal').click(function () {
        $('.coal_container').append("<a class ='coal'><div></div></a>");
    });
    $('#iron_btn').click(function () {
        $('.iron_furnace').append("<a class = 'iron'><div></div></a>");
    });
    $('#furnace').click(function () {
        let delay = 1000;
        $('.coal_container').remove('coal');
        /*if($('.coal_container').has('a').length !== 0) {
            let burnCoal = setTimeout(function(){

            }, delay);

        }*/

    })
})