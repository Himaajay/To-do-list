function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completion on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Add delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "✖";
  deleteBtn.title = "Delete task";
  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
