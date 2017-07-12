/**
 * @author LiaoPan
 * created on 24.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.person', [
            'ui.select',
            'ngSanitize'
        ])
        .config(routeConfig);

    /** @ngInject */
    // if has sidebarMeta, it will show in sidebarMenu.
    function routeConfig($stateProvider) {
        $stateProvider
            .state('person', {
                url: '/person',
                template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: '个人客户管理',
                // sidebarMeta: {
                //     icon: 'fa fa-user',
                //     order: 250,
                // },
            })

        .state('person.openaccount', {
            url: '/openaccount',
            templateUrl: 'app/pages/person/openAccount/openaccount.html',
            controller: 'openAccountCtrl',
            title: '个人客户开户'
        })

        .state('person.openaccount.infofill', {
            url: '/infofill',
            templateUrl: 'app/pages/person/openAccount/openaccount-infofill.html',
            controller: 'usrInfoFillCtrl',
            title: '个人客户开户基本信息填写',
        })

        // BlurAdmin.pages.baseinfo
        .state('person.baseinfo', {
            url: '/baseinfo',
            templateUrl: 'app/pages/person/baseInfo/baseinfo.html',
            title: '个人基本信息维护',
        })

        .state('person.baseinfo.results', {
            url: '/results',
            templateUrl: 'app/pages/person/baseInfo/baseinfo-results.html',
            controller: 'baseInfoCtrl',
            title: '个人注册客户详细信息',
        })

        .state('person.baseinfo.modified', {
            url: '/modified',
            templateUrl: 'app/pages/person/baseInfo/baseinfo-modified.html',
            controller: 'baseInfoCtrl',
            title: '个人注册客户详细信息',
        })

        .state('person.accountinfo', {
            url: '/accountinfo',
            templateUrl: 'app/pages/person/accountInfo/accountinfo.html',
            controller: 'accountInfoCtrl',
            title: '个人注册客户详细信息',
        })

        .state('person.accountinfo.results', {
            url: '/results',
            templateUrl: 'app/pages/person/accountInfo/accountinfo-results.html',
            controller: 'accountInfoCtrl',
            title: '个人注册客户详细信息',
        })

        .state('person.accountinfo.modified', {
            url: '/modified',
            templateUrl: 'app/pages/person/accountInfo/accountinfo-modified.html',
            controller: 'accountInfoCtrl',
            title: '个人账户信息维护',
        })


        .state('person.freezethawaccount', {
            url: '/freezethawaccount',
            templateUrl: 'app/pages/person/freezeThawAccount/freeze-thaw-account.html',
            controller: 'freezeThawAccountCtrl',
            title: '个人注册客户详细信息',
        })

        .state('person.freezethawaccount.results', {
            url: '/actions',
            templateUrl: 'app/pages/person/freezeThawAccount/freeze-thaw-account-results.html',
            controller: 'freezeThawAccountCtrl',
            title: '个人注册客户详细信息',
        })


        .state('person.deleteaccount', {
            url: '/deleteaccount',
            templateUrl: 'app/pages/person/deleteAccount/delete-account.html',
            controller: 'deleteAccountCtrl',
            title: '个人注册客户详细信息',
        })

        .state('person.deleteaccount.results', {
            url: '/actions',
            templateUrl: 'app/pages/person/deleteAccount/delete-account-results.html',
            controller: 'deleteAccountCtrl',
            title: '个人注册客户详细信息',
        })

        .state('person.resetpassword', {
            url: '/ebankreset',
            templateUrl: 'app/pages/person/resetPassword/reset-password.html',
            controller: 'resetPasswordCtrl',
            title: '个人注册客户详细信息',
        })

        .state('person.resetpassword.results', {
            url: '/resetpassword',
            templateUrl: 'app/pages/person/resetPassword/reset-password-results.html',
            controller: 'resetPasswordCtrl',
            title: '个人注册客户详细信息',
        })

        .state('person.resetpassword.modified', {
            url: '/resetpassword',
            templateUrl: 'app/pages/person/resetPassword/reset-password-modified.html',
            controller: 'resetPasswordCtrl',
            title: '个人注册客户详细信息',
        })

        .state('person.personalaccountinfoquery', {
            url: '/personalaccountinfoquery',
            templateUrl: 'app/pages/person/personalAccountInfoQuery/query.html',
            controller: 'queryCtrl',
            title: '个人客户信息查询',
        })

        .state('person.personalaccountinfoquery.results', {
            url: '/personalaccountinfoquery_results',
            templateUrl: 'app/pages/person/personalAccountInfoQuery/query-results.html',
            controller: 'queryCtrl',
            title: '个人客户信息查询',
        })

        .state('person.auth', {
            url: '/admin_auth',
            templateUrl: 'app/pages/person/auth/admin-auth.html',
            controller: 'AuthCtrl',
            title: '开户授权',
        })

        ;

    }
})();