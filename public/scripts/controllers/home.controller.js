app.controller('homeController', function($scope, homeService, $q) {

    homeService.getMock()
        .then(
            function(result) {


                
                $scope.totalMock = result;
                $scope.mobilesMock = result.mobiles;
                $scope.clothingsMock = result.clothings;
                $scope.sports = result.sports;

            },
            function(error) {
                // handle errors here
                console.log(error.statusText);
                console.log("err");
            }
        );




});