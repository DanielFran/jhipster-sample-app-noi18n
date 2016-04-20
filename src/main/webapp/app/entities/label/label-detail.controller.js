(function() {
    'use strict';

    angular
        .module('sampleNo18NApp')
        .controller('LabelDetailController', LabelDetailController);

    LabelDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Label', 'Operation'];

    function LabelDetailController($scope, $rootScope, $stateParams, entity, Label, Operation) {
        var vm = this;
        vm.label = entity;
        
        var unsubscribe = $rootScope.$on('sampleNo18NApp:labelUpdate', function(event, result) {
            vm.label = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
