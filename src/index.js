document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = taskDescription;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener("click", function () {
        li.remove();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      form.reset();
    }
  });
});
