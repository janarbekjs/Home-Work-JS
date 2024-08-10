const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("jazyp-kor").value.trim();
  if (input.length === 0) {
    alert("fill the input");
  } else {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const ul = document.getElementById("ul-list");
    button.textContent = "Delete";
    li.append(input, button);
    li.className = "list";
    ul.appendChild(li);
    button.addEventListener("click", () => {
      button.parentElement.remove();
    });
    form.reset();
  }
});