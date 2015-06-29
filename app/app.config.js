angular
  .module('notes.app')
  .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider']; 

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/notepad");
          
    $stateProvider
      .state('notepad', {
          url: "/notepad",
          templateUrl: "note.route.html"
      })
  }