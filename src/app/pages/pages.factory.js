/**
 * author LiaoPan
 * created on 2017.03.12
 */


(function() {
    'use strict';
    var baselink = 'http://124.16.70.183:8080/'

    angular.module('BlurAdmin.factory', [])



    .factory('Test', [function() {
        return {
            sayHello: function() {
                console.log("Test factory");
            }
        }
    }])

    .factory('ConstantFactory', [function() {
        return {
            baselink: function() {
                return baselink;
            }
        }
    }])

    // sessionStorage factory
    .factory('SSFactory', ['$window', function($window) {
        var SSAPI = {
            clear: function() {
                return $window.sessionStorage.clear();
            },

            get: function(key) {
                return JSON.parse($window.sessionStorage.getItem(key));
            },

            set: function(key, data) {
                return $window.sessionStorage.setItem(key, JSON.stringify(data));
            },

            delete: function(key) {
                return $window.sessionStorage.removeItem(key);
            }
        }
        return SSAPI;
    }])

    .factory('AuthFactory', ['SSFactory', function(SSFactory) {
        var userKey = 'user';
        var tokenKey = 'token';

        var AuthAPI = {

            isLoggedIn: function() {
                return this.getUser() === null ? false : true;
            },

            getUser: function() {
                return SSFactory.get(userKey);
            },

            setUser: function(user) {
                return SSFactory.set(userKey, user);
            },

            getToken: function() {
                return SSFactory.get(tokenKey);
            },

            setToken: function(token) {
                return SSFactory.set(tokenKey, token);
            },

            deleteAuth: function() {
                SSFactory.delete(userKey);
                SSFactory.delete(tokenKey);
            }

        };

        return AuthAPI;
    }])


    .factory('BaseInfoFactory', ['$http', function($http) {
        var link = baselink + 'accountinfo';
        var link_update = baselink + 'updateinfo';
        var postdata = {};
        var req = {};
        var BaseInfoFactoryAPI = {
            query: function(IDtype, IDnumber, username) {
                console.log("IIII__IDDDD_type", IDtype);
                console.log("IIII__IDDDD_number", IDnumber);
                console.log("IIII__IDDDD_username", username);
                postdata = {
                    certificate_type: IDtype,
                    certificate_num: IDnumber,
                    master_account: username
                }

                req = {
                    method: 'POST',
                    url: link,
                    headers: { 'Content-Type': 'application/json;text/plain;charset=UTF-8' },
                    params: postdata
                }

                return $http(req)
            },
            // 更新用户信息
            update: function(postdata) {
                console.log("更新个人用户信息开始了~");
                postdata = postdata;
                console.log("postdata", postdata);

                req = {
                    method: 'POST',
                    url: link_update,
                    headers: { 'Content-Type': 'application/json;text/plain;charset=UTF-8' },
                    params: postdata
                }

                return $http(req)
            }
        }

        return BaseInfoFactoryAPI;
    }])

    // 个人开户 openAccount
    .factory('UsrOpenAccountFactory', ['$http', function($http) {
        var link = baselink + 'createaccount';
        var postdata = {};
        var req = {};
        var UsrOpenAccountFactoryAPI = {
            query: function(postdata) {
                console.log("个人用户开户开始了~");
                postdata = postdata;
                console.log("postdata", postdata);

                req = {
                    method: 'POST',
                    url: link,
                    headers: { 'Content-Type': 'application/json;text/plain;charset=UTF-8' },
                    params: postdata
                }

                return $http(req)
            }
        }

        return UsrOpenAccountFactoryAPI;
    }])


    //网银操作-注销-增加-更新-冻结and解冻
    .factory('EBankFactory', ['$http', function($http) {
        var link_delete = baselink + 'deleteaccount';
        var link_insert = baselink + 'insertaccount';
        var link_updatestate = baselink + 'updateebankstate';
        var link_update = baselink + 'updateebank';
        var req = {};
        var postdata = {};

        var EBankFactoryAPI = {

            // 注销网银;登录id和网银账号id
            delete: function(username, account_id) {
                console.log("注销网银账户开始了~");
                postdata = {
                    id: username,
                    account_id: account_id
                };
                console.log("postdata", postdata);

                req = {
                    method: 'POST',
                    url: link_delete,
                    headers: { 'Content-Type': 'application/json;text/plain;charset=UTF-8' },
                    params: postdata
                }

                return $http(req)
            },
            // 增加网银
            insert: function(postdata) {
                console.log("增加网银账户开始了~");
                postdata = postdata;
                console.log("postdata", postdata);

                req = {
                    method: 'POST',
                    url: link_insert,
                    headers: { 'Content-Type': 'application/json;text/plain;charset=UTF-8' },
                    params: postdata
                }

                return $http(req)
            },

            //更新网银限额
            update: function(username, account_id, single_limit, oneday_limit) {
                console.log("冻结or解冻网银状态");
                postdata = {
                    id: username,
                    account_id: account_id,
                    single_limit: single_limit,
                    oneday_limit: oneday_limit
                }

                console.log("postdata", postdata);

                req = {
                    method: 'POST',
                    url: link_updatestate,
                    headers: { 'Content-Type': 'application/json;text/plain;charset=UTF-8' },
                    params: postdata
                }

                return $http(req)

            },

            // 冻结or解冻，即修改网银状态
            update_state: function(username, user_id, certificate_num, ebank_state) {
                console.log("冻结or解冻网银状态");
                postdata = {
                    id: username,
                    user_id: user_id,
                    certificate_num: certificate_num,
                    ebank_state: ebank_state
                }

                console.log("postdata", postdata);

                req = {
                    method: 'POST',
                    url: link_update,
                    headers: { 'Content-Type': 'application/json;text/plain;charset=UTF-8' },
                    params: postdata
                }

                return $http(req)

            }

        }
        return EBankFactoryAPI;
    }])


    //日志查询-柜员和客户
    .factory('LoggingFactory', ['$http', function($http) {
        var link_master = baselink + 'masterlog';
        var link_user = baselink + 'userlog';
        var postdata = {};
        var req = {};
        var LoggingFactoryAPI = {
            masterlog: function(username) {
                console.log("增加网银账户开始了~");
                postdata = {
                    id: username
                };
                console.log("postdata", postdata);

                req = {
                    method: 'POST',
                    url: link_master,
                    headers: { 'Content-Type': 'application/json;text/plain;charset=UTF-8' },
                    params: postdata
                }

                return $http(req)
            },
            userlog: function(username) {
                console.log("增加网银账户开始了~");
                postdata = {
                    id: username
                };
                console.log("postdata", postdata);

                req = {
                    method: 'POST',
                    url: link_user,
                    headers: { 'Content-Type': 'application/json;text/plain;charset=UTF-8' },
                    params: postdata
                }

                return $http(req)
            }
        }
        return LoggingFactoryAPI;
    }])




    ;





})();