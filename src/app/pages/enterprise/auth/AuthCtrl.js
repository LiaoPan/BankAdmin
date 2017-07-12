(function() {
    'use strict';

    angular.module('BlurAdmin.pages.person')
        .controller('AuthCtrl', AuthCtrl);

    /** @ngInject */
    function AuthCtrl($scope, $state, $rootScope, $http, ConstantFactory, SSFactory, AuthFactory, $uibModal, baProgressModal) {

        $scope.open = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
        };
        $scope.openProgressDialog = baProgressModal.open;

        $scope.data = {}


    }




})();