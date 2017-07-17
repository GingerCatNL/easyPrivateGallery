/**
 * Created by JDWULIT on 17/07/2017.
 */

var app = angular.module('app', []);

app.controller('appController', function appController($scope,$http) {
    var controller = this;
    controller.title = "My Name";
    controller.footer = "This is just a gallery of my private photos";
    controller.errorLoadingData = false;

    loadFiles();

    function loadFiles(){
        $http.get('data.json').then(function(response){
            if(response.data != "") {
                console.log("Data loaded with success");
                $scope.files = response.data;
            } else {
                controller.errorLoadingData = true;
            }
        },function(error){
            controller.errorLoadingData = true;
            controller.errorMessage = error.statusText;
        });
    };

    $scope.loadDataAgain = function(){
        loadFiles();
    };

});