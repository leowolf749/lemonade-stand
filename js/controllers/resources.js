module.exports = {
    name: 'ResourcesController',
    func: function($scope, ResourcesService) {
        $scope.resources = ResourcesService.getResources();
    },
};