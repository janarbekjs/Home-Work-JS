//! Img-1

// const numbers = [1, 2, 3, 4, 5];
// let res = numbers.map((element) => element ** 2);
// console.log(res);

//! Img-2

// const users = [
//   { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
//   { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
//   { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
// ];
// const userName = users.map((item) => {
//   return {
//     fullName: item.firstName + " " + item.lastName,
//     age:item.age,
//     gender:item.gender,
//   };
// });
// console.log(userName);

//! Img-3

// const numbers = [1,2,3,4,5,4,8,34,3,6];

// let res = numbers.filter((element) => {
//     return element %2 === 0;
//   });
//   console.log(res);

//! Img-4

// const users = [
//   { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
//   { firstName: "Ariana", lastName: "Grande", age: 18, gender: "female" },
//   { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
//   { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
// ];
// let res = users.filter((element) => element.age <= 18);
// console.log(res);

//! Img-5

// const numbers = [1,2,3,4,5,4,8,34,3,6];

// let result = numbers
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(result);

//! Img-6

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
// numbers.forEach((item) => {
//   if (item % 2 === 1) sum += item;
// });
// console.log(sum);

//! Img-7

// const users = [
//   { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
//   { firstName: "Ariana", lastName: "Grande", age: 18, gender: "female" },
//   { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
//   { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
// ];
// let result = users.find((element) => element.firstName === "Naruto");
// console.log(result);

//! Img-8

// const numbers = [1,2,3,4,5,4,8,34,3,6];

// let result = numbers.findIndex(item => item === 34);
// console.log(result);
