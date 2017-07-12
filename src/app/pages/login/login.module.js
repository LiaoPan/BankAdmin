(function() {
    'use strict';

    angular.module('BlurAdmin.pages.login', ['ui.router'])
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                title:'登录',
                templateUrl: 'app/pages/login/login.html',
                controller: 'LoginPageCtrl'
            })
    }

})();