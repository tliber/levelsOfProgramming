angular.module('levelsApp', [
    'ui.router',
    'levels.controller'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/');
    console.log('here')
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/levelsView.html',
        controller: 'levelsController'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
  }])