/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages', [
            'ui.router',

            // 'BlurAdmin.pages.dashboard',
            // 'BlurAdmin.pages.ui',
            // 'BlurAdmin.pages.components',
            // 'BlurAdmin.pages.form',
            // 'BlurAdmin.pages.tables',
            // 'BlurAdmin.pages.charts',
            // 'BlurAdmin.pages.maps',
            'BlurAdmin.pages.profile',
            'BlurAdmin.pages.person',
            'BlurAdmin.pages.enterprise',
            'BlurAdmin.pages.login',
            'BlurAdmin.pages.logging'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
        $urlRouterProvider.otherwise('login');


        // add other sidebar menu title to project.
        // personal manage
        baSidebarServiceProvider.addStaticItem({
            title: '个人客户管理',
            icon: 'fa fa-user',
            subMenu: [{
                title: '个人客户开户',
                stateRef: 'person.openaccount'
            }, {
                title: '个人客户信息管理',
                subMenu: [{
                    title: '个人基本信息维护',
                    stateRef: 'person.baseinfo'
                }, {
                    title: '个人账户信息维护',
                    stateRef: 'person.accountinfo'
                }, {
                    title: '个人网银冻结/解冻',
                    stateRef: 'person.freezethawaccount'
                }, {
                    title: '个人网银注销',
                    stateRef: 'person.deleteaccount'
                }, {
                    title: '个人网银密码重置',
                    stateRef: 'person.resetpassword'
                }]
            }, {
                title: '个人客户信息查询',
                stateRef: 'person.personalaccountinfoquery'
            }]
        })

        // enterprise manage
        baSidebarServiceProvider.addStaticItem({
            title: '企业客户管理',
            icon: 'fa fa-briefcase',
            subMenu: [{
                title: '企业客户开户',
                stateRef: 'enterprise.openaccount'
            }, {
                title: '企业客户信息管理',
                subMenu: [{
                    title: '企业基本信息维护',
                    stateRef: 'enterprise.baseinfo'
                }, {
                    title: '企业账户信息维护'
                }, {
                    title: '企业用户信息维护'
                }, {
                    title: '企业网银业务维护'
                }, {
                    title: '企业授权模式维护'
                }, {
                    title: '企业网银管理'
                }, {
                    title: '企业客户信息同步/三证合一'
                }]
            }, {
                title: '企业客户信息查询',
                stateRef: 'enterprise.enterpriseaccountinfoquery'
            }]

        })

        // Log manage
        baSidebarServiceProvider.addStaticItem({
            title: '操作日志查询',
            icon: 'ion-gear-a',
            subMenu: [{
                title: '柜员操作日志查询',
                stateRef: 'logging.employee'
            }, {
                title: '客户操作日志查询',
                stateRef: 'logging.usr'
            }]
        })

        // baSidebarServiceProvider.addStaticItem({
        //     title: 'Pages',
        //     icon: 'ion-document',
        //     subMenu: [{
        //         title: 'Sign In',
        //         fixedHref: 'auth.html',
        //         blank: true
        //     }, {
        //         title: 'Sign Up',
        //         fixedHref: 'reg.html',
        //         blank: true
        //     }, {
        //         title: 'User Profile',
        //         stateRef: 'profile'
        //     }, {
        //         title: '404 Page',
        //         fixedHref: '404.html',
        //         blank: true
        //     }]
        // });

        // baSidebarServiceProvider.addStaticItem({
        //     title: 'Menu Level 1',
        //     icon: 'ion-ios-more',
        //     subMenu: [{
        //         title: 'Menu Level 1.1',
        //         disabled: true
        //     }, {
        //         title: 'Menu Level 1.2',
        //         subMenu: [{
        //             title: 'Menu Level 1.2.1',
        //             disabled: true
        //         }]
        //     }]
        // });
    }

})();