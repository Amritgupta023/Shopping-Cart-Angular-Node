app.controller('mobileCtrl', function($scope, homeService, $q) {
    var arr = [];
    $scope.arr = arr;
    var x=[];
    homeService.getMock()
        .then(
            function(result) {


                x = result.mobiles;
                $scope.mobilesMock=x;
            },
            function(error) {
                console.log(error.statusText);
                console.log("err");
            }
        );
    $scope.mobileClick = function(id) {
        homeService.setDataToServices(id);
    }

    $scope.priceRange = function() {

        var newVariable=x;
        var abc=[];
        for(var i=0;i<newVariable.length;i++){
            if((newVariable[i].price>=$scope.slider.min) && (newVariable[i].price<=$scope.slider.max)){
                abc.push(newVariable[i]);

            }
        }
        $scope.mobilesMock=abc;
    };

    $scope.slider = {
        min: 100,
        max: 70000,
        options: {
            floor: 0,
            ceil: 70000,
            onEnd: function() {
                 $scope.priceRange();
                 
            }
        },

    }

    





});

app.filter('selectedTags', function() {
    return function(x, arr) {
        return x.filter(function(x) {
            if (arr[0] || arr[1] || arr[2]) {
                for (var i in x) {
                    if (arr.indexOf(x.brand) != -1) {
                        return true;
                    }
                }
                return false;
            } else {
                return true;
            }

        });
    };
})