"use strict"
$(document).ready(function() {
    $('#coal').click(function() {
        $('.coal_container').append("<a class ='coal'><div></div></a>");
    });
    $('#iron_btn').click(function() {
        $('.iron_furnace').append("<a class = 'iron'><div></div></a>");
    });
})