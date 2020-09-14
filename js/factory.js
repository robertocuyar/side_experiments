
(function($) {
    "use strict"
    $(document).ready(function () {

        function itemDisplay(type) {
            return "<a class ='" + type + "'><div class='item'></div></a>"
        }

        $('#coal').click(function () {
            $('.coal_container').append(itemDisplay('coal'));
        });
        $('#iron_btn').click(function () {
            $('.iron_furnace').append(itemDisplay('iron'));
        });

        function burnOff(mineral, item) {
            $(mineral).each(function (index) {
               if (index === 0){
                    $(this).remove();
                }
            })
        }

        function consumeItem(mineral, number) {
            $(mineral).each(function (index) {
                if (index < number) {
                    $(this).remove();
                }
            })
        }

        function updateListenerBI() {
            $('.iron_plate_inventory').each(function (number) {
                $(this).draggable({revert: true});
                $(this).on('dblclick', function () {
                    burnOff('.iron_plate_inventory')
                    $('#build_inventory').append(itemDisplay('iron_plate_build'))
                })
            })
            $('#build_inventory').droppable({
                accept: ".iron_plate_inventory",
                drop: function (event, ui) {
                   ui.draggable.remove();
                    $(this).append(itemDisplay('iron_plate_build'))
                }
            })
        }

        function updateListenerIF() {
            $('.iron_plate_furnace').each(function(number){
                $(this).draggable({revert: true});
                $(this).on('dblclick', function () {
                    burnOff('.iron_plate_furnace')
                    $('.inventory').append(itemDisplay('iron_plate_inventory'))
                    updateListenerBI();
                })
                    $('.inventory').droppable({
                        accept: ".iron_plate_furnace",
                        drop: function(event, ui){
                           ui.draggable.remove()
                            $(this).append(itemDisplay('iron_plate_inventory'))
                            updateListenerBI();
                        }
                    })
            })
        }
        function clearBuild() {
            $('#build_inventory .iron_plate_build').each(function () {
                $(this).remove();
                $('.inventory').append(itemDisplay('iron_plate_inventory'))
                updateListenerBI();
            })
        }
        $('#clear_build').on('click', function () {
            clearBuild();
        })
        $('#furnace').click(function () {
            let interval = 1000;
            let burnCoal = setInterval(function () {
                if ($('.coal_container').has('a').length === 0 || $('.iron_furnace').has('.iron').length === 0) {
                    clearInterval(burnCoal);
                } else {
                    burnOff('.coal')
                    burnOff('.iron')
                    $('.smelter_product').append(itemDisplay('iron_plate_furnace'))
                    updateListenerIF();
                }
            }, interval);

        })
        $('#build_smelter1').click(function () {
            if ($('#build_inventory .iron_plate_build').length >= 6) {
                $('#copper_setup').removeClass('d-none');
                consumeItem('.iron_plate_build', 6);
                updateListenerBI();
                $('#cf_build_text').addClass('d-none')
            } else {
                $('#error_message_cf').html('Can\'t build. Incorrect number of resources.');
            }
        })
    })
})(jQuery);