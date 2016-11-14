(function() {
    'use strict';

    angular
        .module('jhipsterNoI18NSampleApplicationApp')
        .controller('LabelController', LabelController);

    LabelController.$inject = ['$scope', '$state', 'Label'];

    function LabelController ($scope, $state, Label) {
        var vm = this;

        vm.labels = [];

        loadAll();

        function loadAll() {
            Label.query(function(result) {
                vm.labels = result;
            });
        }
    }
})();
