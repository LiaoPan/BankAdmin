/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .controller('BaSidebarCtrl', BaSidebarCtrl);

    /** @ngInject */
    function BaSidebarCtrl($scope, baSidebarService) {

        $scope.menuItems = baSidebarService.getMenuItems();
        console.log("Debug 3_menuItems' length:" + $scope.menuItems.length);
        console.log("Debug Two:" + $scope.menuItems[1].subMenu[1].title);
        $scope.defaultSidebarState = $scope.menuItems[0].stateRef; //default Sidebar State
        console.log("Debug 4:" + $scope.defaultSidebarState);

        $scope.hoverItem = function($event) {
            $scope.showHoverElem = true;
            $scope.hoverElemHeight = $event.currentTarget.clientHeight;
            var menuTopValue = 66;
            $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
        };

        $scope.$on('$stateChangeSuccess', function() {
            if (baSidebarService.canSidebarBeHidden()) {
                baSidebarService.setMenuCollapsed(true);
            }
        });
    }
})();