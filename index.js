document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    loadTasks();

    // Add task when button is clicked
    addTaskBtn.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = createTaskElement(taskText);
        taskList.appendChild(li);

        // Save tasks to local storage
        saveTasks();

        taskInput.value = ''; // Clear input field
        taskInput.focus();
    }

    function createTaskElement(taskText, isCompleted = false) {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        if (isCompleted) {
            li.classList.add('completed');
        }
        taskSpan.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks(); // Update local storage when completion status changes
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            saveTasks(); // Update local storage when a task is deleted
        });

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        return li;
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push({
                text: li.querySelector('span').textContent,
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(task => {
                const li = createTaskElement(task.text, task.completed);
                taskList.appendChild(li);
            });
        }
    }
});