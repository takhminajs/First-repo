//!Деструктуризация массивов
// let list = ["Milk", "Sugar", "Salt", "Butter", "Bread"];
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);
// console.log(list[3]);
// console.log(list[4]);
// console.log(list);

// let [first, second, ...other] = list;
// console.log(first, second, other);
// console.log(first);
// console.log(second);
// console.log(other);

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
// ];

// let [[a, b, c, d], newArr] = arr;
// let [newArr, [one, two, three, four]] = arr;
// console.log(newArr, one, two, three, four);
// console.log(one);

//!Деструктуризация обьектов

// let person = {
//   age: 30,
//   name: "John",
//   lastName: "Snow",
// };
//без деструктуризации
// let name = person.name;
// let age = person.age;
// let lastName = person.lastName;
// console.log(name, age, lastName);

// let { age, name, lastName } = person;
// console.log(age, name, lastName);
// console.log(lastName);
// console.log(name);
// console.log(age);

//!деструктуризация вложенного обьекта
// let obj1 = {
//   subObj: {
//     name: "Jack",
//   },
// };

// let {
//   subObj: { name },
// } = obj1;
// console.log(name);

//!обьект внутри масссива или наоборот

// let obj = { arr: [{ name: "Makers" }] };
// let {
//   arr: [{ name }],
// } = obj;
// console.log(name);

//!деструктуризация функции
// function foo({ lastName }) {
//   console.log(lastName);
// }
// let person = {
//   name: "Makers",
//   lastName: "Bootcamp",
//   age: 2,
// };
// foo(person);

// let arr = [1, 2, 3, 4, 5];
// let [, , , four, five] = arr;
// console.log(four);
// console.log(five);

// spead operator
// function foo(a) {
//   console.log(a);
// }
// let arr = [1, 2, 3, 4, 5];
// foo(...arr);

// let a = {
//   age: 20,
// };
// let b = {
//   age: 20,
// };
// let b = { ...a };
// b.age = 30;
// console.log(a, b);
// console.log(a === b);

// example

// let obj1 = {
//   name: "Kani",
//   color: "yellow",
// };
// let obj2 = {
//   lastName: "East",
// };

// let { color } = obj1;
// let newObj = { color, ...obj2 };
// console.log(newObj);

//!деструктуризация обширных обьектов
// let obj = {
//   name: "Kani",
//   age: 22,
//   positions: ["Mentor", "Backen-developer", "Fronted-developer", "Blogger"],
//   dog: {
//     name: "Oreo",
//     age: 2,
//   },
// };

// let {
//   name,
//   age,
//   positions: [firstPosition, secondPosition, ...otherPositions],
//   dog: { name: dogName, age: dogAge },
// } = obj;

// console.log(
//   name,
//   age,
//   firstPosition,
//   secondPosition,
//   otherPositions,
//   dogName,
//   dogAge
// );

//пример с функцией

// let obj = {
//   name: "Kani",
//   age: 22,
//   positions: ["Mentor", "Backen-developer", "Fronted-developer", "Blogger"],
//   dog: {
//     name: "Oreo",
//     age: 2,
//   },
// };

// function sayHello({ name, age, dog: { name: dogName } }) {
//   console.log(`
//       Hello, my name is ${name}
//       I am ${age} y.o
//       I have a dog ${dogName}
//       `);
// }
// sayHello(obj);

//!задачи 1

// let task1 = [
//   "первый",
//   "второй",
//   "третий",
//   "четвертый",
//   "пятый",
//   "шестой",
//   "седьмой",
// ];

// let [elem1, elem2, elem3, ...arr] = task1;
// console.log(elem1, elem2, elem3);
// console.log(arr);

// let task2 = {
//   name: "Петр",
//   surname: "Петров",
//   age: "20 лет",
// };

// let { name, surname, age } = task2;
// console.log(name, surname, age);

// let task3 = [
//   "первый",
//   "второй",
//   "третий",
//   "четвертый",
//   "пятый",
//   "шестой",
//   "седьмой",
// ];

// let [, , , , , elem2, elem1] = task3;
// console.log(elem1, elem2);

//!Task-1
//version1
// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// let [firstName, , , titul] = arr;
// console.log(firstName, titul);
//version2

// function checkTask([firstName, , , titul]) {
//   console.log(firstName, titul);
// }

// checkTask(["Julius", "Caesar", "Consul", "of the Roman Republic"]);
