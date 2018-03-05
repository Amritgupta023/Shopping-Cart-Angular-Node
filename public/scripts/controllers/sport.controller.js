app.controller('sportCtrl', function($scope, homeService, $q) {
    var arr = [];
    $scope.arr = arr;
    $scope.sports = '';
    var x=[];
    homeService.getMock()
        .then(
            function(result) {

                $scope.sports = result.sports;
                $scope.abc=result.sports;
                x=result.sports;


            },
            function(error) {
                // handle errors here
                console.log(error.statusText);
                console.log("err");
            }
        );

    $scope.myFunc = function() {
        var data = $scope.sports;
        var sportsArr=[]
        for(var i=0;i<data.length;i++){
           if(arr.includes(data[i].type)){
            sportsArr.push(data[i]);
            
           }
          
        }
       $scope.abc=sportsArr;
       if(arr[0]==false&&arr[1]==false&&arr[2]==false){
        $scope.abc=$scope.sports;
       }
       if((arr[0]==false&& arr[1]==undefined) || (arr[0]==false&& arr[1]==false&& arr[0]==undefined) ||(arr[1]==false&& arr[2]==undefined)||(arr[0]==null&& arr[1]==null && arr[2]==false) )
       {
        $scope.abc=$scope.sports;
       }


        
    }

    $scope.getSportMock=function(id){
        homeService.setSportsDataToLocalStorage(id);
    }

    $scope.priceRange = function() {

        var newVariable = x;
        var abcd = [];
        for (var i = 0; i < newVariable.length; i++) {
            if ((newVariable[i].price >= $scope.slider.min) && (newVariable[i].price <= $scope.slider.max)) {
                abcd.push(newVariable[i]);
            }

        }
        $scope.abc = abcd;

    };

    $scope.slider = {
        min: 0,
        max: 3000,
        options: {
            floor: 0,
            ceil: 3000,
            onEnd: function() {
                $scope.priceRange();

            }
        },

    }

});