app.controller('plpClothesCtrl', function($scope, homeService, $q) {

    var id = homeService.getClothesDataFromLocalStorage();


    homeService.getMock()
        .then(
            function(result) {

                for (var i = 0; i < result.clothings.length; i++) {
                    if (id == result.clothings[i].id) {
                        $scope.perticularClothingData = result.clothings[i];
                        $scope.mainImage=result.clothings[i].image[0];
                    }
                    
                }

            },
            function(error) {
                // handle errors here
                console.log(error.statusText);
                console.log("err");
            }
        );

    $scope.SendIdToCart=function(id,type){
        homeService.setCartDataToService(id,type);

    }

    $scope.myfunction = function(id) {
        $scope.mainImage = id;
    }



});