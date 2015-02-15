fight.controller('resultController', ['$scope',function(scope){
    $scope.inputs = $('#search');
    $scope.inputData= {};
    $scope.requestPackage = [];
    $scope.cities = {};

    console.log('route params', $routeParams);

}]);