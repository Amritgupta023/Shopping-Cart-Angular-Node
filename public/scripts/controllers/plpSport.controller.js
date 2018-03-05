app.controller('plpSportCtrl', function($scope, homeService, $q) {

    var id = homeService.getSportsDataFromLocalStorage();
    // var id=homeService.myFunctiona();


    homeService.getMock()
        .then(
            function(result) {


                for (var i = 0; i < result.sports.length; i++) {
                    if (id == result.sports[i].id) {
                        $scope.perticularSportsData = result.sports[i];
                        $scope.mainImage=result.sports[i].image[0];

                    }

                }

            },
            function(error) {
                // handle errors here
                console.log(error.statusText);
                console.log("err");
            }
        );

    $scope.SendIdToCart = function(id, type) {
        homeService.setCartDataToService(id, type);

    }

    $scope.myfunction = function(id) {
        //console.log("hello world",id);
        $scope.mainImage = id;
    }

});