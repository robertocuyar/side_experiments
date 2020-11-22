(function ($) {
    "use strict"
    $(document).ready(function () {
        //TODO: refactor for render Item in other functions
        //TODO: make build inventory draggable
        //TODO drag last item into the build menu then double click the first adds a new item to the build inventory
        //TODO electricity dynamic upgradeable for furnaces
        //TODO Random job list
        //TODO Capacity limits to the containers
        //TODO Worker upgrade for AUTOMATION
        const itemDisplay = type => `<a class ='${type}'><div class='item'></div></a>`;

        const renderItem = (container, ore) => $(container).append(itemDisplay(ore));

        $('#coal').click(() => renderItem('.coal_container', 'coal'));

        $('#iron_btn').click(() => renderItem('.iron_furnace', 'iron'));

        $('#copper_btn').click(() => renderItem('.copper_furnace', 'copper'));

        $('#concrete_btn').click(() => renderItem('.concrete_furnace', 'limestone'));

        const burnOff = mineral => $(mineral).first().remove();

        let consumeItem = (mineral, number) => {
            $(mineral).each(function (index) {
                if (index < number) {
                    $(this).remove();
                }
            })
        }

        const updateListenerBI = () => {
            $(".iron_plate_inventory, .copper_plate_inventory, .cement_inventory").draggable({revert: true})
            $('#build_inventory').droppable({
                accept: ".iron_plate_inventory, .copper_plate_inventory, .cement_inventory",
                drop: function (event, ui) {
                    if (ui.draggable.hasClass("iron_plate_inventory")) {
                        ui.draggable.remove()
                        $(this).append(itemDisplay("iron_plate_build"))
                    }
                    if (ui.draggable.hasClass("copper_plate_inventory")) {
                        ui.draggable.remove();
                        $(this).append(itemDisplay("copper_plate_build"))
                    }
                    if(ui.draggable.hasClass("cement_inventory")) {
                        ui.draggable.remove();
                        $(this).append(itemDisplay("cement_build"))
                    }
                }
            })
        }
        $(document).on('click', ".iron_plate_furnace", function () {
            burnOff(this)
            renderItem('.inventory', 'iron_plate_inventory');
            updateListenerBI()
        })
        $(document).on('click', ".iron_plate_inventory", function () {
            burnOff(this)
            renderItem('#build_inventory', 'iron_plate_build');
            updateListenerBI()
        })
        $(document).on('click', ".copper_plate_furnace", function () {
            burnOff(this)
            renderItem('.inventory', 'copper_plate_inventory');
            updateListenerBI()
        })
        $(document).on('click', ".copper_plate_inventory", function () {
            burnOff(this)
            renderItem('#build_inventory', 'copper_plate_build');
            updateListenerBI()
        })
        $(document).on('click', ".cement_furnace", function () {
            burnOff(this);
            renderItem('.inventory', 'cement_inventory');
            updateListenerBI();
        })
        $(document).on('click', ".cement_inventory", function () {
            burnOff(this);
            renderItem('#build_inventory', 'cement_build');
            updateListenerBI();
        })
        const updateListenerDI = () => {
            $(".iron_plate_furnace, .copper_plate_furnace, .cement_furnace").draggable({revert: true})
            $('.inventory').droppable({
                accept: ".iron_plate_furnace, .copper_plate_furnace, .cement_furnace",
                drop: function (event, ui) {
                    if (ui.draggable.hasClass("iron_plate_furnace")) {
                        ui.draggable.remove()
                        $(this).append(itemDisplay("iron_plate_inventory"))
                        updateListenerBI();
                    }
                    if (ui.draggable.hasClass("copper_plate_furnace")) {
                        ui.draggable.remove()
                        $(this).append(itemDisplay("copper_plate_inventory"))
                        updateListenerBI();
                    }
                    if(ui.draggable.hasClass("cement_furnace")){
                        ui.draggable.remove();
                        $(this).append(itemDisplay("cement_inventory"));
                        updateListenerBI();
                    }

                }
            })

        }

        const clearBuild = (buildInventory, inventoryNCItem) => {
            $(`#build_inventory ${buildInventory}`).each( () => {
                $(buildInventory).remove();
                $('.inventory').append(itemDisplay(inventoryNCItem))
                updateListenerBI();
            })
        }

        $('#clear_build').on('click',() => {
            clearBuild('.copper_plate_build', 'copper_plate_inventory');
            clearBuild('.iron_plate_build', 'iron_plate_inventory');

        })
        $('#furnace').click( () => {
            let interval = 1000;
            let burnCoal = setInterval(function () {
                if ($('.coal_container').has('a').length === 0 || $('.iron_furnace').has('.iron').length === 0) {
                    clearInterval(burnCoal);
                } else {
                    burnOff('.coal');
                    burnOff('.iron');
                    $('.smelter_product').append(itemDisplay('iron_plate_furnace'));
                    updateListenerDI();
                }
            }, interval);
        })

        $('#furnace_2').click(() => {
            let interval = 1000;
            let burnCoal = setInterval(function () {
                if ($('.coal_container').has('a').length === 0 || $('.copper_furnace').has('.copper').length === 0) {
                    clearInterval(burnCoal);
                } else {
                    burnOff('.coal')
                    burnOff('.copper')
                    $('.smelter_product_copper').append(itemDisplay('copper_plate_furnace'))
                    updateListenerDI();
                }
            }, interval);
        })
        $('#furnace_3').click(()=> {
            let interval = 1500;
            let burnCoal = setInterval(() => {
                if ($('.coal_container').has('a').length === 0 || $('.concrete_furnace').has('.limestone').length === 0) {
                    clearInterval(burnCoal);
                } else {
                    burnOff('.coal')
                    burnOff('.limestone')
                    $('.smelter_product_concrete').append(itemDisplay('cement_furnace'))
                    updateListenerDI();
                }
            }, interval);
        })
        $('#build_smelter1').click( () => {
            if ($('#build_inventory .iron_plate_build').length >= 6) {
                $('#copper_setup').removeClass('d-none');
                consumeItem('.iron_plate_build', 6);
                $('#cf_build_text').addClass('d-none')
            } else {
                $('#error_message_cf').html('Can\'t build. Incorrect number of resources.');
            }
        })
        $('#build_smelter2').click( () => {
            if ($('#build_inventory .iron_plate_build').length >= 6 && $('#build_inventory .copper_plate_build').length >= 5 ) {
                $('#concrete_setup').removeClass('d-none');
                consumeItem('.iron_plate_build', 6);
                consumeItem('.copper_plate_build', 5);
                $('#co_build_text').addClass('d-none')
            } else {
                $('#error_message_co').html('Can\'t build. Incorrect number of resources.');
            }
        })
    })
})(jQuery);