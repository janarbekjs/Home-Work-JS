// const getPhotos = async (limit) => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`
//     );
//     const data = await response.json();
//     console.log(data);

//     const array = [
//       "https://shorturl.at/lwpIk",
//       "https://shorturl.at/pHArM",
//       "https://shorturl.at/8MHaY",
//     ];
//     const koroluchu = data.slice(0, 3).map((Element, i) => {
//       return {
//         ...Element,
//         url: array[i],
//       };
//     });

//     const ul = document.createElement("ul");
//     ul.id = "bash-oorudugo";
//     koroluchu.map((v) => {
//       const li = document.createElement("li");
//       const p = document.createElement("p");
//       p.textContent = "...";
//       const image = document.createElement("img");
//       image.src = v.url;
//       const h2 = document.createElement("h2");
//       h2.textContent = v.title;
//       li.append(image, h2, p);
//       ul.appendChild(li);
//       document.body.append(ul);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const div = document.getElementById("divid");
// const h1 = document.createElement("h1");
// h1.className = "horosho";
// h1.textContent = "Здесь пока не чего нет, но ты повремени ща все будеть!!!";
// document.body.prepend(div, h1);

// setTimeout(() => {
//   getPhotos(15);
//   h1.remove();
// }, 6000);

// const strelka = () => {
//   let time = 10;
//   const ul = document.getElementById("bash-oorudugo");

//   let interval = setInterval(() => {
//     if (time === 0) {
//       clearInterval(interval);
//       ul.textContent = "";
//     }
//     time--;
//   });
// };

// ! Task 2

// const getUsers = async (limit) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
//   );
//   console.log(res);

//   const data = await res.json();
//   console.log(data);

//   const array = [
//     "https://shorturl.at/tFM5C",
//     "https://shorturl.at/ENCxD",
//     "https://shorturl.at/xzXNH",
//     "https://shorturl.at/TCnfW",
//   ];

//   const bumbox = data.slice(0, 4).map((element, i) => {
//     return {
//       ...element,
//       trum: array[i],
//     };
//   });

//   const ul = document.getElementById("ul-list");
//   bumbox.map((v) => {
//     const li = document.createElement("li");
//     li.className = "li-list";

//     const p = document.createElement("p");
//     p.className = "parograft";
//     p.textContent = "...";

//     const imges = document.createElement("img");
//     imges.className = "img-class";
//     imges.src = v.trum;

//     const h2 = document.createElement("h2");
//     h2.className = "h2-class";
//     h2.textContent = v.name;

//     const h3 = document.createElement("h3");
//     h3.textContent = v.company["name"];

//     const p2 = document.createElement("p");
//     p2.className = "parograft2";
//     p2.textContent = v.phone;

//     const ah2 = document.createElement("h2");
//     ah2.className = "ah2-class";
//     ah2.textContent = v.email;

//     li.append(imges, h2, h3, p2, ah2, p);
//     ul.appendChild(li);
//   });
// };

// const div = document.getElementById("users");
// const h1 = document.createElement("h1");
// h1.className = "horosho";
// h1.textContent = "Здесь пока не чего нет, но ты повремени ща все будеть!!!";
// document.body.prepend(div, h1);

// setTimeout(() => {
//   getUsers(4);
// }, 5000);

// const strelka = () => {
//   let time = 10;
//   const ul = document.getElementById("ul-list");

//   let interval = setInterval(() => {
//     if (time === 0) {
//       clearInterval(interval);
//       ul.textContent = "";
//     }
//     time--;
//   });
// };
