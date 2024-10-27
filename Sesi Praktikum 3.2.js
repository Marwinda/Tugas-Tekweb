// Change Background Color
document.getElementById("bgColor").addEventListener("change", function () {
    document.body.style.backgroundColor = this.value;
});

// Increase Font Size
document.getElementById("increaseFontSize").addEventListener("click", function () {
    const currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
    if (currentSize < 30) {
        document.body.style.fontSize = (currentSize + 2) + "px";
    }
});

// Decrease Font Size
document.getElementById("decreaseFontSize").addEventListener("click", function () {
    const currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
    if (currentSize > 10) {
        document.body.style.fontSize = (currentSize - 2) + "px";
    }
});

// Toggle Dark Mode
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});

// Change Font Style
document.getElementById("changeFontStyle").addEventListener("click", function () {
    const fonts = ["'Times New Roman', serif", "'Arial', sans-serif", "'Courier New', monospace"];
    const currentFont = document.body.style.fontFamily || fonts[0];
    const nextFont = fonts[(fonts.indexOf(currentFont) + 1) % fonts.length];
    document.body.style.fontFamily = nextFont;
});

// To-Do List Functionality
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        const li = document.createElement("li");
        const taskText = document.createTextNode(taskValue);
        li.appendChild(taskText);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.style.color = "red";
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);

        li.addEventListener("dblclick", function () {
            const newTask = prompt("Edit your task:", li.firstChild.textContent);
            if (newTask) li.firstChild.textContent = newTask;
        });

        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
});
