(function() {
    'use strict';

    angular.module('BlurAdmin.pages.login')
        .controller('LoginPageCtrl', LoginPageCtrl);

    /** @ngInject */
    function LoginPageCtrl($scope, $state, $rootScope, $http, ConstantFactory, SSFactory, AuthFactory, $uibModal, baProgressModal) {

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

        $scope.data = {}

        $scope.login = function() {
            console.log("hello loginin");
            console.log("hello loginin");

            $scope.link = ConstantFactory.baselink() + "authenticate";;
            console.log($scope.link);

            $rootScope.isAuth = true; //得修改成false
             $state.go('person.openaccount')  //得去掉

            $scope.user = {}

            $scope.response = "no";
            $scope.data.username = 'admin'
            $scope.data.password = "123456"
                // if (angular.isUndefined($scope.data.username)) {
                //     $state.go('login')
                //     $scope.open('app/pages/login/dangerModal.html');
                // }

            console.log("用户名：" + $scope.data.username);
            console.log("密码：" + $scope.data.password);
            // 需要发送的用户数据
            $scope.postUserData = {
                id: $scope.data.username,
                password: $scope.data.password
            }

            SSFactory.set("master_account", $scope.data.username) //存储现在登录的账户名

            $scope.req = {
                method: 'POST',
                url: $scope.link,
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                params: $scope.postUserData,
                timeout: 6000
            }


            $http($scope.req).then(function(res) {
                $scope.response = res.data.status;
                console.log("res status:" + res.status);
                console.log("Result:" + $scope.response);
                //表示验证登陆是否成功。
                console.log("response:" + $scope.response);

                switch ($scope.response) {
                    //login success and setup a timeout to clear loader.
                    case 'true':

                        // 授权操作 
                        AuthFactory.setUser($scope.data.username);
                        AuthFactory.setToken({
                            token: res.data.token,
                            expires: res.data.expires
                        });
                        $rootScope.isAuthenticated = true;
                        $rootScope.username = $scope.data.username;
                        console.log("isAuthenticated:" + $rootScope.isAuthenticated);
                        console.log("User:" + AuthFactory.getUser($scope.data.username));
                        $rootScope.isAuth = true;
                        break;


                        //alert对话框，登陆失败时弹出。
                    case 'false':
                        $state.go('login')
                        $scope.open('app/pages/login/dangerModal.html');
                        $rootScope.isAuth = false;
                        // toastr.error("您输入的密码或者用户名错误！", 'Error');
                        break;

                }
            });
        }

        $rootScope.logout = function() {
            AuthFactory.deleteAuth();
            $rootScope.isAuth = false;
            console.log("log out~~ ");
            $state.go('login');
        }





    }




})();