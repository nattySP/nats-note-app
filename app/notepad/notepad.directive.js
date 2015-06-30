angular
  .module('notes.notepad')
  .directive('notepad', notepad);

  function notepad() {
    return {
      restrict: 'E', 
      scope: {}, 
      templateUrl: 'notepad/notepad.template.html',
      link: function (scope, element, attrs) {

      }, 
      controller: 'NotepadCtrl', 
      controllerAs: 'vm', 
      bindToController: true
    }
  }