const button = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todo-list-item";
  li.innerText = input.value;
  const doneBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  deleteBtn.innerText = "Delete";
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  doneBtn.addEventListener("click", ()=>{
    li.style= "text-decoration:line-through";
  });

});
