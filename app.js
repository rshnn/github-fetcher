(function() {

    var app = angular.module("githubthing", ["ngRoute"]);

    app.config(function($routeProvider) {


        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })

        .when("/user/:username", {
            templateUrl: "user.html",
            controller: "UserController"
        })
        
        
        .when("/repo/:username/:reponame", {
            templateUrl: "repo.html",
            controller: "RepoController"
        })

        .otherwise({
            redirectTo: "/main"
        });

        console.log("app js success");


    });



}());