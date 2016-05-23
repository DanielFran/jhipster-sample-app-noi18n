(function() {
    'use strict';

    angular
        .module('jhipsterNoI18NSampleApplicationApp')
        .controller('LabelController', LabelController);

    LabelController.$inject = ['$scope', '$state', 'Label'];

    function LabelController ($scope, $state, Label) {
        var vm = this;
        vm.labels = [];
        vm.loadAll = function() {
            Label.query(function(result) {
                vm.labels = result;
            });
        };

        vm.loadAll();
        
    }
})();
