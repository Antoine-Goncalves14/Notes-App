const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Ajoutez un nouveau poste',
  builder: {
    title: {
      describe: 'Titre de l\'article',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Contenu de l\'article',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Supprimez un article',
  builder: {
    title: {
      describe: 'Titre de l\'article',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'Liste des articles',
  handler: function () {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Lire un article',
  builder: {
    title: {
      describe: 'Titre de l\'article',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
