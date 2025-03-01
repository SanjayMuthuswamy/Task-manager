const API_URL = 'http://localhost:5000/api/tasks';

async function fetchTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.assigned_to}</td>
            <td>${task.status}</td>
            <td>${task.due_date}</td>
            <td>
                <button onclick="completeTask(${task.id})">✅ Complete</button>
                <button class="delete" onclick="deleteTask(${task.id})">🗑️ Delete</button>
            </td>
        `;
        taskList.appendChild(row);
    });
}

async function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDesc').value;
    const assigned_to = document.getElementById('taskAssignedTo').value;
    const due_date = document.getElementById('taskDueDate').value;

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, assigned_to, due_date })
    });

    fetchTasks();
}

async function completeTask(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Completed' })
    });

    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTasks();
}

fetchTasks();
