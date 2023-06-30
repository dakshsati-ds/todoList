document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
  
    var task = taskInput.value.trim();
    if (task !== '') {
      var li = document.createElement('li');
      li.innerHTML = '<span class="taskText">' + task + '</span><button class="delete-btn">Delete</button>';
      taskList.appendChild(li);
      taskInput.value = '';
    }
  });
  
  document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
      var li = e.target.parentElement;
      li.remove();
    }
  });
  