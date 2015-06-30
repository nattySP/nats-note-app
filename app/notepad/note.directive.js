angular
  .module('notes.notepad')
  .directive('note', note);

  function note() {
    return {
      restrict: 'E', 
      scope: {
        title: '@'
      }, 
      templateUrl: 'notepad/note.template.html',
      link: function (scope, element, attrs) {
      }, 
      controller: 'NoteCtrl', 
      controllerAs: 'vm', 
      bindToController: true
    }
  }