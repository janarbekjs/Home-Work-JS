//! Task 1
// const zagolovok = document.getElementById("zagolovok");
// setInterval(() => {
//   zagolovok.textContent = "Ураа";
//   console.log(setInterval);
// }, 5000);

//! Task 2
// const conteiner = document.getElementById("conteiner");
// let count = ["red", "blue", "black", "green", "aqua", "chocolate"];
// let result = 0;
// function inter() {
//   conteiner.style.backgroundColor = count[result];
//   result++;
//   if (result > backgroundColor.length - 1) {
//     result = 0;
//   }
// }
// setInterval(inter, 1000);

//! Task 3
// const minutes = document.getElementById("minutes");
// const seconds = document.getElementById("seconds");
// const timeStart = document.getElementById("time-start");
// const timeRestart = document.getElementById("time-restart");
// const time = document.getElementById("time");

// let interval;
// let showButton;
// let secondsValue;
// let minutesValue;

// minutes.addEventListener("input", (event) => {
//   minutesValue = Number(event.target.value);
// });

// seconds.addEventListener("input", (event) => {
//   secondsValue = Number(seconds.value);
// });

// timeStart.addEventListener("click", () => {
//   if (minutes.value.trim().length === 0 && seconds.value.trim().length === 0) {
//     return alert("Попробуй написать цыфру...");
//   }
//   if (!showButton) {
//     timeStart.textContent = "PAUSE";
//     showButton = true;
//     interval = setInterval(() => {
//       if (secondsValue > 0) {
//         secondsValue--;
//       } else {
//         secondsValue = 59;
//         minutesValue--;
//       }
//       if (minutesValue < 0) {
//         clearInterval(interval);
//       }
//       time.textContent = `${
//         minutesValue < 10 ? "0" + minutesValue : minutesValue
//       }:${secondsValue < 10 ? "0" + secondsValue : secondsValue}`;
//     }, 1000);
//   } else {
//     timeStart.textContent = "START";
//     clearInterval(interval);
//     showButton = false;
//   }
// });
// timeRestart.addEventListener("click", () => {
//   clearInterval(interval);
//   time.textContent = "00:00";
//   minutesValue = 0;
//   secondsValue = 0;
//   timeStart.textContent = "START";
//   showButton = false;
// });
