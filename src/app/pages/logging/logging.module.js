(function() {
    'use strict';

    angular.module('BlurAdmin.pages.logging', ['ui.router'])
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('logging', {
                url: '/logging',
                title: '操作日志查询',
                template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
            })

        .state('logging.employee', {
            url: '/employeelogging',
            templateUrl: 'app/pages/logging/counterEmployeeLogging/counter-employee-logging.html',
            title: '柜员操作日志查询',
            controller: 'emloggingCtrl'
        })

        .state('logging.employee.results', {
            url: '/employeeloggingresults',
            templateUrl: 'app/pages/logging/counterEmployeeLogging/logging-results-tables.html',
            title: '柜员操作日志查询',
            controller: 'emloggingCtrl'
        })


        .state('logging.usr', {
            url: '/usrlogging',
            templateUrl: 'app/pages/logging/userLogging/usrlogging.html',
            controller: 'usrloggingCtrl',
            title: '客户日志查询'
        })


        .state('logging.usr.results', {
            url: '/usrresults',
            templateUrl: 'app/pages/logging/userLogging/logging-results-tables.html',
            title: '客户操作日志查询',
            controller: 'usrloggingCtrl'
        })

    }

})();