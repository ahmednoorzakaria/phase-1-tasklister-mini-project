document.addEventListener("DOMContentLoaded", () => {
  let newTaskForm = document.getElementById('create-task-form');
  let taskUl = document.getElementById('tasks');

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTaskDescription = document.getElementById('new-task-description').value;
    let newTaskPriority = document.getElementById('new-task-priority').value;

    let li = document.createElement('li');
    li.textContent = newTaskDescription;
    li.style.color = getPriorityColor(newTaskPriority);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', (e) => {
      li.remove();
    });

    li.appendChild(deleteButton);
    taskUl.appendChild(li);
    e.target.reset();
  });

  function getPriorityColor(priority) {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'blue';
      case 'low':
        return 'green';
      default:
        return 'black';
    }
  }
});
