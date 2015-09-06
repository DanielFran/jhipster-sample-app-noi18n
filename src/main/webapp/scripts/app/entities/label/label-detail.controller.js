'use strict';

angular.module('sampleno18nApp')
    .controller('LabelDetailController', function ($scope, $rootScope, $stateParams, entity, Label, Operation) {
        $scope.label = entity;
        $scope.load = function (id) {
            Label.get({id: id}, function(result) {
                $scope.label = result;
            });
        };
        $rootScope.$on('sampleno18nApp:labelUpdate', function(event, result) {
            $scope.label = result;
        });
    });