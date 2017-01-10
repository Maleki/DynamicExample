(function(){
    var app = angular.module("dynamicResources", []);

    var MainController = function($scope,$http) {
        var imageFolder = 'media/'
        $scope.hostNameShow = window.location.hostname;
        //although we'd use the value above since we're on a local system we'll just use the file name.
        $scope.hostName = window.location.pathname.replace(/\.html|\//ig, '');
        $scope.imageUrl = imageFolder + $scope.hostName + '.png';
    };

    app.controller("MainController", ["$scope", "$http", MainController]);
})(); 