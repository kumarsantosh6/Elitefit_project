import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import SearchFilter from './SearchFilter';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    return (
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'all' || task.priority === filter || task.status === filter)
    );
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <SearchFilter setSearchTerm={setSearchTerm} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default Dashboard;
