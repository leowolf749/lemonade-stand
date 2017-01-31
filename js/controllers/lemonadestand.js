module.exports = {
    name: 'LemonadeStandController',
    func: function($scope) {
        $scope.log = [
            { label: 'Day', value: 1},
            { label: 'Money', value: '$' + 10},
            { label: 'Visitors', value: 0},
            { label: 'Customers', value: 0},
        ];
    },
};