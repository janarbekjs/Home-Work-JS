// Варянт 1

// let index = 0;

// while (index <= 100) {
//   console.log(index);
//   index++;
// }

// Варянт 2

// for (let index = 0; index <= 100; index++) {
//   console.log(index);
// }

// Варянт 3

// let counter = 0;

// while (counter <= 100) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
//   counter++;
// }

// Варянт 4

// let counter = 0;
// let rezult = 0;

// while (counter <= 100) {
//   rezult = rezult + counter;
//   counter++;
//   console.log(rezult);
// }

// Варянт 5

// let counter = 1;
// let rezult = 1;

// while (counter <= 100) {
//   rezult = rezult + counter;
//   counter++;
//   console.log(rezult);
// }

// Варянт текст

// let userName = "Naruto Shipuden";

// for (let i = userName.length - 1; i >= 0; i--) {
//   const char = userName.charAt(i);
//   if (char === "u") {
//     console.log(`${char}`);
//   }
// }

// Варянт текст 1

// let userName = "Naruto Shipuden";

// for (let i = 0; i < userName.length; i++) {
//   const char = userName.charAt(i);
//   if (char === "u") {
//     console.log(`${char}`);
//   }
// }

// Варянт текст 2

// let text = "Naruto Shipuden";
// let counter = 0;

// while (counter < text.length) {
//   console.log(text.charAt(counter));
//   counter++;
// }

// Варянт текст 3

// let text = "Naruto Shipuden";
// let counter = text.length;

// while (0 <= counter) {
//   console.log(text.charAt(counter));
//   counter--;
// }

// Варянт текст 4

// let reversedStrFor = "";
// let string = "Hello";

// for (let index = string.length - 1; index >= 0; index--) {
//   reversedStrFor += string[index];
// }
// console.log(reversedStrFor);

// Варянт звездочки

// let zvezda = "";
// for (let proba = 0; proba < 6; proba++) {
//   for (let expo = 0; expo < 10; expo++) {
//     zvezda = zvezda + "*";
//   }
//   zvezda = zvezda + "\n";
// }
// console.log(zvezda);

// Варянт звездочки 1

// let zvezdy = "";

// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= i; j++) {
//     zvezdy = zvezdy + "*";
//   }
//   zvezdy = zvezdy + "\n";
// }
// console.log(zvezdy);

// Варянт звездочки 2

// let resh = 10;
// let nadoPro = 6;

// for (let alfa = 0; alfa < nadoPro; alfa++) {
//   if (alfa === 0 || alfa === nadoPro - 1) {
//     console.log("*".repeat(resh));
//   } else {
//     console.log("*" + "-".repeat(resh - 2) + "*");
//   }
//   nadoPro = nadoPro + "\n";
// }
