// data.js

class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  // Menambah tugas baru
  addTask(text, deadline, priority) {
    const newTask = {
      id: Date.now(),
      text,
      deadline,
      priority,
      completed: false,
    };
    this.tasks.push(newTask);
    this.saveTasks();
    return newTask;
  }

  // Mengambil semua tugas
  getAllTasks() {
    return this.tasks;
  }

  // Mengedit tugas
  editTask(id, newText, newDeadline, newPriority) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.text = newText;
      task.deadline = newDeadline;
      task.priority = newPriority;
      this.saveTasks();
    }
  }

  // Menghapus tugas
  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  // Menandai tugas sebagai selesai atau membatalkan penyelesaian
  toggleComplete(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
    }
  }

  // Menyimpan tugas ke localStorage
  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

class NoteManager {
  constructor() {
    this.notes = JSON.parse(localStorage.getItem("notes")) || [];
  }

  // Menambah catatan baru
  addNote(title, text) {
    const newNote = {
      id: Date.now(),
      title,
      text,
      createdAt: new Date(),
    };
    this.notes.push(newNote);
    this.saveNotes();
    return newNote;
  }

  // Mengambil semua catatan
  getAllNotes() {
    return this.notes;
  }

  // Mengedit catatan
  editNote(id, newTitle, newText) {
    const note = this.notes.find((note) => note.id === id);
    if (note) {
      note.title = newTitle;
      note.text = newText;
      this.saveNotes();
    }
  }

  // Menghapus catatan
  deleteNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.saveNotes();
  }

  // Menyimpan catatan ke localStorage
  saveNotes() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}

class ScheduleManager {
  constructor() {
    this.events = JSON.parse(localStorage.getItem("events")) || [];
  }

  // Menambah acara baru
  addEvent(title, dateTime) {
    const newEvent = {
      id: Date.now(),
      title,
      dateTime,
    };
    this.events.push(newEvent);
    this.saveEvents();
    return newEvent;
  }

  // Mengambil semua acara
  getAllEvents() {
    return this.events;
  }

  // Mengedit acara
  editEvent(id, newTitle, newDateTime) {
    const event = this.events.find((event) => event.id === id);
    if (event) {
      event.title = newTitle;
      event.dateTime = newDateTime;
      this.saveEvents();
    }
  }

  // Menghapus acara
  deleteEvent(id) {
    this.events = this.events.filter((event) => event.id !== id);
    this.saveEvents();
  }

  // Menyimpan acara ke localStorage
  saveEvents() {
    localStorage.setItem("events", JSON.stringify(this.events));
  }
}

export { TaskManager, NoteManager, ScheduleManager };
