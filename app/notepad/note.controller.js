angular
  .module('notes.notepad')
  .controller('NoteCtrl', NoteCtrl);

  function NoteCtrl() {
    vm = this; 

    vm.title = 'test note title';
  }