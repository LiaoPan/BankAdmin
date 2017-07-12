/**
 * @author LiaoPan
 * created on 24.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.logging')
        .controller('usrloggingCtrl', usrloggingCtrl);

    /** @ngInject */
    function usrloggingCtrl($state, $scope, editableOptions, editableThemes) {



        // Data simulation
        $scope.usersInfo = {
            "id": 1,
            "name": "Li",
            "address": "李家庄三号",
            "password": "123456",
            "password_invisible": "******"
        }
        $scope.data = {};

        // Function Part
        $scope.showstate = true
        $scope.searchClick = function() {
            console.log("click logging employee");
            console.log("STATE_1:" + $state.$current.name);
            $scope.showstate = false;

            $state.go('logging.usr.results');



            // $state.$current.name = 'person.baseinfo.results';
            console.log("STATE_2:" + $state.$current.name);
        }


        $scope.smartTablePageSize = 20;

        $scope.smartTableData = [{
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '123456',
                email: '2017-5-1',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '123456',
                email: '2017-5-5',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '123456',
                email: '2017-5-1',
                age: '18'
            },
            {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '123456',
                email: '2017-5-1',
                age: '20'
            },
            {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '123456',
                email: '2017-5-4',
                age: '30'
            },
            {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '123456',
                email: '2017-5-1',
                age: '21'
            },
            {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '123456',
                email: '2017-5-6',
                age: '43'
            },
            {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '123456',
                email: '2017-5-1',
                age: '13'
            },
            {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '123456',
                email: '2017-5-1',
                age: '22'
            },
            {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '123456',
                email: '2017-5-6',
                age: '33'
            },
            {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '123456',
                email: '2017-5-1',
                age: '38'
            },
            {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '123456',
                email: '2017-5-6',
                age: '48'
            },
            {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '123456',
                email: '2017-5-1',
                age: '48'
            },
            {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '123456',
                email: '2017-5-1',
                age: '40'
            },
            {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '123456',
                email: '2017-5-6',
                age: '32'
            },
            {
                "id": 16,
                "firstName": "Francisca",
                "lastName": "Brady",
                "username": "123456",
                "email": "2017-5-1",
                "age": 11
            },
            {
                "id": 17,
                "firstName": "Tillman",
                "lastName": "Figueroa",
                "username": "123456",
                "email": "2017-5-1",
                "age": 34
            },
            {
                "id": 18,
                "firstName": "Jimenez",
                "lastName": "Morris",
                "username": "123456",
                "email": "2017-5-1",
                "age": 45
            },
            {
                "id": 19,
                "firstName": "Sandoval",
                "lastName": "Jacobson",
                "username": "123456",
                "email": "2017-5-1",
                "age": 32
            },
            {
                "id": 20,
                "firstName": "Griffin",
                "lastName": "Torres",
                "username": "123456",
                "email": "2017-5-1",
                "age": 19
            },
            {
                "id": 21,
                "firstName": "Cora",
                "lastName": "Parker",
                "username": "123456",
                "email": "2017-5-1",
                "age": 27
            },
            {
                "id": 22,
                "firstName": "Cindy",
                "lastName": "Bond",
                "username": "123456",
                "email": "2017-5-1",
                "age": 24
            },
            {
                "id": 23,
                "firstName": "Frieda",
                "lastName": "Tyson",
                "username": "123456",
                "email": "2017-5-1",
                "age": 45
            },
            {
                "id": 24,
                "firstName": "Cote",
                "lastName": "Holcomb",
                "username": "123456",
                "email": "2017-5-1",
                "age": 20
            },
            {
                "id": 25,
                "firstName": "Trujillo",
                "lastName": "Mejia",
                "username": "123456",
                "email": "2017-5-1",
                "age": 16
            },
            {
                "id": 26,
                "firstName": "Pruitt",
                "lastName": "Shepard",
                "username": "123456",
                "email": "2017-5-1",
                "age": 44
            },
            {
                "id": 27,
                "firstName": "Sutton",
                "lastName": "Ortega",
                "username": "123456",
                "email": "2017-5-1",
                "age": 42
            },
            {
                "id": 28,
                "firstName": "Marion",
                "lastName": "Heath",
                "username": "123456",
                "email": "2017-5-1",
                "age": 47
            },
            {
                "id": 29,
                "firstName": "Newman",
                "lastName": "Hicks",
                "username": "123456",
                "email": "2017-5-1",
                "age": 15
            },
            {
                "id": 30,
                "firstName": "Boyle",
                "lastName": "Larson",
                "username": "123456",
                "email": "2017-5-1",
                "age": 32
            },
            {
                "id": 31,
                "firstName": "Haynes",
                "lastName": "Vinson",
                "username": "123456",
                "email": "2017-5-1",
                "age": 15
            },
            {
                "id": 32,
                "firstName": "Miller",
                "lastName": "Acosta",
                "username": "123456",
                "email": "2017-5-1",
                "age": 55
            },
            {
                "id": 33,
                "firstName": "Johnston",
                "lastName": "Brown",
                "username": "123456",
                "email": "2017-5-1",
                "age": 29
            },
            {
                "id": 34,
                "firstName": "Lena",
                "lastName": "Pitts",
                "username": "123456",
                "email": "2017-5-1",
                "age": 25
            },
            {
                "id": 35,
                "firstName": "Terrie",
                "lastName": "Kennedy",
                "username": "123456",
                "email": "2017-5-1",
                "age": 37
            },
            {
                "id": 36,
                "firstName": "Louise",
                "lastName": "Aguirre",
                "username": "123456",
                "email": "2017-5-1",
                "age": 44
            },
            {
                "id": 37,
                "firstName": "David",
                "lastName": "Patton",
                "username": "123456",
                "email": "2017-5-1",
                "age": 26
            },
            {
                "id": 38,
                "firstName": "Holden",
                "lastName": "Barlow",
                "username": "123456",
                "email": "2017-5-1",
                "age": 11
            },
            {
                "id": 39,
                "firstName": "Baker",
                "lastName": "Rivera",
                "username": "123456",
                "email": "2017-5-1",
                "age": 47
            },
            {
                "id": 40,
                "firstName": "Belinda",
                "lastName": "Lloyd",
                "username": "123456",
                "email": "2017-5-1",
                "age": 21
            },
            {
                "id": 41,
                "firstName": "Pearson",
                "lastName": "Patrick",
                "username": "123456",
                "email": "2017-5-1",
                "age": 42
            },
            {
                "id": 42,
                "firstName": "Alyce",
                "lastName": "Mckee",
                "username": "123456",
                "email": "2017-5-1",
                "age": 55
            },
            {
                "id": 43,
                "firstName": "Valencia",
                "lastName": "Spence",
                "username": "123456",
                "email": "2017-5-1",
                "age": 20
            },
            {
                "id": 44,
                "firstName": "Leach",
                "lastName": "Holcomb",
                "username": "123456",
                "email": "2017-5-1",
                "age": 28
            },
            {
                "id": 45,
                "firstName": "Moss",
                "lastName": "Baxter",
                "username": "123456",
                "email": "2017-5-1",
                "age": 51
            },
            {
                "id": 46,
                "firstName": "Jeanne",
                "lastName": "Cooke",
                "username": "123456",
                "email": "2017-5-1",
                "age": 59
            },
            {
                "id": 47,
                "firstName": "Wilma",
                "lastName": "Briggs",
                "username": "123456",
                "email": "2017-5-1",
                "age": 53
            },
            {
                "id": 48,
                "firstName": "Beatrice",
                "lastName": "Perry",
                "username": "123456",
                "email": "2017-5-1",
                "age": 39
            },
            {
                "id": 49,
                "firstName": "Whitaker",
                "lastName": "Hyde",
                "username": "123456",
                "email": "2017-5-1",
                "age": 35
            },
            {
                "id": 50,
                "firstName": "Rebekah",
                "lastName": "Duran",
                "username": "123456",
                "email": "2017-5-1",
                "age": 40
            },
            {
                "id": 51,
                "firstName": "Earline",
                "lastName": "Mayer",
                "username": "123456",
                "email": "2017-5-1",
                "age": 52
            },
            {
                "id": 52,
                "firstName": "Moran",
                "lastName": "Baxter",
                "username": "123456",
                "email": "2017-5-1",
                "age": 20
            },
            {
                "id": 53,
                "firstName": "Nanette",
                "lastName": "Hubbard",
                "username": "123456",
                "email": "2017-5-1",
                "age": 55
            },
            {
                "id": 54,
                "firstName": "Dalton",
                "lastName": "Walker",
                "username": "123456",
                "email": "2017-5-1",
                "age": 25
            },
            {
                "id": 55,
                "firstName": "Bennett",
                "lastName": "Blake",
                "username": "123456",
                "email": "2017-5-1",
                "age": 13
            },
            {
                "id": 56,
                "firstName": "Kellie",
                "lastName": "Horton",
                "username": "123456",
                "email": "2017-5-1",
                "age": 48
            },
            {
                "id": 57,
                "firstName": "Hobbs",
                "lastName": "Talley",
                "username": "123456",
                "email": "2017-5-1",
                "age": 28
            },
            {
                "id": 58,
                "firstName": "Mcguire",
                "lastName": "Donaldson",
                "username": "123456",
                "email": "2017-5-1",
                "age": 38
            },
            {
                "id": 59,
                "firstName": "Rodriquez",
                "lastName": "Saunders",
                "username": "123456",
                "email": "2017-5-1",
                "age": 20
            },
            {
                "id": 60,
                "firstName": "Lou",
                "lastName": "Conner",
                "username": "123456",
                "email": "2017-5-1",
                "age": 16
            },
            {
                "id": 61,
                "firstName": "Kellie",
                "lastName": "Horton",
                "username": "123456",
                "email": "2017-5-1",
                "age": 48
            },
            {
                "id": 62,
                "firstName": "Hobbs",
                "lastName": "Talley",
                "username": "123456",
                "email": "2017-5-1",
                "age": 28
            },
            {
                "id": 63,
                "firstName": "Mcguire",
                "lastName": "Donaldson",
                "username": "123456",
                "email": "2017-5-1",
                "age": 38
            },
            {
                "id": 64,
                "firstName": "Rodriquez",
                "lastName": "Saunders",
                "username": "123456",
                "email": "2017-5-1",
                "age": 20
            },
            {
                "id": 65,
                "firstName": "Lou",
                "lastName": "Conner",
                "username": "123456",
                "email": "2017-5-1",
                "age": 16
            }
        ];







    };


})();