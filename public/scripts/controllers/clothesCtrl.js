app.controller('clothingCtrl', function($scope, homeService, $q) {
    var arr = [];
    $scope.arr = arr;
    var x = [];
    $scope.clothings = '';
    homeService.getMock()
        .then(
            function(result) {

                $scope.clothings = result.clothings;
                $scope.abc = result.clothings;
                x=result.clothings;


            },
            function(error) {
                // handle errors here
                console.log(error.statusText);
                console.log("err");
            }
        );

    $scope.myFunc = function() {
        var data = $scope.clothings;
        $scope.brr = arr;

        var clothesArr = []
        for (var i = 0; i < data.length; i++) {


            if (arr.includes(data[i].gender)) {
                clothesArr.push(data[i]);
            }

        }



        $scope.abc = clothesArr;

        if (arr[0] == false && (arr[1] == false || arr[1]==undefined)) {
            $scope.abc = $scope.clothings;
        }




    }

    $scope.getClothesMock = function(id) {
        homeService.setClothesDataToLocalStorage(id);

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
       // console.log(abcd);
    };

    $scope.slider = {
        min: 0,
        max: 1200,
        options: {
            floor: 0,
            ceil: 1200,
            onEnd: function() {
                $scope.priceRange();

            }
        },

    }






});