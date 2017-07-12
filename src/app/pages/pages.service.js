/**
 * @author LiaoPan
 * created on 2017.03.12
 */



(function() {
    'use strict';

    angular.module('BlurAdmin.services', [])


    .service('TestService', [function() {
        this.sayHello = function() {
            console.log("Hello service!!!!");
        }
    }])



    ;




})();