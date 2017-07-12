/**
 * @author LiaoPan
 * created on 24.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.person')
        .controller('openAccountCtrl', openAccountCtrl);

    /** @ngInject */
    function openAccountCtrl($scope, $state, BaseInfoFactory, $uibModal, baProgressModal, SSFactory, UsrOpenAccountFactory) {
        // 查询有人开过户时，报的error modals
        $scope.open = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
        };
        $scope.openProgressDialog = baProgressModal.open;



        var vm = this;
        vm.disabled = undefined;


        vm.standardItem = {};
        vm.standardSelectItems = [
            { label: '港澳居民来往内地通行证', value: 1 },
            { label: '身份证', value: 2 },
            { label: '军官证', value: 3 },
            { label: '户口本', value: 4 },
            { label: '武警身份证', value: 5 }
        ];

        $scope.onSelect = function(item, model) {
            console.log("选择的证件类型:::", item);
            $scope.IDtype = item.label;
        }



        // 查询个人是否已经开户
        $scope.search = function() {
            console.log("证件类型是", $scope.IDtype);

            SSFactory.set("IDtype", $scope.IDtype);
            SSFactory.set("IDnumber", $scope.IDnumber);
            console.log("$state.$current.name", $state.$current.name == 'person.openaccount.infofill');
            if ($state.$current.name == 'person.openaccount.infofill') {
                $state.go('person.openaccount');
            }

            $state.go('person.openaccount.infofill'); //debug中 得后续删除
            // $scope.IDnumber = '123456789456123'
            // $scope.IDtype = 
            $scope.username = SSFactory.get('master_account');
            BaseInfoFactory.query($scope.IDtype, $scope.IDnumber, $scope.username).then(function(res) {
                console.log("获取查询信息成功！");
                $scope.res = res.data.accountinfo;
                $scope.return = res.data.return;
                console.log("$scope.res.return::", res.data.return);

                if ($scope.return == 'success') {
                    //表明这个已经开过户
                    console.log("该用户已经开户！");
                    $scope.open('app/pages/person/openAccount/dangerModal.html');

                } else {
                    $state.go('person.openaccount.infofill');
                }
            })
        }




    }
})();