app.controller('cartCtrl', function($scope, homeService, $q) {

    var dataObject = homeService.getCartDataFromLocalStorage();
    var totalPrice = 0;
    homeService.getMock()
        .then(
            function(result) {

                FinalCartData = [];
                for (var i = 0; i < dataObject.length; i++) {

                    if (dataObject[i].cat == "mobiles") {

                        for (var j = 0; j < result.mobiles.length; j++) {
                            if (dataObject[i].id == result.mobiles[j].id) {

                                var forAddCountObj = result.mobiles[j];
                                forAddCountObj["count"] = dataObject[i].count;
                                // forAddCountObj["price"] = result.mobiles[j].price;
                                totalPrice = totalPrice + result.mobiles[j].price * dataObject[i].count;
                                FinalCartData.push(forAddCountObj);
                            }
                        }
                    }

                    if (dataObject[i].cat == "sports") {

                        for (var j = 0; j < result.sports.length; j++) {
                            if (dataObject[i].id == result.sports[j].id) {
                                var forAddCountObj = result.sports[j];
                                forAddCountObj["count"] = dataObject[i].count;
                                // forAddCountObj["price"] = result.sports[j].price;
                                totalPrice = totalPrice + result.mobiles[j].price * dataObject[i].count;

                                FinalCartData.push(forAddCountObj);
                            }
                        }

                    }
                    if (dataObject[i].cat == "clothings") {

                        for (var j = 0; j < result.clothings.length; j++) {
                            if (dataObject[i].id == result.clothings[j].id) {
                                var forAddCountObj = result.clothings[j];
                                forAddCountObj["count"] = dataObject[i].count;
                                //console.log(forAddCountObj);
                                totalPrice = totalPrice + result.mobiles[j].price * dataObject[i].count;
                                FinalCartData.push(forAddCountObj);

                            }
                        }

                    }

                    $scope.totalPrice = totalPrice;



                }
                $scope.final = FinalCartData;

                $scope.itemsNumber = FinalCartData.length;

            },
            function(error) {
                console.log(error.statusText);
                console.log("err");
            }
        );





    $scope.changeItemQuantity = function(id, type) {
        var abc = localStorage.getItem('key');
        var obj = JSON.parse(abc);

        var tp = 0;

        if (type == 'inc') {

            for (var i = 0; i < obj.length; i++) {
                if (obj[i].id == id && obj[i].count <= 9) {
                    obj[i].count += 1;
                    localStorage.setItem("key", JSON.stringify(obj));

                    for (var j = 0; j < $scope.final.length; j++) {
                        if ($scope.final[j].id == id) {
                            $scope.final[j].count = obj[i].count;
                            $scope.totalPrice = $scope.totalPrice + $scope.final[j].price;
                        }
                    }
                }
            }

        } else {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].id == id) {
                    if (obj[i].count > 1) {
                        obj[i].count -= 1;
                        localStorage.setItem("key", JSON.stringify(obj));
                        var incLocalStorage = localStorage.getItem('key');
                        var incObj = JSON.parse(abc);

                        for (var j = 0; j < $scope.final.length; j++) {
                            if ($scope.final[j].id == id) {
                                $scope.final[j].count = obj[i].count;
                                $scope.totalPrice = $scope.totalPrice - $scope.final[j].price;
                            }

                        }
                    }
                }
            }
        }

    }


    $scope.deleteItem = function(x, id) {
        var abc = localStorage.getItem('key');
        var obj = JSON.parse(abc);

        var removed = obj.splice(x, 1);
        var newFinal=$scope.final.splice(x,1);
        
        localStorage.setItem("key", JSON.stringify(obj));
        $scope.final=$scope.final;
        var tp=0;
        for(var i=0;i<$scope.final.length;i++){
            /*console.log("The price of "+i+" is:",$scope.final[i].price);
            console.log("The count of the respective is;",obj[i].count);*/
            tp=tp+$scope.final[i].price*obj[i].count;

        }

        $scope.totalPrice=tp;

    }


});