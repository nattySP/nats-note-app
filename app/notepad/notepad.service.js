angular
  .module('notes.notepad')
  .factory('NotepadService', NotepadService); 

  NotepadService.$inject = [];

  function NotepadService() {
    var services = {}; 

    services.notes = [{title: 'first note'}, {title: 'second note'}, {title: 'third note'}]; 

    return services; 
  }