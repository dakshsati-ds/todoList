<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $task = $_POST['task'];
  // You can perform database operations here to save the task
  // For simplicity, let's just save the task to a text file

  $file = fopen('tasks.txt', 'a');
  fwrite($file, $task . "\n");
  fclose($file);

  echo 'Task saved successfully';
} else {
  echo 'Invalid request';
}
?>
