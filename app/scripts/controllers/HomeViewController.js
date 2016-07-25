define(['app'], function(app) {

    app.controller('HomeViewController', HomeViewController);

    HomeViewController.$inject = ['$scope'];

    function HomeViewController($scope) {

        $scope.page = {
            heading: 'Welcome'
        };

        $scope.testFn = function(a){
            return a*a;
        }

    }
});
