/**
 * @author LiaoPan
 * created on 24.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.enterprise', [
            'ui.select',
            'ngSanitize'
        ])
        .config(routeConfig);

    /** @ngInject */
    // if has sidebarMeta, it will show in sidebarMenu.
    function routeConfig($stateProvider) {
        $stateProvider
            .state('enterprise', {
                url: '/enterprise',
                template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: '企业客户管理',
                // sidebarMeta: {
                //     icon: 'fa fa-user',
                //     order: 250,
                // },
            })

        .state('enterprise.openaccount', {
            url: '/openenterpriseaccount',
            templateUrl: 'app/pages/enterprise/openEnterpriseAccount/openaccount.html',
            title: '企业客户开户'
        })

        .state('enterprise.openaccount.infofill', {
            url: '/infofill',
            templateUrl: 'app/pages/enterprise/openEnterpriseAccount/openaccount-infofill.html',
            controller: 'enterpriseInfoFillCtrl',
            title: '企业客户开户基本信息填写',
        })

        .state('enterprise.auth', {
            url: '/en_admin_auth',
            templateUrl: 'app/pages/enterprise/auth/admin-auth.html',
            controller: 'AuthCtrl',
            title: '开户授权',
        })

        .state('enterprise.baseinfo', {
                url: '/baseinfo',
                templateUrl: 'app/pages/enterprise/enterprisebaseinfo/enterprisebaseinfo.html',
                controller: 'openAccountCtrl',
                title: '企业客户开户基本信息维护',
            })
            .state('enterprise.baseinfo.results', {
                url: '/results',
                templateUrl: 'app/pages/enterprise/enterprisebaseinfo/enterprisebaseinfo-results.html',
                controller: 'enterprisebaseInfoCtrl',
                title: '企业客户详细信息',
            })

        .state('enterprise.baseinfo.modified', {
                url: '/modified',
                templateUrl: 'app/pages/enterprise/enterprisebaseinfo/enterprisebaseinfo-modified.html',
                controller: 'enterprisebaseInfoCtrl',
                title: '企业客户详细信息',
            })
            .state('enterprise.enterpriseaccountinfoquery', {
                url: '/enterpriseaccountinfoquery',
                templateUrl: 'app/pages/enterprise/enterpriseAccountInfoQuery/query.html',
                controller: 'enqueryCtrl',
                title: '企业客户信息查询',
            })

        .state('enterprise.enterpriseaccountinfoquery.results', {
            url: '/enterpriseaccountinfoquery_results',
            templateUrl: 'app/pages/enterprise/enterpriseAccountInfoQuery/query-results.html',
            controller: 'enqueryCtrl',
            title: '企业客户信息查询',
        })


        ;

    }
})();