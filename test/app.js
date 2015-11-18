(function() {
  'use strict';

  angular
    .module('app', [])
    .controller('PromiseStatusTestController', PromiseStatusTestController);

  PromiseStatusTestController.$inject = ['$timeout', '$q'];
  
  function PromiseStatusTestController($timeout, $q) {
    var vm = this;
    vm.resolveDeferredAction = resolveDeferredAction;
    vm.rejectDeferredAction = rejectDeferredAction;

    /////////

    function resolveDeferredAction() {
      var deferred = $q.defer();
      $timeout(function() {
        deferred.resolve();
      }, 1000);
      return deferred.promise;
    }

    function rejectDeferredAction() {
      var deferred = $q.defer();
      $timeout(function() {
        deferred.reject();
      }, 1000);
      return deferred.promise;
    }
  }
})();