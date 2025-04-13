import { TaskManager, NoteManager, ScheduleManager } from "./modules/data.js";
import {
  formatDate,
  formatTime,
  isPast,
  formatRelativeTime,
  updateDateTime,
} from "./modules/utils.js";

class DashboardApp {
  constructor() {
    this.taskManager = new TaskManager();
    this.noteManager = new NoteManager();
    this.scheduleManager = new ScheduleManager();

    this.taskInput = document.getElementById("taskInput");
    this.addTaskBtn = document.getElementById("addTaskBtn");
    this.taskList = document.getElementById("taskList");

    this.noteInput = document.getElementById("noteInput");
    this.addNoteBtn = document.getElementById("addNoteBtn");
    this.notesList = document.getElementById("notesList");

    this.scheduleTitle = document.getElementById("scheduleTitle");
    this.scheduleTime = document.getElementById("scheduleTime");
    this.addScheduleBtn = document.getElementById("addScheduleBtn");
    this.scheduleList = document.getElementById("scheduleList");

    this.editingTaskId = null;

    this.init();
  }

  init() {
    this.initEventListeners();

    this.renderTasks();
    this.renderNotes();
    this.renderSchedule();

    updateDateTime();
    setInterval(updateDateTime, 1000);
  }

  initEventListeners() {
    this.addTaskBtn.addEventListener("click", () => this.handleAddTask());
    this.taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleAddTask();
    });

    this.addNoteBtn.addEventListener("click", () => this.handleAddNote());

    this.addScheduleBtn.addEventListener("click", () => this.handleAddEvent());
  }

  handleAddTask() {
    const text = this.taskInput.value.trim();
    if (text) {
      const task = this.taskManager.addTask(text);
      this.renderTaskItem(task);
      this.taskInput.value = "";
    }
  }

  renderTasks() {
    this.taskList.innerHTML = "";
    const tasks = this.taskManager.getAllTasks();
    tasks.forEach((task) => this.renderTaskItem(task));
  }

  renderTaskItem(task) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.dataset.taskId = task.id;

    if (task.completed) {
      li.classList.add("completed");
    }

    if (this.editingTaskId === task.id) {
      li.innerHTML = `
                <div class="task-editing">
                    <input type="text" class="task-edit-input" value="${task.text}">
                </div>
                <div class="task-actions">
                    <button class="save-btn">Save</button>
                    <button class="cancel-btn">Cancel</button>
                </div>
            `;

      const saveBtn = li.querySelector(".save-btn");
      const cancelBtn = li.querySelector(".cancel-btn");
      const editInput = li.querySelector(".task-edit-input");

      setTimeout(() => editInput.focus(), 0);

      saveBtn.addEventListener("click", () => {
        const newText = editInput.value.trim();
        if (newText) {
          this.taskManager.editTask(task.id, newText);
          this.editingTaskId = null;
          this.renderTasks();
        }
      });

      cancelBtn.addEventListener("click", () => {
        this.editingTaskId = null;
        this.renderTasks();
      });

      editInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          const newText = editInput.value.trim();
          if (newText) {
            this.taskManager.editTask(task.id, newText);
            this.editingTaskId = null;
            this.renderTasks();
          }
        }
      });
    } else {
      li.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="edit-btn">Edit</button>
                    <button class="complete-btn">${
                      task.completed ? "Undo" : "Complete"
                    }</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

      const editBtn = li.querySelector(".edit-btn");
      const completeBtn = li.querySelector(".complete-btn");
      const deleteBtn = li.querySelector(".delete-btn");

      editBtn.addEventListener("click", () => {
        this.editingTaskId = task.id;
        this.renderTasks();
      });

      completeBtn.addEventListener("click", () => {
        this.taskManager.toggleComplete(task.id);
        this.renderTasks();
      });

      deleteBtn.addEventListener("click", () => {
        this.taskManager.deleteTask(task.id);
        this.renderTasks();
      });
    }

    this.taskList.appendChild(li);
  }

  handleAddNote() {
    const text = this.noteInput.value.trim();
    if (text) {
      const note = this.noteManager.addNote(text);
      this.renderNoteItem(note);
      this.noteInput.value = "";
    }
  }

  renderNotes() {
    this.notesList.innerHTML = "";
    const notes = this.noteManager.getAllNotes();
    notes.forEach((note) => this.renderNoteItem(note));
  }

  renderNoteItem(note) {
    const div = document.createElement("div");
    div.className = "note-card";

    div.innerHTML = `
            <button class="note-delete">×</button>
            <p>${note.text.replace(/\n/g, "<br>")}</p>
            <small>${formatRelativeTime(note.createdAt)}</small>
        `;

    const deleteBtn = div.querySelector(".note-delete");
    deleteBtn.addEventListener("click", () => {
      this.noteManager.deleteNote(note.id);
      this.renderNotes();
    });

    this.notesList.appendChild(div);
  }

  handleAddEvent() {
    const title = this.scheduleTitle.value.trim();
    const dateTime = this.scheduleTime.value;

    if (title && dateTime) {
      const event = this.scheduleManager.addEvent(title, dateTime);
      this.renderScheduleItem(event);
      this.scheduleTitle.value = "";
      this.scheduleTime.value = "";
    }
  }

  renderSchedule() {
    this.scheduleList.innerHTML = "";
    const events = this.scheduleManager.getAllEvents();
    events.forEach((event) => this.renderScheduleItem(event));
  }

  renderScheduleItem(event) {
    const div = document.createElement("div");
    div.className = "schedule-item";

    if (isPast(event.dateTime)) {
      div.classList.add("past");
    } else {
      div.classList.add("upcoming");
    }

    div.innerHTML = `
            <button class="schedule-delete">×</button>
            <div class="schedule-time">${formatDate(event.dateTime)}</div>
            <div class="schedule-title">${event.title}</div>
            <div class="schedule-relative">${formatRelativeTime(
              event.dateTime
            )}</div>
        `;

    const deleteBtn = div.querySelector(".schedule-delete");
    deleteBtn.addEventListener("click", () => {
      this.scheduleManager.deleteEvent(event.id);
      this.renderSchedule();
    });

    this.scheduleList.appendChild(div);
  }
}

export default DashboardApp;
