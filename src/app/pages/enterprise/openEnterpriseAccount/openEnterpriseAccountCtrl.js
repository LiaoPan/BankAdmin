/**
 * @author LiaoPan
 * created on 24.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.enterprise')
        .controller('openEnterpriseAccountCtrl', openEnterpriseAccountCtrl);

    /** @ngInject */
    function openEnterpriseAccountCtrl($scope, $state, BaseInfoFactory, $uibModal, baProgressModal, SSFactory) {
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
            { label: '企业营业执照', value: 1 },
            { label: '全国组织机构代码证', value: 2 },
            { label: '批文', value: 3 },
            { label: '开户许可证', value: 4 },
            { label: '开户证明', value: 5 },
            { label: '登记证书', value: 6 },
            { label: '企业法人营业执照', value: 7 },
            { label: '个体工商户营业执照', value: 8 },
            { label: '统一社会信用代码', value: 9 },
            { label: '企业其他证件', value: 10 }
        ];

        $scope.onSelect = function(item, model) {
            console.log("选择的证件类型:::", item);
            $scope.enIDtype = item.label;
        }

        $scope.search = function() {

            SSFactory.set("enIDtype", $scope.enIDtype);
            SSFactory.set("enIDnumber", $scope.enIDnumber);
            // $scope.IDnumber = '123456789456123'
            // $scope.IDtype = 
            $scope.username = SSFactory.get('master_account');
            BaseInfoFactory.query($scope.enIDtype, $scope.enIDnumber, $scope.username).then(function(res) {
                console.log("获取查询信息成功！");
                $scope.res = res.data.accountinfo;
                $scope.return = res.data.return;
                console.log("$scope.res.return::", res.data.return);
                if ($scope.return == 'success') {
                    //表明这个已经开过户
                    console.log("该用户已经开户！");
                    $scope.open('app/pages/enterprise/openEnterpriseAccount/dangerModal.html');

                } else {
                    $state.go('enterprise.openaccount.infofill');
                }



            })

            $state.go('enterprise.openaccount.infofill'); //后台运行时，去掉！


        }

    }
})();