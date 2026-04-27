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

// (55 такая же запись)
isCompleted = false
if ((isCompleted === true)) {
  console.log("Задача выполнена")
} else {
  console.log("Задача ещё в работе")
}



// Урок: функции JS

function sum(a, b) {
  return `сумма: ${a + b}`;
}
console.log(sum(235, 47));

// function isTaskDone(status) {
//   if (status === "Выполнена") {
//   return true
// } else {
//   return false
// }
// }

// короткая запись
function isTaskDone(status) {
  return status === "Выполнена";
}
console.log(isTaskDone("В процессе"));
console.log(isTaskDone("Выполнена"));


function taskSummary(total, done) {
  return `Всего: ${total}| Выполнено: ${done}| Активных: ${total - done}`;
}

console.log(taskSummary(13, 5));

// Урок: Массивы данных

const cities = ["Moscow", "Kazan", "Tomsk", "Magadan"];
cities[cities.length - 1] = "Izhevsk";
console.log(cities);

let task = {
  id: "first",
  title: "научиться считать",
  status: "active",
};
console.log(task);

const zadachi = [
  { id: 1,
    title: "научиться считать",
    status: "выполнена",
  },
  { id: 2,
    title: "научиться писать",
    status: "в процессе",
  },
  { id: 3,
    title: "научиться учиться",
    status: "в процессе"
  },
];
console.log(zadachi[0].title);
console.log(zadachi[1].status);

const user = [
  { username: 'Денис'},
  [
  { id: 1,
    title: "научиться считать",
    status: "выполнена",
  },
  { id: 2,
    title: "научиться писать",
    status: "в процессе",
  },
  { id: 3,
    title: "научиться учиться",
    status: "в процессе"
  },
]
]
console.log(user[0].username)
console.log(user[1].length)
