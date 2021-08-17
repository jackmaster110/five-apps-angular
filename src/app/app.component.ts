import { Component } from '@angular/core';

type Note = {
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
      title: this.title,
      desc: this.body || ""
    }
    this.notes.push(note);
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}
