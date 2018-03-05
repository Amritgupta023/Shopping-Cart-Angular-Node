app.controller('plpCtrl', function($scope, homeService, $q) {

    
    
    var data = homeService.getDataFromLocalStorage().key;

    homeService.getMock()
        .then(
            function(result) {

                $scope.mobilesMock = result.mobiles;
                
                for(var i=0;i<result.mobiles.length;i++){
                	if(result.mobiles[i].id==data){
                		$scope.plpMobileData=result.mobiles[i];
                        $scope.mainImage=result.mobiles[i].image[0];
                	}
                }

                //$scope.mainImage=plpMobileData.image[0];

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
        
    $scope.myfunction=function(id,index){
        $scope.mainImage=id;
        if(index==0){
            $scope.image0="border: solid 1px red";
            $scope.image1=$scope.image2="border: solid 1px white"
        }
        if(index==1){
            $scope.image1="border: solid 1px red";
            $scope.image0=$scope.image2="border: solid 1px white"
        }
        if(index==2){
            $scope.image2="border: solid 1px red";
            $scope.image0=$scope.image1="border: solid 1px white"
        }


    }


});