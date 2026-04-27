//
let a = 69;
let b = 777;
console.log(a + b, b - a, b / a, a * b);

//
let title = "раскрошить хлеб";
if (task === "") {
  console.log("Задача не указана");
} else {
  console.log("Задача:", title);
}

//
let tasks = 2;
if (tasks === 0) {
  console.log("Задач нет");
} else if (tasks > 0 && tasks < 3) {
  console.log("Немного задача");
} else {
  console.log("Много задач");
}

//
function sum(a, b) {
  return `сумма: ${a + b}`;
}
console.log(sum(228, 77));

//
let isCompleted = false;
if (isCompleted === true) {
  console.log("Задача выполнена");
} else {
  console.log("Задача ещё в работе");
}

// 
let urgent = false
if (tasks > 0 && urgent) {
    console.log("Есть срочные задачи")
} else if (tasks > 0) {
    console.log("Задачи есть, но они не срочные")
} else {
    console.log("Все задачи завершены")
}

// 
isAdmin = false
isModerator = true
if (isAdmin || isModerator) {
    console.log("Доступ разрешён")
} else {
    console.log("Доступ запрещён")
}

// задача со скидками

// let amount = 4500
// if (amount === 0) {
//     console.log("Корзина пуста")
// } else if (amount < 1000) {
//     console.log("Скидка не применяется")
// } else if (amount < 5000) {
//     console.log("Скидка 5%")
// } else {
//     console.log("Скидка 10%")
// }

// с добавлением подсчета скидки
let amount = 2280
function calculateAmount(amount) {
    if (amount === 0) {
        return "Корзина пуста"
    } else if (amount < 1000) {
        return `Скидка не применяется, итого: ${amount}`
    } else if (amount < 5000) {
        return `Скидка 5%, итого: ${amount - amount * 5 / 100}руб.`
    } else {
        return `Скидка 10%, итого: ${amount - amount * 10 / 100}руб.`
    }
} console.log(calculateAmount(amount))


