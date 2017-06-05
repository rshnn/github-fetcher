(function() {

    var githubService = function($http, $log) {



        var getUser = function(username) {

            $log.info("Searching for " + username);

            return $http.get("https://api.github.com/users/" + username)
                .then(function(response) {
                    return response.data;
                });

        };

        var getRepos = function(user) {

            $log.info("Getting repos for " + user.login);

            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data;
                });

        }

        var getRepoDetails = function(username, reponame) {
            $log.info("Getting repo " + reponame + " of user " +
                username);

            return $http.get("https://api.github.com/repos/" +
                    username + "/" + reponame)
                .then(function(response) {
                    return response.data;
                });
        }

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };

    }


    var module = angular.module("githubthing");

    module.factory("githubService", githubService);

}());