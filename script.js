//! задача-1, Declaration function

// function numbers(x, y) {
//     for (let index = x; index <= y; index++) {
//       console.log(index);
//     }
//   }
//   numbers(1,30);

//! задача-1, arrow function

// const  logToConsole = (a, b) => {
//   for (let index = a; index <= b; index++) {
//     console.log(index);
//   }
// };
//  logToConsole(7, 79);

//! задача-1, expression function

// const logToConsole = function (j, k) {
//   for (let index = j; index <= k; index++) {
//     console.log(index);
//   }
// };
// logToConsole(1,90);

//! задача-2, Declaration function

// function showEvenNumbers2(number, number2) {
//   for (let n = number; n < number2; n++)
//     if (n % 2 === 0)
//         console.log(n);
// }

// showEvenNumbers2(1,100);

//! задача-2, arrow function

// const arrow2 = (num1, num2) => {
//   for (let h = num1; h < num2; h++)
//     if (h % 2 === 0)
//     console.log(h);
// };
// arrow2(1, 100);

//! задача-2, expression function

// const expressN = function(numbers1, numbers2){
//    for(let s = numbers1; s < numbers2; s++)
//           if (s %2 === 0 )
//           console.log(s);
// }
// expressN(5,77)

//! задача-3, Declaration function

// function sum(san, san2) {
//   let res = 0;

//   for (let a = san; a < san2; a++) {
//     if (a % 2 === 0) {
//       res = res + a;
//     }
//   }
//   return res;
// }
// const result1 = sum(1,100);
// console.log(result1);

//! задача-3, expression function

//     const expressionS = function (san, san2) {
//       let res = 0;
//       for (let a = san; a < san2; a++) {
//         if (a % 2 === 0) {
//           res = res + a;
//         }
//       }
//       return res;
//     };
//     const result2 = expressionS(23, 80);
//     console.log(result2);

//! задача-3, arrow function

//     const arrowF = (san1, san2) => {
//       let res = 0;
//       for (let a = san1; a < san2; a++) {
//         if (a % 2 === 0) {
//           res = res + a;
//         }
//       }
//       return res;
//     };
//     const result3 = arrowF(5,43);
//     console.log(result3);









//!задача-5, Declaration function

// function users(text) {
//   let juk = text.length;
//   while (juk >= 0) {
//     console.log(text.charAt(juk));
//     juk--;
//   }
// }
// users("Hello");
// users("Kak ona");

//!задача-5, expression function

// const expressionFun = function (word) {
//   let koin = word.length;
//   while (koin >= 0) {
//     console.log(word.charAt(coun));
//     koin--;
//   }
// };
// expressionFun("Жанарбек");

//!задача-5, arrow function

// const arrowFun5 = (dodj) => {
//   let contr = dodj.length;
//   while (contr >= 0) {
//     console.log(dodj.charAt(coun));
//     contr--;
//   }
// };
// arrowFun5("Нормально элеби");
