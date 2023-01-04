const {
  addNoteHandler,
  getAllNotesHandler,
  getNotebyIdHandler,
  editNotebyIdHandler,
  deleteNoteHandler,
} = require('./handler');

const routes = [
  {
    path: '/notes',
    method: 'POST',
    handler: addNoteHandler,
  },
  {
    path: '/notes',
    method: 'GET',
    handler: getAllNotesHandler,
  },
  {
    path: '/notes/{id}',
    method: 'GET',
    handler: getNotebyIdHandler,
  },
  {
    path: '/notes/{id}',
    method: 'PUT',
    handler: editNotebyIdHandler,
  },
  {
    path: '/notes/{id}',
    method: 'DELETE',
    handler: deleteNoteHandler,
  },
];

module.exports = routes;
