module.exports = {
    name: 'ResourcesController',
    func: function($scope) {
        $scope.resources = [
            {name: 'lemons', stock: 0, price: 2},
            {name: 'sugar', stock: 10, price: 1.25},
            {name: 'ice', stock: 5, price: .50},
            {name: 'cups', stock: 20, price: .10},
        ];
    },
};