app.service('homeService', function($http, $q) {
    var deferred = $q.defer();
    var self = this;
    self.getMock = function() {
        // console.log("inside service");
        $http.get("../assets/mock.json")
            .then(function(response) {
                //console.log(response.data);
                deferred.resolve(response.data);
                //return deferred.promise;
                //return response.data;
            }, function(response) {

                deferred.reject(response);

                //return deferred.promise;
            });
        return deferred.promise;
    };

    /*===============
    Mobiles
    ===============*/
    self.setDataToServices = function(id) {
        var saveDatatoLocalStorage = function(id) {
            var data = {};
            data.key = id;
            localStorage.setItem('testObject', JSON.stringify(data));
        }
        saveDatatoLocalStorage(id);
    };

    self.getDataFromLocalStorage = function() {
        var retrievedObject = localStorage.getItem('testObject');
        return JSON.parse(retrievedObject);
    }



    /*===================
    Sports Section
    ===================*/
    self.setSportsDataToLocalStorage = function(id) {
        localStorage.setItem('sportskey', id);
    }

    self.getSportsDataFromLocalStorage = function() {
        var retrivedSportKey = localStorage.getItem('sportskey');
        return retrivedSportKey;

    }

    /*===================
     Closing Sports Section
    ===================*/

    self.setClothesDataToLocalStorage = function(id) {
        console.log("Setting in to local Storage");
        localStorage.setItem('clotheskey', id);
    }

    self.getClothesDataFromLocalStorage = function() {
        var retrivedClothesKey = localStorage.getItem('clotheskey');
        console.log("Getting from local Storage ",retrivedClothesKey);
        return retrivedClothesKey;
    }

    /*=========================
    Mobile Add to Cart Section
    =========================*/


    self.setCartDataToService = function(id, type) {
        var arrObj = [];
        var flag = true;
        plpMobileObj = { "id": id, "count": 1, "cat": type };
        if (localStorage.getItem("key") == null || JSON.parse(localStorage.getItem("key")).length == 0) {
            arrObj.push(plpMobileObj);
            localStorage.setItem("key", JSON.stringify(arrObj));
            console.log("if null");
        } else {
            var abc = localStorage.getItem('key');
            var obj = JSON.parse(abc);
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].id == id) {
                    obj[i].count = obj[i].count + 1;
                    localStorage.setItem("key", JSON.stringify(obj));
                    flag = false;

                }
                else{


                if (i == (obj.length - 1)) {
                    if (obj[i].id == id) {
                        obj[i].count = obj[i].count + 1;
                        localStorage.setItem("key", JSON.stringify(obj));
                    } else {
                        if (flag) {
                            var getForAddOtherElement = localStorage.getItem('key');
                            var object = JSON.parse(getForAddOtherElement);
                            object.push(plpMobileObj);
                            localStorage.setItem("key", JSON.stringify(object));
                        }
                    }
                }
                }
            }
        }
    }

    /* ==============================
       Sports Data save to localStorage
       ==============================*/




    /* ==============================
    Closing Sports Data save to localStorage
    ==============================*/

    /* ==============================
    Fashion Data save to localStorage
    ==============================*/




    /* ==============================
    closing Fashion Data save to localStorage
    ==============================*/

    /*============================================
    Sending local Storage Data to CartController
    ============================================*/
    self.getCartDataFromLocalStorage = function() {
        var cartDataString = localStorage.getItem('key');
        var cartDataObject = JSON.parse(cartDataString);
        return cartDataObject;
    }




});