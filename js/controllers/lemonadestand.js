module.exports = {
    name: 'LemonadeStandController',
    func: function($scope) {
        $scope.log = [
            { label: 'DAY', value: 1},
            { label: 'MONEY', value: '$' + 10},
            { label: 'VISITORS', value: 0},
            { label: 'CUSTOMERS', value: 0},
        ];
    },
};