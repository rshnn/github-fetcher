(function() {



    var MainController = function($scope, $interval, $location) {


        var decrementCountdown = function() {

            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.searchUsers($scope.username);
            }

        }


        var countdownInterval;
        var startCountdown = function() {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        }


        $scope.searchUsers = function(username) {

            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }

            // route to search for user 
            $location.path("/user/" + username);

        };



        $scope.username = "rshnn";
        $scope.countdown = 5;
        startCountdown();

    };














    var app = angular.module("githubthing");
    app.controller("MainController", MainController);




}());