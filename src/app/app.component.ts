import { Component } from '@angular/core';
import { nanoid } from 'nanoid';

type Note = {
  id: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notes: Array<Note> = [];
  title!: string;
  body?: string;

  constructor() {
    const data = localStorage.getItem("notes");
    if (data) this.notes = JSON.parse(data);
  }

  submitForm() {
    let note: Note = {
      id: nanoid(),
      title: this.title,
      desc: this.body || ""
    }
    this.notes.push(note);
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  deleteNote(idToDelete: string) {
    this.notes = this.notes.filter((note) => {
      return note.id !== idToDelete;
    })
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}
