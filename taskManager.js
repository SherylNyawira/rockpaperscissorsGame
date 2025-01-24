// Task list stored in memory
const tasks = [];

// Function to add a task
const addTask = (description) => {
  const task = {
    id: tasks.length + 1,
    description: description,
    completed: false,
  };
  tasks.push(task);
  console.log(`Task added: "${description}"`);
};

// Function to view all tasks
const viewTasks = () => {
  if (tasks.length === 0) {
    console.log('No tasks available.');
    return;
  }

  console.log('\nYour Tasks:');
  tasks.forEach((task) => {
    console.log(
      `${task.id}. [${task.completed ? '✔' : ' '}] ${task.description}`
    );
  });
};

// Function to mark a task as complete
const completeTask = (id) => {
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }

  task.completed = true;
  console.log(`Task "${task.description}" marked as complete.`);
};

// Function to delete a task
const deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }

  const deletedTask = tasks.splice(index, 1);
  console.log(`Task "${deletedTask[0].description}" deleted.`);
};

// Example usage of the task manager
console.log('=== Simple Task Manager ===');
addTask('Finish my assignment');
addTask('Learn JavaScript basics');
viewTasks();
completeTask(1);
viewTasks();
deleteTask(1);
viewTasks();
