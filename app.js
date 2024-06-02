(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyList.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBougthList = this;

        alreadyBougthList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            { name: "Pizza", quantity: 1 },
            { name: "Coke", quantity: 12 },
            { name: "Burger", quantity: 3 },
            { name: "Milkshakes", quantity: 6 },
            { name: "Fresh Juice", quantity: 3 }
        ];
        var alreadyBoughtItems = [];

        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];

            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };
    }
})();
