console.log("hello js");

let numb1 = 1;
let numb2 = 10;

a = 3;
b = 4;
console.log(a + b);
console.log(a - b);

// Урок: операторы и условия

title = "";
if ((title = "")) {
  console.log("Название задачи не указано");
} else {
  console.log("Задача:");
}

tasks = 0;
if ((tasks = 0)) {
  console.log("Список пуст");
} else if (tasks > 0 && tasks <= 3) {
  console.log("Немного задач");
} else {
  console.log("Много задач");
}
