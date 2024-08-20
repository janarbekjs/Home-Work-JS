const div = document.getElementById("div");
const input = document.getElementById("input");
const button = document.getElementById("button");

const BASE_URL = "https://50bcaa30f3d758cf.mokky.dev";

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
    const response = await fetch(`${BASE_URL}/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.status === 200) {
    }
    renderTodos(result);
  } catch (error) {
    console.log(error);
  }
};

const renderTodos = (newTodo = []) => {
  div.innerHTML = "";

  newTodo.map((item) => {
    const p = document.createElement("p");
    p.textContent = item.text;
    const button1 = document.createElement("button");
    button1.textContent = "DELETE";
    p.textContent = item.title;

    button1.addEventListener("click", () => buttonDelete(item.id));
    p.appendChild(button1);
    div.appendChild(p);
  });
};

const buttonDelete = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      // console.log("Request is succesfull");
    }
    getTodos();
  } catch {
    error;
  }
};
getTodos();
