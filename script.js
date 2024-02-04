document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTaskToList(taskText);
            taskInput.value = "";
        }
    });

    function addTaskToList(taskText) {
        const li = document.createElement("li");
        li.className = "task";
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;

        const deleteBtn = li.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        taskList.appendChild(li);
    }
});
