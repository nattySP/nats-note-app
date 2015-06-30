angular
  .module('notes.notepad')
  .controller('NotepadCtrl', NotepadCtrl);

  NotepadCtrl.$inject = ['NotepadService'];


  function NotepadCtrl(NotepadService) {
    vm = this; 
    vm.notes = NotepadService.notes;
    vm.title = 'test title';
  }