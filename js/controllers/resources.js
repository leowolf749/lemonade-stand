module.exports = {
    name: 'ResourcesController',
    func: function($scope) {
        $scope.resources = [
            {name: 'lemons', stock: 0},
            {name: 'sugar', stock: 0},
            {name: 'ice', stock: 0},
            {name: 'cups', stock: 0},
        ];
    },
};