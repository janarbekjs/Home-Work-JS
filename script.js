//!ДОМ,РОБОТА..!

//! Задание 1.

// const student1 = {
//   name: "Alfinur",
//   age: 3,
//   lang: "KG",
// };
// const student2 = Object.assign({}, student1);
// student2.school = 87;
// delete student2.age;
// console.log(student1);
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

//! Задание 3.
//! Варянт 2.

// const array = [
//   1,
//   true,
//   3,
//   { name: "ZH", hobbies: ["swimming", "reading"] },
//   5,
//   "Hello",
//   "Hi",
// ];
// console.log(array[1]);
// console.log(array[4]);

//! Задание 3.
//! Все Варянты.

// const array = [
//   1,
//   true,
//   3,
//   { name: "ZH", hobbies: ["swimming", "reading"] },
//   5,
//   "Hello",
//   "Hi",
// ];
// let newArray = array.lastIndexOf("Hello");
// console.log(newArray);

// array.sort();
// console.log(array);

// console.log(array.at(5));

// console.log(array[3].hobbies);

// array[3].hobbies.push("footboll");
// console.log(array);

// array.push("Moscow");
// console.log(array);

// array.pop("Moscow");
// console.log(array);

// array.unshift("poco", 56);
// console.log(array);

// array.shift();
// console.log(array);

// console.log(array.includes(3, 2));

// console.log(array.slice(0, 3));
// array.splice(2, 2, "Janarbek");
// console.log(array);

// console.log(array.splice(2, 5));

// console.log(array.length);

// //! Задание 4.

// const array = [1, 2, 3, "sdf", {}, 3, true, 2, [1, 6, 3], 1];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   if (typeof array[i] === "number") {
//     sum = sum + array[i];
//   } else if (typeof array[i] === "object") {
//     for (let k = 0; k < array[i].length; k++) {
//       if (typeof array[i][k] == "number") {
//         sum = sum + array[i][k];
//       }
//     }
//   }
// }
// console.log(sum);
