(function() {



    var UserController = function($scope, githubService, $routeParams) {

        var onResponse = function(data) {
            $scope.user = data;
            githubService.getRepos($scope.user)
                .then(onRepos, onError);
        };


        var onRepos = function(data) {
            $scope.repos = data;
        };


        var onError = function(reason) {
            $scope.error = "suttin wrong happened.  could not fetch data for the user named " + $scope.username;
        };


        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";

        githubService.getUser($scope.username).then(onResponse, onError);

    };







    var app = angular.module("githubthing");
    app.controller("UserController", UserController);




}());