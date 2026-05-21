const form = document.querySelector(".todo__newtask");
const input = document.querySelector(".todo__input");
const add = document.querySelector(".todo__add");
const searchInput = document.querySelector(".todo__input-search")
const tabButtons = document.querySelectorAll(".todo__filter");
const tabsContainer = document.querySelector('.todo__filters')
const sortSelect = document.querySelector(".todo__sort")
const container = document.querySelector(".tasks");
const footer = document.querySelector(".footer-controls");
const counters = document.querySelector(".footer-controls__counters");
const clearButton = document.querySelector(".footer-controls__clear");

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks () {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});

function addTask() {
  const text = input.value.trim();
  if (text === "") {
    input.classList.add("input--error");
    return;
  }
  input.classList.remove("input--error");
  const newTask = {
    id: Date.now(),
    text,
    done: false,
    date: new Date().toLocaleString()
  };
  tasks.push(newTask);
  input.value = "";
  saveTasks()
  renderAll();
}

function updateCounters() {
  const total = tasks.length
  const active = tasks.filter(task => !task.done).length
  const done = tasks.filter(task => task.done).length
  clearButton.disabled = tasks.every(task => !task.done)
  counters.innerHTML = `
  <span>Всего: ${total}<span>
  <span>Активных: ${active}<span>
  <span>Выполненных: ${done}<span>
  `
}

clearButton.addEventListener("click", () => {
  tasks = tasks.filter(task => !task.done)
  saveTasks()
  renderAll()
})

function renderTask(task) {

    const item = document.createElement("div");
    item.classList.add("task");

    if (task.done) item.classList.add("task--done");

    item.addEventListener("click", (event) => {
      if (event.target.closest(".task__actions")) return;
      task.done = !task.done;
      saveTasks()
      renderAll();
    });

    const content = document.createElement("div");
    content.classList.add("task__content");
    item.append(content);

    const title = document.createElement("div");
    title.classList.add("task__title");
    title.textContent = task.text;

    const meta = document.createElement("div");
    meta.classList.add("task__meta");
    meta.textContent = task.date;

    content.append(title, meta);

    const actions = document.createElement("div");
    actions.classList.add("task__actions");
    item.append(actions);

    const editBtn = document.createElement("button");
    editBtn.classList.add("task__action");
    editBtn.addEventListener("click", () => {
      const newText = prompt("Изменить задачу:", task.text);
      if (newText && newText.trim() !== "") {
        task.text = newText.trim();
        saveTasks()
        renderAll();
      }
    });
    editBtn.innerHTML = `
    <svg
      class="task__icon"
      width="14px"
      height="14px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6f64a3"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("task__action");
    deleteBtn.addEventListener("click", () => {
      const index = tasks.indexOf(task);
      tasks.splice(index, 1);
      saveTasks()
      renderAll();
    });
    deleteBtn.innerHTML = `
    <svg
      class="task__icon"
      width="14px"
      height="14px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cb6e6e"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </svg>
  `;

    actions.append(editBtn, deleteBtn);

    return item;
}


let currentFilter = 'all'
// tabButtons.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     tabButtons.forEach(b => b.classList.remove('todo__filter--active'))
//     btn.classList.add('todo__filter--active')
//     if (btn.textContent.includes("Активные")) currentFilter = 'active'
//     else if (btn.textContent.includes("Заверш")) currentFilter = 'done'
//     else currentFilter = 'all'
//     renderAll()
//   })
// })
// обработчик события поизящнее
tabsContainer.addEventListener('click', (event) => {
  const btn = event.target.closest(".todo__filter")
  if (!btn) return
  tabButtons.forEach(b => b.classList.remove('todo__filter--active'))
  btn.classList.add('todo__filter--active')
  currentFilter = btn.dataset.filter
  renderAll()
})

searchInput.addEventListener('input', renderAll)

let sortOrder = 'new'
sortSelect.addEventListener('change', () => {
  sortOrder = sortSelect.value;
  renderAll()
}) 


function renderAll() {
  document.querySelectorAll(".task").forEach((t) => t.remove());

  let filtered = tasks.filter(task => {
    if (currentFilter === 'active') return !task.done
    if (currentFilter === 'done') return task.done
    return true 
  })

  const query = searchInput.value.trim().toLowerCase()
  if (query) {
    filtered = filtered.filter(task => task.text.toLowerCase().includes(query))
  }
  
  const sortedTasks = [...filtered].sort((a, b) => {
    if (sortOrder !== 'new') return a.id - b.id
    return b.id - a.id
  })
  sortedTasks.forEach(task => footer.before(renderTask(task)))
  updateCounters()
}
renderAll();
