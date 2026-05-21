const form = document.querySelector(".todo__newtask");
const input = document.querySelector(".todo__input");
const container = document.querySelector(".tasks");

const tasks = [];

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
    text: text,
    done: false,
    date: "18.05.2026",
  };
  tasks.push(newTask);
  input.value = "";
  renderTask();
}

function renderTask() {
  container.innerHTML = ""

  tasks.forEach((task) => {

    const item = document.createElement("div");
    item.classList.add("task");

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
        renderTask();
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
      renderTask();
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

    container.append(item);
  });
}



const now = new Date
const hourNow = new Date().getHours()
function partOfTheDay() {
  if (hourNow < 4) return 'Ночь'
  if (hourNow < 12) return 'Утро'
  if (hourNow < 18) return 'День'
  return 'Вечер'
}
console.log(hourNow)
console.log(partOfTheDay())
