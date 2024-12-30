const userInput = document.getElementById("userInput");
const taskPreview = document.getElementById("taskPreview");
const addTaskBtn = document.getElementById("addBtn");
let tasks = [];

userInput.addEventListener("input", (event) => {
  taskPreview.textContent = event.target.value;
});

userInput.addEventListener("keydown", (event) => {
  const keyPressed = event.key;
  if (keyPressed === "Enter") {
    addTask(userInput);
  }
});

let addBtnCount = 0;

addTaskBtn.addEventListener("click", (event) => {
  addTask(userInput);
  addBtnCount++;
  if (addBtnCount === 3) {
    alert(
      "Did you know? You can just hit Enter in the input field and it will add the task without having to press the Add button."
    );
  }
});

function addTask(userInput) {
  // Create the list item
  const li = document.createElement("li");
  li.classList.add("flex", "justify-between", "items-center");

  // Create the span for the task text (only declare once)
  const span = document.createElement("span");
  span.textContent = userInput.value; // Set the text of the task
  li.appendChild(span);

  // Create the delete button
  const button = document.createElement("button");
  button.id = "deleteLetBtn";
  button.classList.add(
    "ml-2",
    "bg-red-500",
    "text-white",
    "py-1",
    "px-2",
    "rounded"
  );
  button.textContent = "delete";

  // Create the checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("mr-2", "ml-auto");
  li.appendChild(checkbox);

  // Add an event listener to the checkbox for the "change" event to toggle strike-through
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.classList.add("line-through"); // Add line-through to the task text when checked
    } else {
      span.classList.remove("line-through"); // Remove line-through from the task text when unchecked
    }
  });

  // Add an event listener to the checkbox to check for the Enter key
  checkbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      alert("Please use the Space bar to check/uncheck the box!");
    }
  });

  // Add an event listener to the button to handle deletion
  button.addEventListener("click", () => {
    li.remove(); // Remove the li element when the button is clicked
  });

  // Append the delete button to the list item
  li.appendChild(button);

  // Find the parent <ol> and append the new list item
  const taskList = document.getElementById("tasks");
  taskList.appendChild(li);

  // Clear the input field and task preview
  taskPreview.textContent = "";
  function localStorageSave(userInput) {
    const lsSave = localStorage.setItem("key1", userInput);
    let data = localStorage.getItem("key1");
    console.log(tasks);
    console.log(data);
  }

  let userInputText = userInput.value;
  tasks.push(userInputText);
  console.log(tasks);
  localStorage.setItem("task", JSON.stringify(tasks));
  let data = JSON.parse(localStorage.getItem("task"));
  tasks = data;

  userInput.value = "";
}
