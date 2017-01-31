module.exports = {
    name: 'LemonadeStandController',
    func: function($scope, LemonadeService) {
        $scope.log = LemonadeService.getLog();

    },
};