//!ДОМ,РОБОТА..!

//! Задание 1.

// const student1 = {
//   name: "Alfinur",
//   age: 3,
//   lang: "KG",
// };
// const student2 = Object.assign({}, student1);
// student2.school = 87;
// console.log(student2);
// delete student2.age;
// console.log(student2);

//! Задание 2.

//? Область видимостун 3 туру бар экен алар...
//? Global, 1-Глабальный область видимость,
//? Block, 2-Блочный область видимость,
//? Function-(Local), 3-Функциянал область видимость экен.
//? Глабальный область видимосто script.js-те болгон кодттордун баары жатат экен,(жалпак тил менен-(Балеенин баары))
//? Глабальный область видимостон (памяттан экиге болунуп сакталат экен!) алар...
//? 1) Stack-Стекте, Примитивный тип данныйлар ушул болумго тушот экен.
//? 2) Heap-Кучага, Не примитивный тип данный ушул болумго тушот экен. (Object).

//! Задание 3.
//! Варянт 1.
// const array = [
//   1,
//   true,
//   3,
//   { name: "ZH", hobbies: ["swimming", "reading"] },
//   5,
//   "Hello",
//   "Hi",
// ];
// for (let rush in array) {
//   console.log(array[rush],`<= ${rush}`);
// }
// for (let rush in array) {
//   console.log(array[rush]);
// }
const array = [
  1,
  true,
  3,
  { name: "ZH", hobbies: ["swimming", "reading"] },
  5,
  "Hello",
  "Hi",
];

// //! Задание 4.

// const newArray = [1, 2, 3, "sdf", {}, 3, true, 2, [1, 6, 3], 1];
