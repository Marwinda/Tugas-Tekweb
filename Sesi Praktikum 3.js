// Change Background Color
document.getElementById("bgColor").addEventListener("change", function () {
    document.body.style.backgroundColor = this.value; // Change the body background color
  });
  
  // Change Font Size
  const fontSizeInput = document.getElementById("fontSize");
  const fontSizeValue = document.getElementById("fontSizeValue");
  
  fontSizeInput.addEventListener("input", function () {
    document.body.style.fontSize = this.value + "px"; // Change the body font size
    fontSizeValue.textContent = this.value + "px"; // Update displayed font size
  });
  
  // Toggle Dark Mode
  document
    .getElementById("toggleDarkMode")
    .addEventListener("click", function () {
      document.body.classList.toggle("dark-theme"); // Toggle dark theme class
    });
  
  // Change Font Style
  document.getElementById("fontStyle").addEventListener("change", function () {
    document.body.style.fontFamily = this.value; // Change the body font style
  });
  
  // To-Do List Functionality
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  
  addTaskBtn.addEventListener("click", function () {
    const taskValue = taskInput.value.trim(); // Get trimmed input value
  
    // Check if the input is "Aldyindra"
    if (taskValue === "Aldyindra") {
      const li = document.createElement("li");
  
      // Create a text node for the task
      const taskText = document.createTextNode(taskValue);
      li.appendChild(taskText);
  
      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.style.color = "red";
  
      deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li); // Remove the task from the list
      });
  
      li.appendChild(deleteBtn); // Append delete button to the list item
  
      li.addEventListener("dblclick", function () {
        const newTask = prompt("Edit your task:", li.firstChild.textContent);
        if (newTask) li.firstChild.textContent = newTask; // Edit the task text
      });
  
      li.addEventListener("click", function () {
        li.classList.toggle("completed"); // Toggle completed class on click
      });
  
      taskList.appendChild(li); // Append the new task to the list
  
      taskInput.value = ""; // Clear input field after adding the task
    } else {
      alert("Only 'Aldyindra' is allowed as a valid task."); // Show alert for invalid input
      taskInput.value = ""; // Clear input field for invalid input
    }
  });
