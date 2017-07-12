/**
 * @author LiaoPan
 * created on 24.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.enterprise')
        .controller('enterpriseInfoFillCtrl', enterpriseInfoFillCtrl);

    /** @ngInject */
    function enterpriseInfoFillCtrl($scope, $state, $timeout, $filter, BaseInfoFactory, $uibModal, baProgressModal, SSFactory, UsrOpenAccountFactory) {

        $scope.userInfo = {
            user_id: new Date() % 1e10, //随机生成客户号(当然.本应该服务端给)
            nickname: '',
            user_name: '',
            name_en: '',
            certificate_type: '',
            certificate_num: '',
            address: '',
            tel: '',
            phone: '',
            email: '',
            postcode: '',
            manager_id: '',
            manage_name: '',
            ebank_state: '',
            auth_mode: '',
            server_cert: '',
            client_cert: '',
            institution: '北京市怀柔区杨家园银行营业部',
            account_id: new Date() % 1e16, //网银账号
            account_type: '',
            currency: '',
            sign_type: '',
            pay_password: '',
            login_password: '',
            single_limit: '',
            oneday_limit: '',
            create_account_date: new Date(),
            usrname: '',
            accounttype: '',
            usrid: '',
            fox: ''
        }
        $scope.userInfo.create_account_date = '2017-05-22'
        console.log("日期：：：", $scope.userInfo.create_account_date);
        $scope.auth_modes = [
            { value: 1, text: '按键USBKEY' },
            { value: 2, text: '动态口令' }
        ]

        $scope.ebank_states = [
            { value: 1, text: '正常' },
            { value: 2, text: '冻结' }
        ]
        $scope.currencys = [
            { value: 1, text: 'CNY' },
            { value: 2, text: 'USD' },
            { value: 3, text: 'EUR' },
            { value: 4, text: 'HKD' }
        ]
        $scope.server_certs = [
            { value: 1, text: '激活' },
            { value: 2, text: '未激活' }
        ]
        $scope.client_certs = [
            { value: 1, text: '激活' },
            { value: 2, text: '未激活' }
        ]


        $scope.account_types = [
            { value: 1, text: '活期存款' },
            { value: 2, text: '死期存款' },
            { value: 3, text: '定期存款' }
        ]

        $scope.sign_types = [
            { value: 1, text: '柜台签约' },
            { value: 2, text: '网上签约' }
        ]


        $scope.showAuthMode = function() {
            var selected = $filter('filter')($scope.auth_modes, { value: $scope.userInfo.auth_mode });
            return ($scope.userInfo.auth_mode && selected.length) ? selected[0].text : 'Not set';
        };

        $scope.showEbankState = function() {
            var selected = $filter('filter')($scope.ebank_states, { value: $scope.userInfo.ebank_state });
            return ($scope.userInfo.ebank_state && selected.length) ? selected[0].text : 'Not set';
        };

        $scope.showServerCert = function() {
            var selected = $filter('filter')($scope.server_certs, { value: $scope.userInfo.server_cert });
            return ($scope.userInfo.server_cert && selected.length) ? selected[0].text : 'Not set';
        };

        $scope.showClientCert = function() {
            var selected = $filter('filter')($scope.client_certs, { value: $scope.userInfo.client_cert });
            return ($scope.userInfo.client_cert && selected.length) ? selected[0].text : 'Not set';
        };

        $scope.showAccountType = function() {
            var selected = $filter('filter')($scope.account_types, { value: $scope.userInfo.account_type });
            return ($scope.userInfo.account_type && selected.length) ? selected[0].text : 'Not set';
        };

        $scope.showSignType = function() {
            var selected = $filter('filter')($scope.sign_types, { value: $scope.userInfo.sign_type });
            return ($scope.userInfo.sign_type && selected.length) ? selected[0].text : 'Not set';
        };

        $scope.showCurrency = function() {
            var selected = $filter('filter')($scope.currencys, { value: $scope.userInfo.currency });
            return ($scope.userInfo.currency && selected.length) ? selected[0].text : 'Not set';
        };




        $scope.create_account_date  = new Date();
        $scope.enIDtype = SSFactory.get("enIDtype");
        $scope.enIDnumber = SSFactory.get("enIDnumber");
        console.log("enIDtype", $scope.enIDtype);
        // 若没开户,填写个人开户信息,传递给服务器.
        $scope.submitinfo = function() {
            //使密码不可见
            var s = "";
            for (var i = 1; i <= $scope.userInfo.login_password.length; i++) {
                s = s + "*";
            }
            console.log("string is " + s);
            $scope.userInfo.login_password_invisible = s;

            var s = "";
            for (var i = 1; i <= $scope.userInfo.pay_password.length; i++) {
                s = s + "*";
            }
            console.log("string is " + s);
            $scope.userInfo.pay_password_invisible = s;

            // 授权操作
            $state.go('enterprise.auth');





            $scope.username = SSFactory.get('master_account'); //获取登录用户名;
            console.log("提交给服务器信息_1:", $scope.userInfo.nickname);
            console.log("提交给服务器信息_2:", $scope.userInfo.user_name);
            console.log("提交给服务器信息_3:", $scope.auth_modes[$scope.userInfo.auth_mode - 1].text);
            console.log("提交给服务器信息_3:", $scope.userInfo.currency);
            if ($scope.userInfo.currency == '') {
                $scope.userInfo.currency = 'Empty';
                console.log("$scope.userInfo.currency", $scope.userInfo.currency);
            } else {
                console.log("提交给服务器信息_3:", $scope.currencys[$scope.userInfo.currency - 1].text);
                $scope.userInfo.currency = $scope.currencys[$scope.userInfo.currency - 1].text
            }
            if ($scope.userInfo.ebank_state == '') {
                $scope.userInfo.ebank_state = 'Empty';
            } else {
                $scope.userInfo.ebank_state = $scope.ebank_states[$scope.userInfo.ebank_state - 1].text
            }
            if ($scope.userInfo.sign_type == '') {
                $scope.userInfo.sign_type = 'Empty';
            } else {
                $scope.userInfo.sign_type = $scope.sign_types[$scope.userInfo.sign_type - 1].text
            }
            if ($scope.userInfo.account_type == '') {
                $scope.userInfo.account_type = 'Empty';
            } else {
                $scope.userInfo.account_type = $scope.account_types[$scope.userInfo.account_type - 1].text
            }
            if ($scope.userInfo.server_cert == '') {
                $scope.userInfo.server_cert = 'Empty';
            } else {
                $scope.userInfo.server_cert = $scope.server_certs[$scope.userInfo.server_cert - 1].text
            }
            if ($scope.userInfo.auth_mode == '') {
                $scope.userInfo.auth_mode = 'Empty';
            } else {
                $scope.userInfo.auth_mode = $scope.auth_modes[$scope.userInfo.auth_mode - 1].text
            }

            $scope.username = SSFactory.get('master_account');
            $scope.postdata = $scope.userInfo;
            $scope.postdata['username'] = $scope.username
            $scope.postdata['IDtype'] = $scope.userInfo.certificate_type;
            $scope.postdata['IDnumber'] = $scope.userInfo.certificate_num;
            console.log("poooost data::", $scope.postdata);
            UsrOpenAccountFactory.query($scope.postdata).then(function(res) {
                console.log("获取查询信息成功！");
                $scope.res = res.data.accountinfo;
                console.log($scope.res);
            })





        }






    }
})();