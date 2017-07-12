(function() {
    'use strict';

    angular
        .module('BlurAdmin.theme.components')
        .controller('pageTopCtrl', pageTopCtrl);

    function pageTopCtrl($scope, $rootScope, $state) {

        $scope.logout = function() {
            AuthFactory.deleteAuth();
            console.log("log out~~ ");
            $rootScope.isAuth = false;
            $state.go('login');
        }
    }

})();