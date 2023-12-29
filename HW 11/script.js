class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.creationDate = new Date().toLocaleString();
    this.editDate = null;
    this.completed = false;
  }

  editNote(newContent) {
    this.content = newContent;
    this.editDate = new Date().toLocaleString();
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  getNoteInfo() {
    return `
    Title: ${this.title}
    Content: ${this.content}
    Creation Date: ${this.creationDate}
    Last Edited: ${this.editDate ? this.editDate : 'Не відредаговано'}
    Status: ${this.completed ? 'Виконано' : 'Не виконано'}
    `;
  }
}

class NoteList {
  constructor() {
    this.notes = [];
  }

  addNote(note) {
    if (note instanceof Note && note.title !== '' && note.content !== '') {
      this.notes.push(note);
    }
  }

  deleteNoteByTitle(title) {
    this.notes = this.notes.filter(note => note.title !== title);
  }

  editNoteByTitle(title, newContent) {
    const note = this.notes.find(note => note.title === title);
    if (note) {
      note.editNote(newContent);
    }
  }

  toggleNoteByTitle(title) {
    const note = this.notes.find(note => note.title === title);
    if (note) {
      note.toggleCompleted();
    }
  }

  getAllNotes() {
    return this.notes;
  }

  getNumberOfNotes() {
    return this.notes.length;
  }

  getNumberOfCompletedNotes() {
    return this.notes.filter(note => note.completed).length;
  }
}

// Приклад використання:

const myNotes = new NoteList();

const note1 = new Note('Покупки', 'Молоко, Хліб, Сир, Йогурт');
const note2 = new Note('План роботи', 'Лендінг, Визитівка, Банер');

myNotes.addNote(note1);
myNotes.addNote(note2);

console.log(myNotes.getAllNotes());
console.log(myNotes.getNumberOfNotes());
console.log(myNotes.getNumberOfCompletedNotes());

myNotes.editNoteByTitle('Покупки', 'Молоко, Хліб, Сир, Йогурт');
myNotes.toggleNoteByTitle('План роботи');
console.log(myNotes.getAllNotes()[0].getNoteInfo());
console.log(myNotes.getAllNotes()[1].getNoteInfo());

myNotes.deleteNoteByTitle('План роботи');
console.log(myNotes.getAllNotes());