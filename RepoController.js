(function() {



    var RepoController = function($scope, githubService, $routeParams) {




        var onResponse = function(data) {
            $scope.repo = data;
        };

        var onError = function(reason) {
            $scope.error = "Something failed";
        };
        
        
        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;

        githubService.getRepoDetails($scope.username, $scope.reponame)
            .then(onResponse, onError);

    };







    var app = angular.module("githubthing");
    app.controller("RepoController", RepoController);




}());