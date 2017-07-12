/**
 * @author LiaoPan
 * created on 24.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.person')
        .controller('accountInfoCtrl', accountInfoCtrl);

    /** @ngInject */
    function accountInfoCtrl($state, $scope, editableOptions, editableThemes, $filter, SSFactory) {

        $scope.userInfo = {
            user_id: new Date() % 1e10, //随机生成客户号(当然.本应该服务端给)
            nickname: '李思',
            user_name: '李思',
            name_en: 'lisi',
            certificate_type: '身份证',
            certificate_num: '500227199302027737',
            address: '北京',
            tel: '13071128213',
            phone: '13071128213',
            email: '2017-5-1',
            postcode: '123456',
            manager_id: '123',
            manage_name: '小明',
            ebank_state: '正常',
            auth_mode: '按键USBKEY',
            server_cert: '激活',
            institution: '北京市怀柔区某某银行营业部',
            account_id: new Date() % 1e16,
            account_type: '活期存款',
            currency: 'CNY',
            sign_type: '柜台签约',
            pay_password: '123456',
            login_password: '123456',
            single_limit: '100000',
            oneday_limit: '1000000',
            create_account_date: new Date(),
        }


        var vm = this;
        vm.disabled = undefined;


        vm.standardItem = {};
        vm.standardSelectItems = [
            { label: '身份证', value: 1 },
            { label: '港澳居民来往内地通行证', value: 2 },
            { label: '军官证', value: 3 },
            { label: '户口本', value: 4 },
            { label: '武警身份证', value: 5 }
        ];
        $scope.onSelect = function(item, model) {
            console.log("选择的证件类型:::", item);
            $scope.IDtype = item.label;
        }

        // Data simulation
        $scope.usersInfo = {
            "id": 1,
            "name": "Li",
            "address": "李家庄三号",
            "password": "123456",
            "password_invisible": "******"
        }


        $scope.accountInfo = [{
            "id": 1,
            "accountId": "62172789093",
            "accountType": "活期存款",
            "currency": "CNY",
            "openAccountAddress": '北京市怀柔区某某某银行营业点',
            "upperLimitPerTransaction": '999,999,999,999.00',
            "upperLimitPerDay": '999,999,999,999.00'
        }]


        // Function Part

        $scope.searchClick = function() {
            console.log("already clicked!_Account");

            $state.go("person.accountinfo.results");
        }


        $scope.accountInfoModifiedClick = function() {
            console.log("already Clicked!_Account");
            $state.go("person.accountinfo.modified");
        }

        $scope.submitClick = function() {
            console.log("The length of password!" + $scope.usersInfo.password.length);
            var s = "";
            for (var i = 1; i <= $scope.usersInfo.password.length; i++) {
                s = s + "*";
            }
            console.log("string is " + s);
            $scope.usersInfo.password_invisible = s;
        }

        $scope.addAccount = function() {
            $scope.inserted = {
                id: $scope.accountInfo.length + 1,
                accountId: '868954782634',
                accountType: "活期存款",
                currency: "CNY",
                openAccountAddress: '北京市怀柔区某某某银行营业点',
                upperLimitPerTransaction: '999,999,999,999.00',
                upperLimitPerDay: '999,999,999,999.00'
            };
            console.log($scope.inserted);
            $scope.accountInfo.push($scope.inserted);
        };

        $scope.removeAccount = function(index) {
            $scope.accountInfo.splice(index, 1);
        };



        //与服务器通信--查询
        // $scope.IDtype = SSFactory.get("IDtype_baseinfo");
        // $scope.IDnumber = SSFactory.get("IDnumber_baseinfo");
        // $scope.username = SSFactory.get('master_account');
        // BaseInfoFactory.query($scope.IDtype, $scope.IDnumber, $scope.username).then(function(res) {
        //     console.log("获取查询信息成功！");
        //     $scope.userInfo = res.data.accountinfo;
        //     console.log($scope.userInfo);
        // })




    };


})();