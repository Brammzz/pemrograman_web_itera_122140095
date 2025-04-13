export class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  addTask(text) {
    const task = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    this.tasks.push(task);
    this._saveTask();
    return task;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this._saveTask();
  }

  toggleComplete(id) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    this._saveTask();
  }

  editTask(id, newText) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, text: newText };
      }
      return task;
    });
    this._saveTask();
    return this.tasks.find((task) => task.id === id);
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  getAllTasks() {
    return this.tasks;
  }

  _saveTask() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

export class NoteManager {
  constructor() {
    this.notes = JSON.parse(localStorage.getItem("notes")) || [];
  }

  addNote(text) {
    const note = {
      id: Date.now().toString(),
      text,
      createdAt: new Date().toISOString(),
    };

    this.notes.push(note);
    this._saveNotes();
    return note;
  }

  deleteNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
    this._saveNotes();
  }

  getAllNotes() {
    return this.notes;
  }

  _saveNotes() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}

export class ScheduleManager {
  constructor() {
    this.events = JSON.parse(localStorage.getItem("events")) || [];
  }

  addEvent(title, dateTime) {
    const event = {
      id: Date.now().toString(),
      title,
      dateTime,
      createdAt: new Date().toISOString(),
    };

    this.events.push(event);
    this._saveEvents();
    return event;
  }

  deleteEvent(id) {
    this.events = this.events.filter((event) => event.id !== id);
    this._saveEvents();
  }

  getAllEvents() {
    return this.events.sort(
      (a, b) => new Date(a.dateTime) - new Date(b.dateTime)
    );
  }

  _saveEvents() {
    localStorage.setItem("events", JSON.stringify(this.events));
  }
}
