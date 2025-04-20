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
    this.taskDeadline = document.getElementById("taskDeadline");
    this.taskPriority = document.getElementById("taskPriority");
    this.addTaskBtn = document.getElementById("addTaskBtn");
    this.taskList = document.getElementById("taskList");

    this.noteTitle = document.getElementById("noteTitle");
    this.noteInput = document.getElementById("noteInput");
    this.addNoteBtn = document.getElementById("addNoteBtn");
    this.notesList = document.getElementById("notesList");

    this.scheduleTitle = document.getElementById("scheduleTitle");
    this.scheduleTime = document.getElementById("scheduleTime");
    this.addScheduleBtn = document.getElementById("addScheduleBtn");
    this.scheduleList = document.getElementById("scheduleList");

    this.editingTaskId = null;
    this.editingNoteId = null;
    this.editingScheduleId = null;

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
    const deadline = this.taskDeadline.value;
    const priority = this.taskPriority.value;

    if (text) {
      const task = this.taskManager.addTask(text, deadline, priority);
      this.renderTaskItem(task);
      this.taskInput.value = "";
      this.taskDeadline.value = "";
      this.taskPriority.value = "low";
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
    if (task.completed) li.classList.add("completed");

    if (this.editingTaskId === task.id) {
      li.innerHTML = `
        <div class="task-editing">
          <input type="text" class="task-edit-input" value="${task.text}">
          <input type="date" class="task-edit-deadline" value="${
            task.deadline
          }">
          <select class="task-edit-priority">
            <option value="low" ${
              task.priority === "low" ? "selected" : ""
            }>Low</option>
            <option value="medium" ${
              task.priority === "medium" ? "selected" : ""
            }>Medium</option>
            <option value="high" ${
              task.priority === "high" ? "selected" : ""
            }>High</option>
          </select>
        </div>
        <div class="task-actions">
          <button class="save-btn">Save</button>
          <button class="cancel-btn">Cancel</button>
        </div>`;

      const saveBtn = li.querySelector(".save-btn");
      const cancelBtn = li.querySelector(".cancel-btn");
      const editInput = li.querySelector(".task-edit-input");
      const editDeadline = li.querySelector(".task-edit-deadline");
      const editPriority = li.querySelector(".task-edit-priority");

      setTimeout(() => editInput.focus(), 0);

      saveBtn.addEventListener("click", () => {
        const newText = editInput.value.trim();
        const newDeadline = editDeadline.value;
        const newPriority = editPriority.value;
        if (newText) {
          this.taskManager.editTask(task.id, newText, newDeadline, newPriority);
          this.editingTaskId = null;
          this.renderTasks();
        }
      });

      cancelBtn.addEventListener("click", () => {
        this.editingTaskId = null;
        this.renderTasks();
      });
    } else {
      li.innerHTML = `
        <div>
          <span class="task-text">${task.text}</span>
          <span class="task-meta">Deadline: ${formatDate(
            task.deadline
          )}, Priority: ${task.priority}</span>
        </div>
        <div class="task-actions">
          <button class="edit-btn">Edit</button>
          <button class="complete-btn">${
            task.completed ? "Undo" : "Complete"
          }</button>
          <button class="delete-btn">Delete</button>
        </div>`;

      li.querySelector(".edit-btn").addEventListener("click", () => {
        this.editingTaskId = task.id;
        this.renderTasks();
      });
      li.querySelector(".complete-btn").addEventListener("click", () => {
        this.taskManager.toggleComplete(task.id);
        this.renderTasks();
      });
      li.querySelector(".delete-btn").addEventListener("click", () => {
        this.taskManager.deleteTask(task.id);
        this.renderTasks();
      });
    }
    this.taskList.appendChild(li);
  }

  handleAddNote() {
    const title = this.noteTitle.value.trim();
    const text = this.noteInput.value.trim();
    if (title && text) {
      const note = this.noteManager.addNote(title, text);
      this.renderNoteItem(note);
      this.noteTitle.value = "";
      this.noteInput.value = "";
    } else {
      alert("Please enter both title and content for the note.");
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

    if (this.editingNoteId === note.id) {
      div.innerHTML = `
        <input type="text" class="note-edit-title" value="${note.title}">
        <textarea class="note-edit-text">${note.text}</textarea>
        <button class="save-note">Save</button>
        <button class="cancel-note">Cancel</button>`;

      div.querySelector(".save-note").addEventListener("click", () => {
        const newTitle = div.querySelector(".note-edit-title").value.trim();
        const newText = div.querySelector(".note-edit-text").value.trim();
        if (newTitle && newText) {
          this.noteManager.editNote(note.id, newTitle, newText);
          this.editingNoteId = null;
          this.renderNotes();
        }
      });

      div.querySelector(".cancel-note").addEventListener("click", () => {
        this.editingNoteId = null;
        this.renderNotes();
      });
    } else {
      div.innerHTML = `
        <button class="note-delete">×</button>
        <h4>${note.title}</h4>
        <p>${note.text.replace(/\n/g, "<br>")}</p>
        <small>${formatRelativeTime(note.createdAt)}</small>
        <div class="note-actions">
          <button class="note-edit">Edit</button>
        </div>`;

      div.querySelector(".note-delete").addEventListener("click", () => {
        this.noteManager.deleteNote(note.id);
        this.renderNotes();
      });

      div.querySelector(".note-edit").addEventListener("click", () => {
        this.editingNoteId = note.id;
        this.renderNotes();
      });
    }

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
    div.dataset.scheduleId = event.id;
    if (isPast(event.dateTime)) div.classList.add("past");
    else div.classList.add("upcoming");

    if (this.editingScheduleId === event.id) {
      div.innerHTML = `
        <input type="text" class="edit-title" value="${event.title}">
        <input type="datetime-local" class="edit-time" value="${event.dateTime}">
        <button class="save-event">Save</button>
        <button class="cancel-event">Cancel</button>`;

      div.querySelector(".save-event").addEventListener("click", () => {
        const newTitle = div.querySelector(".edit-title").value.trim();
        const newTime = div.querySelector(".edit-time").value;
        if (newTitle && newTime) {
          this.scheduleManager.editEvent(event.id, newTitle, newTime);
          this.editingScheduleId = null;
          this.renderSchedule();
        }
      });

      div.querySelector(".cancel-event").addEventListener("click", () => {
        this.editingScheduleId = null;
        this.renderSchedule();
      });
    } else {
      div.innerHTML = `
        <button class="schedule-delete">×</button>
        <div class="schedule-time">${formatDate(event.dateTime)}</div>
        <div class="schedule-title">${event.title}</div>
        <div class="schedule-relative">${formatRelativeTime(
          event.dateTime
        )}</div>
        <div class="schedule-actions">
          <button class="schedule-edit">Edit</button>
        </div>`;

      div.querySelector(".schedule-delete").addEventListener("click", () => {
        this.scheduleManager.deleteEvent(event.id);
        this.renderSchedule();
      });
      div.querySelector(".schedule-edit").addEventListener("click", () => {
        this.editingScheduleId = event.id;
        this.renderSchedule();
      });
    }
    this.scheduleList.appendChild(div);
  }
}

export default DashboardApp;
