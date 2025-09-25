import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './Dashboard.css';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await api.get('tasks/');
      setTasks(res.data);
    } catch (err) {
      setMessage('Error fetching tasks');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Create or Update task
  const handleSave = async () => {
    try {
      if (editingTask) {
        await api.put(`tasks/${editingTask.id}/`, { title, description });
        setMessage('Task updated successfully');
      } else {
        await api.post('tasks/', { title, description });
        setMessage('Task created successfully');
      }
      setTitle('');
      setDescription('');
      setEditingTask(null);
      fetchTasks();
    } catch (err) {
      setMessage('Error saving task');
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      await api.delete(`tasks/${id}/`);
      setMessage('Task deleted successfully');
      fetchTasks();
    } catch (err) {
      setMessage('Error deleting task');
    }
  };

  // Edit task
  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditingTask(task);
  };

  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>
      <p>{message}</p>

      <div>
        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br />
        <input
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br />
        <button onClick={handleSave}>
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
      </div>

      <h3>My Tasks</h3>
  
        {tasks.map((task) => (
          <ul key={task.id}>
            <strong>{task.title}</strong>: {task.description}{' '}
            <button onClick={() => handleEdit(task)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </ul>
        ))}
   
    </div>
  );
}

export default Dashboard;
