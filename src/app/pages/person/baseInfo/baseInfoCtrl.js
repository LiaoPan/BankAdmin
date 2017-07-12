/**
 * @author LiaoPan
 * created on 24.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.person')
        .controller('baseInfoCtrl', baseInfoCtrl);

    /** @ngInject */
    function baseInfoCtrl($state, $scope, $timeout, editableOptions, editableThemes, BaseInfoFactory, SSFactory) {

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

        $scope.usersInfo = {}


        // Function Part
        $scope.showstate = true
        $scope.searchClick = function() {
            console.log("already clicked!");
            console.log("STATE:" + $state.$current.name);
            $scope.showstate = false;

            SSFactory.set("IDtype_baseinfo", $scope.IDtype);
            SSFactory.set("IDnumber_baseinfo", $scope.IDnumber);

            $state.go('person.baseinfo.results');



            // $state.$current.name = 'person.baseinfo.results';
            console.log("STATE:" + $state.$current.name);


            $scope.IDtype = $scope.IDtype;
            $scope.IDnumber = $scope.IDnumber
            $scope.username = SSFactory.get('master_account');
            BaseInfoFactory.query($scope.IDtype, $scope.IDnumber, $scope.username).then(function(res) {
                console.log("获取查询信息成功！");
                $scope.userInfo = res.data.accountinfo;
                console.log($scope.userInfo);
            })
        }

        // 信息修改后，更新服务器数据
        $scope.postdata = {}
        $scope.postdata['username'] = $scope.username;
        $scope.postdata['address'] = $scope.userInfo.address;
        $scope.postdata['certificate_num'] = $scope.userInfo.certificate_num;
        $scope.postdata['user_id'] = $scope.userInfo.user_id;
        $scope.postdata['tel'] = $scope.userInfo.tel;
        $scope.postdata['phone'] = $scope.userInfo.phone;
        $scope.postdata['email'] = $scope.userInfo.email;
        $scope.postdata['postcode'] = $scope.userInfo.postcode;
        $scope.postdata['manager_id'] = $scope.userInfo.manager_id;
        $scope.postdata['manage_name'] = $scope.userInfo.manage_name;
        console.log("更新个人信息之后的结果：", $scope.postdata);
        BaseInfoFactory.update($scope.postdata).then(function(res) {
            $scope.response = res.data.accountinfo;
            console.log("更新结果", $scope.response);
        })


        $scope.baseInfoModifiedClick = function() {
            console.log("already Clicked");
            $state.go("person.baseinfo.modified");
        }

        $scope.submitClick = function() {
            console.log("The length of password!" + $scope.userInfo.pay_password.length);
            var s = "";
            for (var i = 1; i <= $scope.userInfo.pay_password.length; i++) {
                s = s + "*";
            }
            console.log("string is " + s);
            $scope.userInfo.pay_password_invisible = s;
        }





    };


})();