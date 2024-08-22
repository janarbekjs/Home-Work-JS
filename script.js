// const ul = document.getElementById("ul-list");
// const input = document.getElementById("input");
// const form = document.getElementById("form");

// const BASE_URL = "https://50bcaa30f3d758cf.mokky.dev";

// form.addEventListener("click", (e) => {
//   e.preventDefault();
//   const todoValue = input.value.trim();
//   if (todoValue) {
//     const newTodo = {
//       id: Date.now().toString(),
//       title: todoValue,
//       completed: false,
//     };
//     input.value = "";
//     postTodo(newTodo);
//   }
// });

// //! Request
// const postTodo = async (objectTodo) => {
//   try {
//     await fetch(`${BASE_URL}/items`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(objectTodo),
//     });

//     getTodos();
//   } catch (error) {
//     console.log(error);
//   }
// };

// //! Get Request
// const getTodos = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/items`);
//     const result = await response.json();
//     if (response.status === 200) {
//       renderTodos(result);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// //! Render
// const renderTodos = (newTodos = []) => {
//   ul.innerHTML = "";

//   newTodos.map((item) => {
//     const li = document.createElement("li");
//     li.className="lishka"
//     li.textContent = item.title;

//     const input2 = document.createElement("input");
//     input2.type = "checkbox";
//     input2.checked = item.completed;


//     const buttonUp = document.createElement("button");
//     buttonUp.className = "buttonUp";
//     buttonUp.textContent = "UPDATE";

//     const buttonDe = document.createElement("button");
//     buttonDe.className = "buttonDe";
//     buttonDe.textContent = "DELETE";

//     //! Event
//     input2.addEventListener("click", () => {
//       completedTodo(item.id, item.completed);
//     });
//     buttonDe.addEventListener("click", () => buttonDelete(item.id));
//     buttonUp.addEventListener("click", () => {
//       updateTodo(item.id, newTodos);
//     });
//     if (input2.checked) {
//       li.style.textDecoration = "line-through";
//       li.style.textDecorationColor = "red";
//     } else {
//       li.style.textDecoration = "none";
//     }
//     li.append(input2, buttonUp, buttonDe);
//     ul.appendChild(li);
//   });
// };

// //! Delete
// const buttonDelete = async (id) => {
//   try {
//     const response = await fetch(`${BASE_URL}/items/${id}`, {
//       method: "DELETE",
//     });
//     if (response.status === 200) {
//       console.log("Request is succesfull");
//     }
//     getTodos();
//   } catch {
//     console.log(error);
//   }
// };

// //! Update
// const updateTodo = async (id, newTodos) => {
//   const newFind = newTodos.find((item) => item.id === id);
//   if (newFind !== undefined) {
//     input.value = newFind.title;
//     input.focus();
//   }
//   try {
//     await fetch(`${BASE_URL}/items/${id}`, {
//       method: "DELETE",
//     });

//     getTodos();
//   } catch (error) {
//     console.log(error);
//   }
// };
// getTodos();

// //! Completed
// const completedTodo = async (id, completed) => {
//   try {
//     await fetch(`${BASE_URL}/items/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         completed: !completed,
//       }),
//     });
//     getTodos();
//   } catch (error) {
//     console.log(error);
//   }
// };