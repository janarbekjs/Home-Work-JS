const ul = document.getElementById("ul-list");
const input = document.getElementById("input");
const button = document.getElementById("button");

const BASE_URL = "https://50bcaa30f3d758cf.mokky.dev";

const postTodo = async (objectTodo) => {
  try {
    const response = await fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectTodo),
    });
    const data = await response.json();
    console.log(data);
    if (response.status === 201) {
    }
    getTodos();
  } catch (error) {
    console.log(error);
  }
};

const getTodos = async (newArray) => {
  try {
    const response = await fetch(`${BASE_URL}/items`, {});
    const result = await response.json();
    if (response.status === 200) {
    }
    renderTodos(result);
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  const todoValue = input.value.trim();
  if (todoValue) {
    const newTodo = {
      id: Date.now().toString(),
      title: todoValue,
    };
    input.value = "";
    postTodo(newTodo);
  }
});

const renderTodos = (newTodo) => {
  ul.innerHTML = "";

  newTodo.map((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;

    const input2 = document.createElement("input");
    input2.type = "checkbox";

    const buttonUp = document.createElement("button");
    buttonUp.className = "buttonUp";
    buttonUp.textContent = "UPDATE";

    const buttonDe = document.createElement("button");
    buttonDe.className = "buttonDe";
    buttonDe.textContent = "DELETE";

    input2.addEventListener("click", () => {
      if (input2.checked) {
        li.style.textDecoration = "line-through";
        li.style.textDecorationColor = "red";
        localStorage.setItem("todos", JSON.stringify(newArray));
      } else {
        li.style.textDecoration = "none";
      }
    });
    buttonDe.addEventListener("click", () => buttonDelete(item.id));
    buttonUp.addEventListener("click", () => {
      updateTodo(item.id.newArray);
    });

    li.append(input2, buttonUp, buttonDe);
    ul.appendChild(li);
  });
};

const buttonDelete = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      console.log("Request is succesfull");
    }
    getTodos();
  } catch {
    console.log(error);
  }
};

const updateTodo = async (id, newTodo) => {
  const newFind = newTodo.find((item) => item, id);
  input.value = newFind.value;
  input.focus();
  try {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application",
      },
      body: JSON.stringify({
        title: input.value,
      }),
    });
    const data = await response.json();
    console.log(data);
    getTodos(id);
  } catch (error) {
    console.log(error);
  }
};
getTodos();
