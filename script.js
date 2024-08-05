//! Home Work

//! Tasks 1

// const computers = [
//   {
//     title: "Macbook Air M1",
//     price: 85000,
//   },
//   {
//     title: "Dell",
//     price: 65000,
//   },
//   {
//     title: "Asus Zenbook",
//     price: 40000,
//   },
//   {
//     title: "Acer Aspire",
//     price: 45000,
//   },
//   {
//     title: "Macbook Pro",
//     price: 100000,
//   },
// ];
// let ascending = [...computers].sort((a, b) => a.price - b.price);
// let descending = [...computers].sort((a, b) => b.price - a.price);
// console.log(descending);

//! Tasks 2

// const grades = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];

// let result = grades.sort((a, b) => a - b);
// let res = grades.sort((a, b) => b - a);
// console.log(result);

//! Tasks 3

// const fruits = ["strawbery", "mango", "watermelon", "grapes", "lemon", "kiwi"];

// const banan = fruits.sort((a, b) => a.length - b.length);
// const ananas = fruits.sort((a, b) => b.length - a.length);

// console.log(banan);

//! Tasks 4

// const numbers = [4, 123, -5, 6, 100];

// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

//! Tasks 5
//! Date

// const date = new Date();
// const day = date.getDate();
// const month = date.getMonth();
// const year = date.getFullYear();
// if (day < 10) {
//   const den = "0" + day + "." + month + "." + year;
//   console.log(den);
// } else if (month < 10) {
//   const den1 = day + "." + "0" + month + "." + year;
//   console.log(den1);
// } else if (day < 10 && month < 10) {
//   const den2 = "0" + day + "." + "0" + month + "." + year;
//   console.log(den2);
// } else {
//   const den3 = day + "." + month + "." + year;
//   console.log(den3);
// }

//! Tasks 5
//! Time

// const date = new Date();
// const hours = date.getHours();
// const minute = date.getMinutes();
// const seconds = date.getSeconds();
// if (hours < 10) {
//   const time = "0" + hours + ":" + minute + ":" + seconds;
//   console.log(time);
// } else if (minute < 10) {
//   const time1 = hours + ":" + "0" + minute + ":" + seconds;
//   console.log(time1);
// } else if (seconds < 10) {
//   const time2 = hours + ":" + minute + ":" + "0" + seconds;
//   console.log(time2);
// } else if (hours < 10 && minute < 10) {
//   const time3 = "0" + hours + ":" + "0" + minute + ":" + seconds;
//   console.log(time3);
// } else if (hours < 10 && minute < 10 && seconds < 10) {
//   const time4 = "0" + hours + ":" + "0" + minute + ":" + "0" + seconds;
//   console.log(time4);
// } else {
//   const time5 = hours + ":" + minute + ":" + seconds;
//   console.log(time5);
// }

//! Tasks 6

// const instagramUser = {
//   userName: "Uzumaki123",
//   email: "user@mail.com",
//   password: "123123",
//   avatarUrl: "https//www.google.com/search?q=cat",
//   followers: "1m",
//   follwing: 512,
//   title: "Never Give up",
// };

// for (const kye in instagramUser) {
//   console.log(kye);
// }

// for (const value in instagramUser) {
//   console.log(instagramUser[value]);
// }

//! Tasks 7

// const computers = [
//   {
//     title: "Macbook Air M1",
//     price: 85000,
//   },
//   {
//     title: "Dell",
//     price: 65000,
//   },
//   {
//     title: "Asus Zenbook",
//     price: 40000,
//   },
//   {
//     title: "Acer Aspire",
//     price: 45000,
//   },
//   {
//     title: "Macbook Pro",
//     price: 100000,
//   },
// ];
// let sum = 0;
// for (const object of computers) {
//   sum += object.price;
// }
// console.log(sum);

//! Tasks 8

// const instagramUser = {
//   userName: "Uzumaki123",
//   email: "user@mail.com",
//   password: "123123",
//   avatarUrl: "https//www.google.com/search?q=cat",
//   followers: "1m",
//   follwing: 512,
//   title: "Never Give up",
// };


// const objectLength = Object.keys(instagramUser);
// for (let i = 0; i < objectLength.length; i++) {
//   console.log(objectLength[i]);
// }


// const values = Object.keys(instagramUser);
// let index = 0;
// while (index < values.length) {
//   const element = instagramUser[values[index]];
//   console.log(element);
//   index++;
// }


// for (const [key, values] of Object.entries(instagramUser)) {
//   const item = key + ": " + values;
//   console.log(item);
// }
