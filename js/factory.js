(function ($) {
    "use strict"
    $(document).ready(function () {

        function itemDisplay(type) {
            return "<a class ='" + type + "'><div class='item'></div></a>"
        }

        //TODO: refactor for render Item in other functions
        function renderItem(container, ore) {
            return $(container).append(itemDisplay(ore));
        }

        $('#coal').click(function () {
            renderItem('.coal_container', 'coal')
        })
        $('#iron_btn').click(function () {
            renderItem('.iron_furnace', 'iron')
        });
        $('#copper_btn').click(function () {
            renderItem('.copper_furnace', 'copper')
        })

        function burnOff(mineral, item) {
            $(mineral).each(function (index) {
                if (index === 0) {
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
            $('.iron_plate_inventory').draggable({revert: true})
                .on('dblclick', function () {
                    burnOff('.iron_plate_inventory')
                    $('#build_inventory').append(itemDisplay('iron_plate_build'))
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
            $('.iron_plate_furnace').draggable({revert: true})
                .on('dblclick', function () {
                    burnOff('.iron_plate_furnace')
                    $('.inventory').append(itemDisplay('iron_plate_inventory'))
                    updateListenerBI();
                })
            $('.inventory').droppable({
                accept: ".iron_plate_furnace",
                drop: function (event, ui) {
                    ui.draggable.remove()
                    $(this).append(itemDisplay('iron_plate_inventory'))
                    updateListenerBI();
                }
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
        $('#furnace_2').click(function () {
            let interval = 1000;
            let burnCoal = setInterval(function () {
                if ($('.coal_container').has('a').length === 0 || $('.copper_furnace').has('.copper').length === 0) {
                    clearInterval(burnCoal);
                } else {
                    burnOff('.coal')
                    burnOff('.copper')
                    $('.smelter_product_copper').append(itemDisplay('copper_plate_furnace'))
                    updateListenerIF();
                }
            }, interval);
        })
    })
})(jQuery);