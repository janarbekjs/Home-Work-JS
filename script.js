const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const imageInput = document.getElementById("image-url");
const usersList = document.getElementById("users-list");

let users = [];

users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInputValue = nameInput.value.trim();
  const imageInputValue = imageInput.value.trim();

  if (nameInputValue && imageInputValue) {
    const newUser = {
      id: Date.now().toString(),
      name: nameInputValue,
      imageUrl: imageInputValue,
      done: false,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    renderUsers(users);
    nameInput.value = "";
    imageInput.value = "";
  } else {
    alert("Please enter both name and image URL");
  }
});

const renderUsers = (usersArray = []) => {
  usersList.innerHTML = "";
  usersArray.forEach((user) => {
    const li = document.createElement("li");
    const imageUser = document.createElement("img");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");

    const input = document.createElement("input");
    input.className = "class-input";
    input.setAttribute("type", "checkbox");
    input.addEventListener("change", () => {
      console.log(input.checked);
      if (input.checked) {
        li.firstChild.nextSibling.style.textDecoration = "line-through";
      } else {
        li.firstChild.nextSibling.style.textDecoration = "none";
      }
    });
    user.done = input.checked;

    imageUser.setAttribute("src", user.imageUrl);
    h1.textContent = user.name;
    button.textContent = "DELETE";
    li.append(imageUser, h1, input, button);
    usersList.appendChild(li);

    button.addEventListener("click", () => {
      const container = document.getElementById("conteiner");
      const yesButton = document.getElementById("button-id3");
      const noButton = document.getElementById("button-id");
      container.style.display = "block";
      noButton.addEventListener("click", () => {
        const container = document.getElementById("conteiner");
        container.style.display = "none";
      });
      yesButton.addEventListener("click", () => {
        const filteredUsers = usersArray.filter(
          (element) => element.id !== user.id
        );
        localStorage.setItem("users", JSON.stringify(filteredUsers));
        const localfilteredUsers = JSON.parse(localStorage.getItem("users"));
        container.style.display = "none";
        renderUsers(localfilteredUsers);
      });
    });
  });
};
renderUsers(users);