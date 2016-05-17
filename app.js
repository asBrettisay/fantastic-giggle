angular.module('angularTesting', [])
.config(
  [
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('/', {
        url: '/',
        template: '<Home></Home>'
      })
}])
