console.log("hello js");

let numb1 = 1;
let numb2 = 10;

a = 3;
b = 4;
console.log(a + b);
console.log(a - b);

// Урок: операторы и условия

title = "выбить собаке зубы";
if ((title === "")) {
  console.log("Название задачи не указано");
} else {
  console.log("Задача:", title);
}

tasks = 0;
if ((tasks === 0)) {
  console.log("Список пуст");
} else if (tasks > 0 && tasks <= 3) {
  console.log("Немного задач");
} else {
  console.log("Много задач");
}

// Урок: функции JS

function sum(a, b) {
  return `сумма: ${a + b}`
}
console.log(sum(235, 47))

// function isTaskDone(status) {
//   if (status === "Выполнена") {
//   return true
// } else {
//   return false
// }
// }

// короткая запись
function isTaskDone(status) {
  return status === "Выполнена"
}
console.log (isTaskDone("В процессе"))
console.log (isTaskDone("Выполнена"))

function taskSummary(total, done) {
  return `Всего: ${total}| Выполнено: ${done}| Активных: ${total - done}`
}

console.log(taskSummary(13, 5))
