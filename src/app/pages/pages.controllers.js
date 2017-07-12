(function() {
    'use strict';


    angular.module('BlurAdmin.controllers', [])

    .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($rootScope, $scope, $state, $timeout, SSFactory, $http, AuthFactory, $location) {
        // var loginurl = baselink + 'authenticate';


        $scope.login = function() {
            console.log("Hi controller");
        }
    }


})();