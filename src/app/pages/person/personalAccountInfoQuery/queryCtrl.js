/**
 * @author LiaoPan
 * created on 24.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.person')
        .controller('queryCtrl', queryCtrl);

    /** @ngInject */
    function queryCtrl($state, $scope, $timeout, editableOptions, editableThemes) {

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
        var vm = this;
        vm.disabled = undefined;


        vm.standardItem_onlinebank = {};
        vm.standardSelectItems_onlinebank = [
            { label: '正常', value: 1 },
            { label: '冻结', value: 2 }
        ];



        // Data simulation
        $scope.usersInfo = {
            "id": 1,
            "name": "Li",
            "address": "李家庄三号",
            "password": "123456",
            "password_invisible": "******"
        }


        // Function Part
        $scope.showstate = true
        $scope.searchClick = function() {
            console.log("already clicked!");
            console.log("STATE:" + $state.$current.name);
            $scope.showstate = false;

            $state.go('person.personalaccountinfoquery.results');



            // $state.$current.name = 'person.query.results';
            console.log("STATE:" + $state.$current.name);
        }


        $scope.queryModifiedClick = function() {
            console.log("already Clicked");
            $state.go("person.query.modified");
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



    };


})();