(function ($) {
    "use strict"
    $(document).ready(function () {
        //TODO: refactor for render Item in other functions
        //TODO: make build inventory draggable
        //TODO drag last item into the build menu then double click the first adds a new item to the build inventory
        let itemDisplay = type => `<a class ='${type}'><div class='item'></div></a>`;

        let renderItem = (container, ore) => $(container).append(itemDisplay(ore));

        $('#coal').click(() => renderItem('.coal_container', 'coal'));

        $('#iron_btn').click(() => renderItem('.iron_furnace', 'iron'));

        $('#copper_btn').click(() => renderItem('.copper_furnace', 'copper'));

        const burnOff = mineral => $(mineral).first().remove();


        let consumeItem = (mineral, number) => {
            $(mineral).each(function (index) {
                if (index < number) {
                    $(this).remove();
                }
            })
        }

        let updateListenerBI = (inventory, build) => {
            $(inventory).draggable({revert: true})
                .on('dblclick', function () {
                    burnOff(inventory)
                    renderItem('#build_inventory', build)
                })
            $('#build_inventory').droppable({
                accept: ".iron_plate_inventory, .copper_plate_inventory",
                drop: function (event, ui) {
                    if (ui.draggable.hasClass("iron_plate_inventory")) {
                        ui.draggable.remove()
                        $(this).append(itemDisplay("iron_plate_build"))
                    }
                    if (ui.draggable.hasClass("copper_plate_inventory")) {
                        ui.draggable.remove();
                        $(this).append(itemDisplay("copper_plate_build"))
                    }
                }
            })
        }
        $(document).on('click', ".iron_plate_furnace", function () {
            burnOff(this)
            renderItem('.inventory', 'iron_plate_inventory');
        })
        $(document).on('click', ".iron_plate_inventory", function () {
            burnOff(this)
            renderItem('#build_inventory', 'iron_plate_build');
        })
        $(document).on('click', ".copper_plate_furnace", function () {
            burnOff(this)
            renderItem('.inventory', 'copper_plate_inventory');
        })
        $(document).on('click', ".copper_plate_inventory", function () {
            burnOff(this)
            renderItem('#build_inventory', 'copper_plate_build');
        })


        $(".iron_plate_furnace, .copper_plate_furnace").draggable({revert: true})
        $('.inventory').droppable({
            accept: ".iron_plate_furnace, .copper_plate_furnace",
            drop: function (event, ui) {
                if (ui.draggable.hasClass("iron_plate_furnace")) {
                    ui.draggable.remove()
                    $(this).append(itemDisplay("iron_plate_inventory"))
                }
                if (ui.draggable.hasClass("copper_plate_furnace")) {
                    ui.draggable.remove()
                    $(this).append(itemDisplay("copper_plate_inventory"))
                }
            }
        })


        function clearBuild(buildInventory, inventoryNCItem, inventoryItem, buildNCItem) {
            $(`#build_inventory ${buildInventory}`).each(function () {
                $(this).remove();
                $('.inventory').append(itemDisplay(inventoryNCItem))
                updateListenerBI(inventoryItem, buildNCItem);
            })
        }

        $('#clear_build').on('click', function () {
            clearBuild('.copper_plate_build', 'copper_plate_inventory', '.copper_plate_inventory', 'copper_plate_build')
            clearBuild('.iron_plate_build', 'iron_plate_inventory', '.iron_plate_inventory', 'iron_plate_build');

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
                    //updateListenerIF('.iron_plate_furnace', 'iron_plate_inventory', '.iron_plate_inventory', 'iron_plate_build');
                    //updateListenerIF('.copper_plate_furnace', 'copper_plate_inventory', '.copper_plate_inventory', 'copper_plate_build');

                }
            }, interval);
        })
        $('#build_smelter1').click(function () {
            if ($('#build_inventory .iron_plate_build').length >= 6) {
                $('#copper_setup').removeClass('d-none');
                consumeItem('.iron_plate_build', 6);
                updateListenerBI('.iron_plate_inventory', 'iron_plate_build');
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
                    updateListenerIF('.iron_plate_furnace', 'iron_plate_inventory', '.iron_plate_inventory', 'iron_plate_build');
                    updateListenerIF('.copper_plate_furnace', 'copper_plate_inventory', '.copper_plate_inventory', 'copper_plate_build');
                }
            }, interval);
        })
    })
})(jQuery);